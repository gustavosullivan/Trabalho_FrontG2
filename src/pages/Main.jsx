import React, { useEffect, useState } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

export function Main() {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: "" 
    });

    const [userLocation, setUserLocation] = useState(null);

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
        } else {
            alert("Geolocalização não suportada pelo navegador.");
            setUserLocation({
                lat: -23.550520,
                lng: -46.633308,
            });
        }
    }, []);

    const containerStyle = {
        width: "100%",
        height: "100%"
    };

    return (
        <div className="w-full h-screen flex flex-col bg-gray-100">

            {/* Mapa */}
            <div className="flex-1">
                {isLoaded && userLocation ? (
                    <GoogleMap mapContainerStyle={containerStyle} center={userLocation} zoom={16} />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-300">
                        <p className="text-gray-700 font-semibold">Carregando localização...</p>
                    </div>
                )}
            </div>

            {/* Menu inferior */}
            <div className="w-full bg-white border-t shadow-md flex justify-around py-4 text-center">
                <button className="hover:text-blue-600 font-medium">
                    Calendário
                </button>

                <button className="hover:text-blue-600 font-medium">
                    Configurações
                </button>

                <button className="hover:text-blue-600 font-medium">
                    Usuário
                </button>
            </div>
        </div>
    );
}