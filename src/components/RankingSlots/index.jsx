import Header from "../Header";
import style from "./style.module.css";

// importanto imagens

import slot1 from "../../images/Ranking Images/Slot 1.png";
import slot2 from "../../images/Ranking Images/Slot 2.png";
import slot3 from "../../images/Ranking Images/Slot 3.png";
import slot4 from "../../images/Ranking Images/Slot 4.png";
import slot5 from "../../images/Ranking Images/Slot 5.png";
import slot6 from "../../images/Ranking Images/Slot 6.png";
import slot7 from "../../images/Ranking Images/Slot 7.png";
import slot8 from "../../images/Ranking Images/Slot 8.png";
import { FaRegStar } from "react-icons/fa";

export default function RankingSlots() {
  return (
    <>
      <div className={style.containerRankingSlots}>
        <h1 className={style.titleSection}>Ranking dos melhores jogos</h1>
        <div className={style.conteudoRankingSlots}>
          <a href="/detalhesSlot" className={style.Slot}>
            <div className={style.imgSlot}>
              <img src={slot1} alt="slot1" />
            </div>

            <div className={style.rateSlot}>
              <FaRegStar />
              <h2> 4,9</h2>
            </div>

            <h3 className={style.position}>1° Lugar</h3>
          </a>
          <a href="/detalhesSlot" className={style.Slot}>
            <div className={style.imgSlot}>
              <img src={slot2} alt="slot2" />
            </div>

            <div className={style.rateSlot}>
              <FaRegStar />
              <h2> 4,7</h2>
            </div>

            <h3 className={style.position}>2° Lugar</h3>
          </a>
          <a href="/detalhesSlot" className={style.Slot}>
            <div className={style.imgSlot}>
              <img src={slot3} alt="slot3" />
            </div>

            <div className={style.rateSlot}>
              <FaRegStar />
              <h2> 4,5</h2>
            </div>

            <h3 className={style.position}>3° Lugar</h3>
          </a>
          <a href="/detalhesSlot" className={style.Slot}>
            <div className={style.imgSlot}>
              <img src={slot4} alt="slot4" />
            </div>

            <div className={style.rateSlot}>
              <FaRegStar />
              <h2> 4,3</h2>
            </div>

            <h3 className={style.position}>4° Lugar</h3>
          </a>
          <a href="/detalhesSlot" className={style.Slot}>
            <div className={style.imgSlot}>
              <img src={slot5} alt="slot5" />
            </div>

            <div className={style.rateSlot}>
              <FaRegStar />
              <h2> 4,0</h2>
            </div>

            <h3 className={style.position}>5° Lugar</h3>
          </a>
          <a href="/detalhesSlot" className={style.Slot}>
            <div className={style.imgSlot}>
              <img src={slot6} alt="slot6" />
            </div>

            <div className={style.rateSlot}>
              <FaRegStar />
              <h2> 3,8</h2>
            </div>

            <h3 className={style.position}>6° Lugar</h3>
          </a>
          <a href="/detalhesSlot" className={style.Slot}>
            <div className={style.imgSlot}>
              <img src={slot7} alt="slot7" />
            </div>

            <div className={style.rateSlot}>
              <FaRegStar />
              <h2> 3,4</h2>
            </div>

            <h3 className={style.position}>7° Lugar</h3>
          </a>
          <a href="/detalhesSlot" className={style.Slot}>
            <div className={style.imgSlot}>
              <img src={slot8} alt="slot8" />
            </div>

            <div className={style.rateSlot}>
              <FaRegStar />
              <h2> 3,0</h2>
            </div>

            <h3 className={style.position}>8° Lugar</h3>
          </a>
        </div>
      </div>
    </>
  );
}
