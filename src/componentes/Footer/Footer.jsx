import "../../App.css"
import { Link } from "react-router-dom"

const Footer = () => {
    return(   
    <div className="container rounded-1" id="footer">
        <div className="row p-3">
        <div className="col-sm-12 col-md-6 text-light">
            <p className="text-dark">2024 Urutau.inc - Todos os direitos reservados</p>
              
            <p className="text-dark">Rua Laurindo José de Souza, 1150 Barra da lagoa - florianópolis SC</p>
        </div>
        <div className="col-sm-12 col-md-6 text-end d-flex flex-column">
            <Link to="/politica" className="text-decoration-none text-dark">Política de privacidade</Link>
            <Link to="/termos" className="text-decoration-none text-dark">Termos de uso</Link>
            <p className="text-dark">Imagens from freepik</p>
        </div>
        </div>    
    </div>
    )
}
export default Footer    