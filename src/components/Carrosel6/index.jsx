import sty from './style.module.css';
import { useState, useEffect } from 'react';
import { MdOutlineArrowCircleLeft, MdOutlineArrowCircleRight } from 'react-icons/md';

export default function Carrosel6({ titulo, videos, endereco }) {
  const [indice, setIndice] = useState(0);
  const [itensVisiveis, setItensVisiveis] = useState(6); // Controla quantos itens são visíveis no carrossel

  // Função para ajustar o número de itens visíveis com base na largura da tela
  function ajustarItensVisiveis() {
    const larguraTela = window.innerWidth;
    if (larguraTela >= 1200) {
      setItensVisiveis(6);
    } else if (larguraTela >= 1000) {
      setItensVisiveis(5);
    } else if (larguraTela >= 800) {
      setItensVisiveis(4);
    } else if (larguraTela >= 600) {
      setItensVisiveis(3);
    } else if (larguraTela >= 400) {
      setItensVisiveis(2);
    } else {
      setItensVisiveis(1);
    }
  }

  useEffect(() => {
    // Ajusta os itens visíveis quando a largura da tela muda
    ajustarItensVisiveis();

    // Adiciona listener para atualizar o número de itens visíveis quando a janela for redimensionada
    window.addEventListener('resize', ajustarItensVisiveis);

    // Limpeza do listener ao desmontar o componente
    return () => {
      window.removeEventListener('resize', ajustarItensVisiveis);
    };
  }, []);

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
  const itens = [];
  for (let i = 0; i < itensVisiveis; i++) {
    itens.push(videos[ajustarIndice(indice + i)]);
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
        <div className={sty.carrosselItens}>
          {itens.map((item, index) => (
            <a key={item.id} href={`/${endereco}/${item.id}`} className={sty.item}>
              <img src={item.src} alt={`item ${index + 1}`} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
