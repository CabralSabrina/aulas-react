import { Contact } from "../types/Contact";

import './contact-list.css'

interface ContactListProps {
    contacts: Contact[];
    onEdit: (contact: Contact) => void;
    onDelete: (id: string) => void;
}

export default function ContactList({ contacts, onEdit, onDelete }: ContactListProps) {
    return (
        <div className="contact-list">
            <h2>Lista de Contatos</h2>
            {contacts.length === 0 ? (
                <p className="empty-message">Nenhum contato cadastrado </p>
            ) : (

                <div className="contacts-container">
                    {contacts.map((contact) => (
                        <div key={contact.id} className="contact-card">
                            <div className="contact-info">
                                <h3>{contact.name}</h3>
                                <p>Email: {contact.email}</p>
                                <p>Telefone: {contact.phone}</p>
                                <p className="status ">
                                    Status:
                                    <span className={'status-indicator ${contact.status}'}>
                                        {contact.status === 'active' ? 'Ativo' : 'Inativo'}
                                    </span>
                                </p>
                            </div>
                            <div className="contact-actions">
                                <button
                                className="btn edit"
                                onClick={() => onEdit(contact)}
                                >

                                    Editar
                                </button>
                                <button
                                className="btn delete"
                                onClick={() => onDelete(contact.id)}
                                >
                                    Excluir
                                </button>
                        </div>
                        </div>
                        ))
                    }
                </div>
            )
            }
        </div>
    

    );
}
