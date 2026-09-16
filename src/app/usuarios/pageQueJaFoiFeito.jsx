"use client";

import { useEffect, useState } from "react"

export default function Usuarios(){   
    
    const [listaUser, setListaUsers] = useState([]);
    const [msgErro, setMsgErro] = useState("");

    useEffect(() => {
        
      fetch("https://randomuser.me/api/?results=10")
      .then (res => res.json())

      .then (data => {
        console.log(data);
        setListaUsers(data.results)
        setMsgErro("");
      })

      .catch (error => setMsgErro(error.message))
    }, []); // quando vazio, é executado ao carregar a tela

    
    
    return(
        <main>

            <h1>Lista de usuários</h1>
            {msgErro != "" && <p>ERRO: {msgErro} </p>}

            {listaUser.length > 0 ?
            //aparece quando tem usuário
            <div>
                {listaUser.map( (user, idx) => {
                    return(
                        <div key={idx}>
                            <h3> {user.name.first} {" "} {user.name.last} </h3>
                            <img src={user.picture.large} alt=""></img>
                        </div>
                    )
                })}
            </div>

            :

            //aparece quando não tem nenhum usuário
            <div>
                <p>Sem nenhum usuário por enquanto...</p>
            </div>
            }

        </main>
    )
}