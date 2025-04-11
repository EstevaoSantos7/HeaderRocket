import style from './style.module.css'
import Logo from '../../images/logo rocket 2.png'

export default function Inicio() {
    return (
        <div className={style.inico}>
            <div className={style.containerInicio}>
                <div className={style.banerInicio}>
                    <div className={style.conteudoBaner}>
                        <div className={style.tituloBaner}>
                            <h2>Bem vindo a </h2>
                            <img src={Logo} alt="" />
                        </div>
                        <h3>Cadastre-se agora e veja seus ganhos
                            decolarem como um foguete! </h3>
                        <button className={style.botaoCadastrar}>
                            Cadastrar-se
                        </button>
                    </div>
                    <div className="imagensCamp">
                        <img src="" alt="" />
                    </div>
                </div>
            </div>
        </div>

    )
}