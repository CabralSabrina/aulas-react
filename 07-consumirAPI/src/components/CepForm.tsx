//importando recursos:
import { useState } from "react";


interface CepFormProps {
    onSearch: (cep: string) => void;
}
//Função para carregar o cep:==============================
const CepFrom: React.FC<CepFormProps> = ({ onSearch }) => {
    const [cep, setCep] = useState<string>('');

}
//Função para lidar com formulário vazio:
const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (/^\d{8}$ /.test(cep)) {
        onSearch(cep);
    } else {
        alert("Digido um CEP Válido de 8 número!");
    }
};
return(
    <form onSubmit={handleSubmit}>
        <input
        type="text"
        placeholder="Digito o CEP com 8 número"
        value={cep}
        onChange={(e) => setCep(e.target.value)}
        />
        <button type="submit">buscar CEP </button>
</form>

);
};
export default CepFrom;
