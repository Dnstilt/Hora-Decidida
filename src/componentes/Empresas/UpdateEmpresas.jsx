import { useState, useEffect } from "react"

import { Link, useNavigate, useParams } from "react-router-dom"
import api from '../../services/api'

const UpdateEmpresas = () => {

    const params = useParams()
    const [dadosIniciais, setDadosIniciais] = useState({
        id: params.id,
        nome:"",
        endereco: "",
        telefone: ""
    })
    const navigate = useNavigate()
    
    function getEmpresas() {
        fetch("http://localhost:3000/empresas/" + params.id)
            .then(response => {
                if(response.ok) {
                    return response.json()
                }
                throw new Error()
            })
            .then(data => {
                setDadosIniciais(data)
                console.log(dadosIniciais)
            })
            .catch(error => {
                alert("Não foi possível achar a empresa.")
                navigate("/empresas")
            })
    }
    useEffect(getEmpresas, [])

    async function handlerSubmit(event) {
        event.preventDefault()
        
        if (!dadosIniciais.nome || !dadosIniciais.endereco || !dadosIniciais.telefone) {
            alert("Porfavor preencha todos os campos")
            return
        }
        try {
            await api.put('http://localhost:3000/empresas/' + params.id, {
                nome:dadosIniciais.nome,
                endereco:dadosIniciais.endereco,
                telefone:dadosIniciais.telefone   
                })
            console.log(response.body)
            const data = await response.json()
            
            if (response.status === 200) {
                navigate("/empresas")
            }
            else if (response.status === 400) {
                alert("Erro de validação")
            }
            else {
                console.log(Error)
                alert("Não foi possível editar o cliente tente novamente")
            }
        }
        catch (error) {
            navigate("/empresas")
            console.log(error)
        }
    }

    return (
        <div className="container my-4">
            <div className="row">
                <div className="col-md-8 mx-auto align-content-center rounded border p-4">
                    <h2 className="text-center mb-5">Empresas</h2>
                    <div className="row mb-5">
                        <label className="col-sm-4 col-form-label" >Id</label>
                        <div className="col-sm-8">
                            <input readOnly className="form-control-plaintext" value={params.id} />
                        </div>
                    </div>
                    {
                        dadosIniciais &&
                        <form id="empresasForm" onSubmit={handlerSubmit}>
                            <div className="row mb-5">
                                <label className="col-sm-4 col-form-label" >Nome</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" name="nome" value={dadosIniciais.nome} 
                                    onChange={e =>setDadosIniciais({...dadosIniciais, nome: e.target.value})}/>
                                    
                                </div>
                            </div>
                            <div className="row mb-5">
                                <label className="col-sm-4 col-form-label" >Endereço</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" name="endereco"  value={dadosIniciais.endereco} 
                                    onChange={e =>setDadosIniciais({...dadosIniciais, endereco: e.target.value})}/>

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
export default UpdateEmpresas