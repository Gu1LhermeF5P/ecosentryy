'use client'
import { useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
 
interface Emissao {
    tipo: string;
    emissao: number;
    distancia: string;
    combustivel: string;
}
 
export default function Emissao() {
    const [tipoEmissao, setTipoEmissao] = useState<string>("");
    const [distancia, setDistancia] = useState<string>("");
    const [combustivel, setCombustivel] = useState<string>("");
    const [emissaoGerada, setEmissaoGerada] = useState<number | null>(null);
    const [historico, setHistorico] = useState<Emissao[]>([]);
 
    const handleTipoEmissaoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setTipoEmissao(e.target.value);
        resetInputs();
    };
 
    const handleCalcularEmissao = () => {
        let emissao = 0;
        if (tipoEmissao === "transporte") {
            // Exemplo de cálculo simplificado de emissão de carbono
            emissao = parseFloat(distancia) * 0.21; // exemplo: 0.21 kg de CO2 por km com combustível comum
        } else if (tipoEmissao === "energia") {
            emissao = combustivel === "eletrica" ? 0.5 : 1.2; // exemplo simplificado
        }
        setEmissaoGerada(emissao);
    };
 
    const handleSalvarEmissao = () => {
        if (emissaoGerada !== null) {
            const novaEmissao: Emissao = {
                tipo: tipoEmissao,
                emissao: emissaoGerada,
                distancia: distancia,
                combustivel: combustivel,
            };
            setHistorico([...historico, novaEmissao]);
        }
    };
 
    const handleExcluirEmissao = (index: number) => {
        // Remove a emissão com base no índice
        const novoHistorico = historico.filter((_, i) => i !== index);
        setHistorico(novoHistorico);
    };
 
    const resetInputs = () => {
        setDistancia("");
        setCombustivel("");
        setEmissaoGerada(null);
    };
 
    return (
        <main>
            <Header />
            <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
                <div className="max-w-lg w-full bg-white p-6 rounded-lg shadow-md">
                    <h1 className="text-2xl font-semibold mb-4">Adicionar Emissão de Carbono</h1>
 
                    {/* Selecao do Tipo de Emissão */}
                    <div className="mb-4">
                        <label className="block text-gray-700">Tipo de Emissão</label>
                        <select
                            value={tipoEmissao}
                            onChange={handleTipoEmissaoChange}
                            className="w-full mt-2 p-2 border border-gray-300 rounded-md"
                        >
                            <option value="">Selecione...</option>
                            <option value="transporte">Transporte</option>
                            <option value="energia">Uso de Energia</option>
                            <option value="outros">Outros</option>
                        </select>
                    </div>
 
                    {/* Entrada de dados */}
                    {tipoEmissao === "transporte" && (
                        <div className="mb-4">
                            <label className="block text-gray-700">Distância percorrida (km)</label>
                            <input
                                type="number"
                                value={distancia}
                                onChange={(e) => setDistancia(e.target.value)}
                                className="w-full mt-2 p-2 border border-gray-300 rounded-md"
                            />
                        </div>
                    )}
                    {tipoEmissao === "energia" && (
                        <div className="mb-4">
                            <label className="block text-gray-700">Tipo de Energia</label>
                            <select
                                value={combustivel}
                                onChange={(e) => setCombustivel(e.target.value)}
                                className="w-full mt-2 p-2 border border-gray-300 rounded-md"
                            >
                                <option value="">Selecione...</option>
                                <option value="eletrica">Elétrica</option>
                                <option value="gas">Gás</option>
                            </select>
                        </div>
                    )}
 
                    {/* Calcular Emissão */}
                    <button
                        onClick={handleCalcularEmissao}
                        className="w-full py-2 bg-blue-500 text-white rounded-md mt-4"
                    >
                        Calcular Emissão
                    </button>
 
                    {/* Exibir Emissão Calculada */}
                    {emissaoGerada !== null && (
                        <div className="mt-4 p-4 bg-green-100 text-green-800 rounded-md">
                            Emissão Gerada: {emissaoGerada.toFixed(2)} kg de CO2
                        </div>
                    )}
 
                    {/* Botão para Salvar Emissão */}
                    <button
                        onClick={handleSalvarEmissao}
                        className="w-full py-2 bg-green-500 text-white rounded-md mt-4"
                    >
                        Salvar Emissão
                    </button>
 
                    {/* Histórico de Emissões */}
                    <div className="mt-4">
                        <h3 className="text-lg font-semibold">Histórico de Emissões</h3>
                        <ul className="list-disc pl-5">
                            {historico.map((item, index) => (
                                <li key={index} className="flex justify-between items-center">
                                    <span>
                                        {item.tipo} - {item.emissao} kg CO2
                                    </span>
                                    <button
                                        onClick={() => handleExcluirEmissao(index)}
                                        className="ml-4 text-red-500 hover:text-red-700"
                                    >
                                        Excluir
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}