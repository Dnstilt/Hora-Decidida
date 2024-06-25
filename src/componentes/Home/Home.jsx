import "../../App.css"
import costumer from '/src/assets/img/customer_service_03.jpg'

const Home = () => {
    return(  
    <div>
      <div className="shadow container pt-5">
        <div className="row justify-content-between">
          <div className="d-flex flex-column align-items-center col-sm-12 col-md-6" >
            <div className="h1 text-center"> <span className="text-primary tituloShadow">Revolucione</span> a gestão dos seus horários e
              otimize sua agenda. </div>
            <p className="fs-4 text-center">
              Com nossa solução especializada em atendimento por agendamento você vai <spam className="text-primary fw-bold">
                eliminar filas e simplificar sua rotina operacional.</spam> Experimente hoje mesmo e descubra como podemos
              elevar sua eficiência a um nível superior!
            </p>
            <a id='btn-decubra' className="btn btn-sm btn-warning fs-4 rounded-pill mb-5 p-2" data-bs-toggle="modal"
              data-bs-target="#contactModal">Descubra já! </a>
          </div>
          
          <div className="modal fade" id="contactModal" tabindex="-1" aria-labelledby="contactModal" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5 text-center" id="exampleModalLabel">Envie seu email e mensagem para que
                    nossa equipe especializada, entre em contato!</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="mb-3">
                      <label for="recipient-name" className="col-form-label">E-mail:</label>
                      <input type="text" className="form-control" id="recipient-name" />
                    </div>
                    <div className="mb-3">
                      <label for="message-text" className="col-form-label">Mensagem:</label>
                      <textarea className="form-control" id="message-text"></textarea>
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary shadow-sm" data-bs-dismiss="modal">Fechar</button>
                  <button type="button" className="btn btn-primary shadow-sm">Enviar</button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="d-inline-flex justify-content-center col-sm-12 col-md-6 align-content-center pb-5">
            <img src={ costumer } className="imgPadrao rounded-3 shadow" />
          </div>
        </div>
      </div>
    </div>
    )
}
export default Home