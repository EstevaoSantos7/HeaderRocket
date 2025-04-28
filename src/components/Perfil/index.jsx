import style from './style.module.css'
import Mines1 from "../../images/image.png"
import Mines2 from "../../images/image (1).png"
import Mines3 from "../../images/image (2).png"
import Mines4 from "../../images/image (3).png"
import Mines5 from "../../images/user.png"
import Barcelona from '../../images/imagesTimes/Barcelona FC.png'
import Arsenal from '../../images/imagesTimes/Arsenal FC.png'


export default function Perfil() {
    return (
        <>

            <div className={style.container}>
                {/* Esquerda - Dados do usuário */}
                <div className={style.dados}>
                    <img src={Mines5} alt="images" />
                    <h2>Nome do Usuário</h2>
                    <h3>#6969</h3>
                    <div className={style.dadosInfo}>

                        <p><strong>Informações Pessoais</strong> </p>
                        <p><strong>Telefone:</strong> (11) 91234-5678</p>
                        <p><strong>Email:</strong> joao@email.com</p>
                        <p><strong>Senha:</strong> ********</p>
                        <button >Editar Perfil</button>
                    </div>

                </div>

                {/* Direita - Jogos e Apostas */}

                <div className={style.containerDireita}>
                    <div className={style.caixaMais}>
                        <h3>Jogos Mais Jogados</h3>
                        <div className={style.Mais}>
                            <img src={Mines1} alt="Jogo 1" />
                            <img src={Mines2} alt="Jogo 2" />
                            <img src={Mines3} alt="Jogo 3" />
                        </div>
                    </div>
                    <div className={style.caixaMais}>
                        <h3>Últimas Apostas</h3>
                        <div className={style.Mais}>
                            <img src={Mines1} alt="Jogo 1" />
                            <img src={Mines2} alt="Jogo 2" />
                            <img src={Mines3} alt="Jogo 3" />
                          <div className={style.containerEsporteAposta}>
                          <div className={style.apostaEsporte}>
                                <div className={style.imagemTime}>
                                    <img src={Barcelona} alt="" />
                                </div>
                                <div className={style.xis}>
                                    <span>X</span>
                                </div>
                                <div className={style.imagemTime}>
                                    <img src={Arsenal} alt="" />
                                </div>
                            </div>
                            <div className={style.apostaEsporte}>
                                <div className={style.imagemTime}>
                                    <img src={Barcelona} alt="" />
                                </div>
                                <div className={style.xis}>
                                    <span>X</span>
                                </div>
                                <div className={style.imagemTime}>
                                    <img src={Arsenal} alt="" />
                                </div>
                            </div>
                          </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className={style.saldoContainer}>
                <button className={style.saldoButton}>Adicionar Saldo</button>

            </div>
        </>



    );
};


