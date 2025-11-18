import React, { useEffect, useState } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { Navbar } from "../components/Navbar";
import "./Login.css";
import "./Main.css";

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
        <div className="login-background main-background">
        <div className="main-screen">
            {isLoaded && userLocation ? (
            <>
                <GoogleMap
                mapContainerStyle={containerStyle}
                center={userLocation}
                zoom={16}
                />

                {/* barra de pesquisa sobre o mapa */}
                <div className="search-bar">
                <input
                    type="text"
                    placeholder="Pesquisar"
                    className="search-input"
                />
                </div>
                <div className="bottom-nav-wrapper">
                    <Navbar />
                </div>
            </>
            ) : (
            <div className="main-loading">Carregando localização...</div>
            )}
        </div>
        </div>
    );
    }