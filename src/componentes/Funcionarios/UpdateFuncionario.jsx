import { useState, useEffect } from "react"

import { Link, useNavigate, useParams } from "react-router-dom"
import api from '../../services/api'

const UpdateFuncionario = () => {

    const params = useParams()
    const [dadosIniciais, setDadosIniciais] = useState({
        id: params.id,
        nome:"",
        cpf: ""
    })
    const navigate = useNavigate()
   
    function getFuncionario() {
        fetch("http://localhost:3000/funcionarios/" + params.id)
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
                //alert("Não foi possível achar o funcionario.")
                //navigate("/funcionarios")
            })
    }
    useEffect(getFuncionario, [])

    async function handlerSubmit(event) {
        event.preventDefault()
        
        if (!dadosIniciais.nome || !dadosIniciais.cpf ) {
            alert("Porfavor preencha todos os campos")
            return
        }
        try {
            await api.put('http://localhost:3000/funcionarios/' + params.id, {
                nome:dadosIniciais.nome,
                cpf:dadosIniciais.cpf
                })
            console.log(response.body)
            const data = await response.json()
            
            if (response.status === 200) {
                navigate("/funcionarios")
            }
            else if (response.status === 400) {
                alert("Erro de validação")
            }
            else {
                console.log(Error)
                alert("Não foi possível editar o funcionario, tente novamente")
            }
        }
        catch (error) {
            navigate("/funcionarios")
            console.log(error)
        }
    }

    return (
        <div className="container my-4">
            <div className="row">
                <div className="col-md-8 mx-auto align-content-center rounded border p-4">
                    <h2 className="text-center mb-5">Funcionario.</h2>
                    <div className="row mb-5">
                        <label className="col-sm-4 col-form-label" >Id</label>
                        <div className="col-sm-8">
                            <input readOnly className="form-control-plaintext" value={params.id} />
                        </div>
                    </div>
                    {
                        dadosIniciais &&
                        <form id="clienteForm" onSubmit={handlerSubmit}>
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
                            <div className="row">
                                <div className="offset-sm-4 col-sm-4 d-grid">
                                    <button type="submit" className="btn btn-primary">Salvar</button>
                                </div>
                                <div className="col-sm-4 d-grid">
                                    <Link className="btn btn-secondary" to="/funcionarios" role="button">Cancelar</Link>
                                </div>
                            </div>
                        </form>
                    }
                </div>
            </div>
        </div>
    )
}
export default UpdateFuncionario