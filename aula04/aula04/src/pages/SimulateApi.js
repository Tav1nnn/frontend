import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const infoCampoMourao = {
    dataCriacao: '10/10/1947',
    nome: 'Campo Mourão',
    qtdHabitantes: 99000,
    universidade: ["Integrado", "UTFPR", "UNESPAR", "Unicampo"]
}


const SimulateApi = () => {
    
    const navagate = useNavigate();

    const [info, setInfo] = useState()

    useEffect(() => {
        setTimeout(() => {
            setInfo(infoCampoMourao)
        }, 1000)
    }, [])

    return (
        
        <div>
            <Link to="/">
            IR PARA TODO LIST
            </Link>
            {info ?  <div>
                <h1>{info.nome}</h1>
                <p>Data de criação: {info.dataCriacao}</p>
                <p>Quantidade de habitantes: {info.qtdHabitantes}</p>
                {info.universidade.map((universidade) => (<p>{universidade}</p>))}
            </div> : <div>Carregando...</div>}
            <button onClick={() => navagate("/profile")}>Profile</button>
            <button onClick={() => navagate("/list")}>List</button>
        </div>        
    );
}

export default SimulateApi;