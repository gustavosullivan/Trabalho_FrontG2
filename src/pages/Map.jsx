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
    const [userLocation, setUserLocation] = useState(null);

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY, // sua chave
    });

    // Localização do usuário no início
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
                    setUserLocation({
                        lat: -23.550520,
                        lng: -46.633308,
                    });
                }
            );
        }
    }, []);

    // Carrega os pontos salvos do backend
    useEffect(() => {
        async function fetchMarkers() {
            try {
                const data = await getPoints(token);

                // Ajusta o formato que virá do backend
                const formatted = data.map(p => ({
                    id: p.id,
                    name: p.name,
                    description: p.description,
                    latitude: p.latitude,
                    longitude: p.longitude,
                    position: { lat: p.latitude, lng: p.longitude }
                }));

                setMarkers(formatted);

            } catch (error) {
                console.log(error.message);
            }
        }

        if (token) fetchMarkers();
    }, [token]);

    // Clicar no mapa para adicionar ponto
    const handleMapClick = async (event) => {
        let descricaoClique = prompt("Digite a descrição");
        let nameUBS = prompt("Digite o nome da UBS");

        if (!descricaoClique || !nameUBS) return;

        const lat = event.latLng.lat();
        const lng = event.latLng.lng();

        const newPoint = {
            latitude: lat,
            longitude: lng,
            name: nameUBS,
            description: descricaoClique,
        };

        try {
            const savedPoint = await postPoint(token, newPoint);

            const savedMarker = {
                id: savedPoint.id,
                name: savedPoint.name,
                description: savedPoint.description,
                latitude: savedPoint.latitude,
                longitude: savedPoint.longitude,
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

    // Clicar em um ponto já salvo
    const handleMarkerClick = (marker) => {
        alert(`
ID: ${marker.id}
Nome: ${marker.name}
Descrição: ${marker.description}
Latitude: ${marker.latitude}
Longitude: ${marker.longitude}
    `);

        console.log("PONTO CLICADO:", marker);
    };

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
                        center={userLocation}
                        zoom={12}
                        onClick={handleMapClick}
                    >
                        {/* Renderização dos pontos */}
                        {markers.map((marker) => (
                            <Marker
                                key={marker.id}
                                position={marker.position}
                                title={marker.name}
                                onClick={() => handleMarkerClick(marker)}
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
