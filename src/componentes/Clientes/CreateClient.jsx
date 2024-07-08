import { useState, useRef } from "react"
import { Link, useNavigate } from "react-router-dom"
import api from '../../services/api'

const CreateClient = () => {

    const navigate = useNavigate()
    let inputNome = useRef()
    let inputCpf = useRef()
    let inputEmail = useRef()
    let inputTelefone = useRef()

    async function createCliente(){
    
        if (!inputNome.current.value || !inputCpf.current.value || !inputEmail.current.value || !inputTelefone.current.value) {
            alert("Porfavor preencha todos os campos")
            return
        }
        try {
            await api.post('/clientes', {
            nome:inputNome.current.value,
            cpf:inputCpf.current.value,
            email:inputEmail.current.value,
            telefone:inputTelefone.current.value   
            })
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
        catch (error) {
            navigate("/clientes")
        }
        
    }

    return (
        <div className="container my-4">
            <div className="row">
                <div className="col-md-8 mx-auto align-content-center rounded border p-4">
                    <h2 className="text-center mb-5">Insira um novo cliente.</h2>
                    <form >
                        <div className="row mb-5">
                            <label className="col-sm-4 col-form-label" >Nome</label>
                            <div className="col-sm-8">
                                <input type="text" className="form-control" name="nome" ref={inputNome}/>
                                
                            </div>
                        </div>
                        <div className="row mb-5">
                            <label className="col-sm-4 col-form-label" >CPF</label>
                            <div className="col-sm-8">
                                <input type="text" className="form-control" name="cpf" ref={inputCpf} />
                                
                            </div>
                        </div>
                        <div className="row mb-5">
                            <label className="col-sm-4 col-form-label">Email</label>
                            <div className="col-sm-8">
                                <input type="text" className="form-control" name="email" ref={inputEmail}/>
                                
                            </div>
                        </div>
                        <div className="row mb-5">
                            <label className="col-sm-4 col-form-label" >Telefone</label>
                            <div className="col-sm-8">
                                <input type="text" className="form-control" name="telefone" ref={inputTelefone}/>
                                
                            </div>
                        </div>
                        <div className="row">
                            <div className="offset-sm-4 col-sm-4 d-grid">
                                <button type="button" onClick={createCliente} className="btn btn-primary">Enviar</button>
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