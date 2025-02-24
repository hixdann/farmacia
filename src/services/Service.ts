import axios from "axios";

const api = axios.create({
    baseURL: "https://farmacia-jjxo.onrender.com",
});

export const buscar = async (url: string, setDados: Function) => {
    try {
        const resposta = await api.get(url);
        setDados(resposta.data);
    } catch (error) {
        console.error("Erro ao buscar dados:", error);
    }
};

export const cadastrar = async (url: string, dados: Object) => {
    try {
        await api.post(url, dados);
    } catch (error) {
        console.error("Erro ao cadastrar:", error);
    }
};

export const atualizar = async (url: string, dados: Object) => {
    try {
        await api.put(url, dados);
    } catch (error) {
        console.error("Erro ao atualizar:", error);
    }
};
export const deletar = async (url: string) => {
    await api.delete(url)
}
