import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const list = {
    movie: 'teste',
    serie: 'teste',
    anime: 'teste',    
}

const List = () => {

    const [info, setInfo] = useState()

    useEffect(() => {
        setTimeout(() => {
            setInfo(list)
        }, 1000)
    }, [])

    return (
        
        <div>
            <Link to="/">
            IR PARA TODO LIST
            </Link>
            {
                info ? <div>
                    <p>info.movie</p>
                    <p>info.serie</p>
                    <p>info.anime</p>
                </div> : <div>Carregando</div>
            }
        </div>        
    );
}

export default List;