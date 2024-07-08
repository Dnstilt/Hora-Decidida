import { useState, useEffect } from "react"

import { Link, useNavigate, useParams } from "react-router-dom"

const UpdateCliente = () => {

    const params = useParams()
    const [dadosIniciais, setDadosIniciais] = useState({
        id: params.id,
        nome:"",
        cpf: "",
        email:"",
        telefone: ""
    })
    const navigate = useNavigate()
    console.log(params)

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
                console.log(data)
            })
            .catch(error => {
                alert("Não foi possível achar o cliente.")
                navigate("/clientes")
            })
    }
    useEffect(getCliente, [])

    async function handlerSubmit(event) {
        event.preventDefault()
        console.log(dadosIniciais)
        const formData = JSON.stringify(dadosIniciais)
        if (!dadosIniciais.nome || !dadosIniciais.cpf || !dadosIniciais.email || !dadosIniciais.telefone) {
            alert("Porfavor preencha todos os campos")
            return
        }
        try {
            const response = await fetch("http://localhost:3000/clientes/" + params.id, {
                method: "PUT",
                body: formData
            })
            const data = await response.json()

            if (response.status === 200) {
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
                            <input readOnly className="form-control-plaintext" value={params.id} 
                            onChange={e => setDadosIniciais({...dadosIniciais, id: e.target.value})} />
                        </div>
                    </div>
                    {
                        dadosIniciais &&
                        <form onSubmit={handlerSubmit}>
                            <div className="row mb-5">
                                <label className="col-sm-4 col-form-label" >Nome</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" name="nome" value={dadosIniciais.nome} 
                                    onChange={e =>setDadosIniciais({...dadosIniciais, nome: e.target.value})}/>
                                    
                                </div>
                            </div>
                            <div className="row mb-5">
                                <label className="col-sm-4 col-form-label" >CPF</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" name="cpf"  value={dadosIniciais.cpf} 
                                    onChange={e =>setDadosIniciais({...dadosIniciais, cpf: e.target.value})}/>

                                </div>
                            </div>
                            <div className="row mb-5">
                                <label className="col-sm-4 col-form-label">Email</label>
                                <div className="col-sm-8">
                                    <input type="email" className="form-control" name="email"  value={dadosIniciais.email} 
                                    onChange={e =>setDadosIniciais({...dadosIniciais, email: e.target.value})}/>
                                </div>
                            </div>
                            <div className="row mb-5">
                                <label className="col-sm-4 col-form-label" >Telefone</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" name="telefone"  value={dadosIniciais.telefone} 
                                    onChange={e =>setDadosIniciais({...dadosIniciais, telefone: e.target.value})}/>

                                </div>
                            </div>
                            <div className="row">
                                <div className="offset-sm-4 col-sm-4 d-grid">
                                    <button type="submit" className="btn btn-primary">Salvar</button>
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