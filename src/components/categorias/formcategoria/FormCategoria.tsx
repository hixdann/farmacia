import { useEffect, useState, ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { buscar, atualizar, cadastrar } from "../../../services/Service"; 
import Categoria from "../../../models/Categoria"; 

function FormCategoria() {
    const navigate = useNavigate();
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria);
        } catch (error: any) {
            alert("Erro ao buscar a categoria.");
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id);
        }
    }, [id]);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value,
        });
    }

    function retornar() {
        navigate("/categorias");
    }

    async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);

        try {
            if (id !== undefined) {
                await atualizar(`/categorias/${id}`, categoria);
                alert("A Categoria foi atualizada com sucesso!");
            } else {
                await cadastrar("/categorias", categoria);
                alert("A Categoria foi cadastrada com sucesso!");
            }
        } catch (error: any) {
            alert("Erro ao salvar a categoria.");
        }

        setIsLoading(false);
        retornar();
    }

    return (
        <div className="container flex flex-col items-center justify-center mx-auto">
            <h1 className="text-4xl text-center my-8">
                {id ? "Editar Categoria" : "Cadastrar Categoria"}
            </h1>

            <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="descricao">Descrição da Categoria</label>
                    <input
                        type="text"
                        placeholder="Descreva aqui a categoria"
                        name="descricao"
                        value={categoria.descricao || ""}
                        onChange={atualizarEstado}
                        className="border-2 border-slate-700 rounded p-2"
                    />
                </div>
                <button
                    className="rounded text-[#41493b] bg-[#ffb794] 
                               hover:bg-[#76c992] w-1/2 py-2 mx-auto flex justify-center"
                    type="submit"
                    disabled={isLoading}
                >
                    {isLoading ? "Carregando..." : id ? "Atualizar" : "Cadastrar"}
                </button>
            </form>
        </div>
    );
}

export default FormCategoria;
