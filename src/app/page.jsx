"use client";

import { useEffect, useState } from "react";
import CardReceitas from "@/components/CardReceitas";

export default function Receitas(){

    const [listaReceitas, setListaReceitas] = useState([]);
    const [msgErro, setMsgErro] = useState("");

    useEffect(() => {
        
      fetch("https://dummyjson.com/recipes")

      .then (res => res.json())

      .then (data => {
        console.log(data);
        setListaReceitas(data.recipes)
        setMsgErro("");
      })

      .catch (error => setMsgErro(error.message))
    }, []);





    return(

      
      <>
        <h1 className='titulo_pagina'>Receitas</h1>
        {msgErro != "" && <p>ERRO: {msgErro}</p>}

        {listaReceitas.length > 0 ?
          <div className='receitas-container'>
              {listaReceitas.map((receitas, idx) => {
                  return <CardReceitas
                      key={idx}
                      imagem={receitas.image}
                      titulo={receitas.name}
                      ingredientes={receitas.ingredients}
                      instrucoes={receitas.instructions}
                      cookPrepMinutos={receitas.prepTimeMinutes}
                      cookTimeMinutos={receitas.cookTimeMinutes}
                  />
              })}
          </div>
          :
          <p>Nenhuma receita encontrada...</p>
        }
      </>
        
    )
}
