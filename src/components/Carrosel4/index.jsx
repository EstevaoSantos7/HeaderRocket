import sty from './style.module.css';
import { useState, useEffect } from 'react';
import { MdOutlineArrowCircleLeft, MdOutlineArrowCircleRight } from 'react-icons/md';

export default function Carrosel4({ titulo, videos }) {
  const [indice, setIndice] = useState(0);
  const [itensVisiveis, setItensVisiveis] = useState(5);

  useEffect(() => {
    function atualizarTamanho() {
      const largura = window.innerWidth;
      if (largura < 500) setItensVisiveis(1);
      else if (largura < 768) setItensVisiveis(2);
      else if (largura < 1024) setItensVisiveis(3);
      else if (largura < 1280) setItensVisiveis(4);
      else setItensVisiveis(5);
    }

    atualizarTamanho();
    window.addEventListener('resize', atualizarTamanho);
    return () => window.removeEventListener('resize', atualizarTamanho);
  }, []);

  function proximaImagem() {
    setIndice((prev) => (prev + 1) % videos.length);
  }

  function imagemAnterior() {
    setIndice((prev) => (prev - 1 + videos.length) % videos.length);
  }

  function ajustarIndice(valor) {
    return (valor + videos.length) % videos.length;
  }

  const itensRenderizados = [];
  for (let i = 0; i < itensVisiveis; i++) {
    const item = videos[ajustarIndice(indice + i)];
    itensRenderizados.push(
      <a href="/Lobby" className={sty.item} key={i}>
        <img src={item.src} alt={`item ${i + 1}`} />
      </a>
    );
  }

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
        <div
          className={sty.carrosselItens}
          style={{ gridTemplateColumns: `repeat(${itensVisiveis}, 1fr)` }}
        >
          {itensRenderizados}
        </div>
      </div>
    </div>
  );
}
