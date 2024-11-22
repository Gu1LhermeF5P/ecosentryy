'use client';
import { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../components/footer";
import Header from "../components/header";

interface Emissao {
    id: number;
    nome: string;
    idCategoria: number;
    dataEmissao: string;
    valorEmissao: number;
}

export default function EmissaoPage() {
    const [historico, setHistorico] = useState<Emissao[]>([]);
    const [nome, setNome] = useState<string>("");
    const [idCategoria, setIdCategoria] = useState<number>(0);
    const [dataEmissao, setDataEmissao] = useState<string>("");
    const [valorEmissao, setValorEmissao] = useState<number>(0);
    const [idEdicao, setIdEdicao] = useState<number | null>(null);

    // Carregar histórico de emissões do backend
    useEffect(() => {
        axios.get("http://localhost:8080/caminho/emissoes")
            .then((response) => setHistorico(response.data || []))
            .catch((error) => console.error("Erro ao carregar histórico:", error));
    }, []);

    const handleSalvarEmissao = () => {
        const novaEmissao: Partial<Emissao> = {
            nome,
            idCategoria,
            dataEmissao,
            valorEmissao,
        };

        if (idEdicao) {
            // Atualizar emissão existente
            axios.put(`http://localhost:8080/caminho/atualizar/${idEdicao}`, novaEmissao)
                .then(() => {
                    setHistorico((prev) =>
                        prev.map((emissao) =>
                            emissao.id === idEdicao
                                ? { ...emissao, ...novaEmissao, id: idEdicao }
                                : emissao
                        )
                    );
                    resetInputs();
                })
                .catch((error) => console.error("Erro ao atualizar emissão:", error));
        } else {
            // Criar nova emissão
            axios.post("http://localhost:8080/caminho/emissao", novaEmissao)
                .then((response) => {
                    setHistorico((prev) => [...prev, { ...novaEmissao, id: response.data.id } as Emissao]);
                    resetInputs();
                })
                .catch((error) => console.error("Erro ao salvar emissão:", error));
        }
    };

    const handleEditarEmissao = (id: number) => {
        const emissao = historico.find((item) => item.id === id);
        if (emissao) {
            setNome(emissao.nome);
            setIdCategoria(emissao.idCategoria);
            setDataEmissao(emissao.dataEmissao);
            setValorEmissao(emissao.valorEmissao);
            setIdEdicao(emissao.id);
        }
    };

    const handleExcluirEmissao = (id: number) => {
        axios.delete(`http://localhost:8080/caminho/exclemissao/${id}`)
            .then(() => {
                setHistorico((prev) => prev.filter((emissao) => emissao.id !== id));
                console.log("Emissão excluída com sucesso");
            })
            .catch((error) => console.error("Erro ao excluir emissão:", error));
    };

    const resetInputs = () => {
        setNome("");
        setIdCategoria(0);
        setDataEmissao("");
        setValorEmissao(0);
        setIdEdicao(null);
    };

    return (
        <main>
            <Header />
            <div className="min-h-screen flex flex-col items-center bg-gray-100 p-4">
                <div className="max-w-4xl w-full bg-white p-6 rounded-lg shadow-md">
                    <h1 className="text-2xl font-semibold mb-4">Gerenciamento de Emissões de CO2</h1>

                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleSalvarEmissao();
                        }}
                        className="grid gap-4"
                    >
                        <div>
                            <label className="block text-gray-700">Nome</label>
                            <input
                                type="text"
                                value={nome ?? ""}
                                onChange={(e) => setNome(e.target.value)}
                                className="w-full mt-2 p-2 border border-gray-300 rounded-md"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700">Categoria</label>
                            <input
                                type="number"
                                value={idCategoria ?? 0}
                                onChange={(e) => setIdCategoria(Number(e.target.value))}
                                className="w-full mt-2 p-2 border border-gray-300 rounded-md"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700">Data de Emissão</label>
                            <input
                                type="date"
                                value={dataEmissao ?? ""}
                                onChange={(e) => setDataEmissao(e.target.value)}
                                className="w-full mt-2 p-2 border border-gray-300 rounded-md"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700">Valor da Emissão (kg CO2)</label>
                            <input
                                type="number"
                                value={valorEmissao ?? 0}
                                onChange={(e) => setValorEmissao(Number(e.target.value))}
                                className="w-full mt-2 p-2 border border-gray-300 rounded-md"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-2 bg-blue-500 text-white rounded-md"
                        >
                            {idEdicao ? "Atualizar Emissão" : "Salvar Emissão"}
                        </button>
                    </form>

                    <div className="mt-8">
                        <h3 className="text-lg font-semibold">Histórico de Emissões</h3>
                        {historico.length > 0 ? (
                            <ul className="list-disc pl-5 space-y-2">
                                {historico.slice(0, 6).map((item) => (
                                    <li key={item.id || `${item.nome}-${item.dataEmissao}`} className="flex justify-between items-center">
                                        <div>
                                            <span className="font-semibold">{item.nome}</span> -{" "}
                                            {item.valorEmissao} kg CO2 - {item.dataEmissao}
                                        </div>
                                        <div>
                                            <button
                                                onClick={() => handleEditarEmissao(item.id)}
                                                className="text-blue-500 hover:text-blue-700 mr-4"
                                            >
                                                Editar
                                            </button>
                                            <button
                                                onClick={() => handleExcluirEmissao(item.id)}
                                                className="text-red-500 hover:text-red-700"
                                            >
                                                Excluir
                                            </button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-gray-600">Nenhuma emissão registrada ainda.</p>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
