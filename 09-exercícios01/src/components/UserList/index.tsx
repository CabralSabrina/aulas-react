//importações

import React from "react";


///interfaces:
interface User {
    id: number;
    name: string;
    email: string;

}
///Função componente:
const users: User[] = [
    { id: 1, name: "João", email: "joao@gmail.com" },
    { id: 2, name: "Maria", email: "maria@gmail.com" },
    { id: 3, name: "Sabrina", email: "Sabrina@gmail.com" }
]

//componente

const UserList: React.FC = () => {
    return (
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Lista de Usuários</h2>
            <ul>
                {users.map((user) => (
                    <li
                        key={user.id}
                        className="border-b last:border-none p-3 hover:bg-gray-100 transition"
                    >
                        <p className="text-lg font-semibold">{user.name}</p>
                        <p className="text-gray-500">{user.email}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default UserList;