import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"


const Empresas = () => {
    const [empresas, setEmpresas] = useState([])
   
    const navigate = useNavigate()

    function getEmpresas() {
        fetch("http://localhost:3000/empresas ")
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                throw new Error()
            })
            .then(data => {
                setEmpresas(data)
            })
            .catch(error => {
                alert("Não foi possivel achar o arquivo")
            })
    }
    useEffect(getEmpresas, [])

    return (
        <div className="container my-4">
            <h2 className="text-center mb-4">Empresas</h2>
            <div className="row mb-3">
                <div className="col">
                    <Link className="btn btn-primary me-1" to="/createempresas" role="button">Cadastrar Empresa</Link>
                    <button type="button" className="btn btn-outline-primary" onClick={getEmpresas}>Restaurar</button>
                </div>
                <div className="col">

                </div>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Nome</th>
                        <th>Endereço</th>
                        <th>Telefone</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        empresas.map((empresa, index) => {
                            return (
                                <tr key={index}>
                                    <td>{empresa.id}</td>
                                    <td>{empresa.nome}</td>
                                    <td>{empresa.endereco}</td>
                                    <td>{empresa.telefone}</td>
                                    <td style={{ width: "10px", whiteSpace: "nowrap" }}>
                                        <Link className="btn btn-primary btn-sm me-1" to={"/updadeempresas/"+empresa.id}>Editar</Link>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
export default Empresas