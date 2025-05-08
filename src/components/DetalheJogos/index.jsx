import style from './style.module.css';



export default function DetalheSlot({jogos}) {
    return (
        <div className={style.containerDetalhes}>
         <div className={style.imagemJogo }>
         <img className={style.capaJogo} src={jogos.src} alt="" />
         </div>
            <div className={style.conteudoDetalhes}>
                <div className={style.textoOne}>
                    <h3 className={style.nameSlot}>🎰{jogos.titulo}</h3>
                <p>
                É o jogo de aposta que junta a emoção da roleta com o tempero único do Brasil! Ao vivo e direto para a sua tela, essa experiência eletrizante te coloca na mesa com jogadores reais, dealers carismáticos e chances quentíssimas de ganhar alto.                    </p>
                </div>
                <div className={style.textoTwo}>
                    <p>
                    🌟 Com visual vibrante, trilha sonora empolgante e uma pitada de sorte à brasileira, cada giro é pura adrenalina. Escolha seus números, faça sua fézinha e torça forte — aqui, a roleta gira com ritmo de samba e premiações que podem mudar o seu dia.
                    </p>
                                    </div>
                <div className={style.textoTres}>
                    <p>
                    💥 Quer sentir a emoção de um cassino sem sair de casa? Então Brazilian Rolete -Live- é o seu próximo vício. Vem girar com a gente e descubra se hoje é seu dia de sorte!
                    </p>
                </div>
            </div>
        </div>
    );
}
