import style from './style.module.css'
import { SlPresent } from "react-icons/sl";
import { CiCreditCard1 } from "react-icons/ci";
import { FaRegComment, FaRegQuestionCircle, FaHome } from "react-icons/fa";
import { PiMedalDuotone, PiPokerChipFill, PiBomb, PiSoccerBallFill } from "react-icons/pi";
import { FiUser } from "react-icons/fi";
import { RiPokerClubsFill, RiPlaneFill, RiPokerSpadesFill } from "react-icons/ri";
import { GiPokerHand } from "react-icons/gi";
import { MdOutlineCasino } from "react-icons/md";
import { TbBallFootball } from "react-icons/tb";
import { IoHomeOutline } from "react-icons/io5";



export default function Sidebar({ open }) {

    return (
        <>
            {open ?
                (
                    <div className={style.sidenav}>
                    <div className={style.elementos}>

                        <div className={style.bloco}>
                            <IoHomeOutline size={25} color='white' />
                            <a href="/">Home</a>
                        </div>
                        <div className={style.bloco}>
                            <SlPresent size={25} color='white' />
                            <a href="/">Promoções</a>
                        </div>
                        <div className={style.bloco}>
                            <CiCreditCard1 size={25} color='white' />
                            <a href="/">Ticket VIP</a>
                        </div>
                        <div className={style.bloco}>
                            <FaRegComment size={25} color='white' />
                            <a href="/">Ajuda</a>
                        </div>
                        <div className={style.bloco}>
                            <FaRegQuestionCircle size={25} color='white' />
                            <a href="/">Sobre</a>

                        </div>
                        <div className={style.bloco}>
                            <PiMedalDuotone size={25} color='white' />
                            <a href="/">Ranking de Slots</a>

                        </div>
                        <div className={style.bloco}>
                            <FiUser size={25} color='white' />
                            <a href="/">Conta</a>

                        </div>

                    </div>
                    <div className={style.elementos}>

                        <div className={style.bloco}>
                            <GiPokerHand size={25} color='white' />
                            <a href="/">Black Jack</a>
                        </div>
                        <div className={style.bloco}>
                            <PiPokerChipFill size={25} color='white' />
                            <a href="/">Roleta</a>
                        </div>
                        <div className={style.bloco}>
                            <TbBallFootball size={25} color='white' />
                            <a href="/">Bacará</a>
                        </div>
                        <div className={style.bloco}>
                            <RiPokerClubsFill size={25} color='white' />
                            <a href="/">Cassino hold </a>
                        </div>
                        <div className={style.bloco}>
                            <RiPlaneFill size={25} color='white' />
                            <a href="/">Aviator Game</a>

                        </div>
                        <div className={style.bloco}>
                            <PiBomb size={25} color='white' />
                            <a href="/">Mines</a>

                        </div>

                    </div>
                    <div className={style.elementos}>

                        <div className={style.bloco}>
                            <RiPokerSpadesFill size={25} color='white' />
                            <a href="/">Cassino</a>
                        </div>
                    </div>
                    <div className={style.elementos}>

                        <div className={style.bloco}>
                            <MdOutlineCasino size={25} color='white' />
                            <a href="/">Salão de Jogos</a>
                        </div>
                    </div>
                    <div className={style.elementos}>

                        <div className={style.bloco}>
                            <PiSoccerBallFill size={25} color='white' />
                            <a href="/">Esportes</a>
                        </div>
                    </div>



                </div>
                    


                )
                : (
                    <div className={style.sidebarOverlay}>
                        <div className={style.elementos}>
                            <div className={style.icones}>

                                <IoHomeOutline size={25} color='white' />
                                <SlPresent size={25} color='white' />
                                <CiCreditCard1 size={25} color='white' />
                                <FaRegComment size={25} color='white' />
                                <FaRegQuestionCircle size={25} color='white' />
                                <PiMedalDuotone size={25} color='white' />
                                <FiUser size={25} color='white' />
                            </div>

                        </div>
                        <div className={style.elementos}>
                            <div className={style.icones}>
                                <GiPokerHand size={25} color='white' />
                                <PiPokerChipFill size={25} color='white' />
                                <TbBallFootball size={25} color='white' />
                                <RiPokerClubsFill size={25} color='white' />
                                <RiPlaneFill size={25} color='white' />
                                <PiBomb size={25} color='white' />
                            </div>

                        </div>
                        <div className={style.elementosFinal}>
                            <div className={style.icones}>
                                <RiPokerSpadesFill size={25} color='white' />
                                <MdOutlineCasino size={25} color='white' />
                                <PiSoccerBallFill size={25} color='white' />

                            </div>

                        </div>
                    </div>
                )
            }
        </>
    )
}
