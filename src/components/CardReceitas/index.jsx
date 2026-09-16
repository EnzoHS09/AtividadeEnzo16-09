import "./receitas.css";

export default function CardReceitas({imagem, titulo, ingredientes, instrucoes, cookPrepMinutos, cookTimeMinutos}){
    return(
        <article className="receita">
            <img className="receita-foto" src={imagem} alt={titulo}/>

            <div className="receita-corpo">
                <h2 className="receita-titulo">{titulo}</h2>

                <div className="receita-tempos">
                    <span>Preparo: {cookPrepMinutos} min</span>
                    <span>Cozimento: {cookTimeMinutos} min</span>
                </div>

                <h4 className="receita-subtitulo">Ingredientes</h4>
                <ul className="receita-ingredientes">
                    {ingredientes.map((ingrediente, posicao) => (
                        <li key={posicao}>{ingrediente}</li>
                    ))}
                </ul>

                <h4 className="receita-subtitulo">Modo de preparo</h4>
                <div className="receita-instrucoes">
                    {instrucoes.map((instrucao, posicao) => (
                        <p key={posicao}>{instrucao}</p>
                    ))}
                </div>
            </div>
        </article>
    )
}
