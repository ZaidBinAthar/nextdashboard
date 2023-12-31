'use client'
import React, { useEffect, useState } from "react";

export default function Page() {
    const [data, setData] = useState([]);
    const [newUserId, setNewUserId] = useState("");
    const [newUserName, setNewUserName] = useState("");

    useEffect(() => {
        getAllTodos();
    }, []);

    function getAllTodos() {
        fetch("http://localhost:3000/api/todos")
            .then((response) => response.json())
            .then((data) => setData(data));
    }

    function isUserIdUnique(id) {
        return !data.some((todo) => todo.UserId === id);
    }

    function handleAdd() {
        if (!isUserIdUnique(newUserId)) {
            alert("UserId must be unique!");
            return;
        }

        setData([...data, { UserId: newUserId, UserName: newUserName }]);
        // Clear input fields after adding a new todo
        setNewUserId("");
        setNewUserName("");
    }

    return (
        <div className="text-center justify-center items-center">
            <input
                className="bg-blue-200 rounded-lg px-2 m-1"
                type="text"
                placeholder="Id"
                value={newUserId}
                onChange={(e) => setNewUserId(e.target.value)}
            />
            <br />
            <input
                className="bg-blue-200 rounded-lg px-2 m-1"
                type="text"
                placeholder="Name"
                value={newUserName}
                onChange={(e) => setNewUserName(e.target.value)}
            />
            <br />
            <button
                className="bg-yellow-400 rounded-lg py-2 px-4 mb-2"
                onClick={handleAdd}
            >
                Add
            </button>
            <ul>
                {data.map((todo) => (
                    <li key={todo.UserId}>
                        {todo.UserId} - {todo.UserName}
                    </li>
                ))}
            </ul>
        </div>
    );
}
