import { useState } from "react";
import './CepSearch.css'

//Interface para tirar as variáveis:
interface Address {
    cep: string;
    logradouro: string;
    bairro: string;
    localidade: string;
    uf: string;

}
export default function CepSearch() {
    const [cep, setCep] = useState("");
    const [address, setAddress] = useState<Address | null>(null);
    const [error, setError] = useState("");

    //Função para lidar com as pesquisas de cep:
    const handleSearch = async () => {
        if (cep.length !== 8) {
            setError("Cep inválido. Digito um CEP com 8 números!");
            return;
        }

    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();

        if (data.erro) {
            setError("Cep não encontrado!");
            setAddress(null);
        } else {
            setAddress(data);
            setError("");
        }
    } catch (error) {
        setError("Erro ao buscar CEP!");
    }
};

return (
    <div className="container">
        <h2> Buscar Endereço por CEP </h2>
        <input
            type="text"
            value={cep}
            onChange={(e) => setCep(e.target.value)}
            placeholder="Digite o CEP - Somente 8 números"
            maxLength={8}
        />

        <button onClick={handleSearch}>Buscar </button>
        {error && <p className="error">{error}</p>}
        {address && (
            <div className="addrress">
                <p><strong>CEP:</strong>{address.cep}</p>
                <p><strong>Logradouro:</strong> {address.logradouro}</p>
                <p><strong>Bairro:</strong>{address.bairro}</p>
                <p><strong>Cidade:</strong> {address.localidade}-{address.uf}</p>
            </div>
        )}
    </div>
);
}