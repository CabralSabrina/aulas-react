import { useState } from "react";
import "./App.css";

export default function App() {
  const [items, setItems] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const handleAddItem = () => {
    if (!inputValue) return;
    if (editingIndex !== null) {
      setItems(items.map((item, index) => (index === editingIndex ? inputValue : item)));
      setEditingIndex(null);
    } else {
      setItems([...items, inputValue]);
    }
    setInputValue("");
  };

  const handleEditItem = (index: number) => {
    setInputValue(items[index]);
    setEditingIndex(index);
  };

  const handleDeleteItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h1>CRUD Simples</h1>
      <div className="input-group">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Digite um nome"
        />
        <button onClick={handleAddItem}>
          {editingIndex !== null ? "Atualizar" : "Adicionar"}
        </button>
      </div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <div>
              <button onClick={() => handleEditItem(index)}>✏️</button>
              <button onClick={() => handleDeleteItem(index)}>🗑️</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
