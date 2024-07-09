import { useState, useRef } from "react"
import { Link, useNavigate } from "react-router-dom"
import api from '../../services/api'

const CreateFuncionario = () => {

    const navigate = useNavigate()
    let inputNome = useRef()
    let inputCpf = useRef()
    let inputEmail = useRef()
    let inputTelefone = useRef()

    async function createFuncionario(){
    
        if (!inputNome.current.value || !inputCpf.current.value) {
            alert("Porfavor preencha todos os campos")
            return
        }
        try {
            await api.post('/funcionarios', {
            nome:inputNome.current.value,
            cpf:inputCpf.current.value
            })
            if (response.ok) {
                navigate("/funcionarios")
            }
            else if (response.status === 400) {
                alert("Erro de validação")
            }
            else {
                alert("Não foi possível cadastrar o funcionario tente novamente")
            }
        } 
        catch (error) {
            navigate("/funcionarios")
        }
        
    }

    return (
        <div className="container my-4">
            <div className="row">
                <div className="col-md-8 mx-auto align-content-center rounded border p-4">
                    <h2 className="text-center mb-5">Insira um novo Funcionario.</h2>
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
                        <div className="row">
                            <div className="offset-sm-4 col-sm-4 d-grid">
                                <button type="button" onClick={createFuncionario} className="btn btn-primary">Enviar</button>
                            </div>
                            <div className="col-sm-4 d-grid">
                                <Link className="btn btn-secondary" to="/funcionarios" role="button">Cancelar</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default CreateFuncionario