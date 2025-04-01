import React, { useState } from "react";

const TodoApp = () => {
    const [tarefas, setTarefas] = useState([]);
    const [novaTarefa, setNovaTarefa] = useState("");
    const [editando, setEditando] = useState(null);
    const [textoEditado, setTextoEditado] = useState("");

    const adicionarTarefa = () => {
        if (novaTarefa.trim() === "") return;
        setTarefas([...tarefas, { id: Date.now(), texto: novaTarefa, concluida: false }]);
        setNovaTarefa("");
    };

    const removerTarefa = (id) => {
        setTarefas(tarefas.filter(tarefa => tarefa.id !== id));
    };

    const marcarConcluida = (id) => {
        setTarefas(tarefas.map(tarefa => 
            tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
        ));
    };

    const iniciarEdicao = (tarefa) => {
        setEditando(tarefa.id);
        setTextoEditado(tarefa.texto);
    };

    const salvarEdicao = (id) => {
        setTarefas(tarefas.map(tarefa => 
            tarefa.id === id ? { ...tarefa, texto: textoEditado } : tarefa
        ));
        setEditando(null);
        setTextoEditado("");
    };

    return (
        <div style={{ maxWidth: "400px", margin: "auto", textAlign: "center" }}>
            <h1>Lista de Tarefas 📝</h1>

            {/* Campo de Entrada e Botão Adicionar */}
            <input 
                type="text" 
                value={novaTarefa} 
                onChange={(e) => setNovaTarefa(e.target.value)}
                placeholder="Digite uma tarefa..."
            />
            <button onClick={adicionarTarefa}>Adicionar</button>

            {/* Lista de Tarefas */}
            <ul style={{ listStyle: "none", padding: 0 }}>
                {tarefas.map((tarefa) => (
                    <li key={tarefa.id} 
                        style={{ 
                            textDecoration: tarefa.concluida ? "line-through" : "none",
                            background: tarefa.concluida ? "#d4edda" : "#f8d7da",
                            padding: "8px",
                            margin: "5px 0",
                            borderRadius: "5px",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center"
                        }}
                    >
                        {editando === tarefa.id ? (
                            <>
                                <input 
                                    type="text" 
                                    value={textoEditado} 
                                    onChange={(e) => setTextoEditado(e.target.value)} 
                                />
                                <button onClick={() => salvarEdicao(tarefa.id)}>Salvar</button>
                            </>
                        ) : (
                            <>
                                <span onClick={() => marcarConcluida(tarefa.id)} 
                                      style={{ cursor: "pointer", flexGrow: 1 }}>
                                    {tarefa.texto}
                                </span>
                                <button onClick={() => iniciarEdicao(tarefa)}>✏️</button>
                                <button onClick={() => removerTarefa(tarefa.id)}>❌</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoApp;