import { useState, useRef } from "react"
import { Link, useNavigate } from "react-router-dom"
import api from '../../services/api'

const CreateEmpresas = () => {

    const navigate = useNavigate()
    let inputNome = useRef()
    let inputEndereco = useRef()
    let inputTelefone = useRef()

    async function createEmpresas(){
    
        if (!inputNome.current.value || !inputEndereco.current.value || !inputTelefone.current.value) {
            alert("Porfavor preencha todos os campos")
            return
        }
        try {
            await api.post('/empresas', {
            nome:inputNome.current.value,
            endereco:inputEndereco.current.value,
            telefone:inputTelefone.current.value   
            })
            if (response.ok) {
                navigate("/empresas")
            }
            else if (response.status === 400) {
                alert("Erro de validação")
            }
            else {
                alert("Não foi possível cadastrar a empresa tente novamente")
            }
        } 
        catch (error) {
            navigate("/empresas")
        }
        
    }

    return (
        <div className="container my-4">
            <div className="row">
                <div className="col-md-8 mx-auto align-content-center rounded border p-4">
                    <h2 className="text-center mb-5">Insira uma nova empresa.</h2>
                    <form >
                        <div className="row mb-5">
                            <label className="col-sm-4 col-form-label" >Nome</label>
                            <div className="col-sm-8">
                                <input type="text" className="form-control" name="nome" ref={inputNome}/>
                                
                            </div>
                        </div>
                        <div className="row mb-5">
                            <label className="col-sm-4 col-form-label" >Endereço</label>
                            <div className="col-sm-8">
                                <input type="text" className="form-control" name="endereco" ref={inputEndereco} />
                                
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
                                <button type="button" onClick={createEmpresas} className="btn btn-primary">Enviar</button>
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
export default CreateEmpresas