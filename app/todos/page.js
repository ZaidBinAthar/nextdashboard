"use client"

import { useEffect, useState } from "react";

export default function page() {

    const [data, setData] = useState([])


    useEffect(() => {
        getAllTodos()
    }, [])

    function getAllTodos() {
        fetch('http://localhost:3000/api/todos')           //api for the get request
            .then(response => response.json())
            .then(data => setData(data));
    }

    function handleAdd() {
        let newUserId = document.getElementById("UserId").value;
        let newUserName = document.getElementById("UserName").value;
        setData([...data, { UserId: newUserId, UserName: newUserName }]);
    }
    return (
        <div className="text-center justify-center items-center">
            <input className="bg-blue-200 rounded-lg px-2 m-1" type="text" placeholder="Id" id="UserId" />
            <br />
            <input className="bg-blue-200 rounded-lg px-2 m-1" type="text" placeholder="Name" id="UserName" />
            <br />
            <button className="bg-yellow-400 rounded-lg py-2 px-4 mb-2" onClick={handleAdd}>Add</button>
            <ul>
                {
                    data.map((data, i) => (
                        <li key={i}>{data?.UserId} - {data?.UserName}</li>
                    ))
                }
            </ul>
        </div>
    )
}
