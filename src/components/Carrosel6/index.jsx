import sty from './style.module.css';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { useState } from 'react';
import { MdOutlineArrowCircleLeft, MdOutlineArrowCircleRight } from 'react-icons/md';

export default function Carrosel4({ titulo, videos }) {
  const [indice, setIndice] = useState(0);

  // Função para ir para o próximo item
  function proximaImagem() {
    let novoIndice = indice + 1;
    if (novoIndice >= videos.length) {
      novoIndice = 0;
    }
    setIndice(novoIndice);
  }

  // Função para ir para o item anterior
  function imagemAnterior() {
    let novoIndice = indice - 1;
    if (novoIndice < 0) {
      novoIndice = videos.length - 1;
    }
    setIndice(novoIndice);
  }

  // Função que ajusta o índice cíclicamente
  function ajustarIndice(valor) {
    if (valor >= videos.length) {
      return valor - videos.length;
    }
    return valor;
  }

  // Acessando os itens baseados no índice atual
  const item1 = videos[ajustarIndice(indice)];
  const item2 = videos[ajustarIndice(indice + 1)];
  const item3 = videos[ajustarIndice(indice + 2)];
  const item4 = videos[ajustarIndice(indice + 3)];
  const item5 = videos[ajustarIndice(indice + 4)];
  const item6 = videos[ajustarIndice(indice + 5)];


  return (
    <div className={sty.secaoCarrossel}>
      <div className={sty.tituloCima}>
        <h1>{titulo || 'Populares'}</h1>
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
          <a href={`/detalhesSlot/${item1.id}`} className={sty.item}>
            <img src={item1.src} alt="item 1" />
          </a>
          <a href={`/detalhesSlot/${item2.id}`} className={sty.item}>
            <img src={item2.src} alt="item 2" />
          </a>
          <a href={`/detalhesSlot/${item3.id}`} className={sty.item}>
            <img src={item3.src} alt="item 3" />
          </a>
          <a href={`/detalhesSlot/${item4.id}`} className={sty.item}>
            <img src={item4.src} alt="item 4" />
          </a>
          <a href={`/detalhesSlot/${item5.id}`} className={sty.item}>
            <img src={item5.src} alt="item 5" />
          </a>
          <a href={`/detalhesSlot/${item6.id}`} className={sty.item}>
            <img src={item6.src} alt="item 6" />
          </a>
        </div>
      </div>
    </div>
  );
}
