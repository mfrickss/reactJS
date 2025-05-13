import MyComponent from "./MyComponent";

const FirstComponent = () => {
    return (
        <div className="Header">
            {/* <nav className="navbar">
                <ul>
                    <li><a href="main.jsx"></a>HOME</li>
                    <li><a href="main.jsx"></a>PRODUTOS</li>
                    <li><a href="main.jsx"></a>SOBRE</li>
                    <li><a href="main.jsx"></a>CONTATO</li>
                </ul>
            </nav> */}
            <h2>Meu primeiro componente</h2>
            <MyComponent />
        </div>
    );
}
export default FirstComponent
