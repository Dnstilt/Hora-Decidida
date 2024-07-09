import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"


const Clientes = () => {
    const [clientes, setClientes] = useState([])
   
    const navigate = useNavigate()

    function getClientes() {
        fetch("http://localhost:3000/clientes ")
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                throw new Error()
            })
            .then(data => {
                setClientes(data)
            })
            .catch(error => {
                alert("Não foi possivel achar o arquivo")
            })
    }
    useEffect(getClientes, [])

    return (
        <div className="container my-4">
            <h2 className="text-center mb-4">Clientes</h2>
            <div className="row mb-3">
                <div className="col">
                    <Link className="btn btn-primary me-1" to="/createCliente" role="button">Cadastrar Cliente</Link>
                    <button type="button" className="btn btn-outline-primary" onClick={getClientes}>Restaurar</button>
                </div>
                <div className="col">

                </div>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Nome</th>
                        <th>CPF</th>
                        <th>Email</th>
                        <th>Telefone</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        clientes.map((cliente, index) => {
                            return (
                                <tr key={index}>
                                    <td>{cliente.id}</td>
                                    <td>{cliente.nome}</td>
                                    <td>{cliente.cpf}</td>
                                    <td>{cliente.email}</td>
                                    <td>{cliente.telefone}</td>
                                    <td style={{ width: "10px", whiteSpace: "nowrap" }}>
                                        <Link className="btn btn-primary btn-sm me-1" to={"/updatecliente/"+cliente.id}>Editar</Link>
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
export default Clientes