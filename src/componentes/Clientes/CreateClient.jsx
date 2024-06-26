import { Link, useNavigate } from "react-router-dom"

const CreateClient = () => {

    const navigate = useNavigate()

    async function handSubmit(event) {
        event.preventDefault()

        const formData = new FormData(event.target)
        const cliente = Object.fromEntries(formData.entries())

        if(!cliente.nome || !cliente.cpf || !cliente.email || !cliente.telefone){
            alert("Porfavor preencha todos os campos")
            return
        }
        try{
            const response = fetch("http://localhost:3000/clientes", {
                method: "POST",
                body: formData
            })
            const data = await response.json()

            if (response.ok) {
                navigate("/clientes")
            }
            else if (response.status === 400) {
                alert("Erro de validação")
            }
            else {
                alert("Não foi possível cadastrar o cliente tente novamente")
            }
        }
        catch(error) {
            alert("Não foi possível se conectar com o servidor")
        }
    } 

    return (
        <div className="container my-4">
            <div className="row">
                <div className="col-md-8 mx-auto align-content-center rounded border p-4">
                    <h2 className="text-center mb-5">Insira um novo cliente.</h2>
                    <form onSubmit={handSubmit}>
                        <div className="row mb-5">
                            <label className="col-sm-4 col-form-label">Nome</label>
                            <div className="col-sm-8">
                                <input type="text" className="form-control" name="nome" />
                                
                            </div>
                        </div>
                        <div className="row mb-5">
                            <label className="col-sm-4 col-form-label">CPF</label>
                            <div className="col-sm-8">
                                <input type="text" className="form-control" name="cpf" />
                                
                            </div>
                        </div>
                        <div className="row mb-5">
                            <label className="col-sm-4 col-form-label">Email</label>
                            <div className="col-sm-8">
                                <input type="text" className="form-control" name="email" />
                                
                            </div>
                        </div>
                        <div className="row mb-5">
                            <label className="col-sm-4 col-form-label">Telefone</label>
                            <div className="col-sm-8">
                                <input type="text" className="form-control" name="telefone" />
                                
                            </div>
                        </div>
                        <div className="row">
                            <div className="offset-sm-4 col-sm-4 d-grid">
                                <button className="btn btn-primary">Enviar</button>
                            </div>
                            <div className="col-sm-4 d-grid">
                                <Link className="btn btn-secondary" to="/clientes" role="button">Cancelar</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>    
        </div>
    )
}
export default CreateClient