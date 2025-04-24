import style from './style.module.css'
import Banco from '../../images/Banco.png'
import Nubank from '../../images/nubank.png'
import Master from '../../images/mastecard.png'
import Bitcoin from '../../images/bitcoin.png'
import Sobre from '../../pages/Sobre';
import Home from '../../pages/Home'
import Termos from '../../pages/Termos'

    export default function Rodape (){
        return(
            <section className={style.rodape}>
                <div className={style.linksContainer}>
                    <div className={style.esportes}>
                        <h1>Esportes</h1>
                        <a href="">Ao Vivo</a>
                        <a href="">Esportes</a>
                        <a href="">Regra de apostas</a>
                    </div>
                    <div className={style.cassino}>
                        <h1>Cassino</h1>
                        <a href="">VIP's</a>
                        <a href="">Promoções</a>
                        <a href="">Jogos</a>
                        <a href="">Regras do Cassino</a>
                    </div>
                    <div className={style.SobreNos}>
                        <h1>Sobre Nós</h1>
                        <a href="/sobre">Politicas de privacidade</a>
                        <a href="/Termos">Termos de condição</a>
                    </div>
                    <div className={style.ajuda}>
                        <h1>Ajuda</h1>
                        <a href="">Central de ajuda</a>
                    </div>

                </div>
                
                <div className={style.final}>
                <div className={style.pagamentos}>
                    <div className={style.imagens1}>
                         <img src={Banco} id={style.banco} alt="" />
                         <img src={Nubank} alt="" />
                         <img src={Master} alt="" />
                    </div>
                    <hr />
                    <div className={style.imagens2}>
                        <img src={Bitcoin} alt="" />
                    </div>
                </div>
                </div>
                <div className={style.frase}>
                    <p>Jogar sem controle causa dependência. O jogo é entretenimento. Jogue com moderação. Proibida a venda a menores. </p>
                    <div className={style.direitos}>
                    <h6>©2025 RocketBet Brasil. Todos os direitos reservados</h6>
                    </div>
                </div>
            </section>
        )
    }