import axios from "axios";
import { useState } from "react";

const Aula1706 = () => {
    const [titleInput, setTitleInput] = useState('');
    const [bodyInput, setBodyInput] = useState('');
    const [userInput, setUserInput] = useState();

    const createPost = async () => {
        try {
            const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
                title: titleInput,
                body: bodyInput,
                userId: userInput
            })
        } catch (error) {
            console.log(error);
        }
    }

    const USER = [
        { id: 1, name: 'João' },
        { id: 2, name: 'Maria' },
        { id: 3, name: 'Pedro' }
    ]

    return (
        <div>
            <input 
                type="text" 
                placeholder="digite o titulo do post" 
                value={titleInput} 
                onChange={(e) => {setTitleInput(e.target.value)}}
            />
            <textarea 
                cols="30" rows="10" 
                placeholder="digite conteudo do post"
                value={bodyInput}
                onChange={(e) => {setBodyInput(e.target.value)}}
            ></textarea>
            <select value={userInput} onChange={(e) => {setUserInput(e.target.value)}}>
                {USER.map(user => (
                    <option value={user.id} key={user.id}>{user.name}</option>
                ))}
            </select>
            <button type="submit" onClick={createPost}>enviar</button>
        </div>
        
    );
}

export default Aula1706;