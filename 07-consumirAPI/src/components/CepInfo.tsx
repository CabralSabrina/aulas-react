//importando coisa:


//Definindo Tibagem das variáveis>
interface CepInfoProps {
    data: CepData | null;
}
//Função para detectadar valores de CEP errados : ===================
const CepInfo: React.FC<CepInfoProps> = ({ data }) => {
    if (!data) return null;
    if (data.erro) return <p> CEP não encontrado!</p>;

    return (
        <div>
            <h3> Endereço : </h3>
            <p> <strong>CEP:</strong>{data.cep} </p>
            <p> <strong>Logradouro:</strong>{data.logradouro} </p>
            <p> <strong>Bairro:</strong>{data.bairro} </p>
            <p> <strong>Cidade:</strong>{data.cidade} -{data.uf} </p>
        </div>
    );
};
export default CepInfo;