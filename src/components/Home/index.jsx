import style from './style.module.css'
import Logo from '../../images/logo rocket 2.png'
import ImgBaner from '../../images/baner.png'
import Hero from '../Hero'

export default function Inicio() {
    return (
        <div className={style.containerInicio}>
            <div className={style.conteudo}>
            <div className={style.banerInicio}>
                <div className={style.conteudoBaner}>
                    <div className={style.tituloBaner}>
                        <h2>Bem vindo a </h2>
                        <img src={Logo} alt="Logo" />
                    </div>
                    <h3>Cadastre-se agora e veja seus ganhos
                        decolarem como um foguete! </h3>
                    <button className={style.botaoCadastrar}>
                        Cadastrar-se
                    </button>
                </div>
                <div className={style.imagensCamp}>
                    <img src={ImgBaner} alt="Trofeus" />
                </div>
            </div>
            <Hero/>

            </div>
        </div>


    )
}