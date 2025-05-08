import style from './syle.module.css'
import Video from '../../videos/videoplayback.mp4'
import RealMadrid from '../../images/realmadrid (1).png'
import Bayer from '../../images/bayer.png'


export default function Hero() {
    return (
        <div className={style.containerHero}>
            <video autoPlay loop muted className={style.video}>
                <source src={Video} type='video/mp4' />
            </video>

            <div className={style.conteudo}>
                <h1>Champions League</h1>
                <h1>Semi Final</h1>
                <div className={style.infoMeta}>

                    <h4 className={style.infoJogo}>Jogo de volta</h4>
                   <div className={style.times}>
                   <p className={style.odd}>Odd 3.25</p>
                    <img src={RealMadrid} alt="" />
                    <p className={style.xis}>X</p>
                    <img src={Bayer} alt="" />
                    <p className={style.odd}>Odd 3.25</p>

                   </div>
                </div>
                <p>  Após derrota do time Alemão,coletiva
                    de imprensa pós jogo Kimichidiz  “Em
                    Munique a história é diferente ” Mostran-
                    do que o jogo será Épico</p>
                <div className={style.parteBaixa}>
                    

                    <a href='/Esportes' className={style.botaoInfo}>
                        Apostar
                    </a>
                    <div className={style.prazo}>
                        <p className={style.apostaAberta}>
                            Apostas abertas até
                        </p>
                        <p className={style.prazoHorario}>
                            16:29
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}