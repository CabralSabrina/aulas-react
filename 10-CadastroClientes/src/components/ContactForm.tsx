// Importações: Importa as funcionalidades necessárias do React e o tipo Contact.
import React, { useEffect, useState } from "react"; // useEffect para efeitos colaterais, useState para gerenciamento de estado.
import { Contact } from "../types/Contact"; // Importa o tipo Contact, que define a estrutura dos contatos.
import './form.css'


// Interfaces: Define a estrutura das propriedades que o componente receberá.
interface ContactFormProps {
    onSubmit: (contact: Contact) => void; // Função chamada ao enviar o formulário.
    selectedContact: Contact | null; // Contato selecionado para edição, ou null para um novo contato.
    onCancel: () => void; // Função chamada ao cancelar a edição ou criação do contato.
}

// Função principal do componente ContactForm.
export default function ContactForm({ onSubmit, selectedContact, onCancel }: ContactFormProps) {
    // Estado do formulário: Armazena os dados do contato em edição/criação.
    const [formData, setFormData] = useState<Omit<Contact, 'id'>>({
        name: '', // Nome do contato.
        email: '', // E-mail do contato.
        phone: '', // Telefone do contato.
        status: 'active', // Status do contato (ativo por padrão).
    });

    // Usando o useEffect para preencher o formulário ao editar um contato.
    useEffect(() => {
        if (selectedContact) {
            setFormData(selectedContact); // Se houver um contato selecionado, preenche o formulário com seus dados.
        }
    }, [selectedContact]); // Executa toda vez que selectedContact mudar.

    // Função para tratar mudanças no formulário:
    // Esta função é chamada sempre que o usuário digita em um input ou seleciona uma opção no select.
    // Ela atualiza dinamicamente o estado formData com os novos valores dos campos.
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target; // Extrai o nome e o valor do campo que foi alterado.

        setFormData(prev => ({
            ...prev, // Mantém os outros valores do formulário inalterados.
            [name]: value // Atualiza o campo correspondente com o novo valor digitado ou selecionado.
        }));
    };


    // Função para tratar o envio do formulário (submit).
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); // Previne o comportamento padrão do formulário.

        // Cria um objeto de contato com os dados do formulário.
        const contact: Contact = {
            ...formData, // Copia os dados do estado formData.
            id: selectedContact?.id || Date.now().toString(), // Mantém o ID se for edição, ou gera um novo ID.
        };

        onSubmit(contact); // Chama a função onSubmit passando os dados do contato.

        // Se for um novo contato (não edição), reseta o formulário.
        if (!selectedContact) {
            setFormData({
                name: '', // Reseta o nome.
                email: '', // Reseta o e-mail.
                phone: '', // Reseta o telefone.
                status: 'active', // Mantém o status padrão como ativo.
            });
        }
    };

    return (
        <form className="contact-form" onSubmit={handleSubmit}> {/* Formulário de contato, chama handleSubmit no envio */}
            <h2>{selectedContact ? 'Editar Contato' : 'Novo Contato'}</h2> {/* Título muda dependendo se é edição ou novo contato */}
    
            <div className="form-group"> {/* Grupo do campo de nome */}
                <label>Nome:</label> {/* Rótulo do campo */}
                <input
                    type="text" // Campo de entrada de texto
                    name="name" // Nome do campo, usado para identificar no estado
                    value={formData.name} // Valor controlado pelo estado
                    onChange={handleChange} // Chama handleChange ao digitar
                    required // Campo obrigatório
                />
            </div>
    
            <div className="form-group"> {/* Grupo do campo de e-mail */}
                <label>Email:</label> {/* Rótulo do campo */}
                <input
                    type="email" // Campo de entrada para e-mail
                    name="email" // Nome do campo
                    value={formData.email} // Valor controlado pelo estado
                    onChange={handleChange} // Atualiza estado ao digitar
                    required // Campo obrigatório
                />
            </div>
    
            <div className="form-group"> {/* Grupo do campo de telefone */}
                <label>Telefone:</label> {/* Rótulo do campo */}
                <input
                    type="tel" // Campo de entrada para telefone
                    name="phone" // Nome do campo
                    value={formData.phone} // Valor controlado pelo estado
                    onChange={handleChange} // Atualiza estado ao digitar
                    required // Campo obrigatório
                />
            </div>
    
            <div className="form-group status-group"> {/* Grupo do campo de status */}
                <label>Status:</label> {/* Rótulo do campo */}
                <select
                    name="status" // Nome do campo
                    value={formData.status} // Valor controlado pelo estado
                    onChange={handleChange} // Atualiza estado ao mudar seleção
                >
                    <option value="active">Ativo</option> {/* Opção de status ativo */}
                    <option value="inactive">Inativo</option> {/* Opção de status inativo */}
                </select>
            </div>
    
            <div className="form-buttons"> {/* Grupo dos botões */}
                <button type="submit" className="btn save">
                    {selectedContact ? 'Atualizar' : 'Salvar'} {/* Botão muda dependendo se é edição ou novo contato */}
                </button>
                {selectedContact && ( /* Exibe botão cancelar apenas se estiver editando */
                    <button type="button" className="btn cancel" onClick={onCancel}>Cancelar</button> // Botão para cancelar edição
                )}
            </div>
        </form>
    );
}