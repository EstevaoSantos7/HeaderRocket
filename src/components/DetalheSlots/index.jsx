import style from './style.module.css';

import imgTeste from '../../images/CassinoVivo/baccarat.png'

export default function DetalheSlot() {
    return (
        <div className={style.containerDetalhes}>
         <div className={style.imagemJogo }>
         <img className={style.capaJogo} src={imgTeste} alt="" />
         </div>
            <div className={style.conteudoDetalhes}>
                <div className={style.textoOne}>
                    <h3 className={style.nameSlot}>🎰Nome do slot</h3>
                <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur deserunt dolore et expedita ullam perferendis laborum perspiciatis. Id error quisquam nulla sunt? Quaerat, reiciendis repellendus asperiores incidunt amet eveniet expedita?
                    </p>
                </div>
                <div className={style.textoTwo}>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto deserunt harum fuga officia inventore ipsum molestias rem praesentium quaerat, iure, a modi alias dolor ipsam, qui unde adipisci excepturi? Aut.</p>
                </div>
                <div className={style.textoTres}>
                    <p>
                        Descrição Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Laborum ad repellendus nisi, rerum tempore accusamus!
                    </p>
                </div>
            </div>
        </div>
    );
}
