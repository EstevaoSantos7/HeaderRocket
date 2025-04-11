

import style from './style.module.css'

export default function Integrante({ imagemFirst, nomeFirst, descriptionFirst, funcaoFirst, imagemTwo, nomeTwo, descriptionTwo, funcaoTwo }) {
    return (
        <div className={style.containerIntergrante}>
            <div className={style.integranteLeft}>
                <img src={imagemFirst} alt="" className={style.image} />
                <div className={style.conteudo}>
                    <div className={style.titulo}>
                        <h1 className={style.nome}>{nomeFirst}</h1>
                        <h1 className={style.profissao}>{funcaoFirst}</h1>
                    </div>
                    <p className={style.descricao}>{descriptionFirst}</p>
                </div>
            </div>
            <div className={style.integranteRigth}>
                <div className={style.conteudo}>
                    <div className={style.titulo}>
                        <h1 className={style.nome}>{nomeTwo}</h1>
                        <h1 className={style.profissao}>{funcaoTwo}</h1>
                    </div>
                    <p className={style.descricao}>{descriptionTwo}</p>
                </div>
                <img src={imagemTwo} alt="" className={style.image} />
            </div>
        </div>

    )
}
