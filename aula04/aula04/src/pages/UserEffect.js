
import { useEffect, useState } from "react";

const UserEffect = () => {

    const [myState, setMyState] = useState();
    const [myState2, setMyState2] = useState();

    useEffect(() => {
        console.log("dispara");
    }, [myState, myState2])

    const updateMyState = () => {
        setMyState("New State");
    }

    useEffect(() => {
        return () => {
            
        }
    }, [])

    return (
        <div>
            <button onClick={updateMyState}>
                Disparar UserEffect
            </button>
        </div>
    )
}

export default UserEffect;