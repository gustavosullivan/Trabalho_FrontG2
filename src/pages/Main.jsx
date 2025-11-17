import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

export function Main() {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: "SUA_GOOGLE_MAPS_API_KEY_AQUI" // substitua por uma válida
    });

    const containerStyle = {
        width: "100%",
        height: "100%"
    };

    const center = {
        lat: -23.550520, // Exemplo: São Paulo
        lng: -46.633308
    };

    return (
        <div className="w-full h-screen flex flex-col bg-gray-100">

            {/* Mapa */}
            <div className="flex-1">
                {isLoaded ? (
                    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14} />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-300">
                        <p className="text-gray-700 font-semibold">Carregando mapa...</p>
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
