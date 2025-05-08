import React, { useEffect, useState } from 'react';
import style from './style.module.css';
import apostas from '../../dataAposta/users'
import { useParams } from 'react-router-dom';

export default function DetalheSport() {
  const [confirmar, setConfirmar] = useState(false);

  const {id} = useParams();
  const aposta  = apostas.find(aposta => aposta.id === parseInt(id))

  useEffect(() => {
    if (confirmar) {
      const timer = setTimeout(() => {
        setConfirmar(false);
        window.location.href = '/Lobby'; // Redireciona após o tempo de delay
      }, 2000); // Define o tempo de delay em milissegundos (10 segundos)

      return () => clearTimeout(timer); // Limpa o timer se o componente for desmontado ou se "confirmar" mudar
    }
  }, [confirmar]);

  const handleClick = (e) => {
    e.preventDefault(); // Impede o comportamento padrão de redirecionamento do <a>
    setConfirmar(true); // Exibe a modal e começa o timer
  };

  return (
    <>
      <div className={style.app} >
        <div className={style.header}>
          <div className={style.matchHeader}>
            <div className={style.topHeader}>
              <h3>Sexta-feira {aposta.horarioJogo}</h3>
              <p>11/04/2025</p>
            </div>

            <div className={style.botHeader}>
              <div className={style.time}>
                <img src={aposta.imagemTimeCasa} alt="Escudo do Casa" />
                <h1>{aposta.timeCasa}</h1>
              </div>

              <h1 className={style.versus}>X</h1>

              <div className={style.time}>
                <h1>{aposta.timeFora}</h1>
                <img src={aposta.imagemTimeFora} alt="Escudo Visitante" />
              </div>
            </div>
          </div>
        </div>

        <div className={style.Resultado}>
          <h2>Resultado final:</h2>
          <div className={style.oddsResultado}>
            <div className={style.oddResultado}>
              <span><small>{aposta.timeCasa}</small>{aposta.resultadoCasa}</span>
            </div>
            <div className={style.oddResultadoMeio}>
              <span><small>Empate</small>{aposta.resultadoEmpate}</span>
            </div>
            <div className={style.oddResultado}>
              <span><small>{aposta.timeFora}</small>{aposta.resultadoFora}</span>
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
              <span><small>Sim</small>{aposta.ambosMarcamSim}</span>
            </div>
            <div className={style.caixaOption}>
              <span><small>Não</small>{aposta.ambosMarcamNão}</span>
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
                  <span className={style.nameTime}>{aposta.timeCasa}</span>
                </div>
                <strong>{aposta.maisde5FaltasCasa}</strong>
              </div>
              <div className={style.caixaFalta}>
                <div className={style.conteudoFalta}>
                  <span className={style.faltastext}>Mais de 5 faltas </span>
                  <span className={style.nameTime}>{aposta.timeFora}</span>
                </div>
                <strong>{aposta.maisde5FaltasFora}</strong>
              </div>
              <div className={style.caixaFalta}>
                <div className={style.conteudoFalta}>
                  <span className={style.faltastext}>Menos de 5 faltas </span>
                  <span className={style.nameTime}>{aposta.timeCasa}</span>
                </div>
                <strong>{aposta.menosde5FaltasCasa}</strong>
              </div>
              <div className={style.caixaFalta}>
                <div className={style.conteudoFalta}>
                  <span className={style.faltastext}>Menos de 5 faltas </span>
                  <span className={style.nameTime}>{aposta.timeFora}</span>
                </div>
                <strong>{aposta.menosde5FaltasFora}</strong>
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
                  <span className={style.nameTime}>{aposta.timeCasa}</span>
                </div>
                <strong>{aposta.cartaoVermelhoCasa}</strong>
              </div>
              <div className={style.caixaCartao}>
                <div className={style.conteudoCartao}>
                  <span className={style.cartaoRed}>Cartão Vermelho </span>
                  <span className={style.nameTime}>{aposta.timeFora}</span>
                </div>
                <strong>{aposta.cartaoVermelhoFora}</strong>
              </div>
              <div className={style.caixaCartao}>
                <div className={style.conteudoCartao}>
                  <span className={style.cartaoAmarelo}>Cartão Amarelo </span>
                  <span className={style.nameTime}>{aposta.timeCasa}</span>
                </div>
                <strong>{aposta.cartaoVermelhoCasa}</strong>
              </div>
              <div className={style.caixaCartao}>
                <div className={style.conteudoCartao}>
                  <span className={style.cartaoAmarelo}>Cartão Amarelo</span>
                  <span className={style.nameTime}>{aposta.timeFora}</span>
                </div>
                <strong>{aposta.cartaoVermelhoCasa}</strong>
              </div>
            </div>
          </div>
        </div>

        <div onClick={handleClick} className={style.botaoEnviar}>
          <a href="/Lobby" onClick={handleClick}>Confirmar Aposta</a> {/* Impede redirecionamento imediato */}
        </div>

        {confirmar && (
          <div onClick={() => setConfirmar(false)} className={style.overlayPesquisar}>
            <div onClick={(e) => e.stopPropagation()} className={style.pesquisaContainer}>
              <h2>Aposta concluída</h2>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
