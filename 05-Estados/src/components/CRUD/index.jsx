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
        setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
    };

    const marcarConcluida = (id) => {
        setTarefas(
            tarefas.map((tarefa) =>
                tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
            )
        );
    };

    const iniciarEdicao = (tarefa) => {
        setEditando(tarefa.id);
        setTextoEditado(tarefa.texto);
    };

    const salvarEdicao = (id) => {
        setTarefas(
            tarefas.map((tarefa) =>
                tarefa.id === id ? { ...tarefa, texto: textoEditado } : tarefa
            )
        );
        setEditando(null);
        setTextoEditado("");
    };

    return (
        <div
            style={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "linear-gradient(135deg, #667eea, #764ba2)", // Gradiente moderno
                fontFamily: "'Poppins', sans-serif",
            }}
        >
            <div
                style={{
                    width: "400px",
                    padding: "20px",
                    borderRadius: "12px",
                    background: "rgba(255, 255, 255, 0.15)", // Glassmorphism
                    backdropFilter: "blur(10px)",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                    textAlign: "center",
                }}
            >
                <h1 style={{ color: "#fff", fontSize: "24px", marginBottom: "15px" }}>
                    Lista de Tarefas 📝
                </h1>

                {/* Campo de Entrada e Botão Adicionar */}
                <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
                    <input
                        type="text"
                        value={novaTarefa}
                        onChange={(e) => setNovaTarefa(e.target.value)}
                        placeholder="Digite uma tarefa..."
                        style={{
                            flexGrow: 1,
                            padding: "10px",
                            borderRadius: "8px",
                            border: "none",
                            outline: "none",
                            fontSize: "16px",
                            background: "rgba(255, 255, 255, 0.2)",
                            color: "#fff",
                            backdropFilter: "blur(5px)",
                        }}
                    />
                    <button
                        onClick={adicionarTarefa}
                        style={{
                            padding: "10px 15px",
                            background: "#4CAF50",
                            color: "white",
                            border: "none",
                            borderRadius: "8px",
                            cursor: "pointer",
                            transition: "0.3s",
                            fontSize: "18px",
                        }}
                    >
                        ➕
                    </button>
                </div>

                {/* Lista de Tarefas */}
                <ul style={{ listStyle: "none", padding: 0 }}>
                    {tarefas.map((tarefa) => (
                        <li
                            key={tarefa.id}
                            style={{
                                textDecoration: tarefa.concluida ? "line-through" : "none",
                                background: tarefa.concluida ? "#d4edda" : "#f8d7da",
                                padding: "10px",
                                margin: "5px 0",
                                borderRadius: "8px",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                transition: "0.3s",
                            }}
                        >
                            {editando === tarefa.id ? (
                                <>
                                    <input
                                        type="text"
                                        value={textoEditado}
                                        onChange={(e) => setTextoEditado(e.target.value)}
                                        style={{
                                            flexGrow: 1,
                                            padding: "5px",
                                            borderRadius: "5px",
                                            border: "1px solid #ddd",
                                            outline: "none",
                                        }}
                                    />
                                    <button
                                        onClick={() => salvarEdicao(tarefa.id)}
                                        style={{
                                            background: "#ffc107",
                                            border: "none",
                                            padding: "5px 10px",
                                            borderRadius: "5px",
                                            cursor: "pointer",
                                        }}
                                    >
                                        ✅
                                    </button>
                                </>
                            ) : (
                                <>
                                    <span
                                        onClick={() => marcarConcluida(tarefa.id)}
                                        style={{
                                            cursor: "pointer",
                                            flexGrow: 1,
                                        }}
                                    >
                                        {tarefa.texto}
                                    </span>
                                    <button
                                        onClick={() => iniciarEdicao(tarefa)}
                                        style={{
                                            background: "#007bff",
                                            border: "none",
                                            padding: "5px 10px",
                                            borderRadius: "5px",
                                            cursor: "pointer",
                                        }}
                                    >
                                        ✏️
                                    </button>
                                    <button
                                        onClick={() => removerTarefa(tarefa.id)}
                                        style={{
                                            background: "#dc3545",
                                            border: "none",
                                            padding: "5px 10px",
                                            borderRadius: "5px",
                                            cursor: "pointer",
                                        }}
                                    >
                                        ❌
                                    </button>
                                </>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TodoApp;
