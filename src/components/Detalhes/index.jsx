export default function Detalhes(){
    return(

        <div className="app">
        <div className="header">
          <div className="match-header">
  
            <div className="top-header">  
              <h3>sexta-feira 19:00</h3>
              <p>11/04/2025</p>
            </div> {/* top-header */}
  
            <div className="bot-header">
  
              <div className="time">
                <img src={Bayern} alt="" />
                <h1>Bayern Munique</h1>
              </div> {/* time */}
  
  
              <img src={Group} alt="" />
  
              <div className="time">
                <h1>Inter de Milão</h1>
                <img src={Inter} alt="" />
              </div> {/* time */}
  
            </div>{/* bot-header */}
          </div>
  
        </div>
  
        <div className="section">
          <h2>Resultado final:</h2>
          <div className="odds final-result">
            <span>6.50<br /><small>Bayern de Munique</small></span>
            <span>7.50<br /><small>Empate</small></span>
            <span>10.60<br /><small>Inter de Milão</small></span>
          </div>
        </div>
  
        <div className="section">
          <h2>Total de gols</h2>
          <div className="goals-grid">
            <div className="goals-box">
              <div className="goals-numbers">
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
              </div>
              <span className="goals-label">Mais de 5</span>
            </div>
            <div className="goals-box">
              <div className="goals-numbers">
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
              </div>
              <span className="goals-label">Menos de 5</span>
            </div>
          </div>
        </div>
  
        <div className="section">
          <h2>Ambos os times marcam</h2>
          <div className="options">
            <span>1.89<br /><small>Sim</small></span>
            <span>1.69<br /><small>Não</small></span>
          </div>
        </div>
  
        <div className="section">
          <h2>Resultado correto</h2>
          <div className="correct-score">
            <div>
              <strong>Bayern De Munique</strong>
              <p>01 2 3 4 5</p>
            </div>
            <div>
              <strong>Inter de Milão</strong>
              <p>0 1 2 3 4 5</p>
            </div>
          </div>
        </div>
  
        <div className="section">
          <h2>Faltas</h2>
          <div className="fouls">
            <span>5.90<br /><small>Mais de 5 faltas<br />Inter de Milão</small></span>
            <span>8.04<br /><small>Menos de 5 faltas<br />Inter de Milão</small></span>
            <span>4.82<br /><small>Mais de 5 faltas<br />Bayern De Munique</small></span>
            <span>7.81<br /><small>Menos de 5 faltas<br />Bayern De Munique</small></span>
          </div>
        </div>
  
        <div className="section">
          <h2>Cartões</h2>
          <div className="cards block">
            <div>
              <span className="red">Cartão Vermelho<br />Inter Milão</span>
              <strong>5.05</strong>
            </div>
            <div>
              <span className="red">Cartão Vermelho<br />Bayern de Munique</span>
              <strong>4.80</strong>
            </div>
            <div>
              <span className="yellow">Cartão Amarelo<br />Inter Milão</span>
              <strong>4.16</strong>
            </div>
            <div>
              <span className="yellow">Cartão Amarelo<br />Bayern de Munique</span>
              <strong>6.57</strong>
            </div>
          </div>
        </div>
      </div>
    )
}