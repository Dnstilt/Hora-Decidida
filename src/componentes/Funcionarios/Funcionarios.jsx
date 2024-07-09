import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"


const Funcionarios = () => {
    const [funcionarios, setFuncionarios] = useState([])
   
    const navigate = useNavigate()

    function getFuncionarios() {
        fetch("http://localhost:3000/funcionarios ")
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                throw new Error()
            })
            .then(data => {
                setFuncionarios(data)
            })
            .catch(error => {
                alert("Não foi possivel achar o arquivo")
            })
    }
    useEffect(getFuncionarios, [])

    return (
        <div className="container my-4">
            <h2 className="text-center mb-4">Funcionarios</h2>
            <div className="row mb-3">
                <div className="col">
                    <Link className="btn btn-primary me-1" to="/createFuncionario" role="button">Cadastrar Funcioanrios</Link>
                    <button type="button" className="btn btn-outline-primary" onClick={getFuncionarios}>Restaurar</button>
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
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        funcionarios.map((funcionario, index) => {
                            return (
                                <tr key={index}>
                                    <td>{funcionario.id}</td>
                                    <td>{funcionario.nome}</td>
                                    <td>{funcionario.cpf}</td>
                                    <td style={{ width: "10px", whiteSpace: "nowrap" }}>
                                        <Link className="btn btn-primary btn-sm me-1" to={"/updatefuncionario/"+funcionario.id}>Editar</Link>
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
export default Funcionarios