import sty from './style.module.css'


import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import { useState } from 'react'

export default function Carrosel4({ titulo, videos }) {





    const [indice, setIndice] = useState(0);

    function proximaImagem() {
        let novoIndice = indice + 1
        if (novoIndice >= videos.length) {
            novoIndice = 0
        }
        setIndice(novoIndice)
    }
    function imagemAnterior() {
        let novoIndice = indice - 1
        if (novoIndice < 0) {
            novoIndice = videos.length - 1
        }
        setIndice(novoIndice)
    }

    function ajustarIndice(valor) {
        if (valor >= videos.length) {
            return valor - videos.length
        }
        return valor;

    }
    const item1 = videos[ajustarIndice(indice)]
    const item2 = videos[ajustarIndice(indice + 1)]
    const item3 = videos[ajustarIndice(indice + 2)]
    const item4 = videos[ajustarIndice(indice + 3)]
    const item5 = videos[ajustarIndice(indice + 4)]


    return (
        <div className={sty.secaoCarrossel}>

            <h1 className={sty.tituloSerie}>{titulo}</h1>
            <div className={sty.carrossel}>
                <button onClick={imagemAnterior} className={sty.btnmover}>
                    <FaAngleLeft color='#232323 ' size={40} />
                </button>
                <div className={sty.carrosselItens}>
                    <div className={sty.item}>
                        <img src={item1.src} alt="" />
                        <div className={sty.informacaoCarrosel}>
                            <h3>{item1.title}</h3>
                            <p>{item1.description}</p>
                        </div>
                    </div>
                    <div className={sty.item}>
                        <img src={item2.src} alt="" />
                        <div className={sty.informacaoCarrosel}>
                            <h3>{item2.title}</h3>
                            <p>{item2.description}</p>
                        </div>
                    </div>
                    <div className={sty.item}>
                        <img src={item3.src} alt="" />
                        <div className={sty.informacaoCarrosel}>
                            <h3>{item3.title}</h3>
                            <p>{item3.description}</p>
                        </div>
                    </div>
                    <div className={sty.item}>
                        <img src={item4.src} alt="" />
                        <div className={sty.informacaoCarrosel}>
                            <h3>{item4.title}</h3>
                            <p>{item4.description}</p>
                        </div>
                    </div>
                    <div className={sty.item}>
                        <img src={item5.src} alt="" />
                        <div className={sty.informacaoCarrosel}>
                            <h3>{item5.title}</h3>
                            <p>{item5.description}</p>
                        </div>
                    </div>


                </div>
                <button onClick={proximaImagem} className={sty.btnmover}>
                    <FaAngleRight color='#232323 ' size={40} />
                </button>

            </div>

        </div>


    )
}