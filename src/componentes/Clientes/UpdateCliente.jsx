import { useState, useRef, useEffect } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"

const UpdateCliente = () => {


    const params = useParams()
    const [dadosIniciais, setDadosIniciais] = useState([])
    const navigate = useNavigate()
    let inputNome = useRef()
    let inputCpf = useRef()
    let inputEmail = useRef()
    let inputTelefone = useRef()

    function getCliente() {
        fetch("http://localhost:3000/clientes/" + params.id)
            .then(response => {
                if(response.ok) {
                    return response.json()
                }
                throw new Error()
            })
            .then(data => {
                setDadosIniciais(data)
            })
            .catch(error => {
                alert("Não foi possível ver o cliente.")
            })
    }
    useEffect(getCliente, [])

    async function handlerSubmit(event) {
        event.preventDefault()
        const formData = new FormData(event.target)
        const cliente = Object.fromEntries(formData.entries())

        if (!cliente.nome || !cliente.cpf || !cliente.email || !cliente.telefone) {
            alert("Porfavor preencha todos os campos")
            return
        }
        try {
            const response = await fetch("http://localhost:3000/clientes/"+params.id, {
                method:"PATCH",
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
                alert("Não foi possível editar o cliente tente novamente")
            }
        }
        catch (error) {
            navigate("/clientes")
        }
    }

    return (
        <div className="container my-4">
            <div className="row">
                <div className="col-md-8 mx-auto align-content-center rounded border p-4">
                    <h2 className="text-center mb-5">Cliente.</h2>
                    <div className="row mb-5">
                        <label className="col-sm-4 col-form-label" >Id</label>
                        <div className="col-sm-8">
                            <input readOnly className="form-control-plaintext" defaultValue={params.id} />
                        </div>
                    </div>
                    {
                        dadosIniciais &&
                        <form onSubmit={handlerSubmit}>
                            <div className="row mb-5">
                                <label className="col-sm-4 col-form-label" >Nome</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" name="nome" defaultValue={dadosIniciais.nome} />

                                </div>
                            </div>
                            <div className="row mb-5">
                                <label className="col-sm-4 col-form-label" >CPF</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" name="cpf"  defaultValue={dadosIniciais.cpf} />

                                </div>
                            </div>
                            <div className="row mb-5">
                                <label className="col-sm-4 col-form-label">Email</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" name="email"  defaultValue={dadosIniciais.email} />

                                </div>
                            </div>
                            <div className="row mb-5">
                                <label className="col-sm-4 col-form-label" >Telefone</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" name="telefone"  defaultValue={dadosIniciais.telefone} />

                                </div>
                            </div>
                            <div className="row">
                                <div className="offset-sm-4 col-sm-4 d-grid">
                                    <button type="button" className="btn btn-primary">Salvar</button>
                                </div>
                                <div className="col-sm-4 d-grid">
                                    <Link className="btn btn-secondary" to="/clientes" role="button">Cancelar</Link>
                                </div>
                            </div>
                        </form>
                    }
                </div>
            </div>
        </div>
    )
}
export default UpdateCliente