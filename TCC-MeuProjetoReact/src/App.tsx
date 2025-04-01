import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./App.css";

interface Item {
  name: string;
  email: string;
  phone: string;
}

export default function App() {
  const [items, setItems] = useState<Item[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const handleAddItem = () => {
    if (!inputValue || !email || !phone) return;
    const newItem = { name: inputValue, email, phone };
    
    if (editingIndex !== null) {
      setItems(items.map((item, index) => (index === editingIndex ? newItem : item)));
      setEditingIndex(null);
    } else {
      setItems([...items, newItem]);
    }
    setInputValue("");
    setEmail("");
    setPhone("");
  };

  const handleEditItem = (index: number) => {
    setInputValue(items[index].name);
    setEmail(items[index].email);
    setPhone(items[index].phone);
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
          placeholder="Nome"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Telefone"
        />
        <button onClick={handleAddItem}>
          {editingIndex !== null ? "Atualizar" : "Adicionar"}
        </button>
      </div>
      <AnimatePresence>
        <ul>
          {items.map((item, index) => (
            <motion.li
              key={item.name + index}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <div>
                <strong>{item.name}</strong>
                <p>{item.email}</p>
                <p>{item.phone}</p>
              </div>
              <div>
                <button onClick={() => handleEditItem(index)}>✏️</button>
                <button onClick={() => handleDeleteItem(index)}>🗑️</button>
              </div>
            </motion.li>
          ))}
        </ul>
      </AnimatePresence>
    </div>
  );
}
