import '../Pages/Contatos.css'
export const Contatos = () => {
    return (
        <>
            <h1 className="contatostitle">Contatos</h1>
            <form action="">
                <label>E-mail</label>
                <input type="text" placeholder="Digite seu E-mail"/>
                <label>Nome</label>
                <input type="text" placeholder="Digite seu Nome" />
                <label>Mensagem</label>
                <input type="text" placeholder="Digite sua Mensagem" />
                <input type="submit" />
            </form>
        </>
    )
}