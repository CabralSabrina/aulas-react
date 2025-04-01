import { useState } from 'react';
import { Contact } from './types/Contact';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import './App.css';

function App() {
  const [contacts, setContacts] = useState<Contact[]>([
    {
      id: '1',
      name: 'João Silva',
      email: 'joao@exemplo.com',
      phone: '(11) 99999-9999',
      status: 'active'
    }
  ]);
  
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);

  const handleSubmit = (contact: Contact) => {
    if (selectedContact) {
      // Edição
      setContacts(prev => prev.map(c => c.id === contact.id ? contact : c));
    } else {
      // Novo
      setContacts(prev => [...prev, { ...contact, id: Date.now().toString() }]);
    }
    setSelectedContact(null);
  };

  const handleDelete = (id: string) => {
    setContacts(prev => prev.filter(c => c.id !== id));
  };

  return (
    <div className="app-container">
      <h1>CRM de Contatos</h1>
      <div className="main-content">
        <ContactForm 
          onSubmit={handleSubmit} 
          selectedContact={selectedContact} 
          onCancel={() => setSelectedContact(null)}
        />
        <ContactList 
          contacts={contacts} 
          onEdit={setSelectedContact} 
          onDelete={handleDelete} 
        />
      </div>
    </div>
  );
}

export default App;