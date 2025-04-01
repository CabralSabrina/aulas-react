import { useState } from "react";


interface Address {

  cep: string;
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;

}

function App() {
  const [cep, setCep] = useState('');
  const [Address, setAddress] = useState<Address | null>(null);
  const [error, setError] = useState("");

  const fetchAddress = async () => {
    if (cep.length !== 8) {
      setError("CEP inválido ! Digite 8 números");
    }
    setAddress(null);
    return;

    try {

      setError("")
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    } catch (error) {


    }
  }
}