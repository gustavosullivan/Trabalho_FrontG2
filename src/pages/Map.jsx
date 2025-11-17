import { useEffect, useState } from "react";
import { Navbar } from "../components";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { getPoints, postPoint } from '../services/mapService';
import { useAuth } from "../contexts/AuthContext";

const containerStyle = {
  width: "100%",
  height: "100%",
};

export const Map = () => {
  const { token } = useAuth();
  const [markers, setMarkers] = useState([]);
  const [userLocation, setUserLocation] = useState(null); // Armazena a localização do usuário
  
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY, // Sua chave de API do Google Maps
  });

  // Tentar obter a localização do usuário
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        () => {
          // Caso não consiga obter a geolocalização, usa a localização padrão
          setUserLocation({
            lat: -23.550520,  // São Paulo (padrão)
            lng: -46.633308,
          });
        }
      );
    } else {
      alert("Geolocalização não suportada pelo navegador.");
      // Caso o navegador não suporte geolocalização, usa a localização padrão
      setUserLocation({
        lat: -23.550520,  // São Paulo (padrão)
        lng: -46.633308,
      });
    }
  }, []);

  // Carregar os pontos do mapa (caso haja um backend)
  useEffect(() => {
    async function fetchMarkers() {
      try {
        const data = await getPoints(token);
        setMarkers(data);
      } catch (error) {
        console.log(error.message);
      }
    }
    if (token) {
      fetchMarkers();
    }
  }, [token]);

  // Função para adicionar ponto ao clicar no mapa
  const handleMapClick = async (event) => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    const newPoint = {
      latitude: lat,
      longitude: lng,
      descricao: "Descrição do ponto", // Você pode personalizar isso
    };
    try {
      const savedPoint = await postPoint(token, newPoint);

      const savedMarker = {
        id: savedPoint.id,
        title: savedPoint.descricao || "Novo Ponto",
        position: {
          lat: savedPoint.latitude,
          lng: savedPoint.longitude,
        },
      };
      setMarkers((prev) => [...prev, savedMarker]);
    } catch (error) {
      alert(error.message);
    }
  };

  // Se a geolocalização ainda não foi carregada, exibe uma tela de carregamento
  if (!userLocation) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-gray-300">
        <p className="text-gray-700 font-semibold">Carregando localização...</p>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div style={{ width: "100%", height: "100%" }}>
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={userLocation} // Usa a localização do usuário ou padrão
            zoom={12}
            onClick={handleMapClick}
          >
            {/* Renderiza os marcadores */}
            {markers.map((marker) => (
              <Marker
                key={marker.id}
                position={marker.position}
                title={marker.title}
              />
            ))}
          </GoogleMap>
        ) : (
          <div>Carregando mapa...</div>
        )}
      </div>
    </>
  );
};
