import "../../App.css"
import filaDePessoas from '/src/assets/img/fila_de_pessoas.jpg'
import filaEmFrenteALoja from '/src/assets/img/fila_em_frente_a_loja.jpg'

const Produtos = () => {
    return ( 
        <div>
            <div className="tituloShadow d-flex flex-column fs-1 text-center mt-5 mb-5 text-primary fw-bold" >
                Nosso diferencial é o foco no seu cliente.
            </div>
            <div className="col-sm-12 col-md-4 d-grid mx-auto mb-5">
                <a className="btn btn-sm btn-warning rounded-pill mb-5 fs-4" id="sejaNossoCliente" data-bs-toggle="modal"
                    data-bs-target="#sejaNosso">
                    Seja nosso cliente!!!
                </a>
            </div>
                {/* Modal form seja nosso cliente */}
            <div className="modal fade" id="sejaNosso" tabindex="-1" aria-labelledby="clienteModal" aria-hidden="true">
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
                                <label for="recipient-name" className="col-form-label">Nome:</label>
                                <input type="text" className="form-control" id="recipient-nome" />
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
                
            
            <div className="" >
                <div className="container p-3 shadow" id="containerInterno">
                <div className="row justify-content-center align-items-center">
                <div className="d-inline-flex justify-content-center p-0 col-sm-12 col-md-6 col-lg-4 align-content-center">
                    <img src={ filaDePessoas } className="rounded-2 shadow imgPadrao" />
                </div>
                <div className="d-inline-flex justify-content-center col-sm-12 col-md-7 col-lg-4">
                    <div className="text-center" id="blocoTexto">
                    <div className="h1 mt-5"> <span className="tituloShadow text-primary"/>Otimize agendamentos e acabe com as filas!
                    </div>
                    <p className="pb-2 fs-4">
                        Nosso objetivo principal é a experiência do seu cliente! Quanto menos tempo ele perde, maior é a sua
                        qualidade. Somos fácil de usar, agendamentos, reagendamentos e cancelamentos em segundos. Tenha todos os
                            dados de seus atendimentos em tempo real.
                        Experimente e comprove como transformaremo sua empresa!
                    </p>
                   {/*modal button*/}
                    <a className="btn btn-sm btn-warning rounded-pill mb-5 fs-4" id="botaoProduto" data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop">
                        Saiba mais sobre nós.
                    </a>

                   {/* Modal */}
                    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"
                        tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                        <div className="modal-content">
                            <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Quem somos?</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body text-center">
                            <p>Somos uma micro empresa do ramo de software para gestão de negócios, trabalhamos com a venda de
                                software para agendamentos de consultas, retiradas de mercadorias, horários diversos, controle
                                de fluxo de pessoas e atendimentos por hora. Somos uma empresa fundada em Santa Catarina e com
                                abrangência nacinal de clientes.</p>
                            <p>Nossa orientação é de desenvolvermos produtos para descomplicar a vida de nossos clientes e de
                                seus clientes, com baixo custo de manutenção e segurança.</p>
                            <p>Sendo nosso parceiro você verá como é bom ter toda a sua agenda em um unico lugar.</p>
                            <h2>Sobre o Sistema</h2>
                            <p>Nosso sistema foi projetado para oferecer uma experiência eficiente e organizada. Com a
                                capacidade de receber informações de agendamento e chegada com antecedência, garantimos uma
                                transição suave para os clientes e uma melhor gestão do tempo. Além disso, controlamos a
                                capacidade de atendimento por hora, assegurando um serviço de qualidade. Registramos
                                meticulosamente o horário de início e término do atendimento, permitindo uma análise precisa do
                                tempo de espera e de serviço. Ao monitorar o tempo de atendimento entre a chegada, o atendimento
                                e a saída, proporcionamos uma visão clara do desempenho da recepção e áreas de melhoria. Com
                                essas funcionalidades integradas, facilitamos o planejamento e o controle da sua operação,
                                otimizando a experiência tanto para os clientes quanto para a equipe.</p>
                            </div>
                            <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>

                </div>
                <div className="d-inline-flex justify-content-center p-0 flex col-sm-12 col-md-6 col-lg-4 align-content-center">
                    <img src={ filaEmFrenteALoja } className="rounded-2 shadow imgPadrao"  />
                </div>
            </div>
            </div>
            </div>
        </div>
    )
}
export default Produtos
