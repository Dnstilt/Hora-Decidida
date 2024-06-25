import "../../App.css"
import tonhao from '/src/assets/img/tonhão.png'
import luxHotel from '/src/assets/img/view-luxurious-hotel-interior-space.jpg'
import dina from '/src/assets/img/vo_Dina.png'
import importadora from '/src/assets/img/39388.jpg'


const Parceiros = () => {
    return ( 
        <div>
            <div className="tituloShadow container fs-1 text-center mt-5 mb-3 p-2 text-primary fw-bold">
                Nossos parceiros.
            </div>
            <div className="mb-5">
                <div className="shadow container py-2 containerInterno">
                    <div className="row justify-content-center">
                        <div className="card m-2 rounded-5 col-md-3">
                        <img src={ tonhao } className="shadow card-img-top pt-2 rounded-5" alt="Logo empresa tonhão" />
                        <div className="card-body">
                            <h5 className="card-title">Clientes felizes</h5>
                            <p className="card-text">"Tinhasmos muita fila e espera, após o app, muitos sorrisos e tenho todos os dados de
                            meus atendimentos." Tonhão Batata, proprietário.</p>
                            <a href="#">www.tonhaopecas.com.br</a>
                        </div>
                        </div>


                        <div className="card m-2 rounded-5 col-md-3" >
                        <img src={ luxHotel } className="shadow card-img-top pt-2 rounded-5"
                        alt="card clínica container" />
                        <div className="card-body">
                            <h5 className="card-title">Clínica Container</h5>
                            <p className="card-text">"Tinhamos um problema com nossos agendamentos e atendimentos, agora controlo todo o
                            fluxo de pacientes e trabalho de nossos médicos." Dra.Jurema proprietária dos consultórios.</p>
                            <a href="#">www.clinicacontainer.com.br</a>
                        </div>
                        </div>


                        <div className="card m-2 rounded-5 col-md-3">
                            <img src={ dina } className="card-img-top pt-2 shadow rounded-5" alt="Vó dina doces" />
                            <div className="card-body">
                            <h5 className="card-title">Doces sem fila</h5>
                            <p className="card-text">"Nossas encomendas eram uma dor de cabeça, agora tudo funciona muito bem."</p>
                            <a href="#">www.vodinadoces.com.br</a>
                            </div>
                        </div>


                        <div className="card m-2 rounded-5 col-md-3">
                            <img src={ importadora } className="card-img-top rounded-5 shadow" alt="Desenho de centro logístico" />
                            <div className="card-body">
                            <h5 className="card-title">Retiradas perfeitas.</h5>
                            <p className="card-text">"Tinhamos muita espera nas retiradas de mercadoria, agora tudo flui sem filas."
                                Jorjão du Transporte dono da revendedora China1</p>
                            <a href="#">www.china1store.io</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container justify-content-center d-flex mx-auto mb-3">
                <a className="col-sm-12 col-md-6 btn btn-sm btn-warning rounded-pill mb-5 fs-4" id="comentarioCliente" data-bs-toggle="modal"
                    data-bs-target="#comentario">
                    Nos envie seu comentário!
                </a>
            </div>
                {/* Modal form seja nosso cliente */}
            <div className="modal fade" id="comentario" tabindex="-1" aria-labelledby="clienteModal" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <p className="modal-title fs-5 text-center text-dark" id="exampleModalLabel">Coloque seu e-mail e telefone para entrarmos em contato com você!</p>
                        </div>
                        <div className="modal-body">
                            <form>
                            <div className="mb-3">
                                <label for="recipient-name" className="col-form-label">E-mail:</label>
                                <input type="text" className="form-control" id="recipient-email" />
                            </div>
                            <div className="mb-3">
                                <label for="recipient-name" className="col-form-label">Telefone:</label>
                                <input type="text" className="form-control" id="recipient-telefone" />
                            </div>
                            <div className="mb-3">
                                <label for="recipient-name" className="col-form-label">Nome do Parceiro:</label>
                                <input type="text" className="form-control" id="recipient-nome" />
                            </div>
                            <label for="recipient-name" className="col-form-label">Nos mande o seu logo ou foto:</label>
                            <div class="input-group mb-3">
                                <input type="file" className="form-control" id="inputGroupFile02" />
                                <label className="input-group-text" for="inputGroupFile02">Upload</label>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Coloque aqui a sua avaliação.</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
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
        </div>  
    )
}
export default Parceiros
