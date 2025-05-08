import Header from "../Header";
import style from "./style.module.css";

// Importando imagens
import slot1 from "../../images/Ranking Images/Slot 1.png";
import slot2 from "../../images/Ranking Images/Slot 2.png";
import slot3 from "../../images/Ranking Images/Slot 3.png";
import slot4 from "../../images/Ranking Images/Slot 4.png";
import slot5 from "../../images/Ranking Images/Slot 5.png";
import slot6 from "../../images/Ranking Images/Slot 6.png";
import slot7 from "../../images/Ranking Images/Slot 7.png";
import slot8 from "../../images/Ranking Images/Slot 8.png";
import { FaRegStar } from "react-icons/fa";

// Dados do ranking
const ranking = [
  {
    id: 1, // Adicionando um id único
    src: slot1,
    titulo: "Slot 1",
    nota: 4.9,
  },
  {
    id: 2, // Adicionando um id único
    src: slot2,
    titulo: "Slot 2",
    nota: 4.8,
  },
  {
    id: 3, // Adicionando um id único
    src: slot3,
    titulo: "Slot 3",
    nota: 4.7,
  },
  {
    id: 4, // Adicionando um id único
    src: slot4,
    titulo: "Slot 4",
    nota: 4.6,
  },
  {
    id: 5, // Adicionando um id único
    src: slot5,
    titulo: "Slot 5",
    nota: 4.5,
  },
  {
    id: 6, // Adicionando um id único
    src: slot6,
    titulo: "Slot 6",
    nota: 4.4,
  },
  {
    id: 7, // Adicionando um id único
    src: slot7,
    titulo: "Slot 7",
    nota: 4.3,
  },
  {
    id: 8, // Adicionando um id único
    src: slot8,
    titulo: "Slot 8",
    nota: 4.2,
  },
];


export default function RankingSlots() {
  return (
    <>
      <div className={style.containerRankingSlots}>
        <h1 className={style.titleSection}>Ranking dos melhores jogos</h1>
        <div className={style.conteudoRankingSlots}>
          {/* Aqui vamos mapear os slots a partir do ranking */}
          {ranking.slice(0, 8).map((aposta, index) => (
            <a
              key={index} // Usando `index` como chave única
              href={`/detalhesSlot/${aposta.id}`} // Alterado para usar `aposta.titulo`
              className={style.Slot}
            >
              <div className={style.imgSlot}>
                <img src={aposta.src} alt={`Imagem do ${aposta.titulo}`} />
              </div>

              <div className={style.rateSlot}>
                <FaRegStar />
                <h2>{aposta.nota}</h2> {/* Exibindo a nota do slot */}
              </div>

              <h3 className={style.position}>{index + 1}° Lugar</h3> {/* Exibe o número da posição */}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
