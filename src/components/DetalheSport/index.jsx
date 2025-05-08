import React, { useEffect, useState } from 'react';
import style from './style.module.css';
import Arsenal from '../../images/imagesTimes/Arsenal FC.png';


export default function DetalheSport() {
  const [confirmar, setConfirmar] = useState(false);

  
  useEffect(() => {
    if (confirmar) {
      const timer = setTimeout(() => {
        setConfirmar(false);
      }, 1000000); 
      return () => clearTimeout(timer); // limpa o timer se desmontar
    }
  }, [confirmar]);
  return (
   <>
    <div className={style.app}>
      <div className={style.header}>
        <div className={style.matchHeader}>
          <div className={style.topHeader}>
            <h3>Sexta-feira 19:00</h3>
            <p>11/04/2025</p>
          </div>

          <div className={style.botHeader}>
            <div className={style.time}>
              <img src={Arsenal} alt="Escudo do Bayern de Munique" />
              <h1>Bayern Munique</h1>
            </div>

            <h1 className={style.versus}>X</h1>

            <div className={style.time}>
              <h1>Inter de Milão</h1>
              <img src={Arsenal} alt="Escudo da Inter de Milão" />
            </div>
          </div>
        </div>
      </div>

      <div className={style.Resultado}>
        <h2>Resultado final:</h2>
        <div className={style.oddsResultado}>
          <div className={style.oddResultado}>
            <span><small>Bayern de Munique</small>6.50</span>
          </div>
          <div className={style.oddResultadoMeio}>
            <span ><small>Empate</small>7.50</span>
          </div>
          <div className={style.oddResultado}>
            <span ><small>Inter de Milão</small>10.60</span>
          </div>
        </div>
      </div>

      <div className={style.sectionGols}>
        <h2>Total de gols</h2>
        <div className={style.goalsGrid}>
          <div className={style.goalsBox}>
            <div className={style.goalsNumbers}>

              <div className={style.numberInicio}>1</div>
              <div className={style.number}>2</div>
              <div className={style.number}>3</div>
              <div className={style.number}>4</div>
              <div className={style.numberFinal}>5</div>

            </div>
            <span className={style.goalsLabel}>Mais de 5</span>
          </div>
          <div className={style.goalsBox}>
            <div className={style.goalsNumbers}>
              <div className={style.numberInicio}>1</div>
              <div className={style.number}>2</div>
              <div className={style.number}>3</div>
              <div className={style.number}>4</div>
              <div className={style.numberFinal}>5</div>
            </div>
            <span className={style.goalsLabel}>Menos de 5</span>
          </div>
        </div>
      </div>

      <div className={style.sectionMarcam}>
        <h2>Ambos os times marcam</h2>
        <div className={style.options}>
          <div className={style.caixaOption}>
            <span><small>Sim</small>1.89</span>
          </div>
          <div className={style.caixaOption}>
            <span><small>Não</small>1.69</span>

          </div>
        </div>
      </div>



      <div className={style.sectionFaltas}>
        <h2>Faltas</h2>
        <div className={style.faltas}>
          <div className={style.gridFaltas}>
            <div className={style.caixaFalta}>

              <div className={style.conteudoFalta}>
                <span className={style.faltastext}>Mais de 5 faltas </span>
                <span className={style.nameTime}>Inter de Milão</span>
              </div>
              <strong>5.90</strong>
            </div>
            <div className={style.caixaFalta}>

              <div className={style.caixaFalta}>

                <div className={style.conteudoFalta}>
                  <span className={style.faltastext}>Mais de 5 faltas </span>
                  <span className={style.nameTime}>Arsenal</span>
                </div>
                <strong>8.04</strong>
              </div>
            </div>
            <div className={style.caixaFalta}>

              <div className={style.caixaFalta}>

                <div className={style.conteudoFalta}>
                  <span className={style.faltastext}>Mais de 5 faltas </span>
                  <span className={style.nameTime}>Inter de Milão</span>
                </div>
                <strong>4.82</strong>
              </div>
            </div>
            <div className={style.caixaFalta}>

              <div className={style.caixaFalta}>

                <div className={style.conteudoFalta}>
                  <span className={style.faltastext}>Mais de 5 faltas </span>
                  <span className={style.nameTime}>Arsenal</span>
                </div>
                <strong>7.81</strong>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className={style.sectionCartoes}>
        <h2>Cartões</h2>
        <div className={style.cartoesCaixas}>
          <div className={style.gridCartoes}>
            <div className={style.caixaCartao}>
              <div className={style.conteudoCartao}>
                <span className={style.cartaoRed}>Cartão Vermelho </span>
                <span className={style.nameTime}>Inter de Milão</span>
              </div>
              <strong>5.05</strong>
            </div>
            <div className={style.caixaCartao}>
              <div className={style.conteudoCartao}>
                <span className={style.cartaoRed}>Cartão Vermelho </span>
                <span className={style.nameTime}>Bayern de Munique</span>
              </div>
              <strong>4.80</strong>

            </div>
            <div className={style.caixaCartao}>
              <div className={style.conteudoCartao}>
                <span className={style.cartaoAmarelo}>Cartão Amarelo </span>
                <span className={style.nameTime}>Inter de Milão</span>
              </div>
              <strong>4.16</strong>
            </div>
            <div className={style.caixaCartao}>
              <div className={style.conteudoCartao}>
                <span className={style.cartaoAmarelo}>Cartão Amarelo</span>
                <span className={style.nameTime}>Bayern de Munique</span>
              </div>
              <strong>6.57</strong>
            </div>
          </div>
        </div>
      </div>
      <div onClick={() => setConfirmar(true)} className={style.botaoEnviar}>
       
        <a href="/Lobby">Confirmar Aposta</a>

      </div>
    </div>
     {confirmar && (
      <div onClick={() => setConfirmar(false)} className={style.overlayPesquisar}>
          <div onClick={(e) => e.stopPropagation()} className={style.pesquisaContainer}>
              <h2>Aposta concluída</h2>
             
          </div>
      </div>

  )}
   </>
  );
}
