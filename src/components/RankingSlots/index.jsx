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
import slots from '../../dataAposta/Slots'




export default function RankingSlots() {
  return (
    <>
      <div className={style.containerRankingSlots}>
        <h1 className={style.titleSection}>Ranking dos melhores jogos</h1>
        <div className={style.conteudoRankingSlots}>
          {/* Aqui vamos mapear os slots a partir do ranking */}
          {slots.slice(0, 8).map((slot, index) => (
            <a
              key={index} // Usando `index` como chave única
              href={`/detalhesSlot/${slot.id}`} // Alterado para usar `slot.titulo`
              className={style.Slot}
            >
              <div className={style.imgSlot}>
                <img src={slot.src} alt={`Imagem do ${slot.titulo}`} />
              </div>

              <div className={style.rateSlot}>
                <FaRegStar />
                <h2>{slot.nota}</h2> {/* Exibindo a nota do slot */}
              </div>

              <h3 className={style.position}>{index + 1}° Lugar</h3> {/* Exibe o número da posição */}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
