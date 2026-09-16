import Link from "next/link";
import "./receitas.css";

// Já foi: Foto, Título, Ingredientes, Instruções, CookPrepMinutos e CookTimeMinutos

export default function CardReceitas({imagem, titulo, ingredientes, instrucoes, cookPrepMinutos, cookTimeMinutos}){
    return(
        <div className="card">
            <div className="flex">
                <div className="imagem">
                    <img className="imagem-receita" src={imagem} alt={imagem}/>
                </div>

                <div className="container-titulo">
                    <div className="column">
                        <div className="titulo">
                            <h3> {titulo} </h3>
                        </div>

                        <div className="ingredientes">
                            {ingredientes.map((ingrediente, index) => (
                                <p key={index}>{ingrediente}</p>
                            ))}
                        </div>
                    </div>
                </div>
                

                <div className="column">
                    <h3>Como fazer:</h3>
                    <p className="instrucoes"> {instrucoes} </p>
                    <p className="tempo-preparar"> Tempo para preparar: {cookPrepMinutos} </p>
                    <p className="tempo-cozinhar"> Tempo para cozinhar: {cookTimeMinutos} </p>
                </div>
            </div>
        </div>
    )
}