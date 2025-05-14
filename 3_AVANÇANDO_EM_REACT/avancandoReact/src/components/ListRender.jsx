import { useState } from "react"

const ListRender = () => {
    const [list] = useState(["Ricardo", "Jonas", "Pedro"]);

    const [users, setUsers] = useState([
        {id: 1, name: "Roger", age: 20},
        {id: 2, name: "Ricks", age: 21},
        {id: 3, name: "Renata", age: 22}
    ])

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
    </div>
  )
}

export default ListRender;