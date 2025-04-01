
const Titulo = ({ nome, paragrafo,cor, bg }) => {
    return (
        <div>
            {/**IF ternário  */}
            <h1 style={{ color:cor, 
                fontSize: "2.5rem", 
                fontWeight: "bold", 
                textShadow: "2px 2px 5px rgba(0,0,0,0.2)" }}>Olá, meu nome é {nome ? nome: "Sem nome!"} </h1>

            {/*IF ternário do paragrafo*/}
            {
                paragrafo ? 
                <p style={{ background: bg , 
                    color: "#fff",
                    padding: "10px",
                    borderRadius: "8px",
                    display: "inline-block",
                    fontWeight: "500"}}> paragrafo com True ativado!</p> :
                <p>Nada!</p>
            }
        </div>
            
    )
}
export default Titulo