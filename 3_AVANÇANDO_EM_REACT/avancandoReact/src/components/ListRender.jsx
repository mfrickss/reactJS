import { useState } from "react"

const ListRender = () => {
    const [list] = useState(["Ricardo", "Jonas", "Pedro"]);

    const [users, setUsers] = useState([
        {id: 1, name: "João", age: 20},
        {id: 2, name: "Ricks", age: 21},
        {id: 3, name: "Gerson", age: 22}
    ]);

    const deleteRandom = () => {

        const randomNumber = Math.floor(Math.random() * 4)

            setUsers((prevUsers) => 
                prevUsers.filter((user) => randomNumber !== user.id)
            );
    };
    
  return (
    <div>
        {/* 4 - Render sem key - TENTAR EVITAR SEMPRE */}
        <ul style={{listStyle:"none", padding:0}}>
            {list.map((item, i) => ( // No JS é usado {} para maps.
                <li key={i}>{item}</li>
            ))}
        </ul>
        {/* 5 - Render com key  - IDEAL */}
        <ul style={{listStyle:"none", padding:0}}>
            {users.map((user) =>(
                <li key={user.id}>
                    {user.name} - {user.age}
                </li>
            ))}
        </ul>
        {/* 6 - previous state */}
        <button onClick={deleteRandom}>Delete random user</button>
    </div>
  )
}

export default ListRender;