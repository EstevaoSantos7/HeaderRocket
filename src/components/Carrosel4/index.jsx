import sty from './style.module.css'
import { BsArrowRightSquare, BsArrowLeftSquare } from "react-icons/bs";
import { MdOutlineArrowCircleRight, MdOutlineArrowCircleLeft } from "react-icons/md";


import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import { useState } from 'react'

export default function Carrosel4({ titulo, videos }) {


    const [indice, setIndice] = useState(0);

    // ✅ Protege contra undefined ou array vazio
    if (!videos || videos.length === 0) return null;

    function proximaImagem() {
        let novoIndice = indice + 1;
        if (novoIndice >= videos.length) {
            novoIndice = 0;
        }
        setIndice(novoIndice);
    }

    function imagemAnterior() {
        let novoIndice = indice - 1;
        if (novoIndice < 0) {
            novoIndice = videos.length - 1;
        }
        setIndice(novoIndice);
    }

    function ajustarIndice(index, total = 0) {
        if (index < 0) return total - 1;
        if (index >= total) return 0;
        return index;
    }

    const item1 = videos[ajustarIndice(indice, videos.length)];
    const item2 = videos[ajustarIndice(indice + 1, videos.length)];
    const item3 = videos[ajustarIndice(indice + 2, videos.length)];
    const item4 = videos[ajustarIndice(indice + 3, videos.length)];
    const item5 = videos[ajustarIndice(indice + 4, videos.length)];

    return (
        <div className={sty.secaoCarrossel}>
           <div className={sty.tituloCima}>
                    <h1>Populares</h1>
                   
                    <div className={sty.seta}>
  <button onClick={imagemAnterior} className={sty.btnmover}>
    <MdOutlineArrowCircleLeft size={40} />
  </button>
  <button onClick={proximaImagem} className={sty.btnmover}>
    <MdOutlineArrowCircleRight size={40} />
  </button>
</div>

                </div>
            <div className={sty.carrossel}>


                
                <div className={sty.carrosselItens}>
                    <div className={sty.item}><img src={item1.src} alt="" /></div>
                    <div className={sty.item}><img src={item2.src} alt="" /></div>
                    <div className={sty.item}><img src={item3.src} alt="" /></div>
                    <div className={sty.item}><img src={item4.src} alt="" /></div>
                    <div className={sty.item}><img src={item5.src} alt="" /></div>
                </div>


            </div>
        </div>
    );
}
