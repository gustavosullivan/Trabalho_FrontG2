import axios from 'axios';

const BASE_URL = 'https://hollow-christan-trabalhodados-24104763.koyeb.app/ws/point';



export async function getPoints(token) {
    try {
        const response = await axios.get(BASE_URL, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        const points = response.data.map(point => ({
            id: point.id,
            name: point.name,
            description: point.description,
            latitude: point.latitude,
            longitude: point.longitude,
            openHour: point.openHour,
            closeHour: point.closeHour,
            position: {
                lat: point.latitude,
                lng: point.longitude,
            },
        }));

        return points;

    } catch (error) {
        throw new Error(error.response?.data?.message || 'Erro ao buscar pontos');
    }
}


export async function postPoint(token, pointData) {
    try {

        // Loga exatamente o corpo que será enviado
        console.log("=== CORPO ENVIADO NA REQUISIÇÃO ===");
        console.log(JSON.stringify(pointData, null, 2));

        const response = await axios.post(BASE_URL, pointData, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        if (response.status === 201) {
            return response.data;
        } else {
            throw new Error("Erro ao cadastrar ponto");
        }

    } catch (error) {

        console.log("=== ERRO AO ENVIAR ponto ===");
        console.log("Error:", error);
        console.log("Error.response:", error.response);
        console.log("Error.response.status:", error.response?.status);
        console.log("Error.response.data:", error.response?.data);
        console.log("Error.message:", error.message);

        throw new Error(error.response?.data?.message || "Erro ao cadastrar ponto");
    }
}
