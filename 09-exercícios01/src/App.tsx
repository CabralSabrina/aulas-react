import React from "react";
import "./index.css";
import Button from "./components/Button/index";
import Counter from "./components/Counter";
import UserList from "./components/UserList";


const App: React.FC = () => {
    return (
        <div className="container">
            <h1>Exercícios de React com TypeScript</h1>

            <h2>1 Componente de Botão</h2>
            <Button 
            label="Pague toda a minha dívidas" 
            onClick={() => alert("pix")}/>
            <h2>2 Contador</h2> 
           <Counter />
            <h2>3 Lista de Usuários</h2>
            <UserList/ >

            <h2>4 Hook PersonaLizado </h2>
            
            </div>
            );
        }
            export default App;

    