import "../../App.css"
import logo from "../../assets/img/logo.png"
import { NavLink } from "react-router-dom"


const Header = () => {
    return(  
    <div className="container">
        <div className='row p-1 rounded-1 justify-content-between' id='header'>
            <div className="col-sm-12 col-md-7">
            <ul className="nav d-inline-flex  align-items-center w-100 col-sm-12">
                <li className="nav-item d-inline-flex align-items-center">
                    <NavLink to="/" className="align-items-center">
                        <img className="logoHd m-1 align-middle" src={ logo } alt="logo hora decidida" />
                    </NavLink>
                    <NavLink className="nav-link p-1 me-5 fs-3 fw-bold" aria-current="home" to="/">Hora Decidida</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link p-1 fw-bold" to="/produtos">Produtos</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link p-1 fw-bold" to="/parceiros">Parceiros</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link p-1 fw-bold" to="/users">Usuários</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link p-1 fw-bold" to="/funcionarios">Funcionários</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link p-1 fw-bold" to="/empresas">Empresas</NavLink>
                </li>
            </ul>
            </div>
            
            <div className="col-sm-12 col-md-3  d-flex align-items-center justify-content-end text-end">
                <spam className="text-success">
                    Fale conosco (48)98865-4563 
                </spam>
            </div>
        </div>
    </div>     
    
    )
}  
export default Header  