import style from './style.module.css'
import cassinoVivo from '../../dataAposta/cassinoVivo'

import { MdHomeFilled } from 'react-icons/md'
import { FaFireAlt } from 'react-icons/fa'
import { IoTrophySharp } from 'react-icons/io5'
import { GiPresent } from 'react-icons/gi'
import { VscPerson } from 'react-icons/vsc'

export default function CassinoVivo() {
    return (
        <div className={style.containerCassino}>
            <div className={style.gridFiltro}>
                    <div className={style.filtro}>
                        <a href='/Lobby' className={style.elemento}>
                            <MdHomeFilled size={40} color='white' />
                            <h1>Lobby</h1>
                        </a>
                        <a className={style.elementoPage}>
                            <VscPerson size={40} color='white' />
                            <h1>Cassino ao Vivo </h1>
                        </a>
                        <a  href='/JogosAoVivo'  className={style.elemento}>
                            <GiPresent size={40} color='white' />
                            <h1>Jogos ao Vivo </h1>
                        </a>
                        <a  href='/Slots' className={style.elemento}>
                            <FaFireAlt size={40} color='white' />
                            <h1>Slots</h1>
                        </a>
                        <a  href='/Esportes' className={style.elemento}>
                            < IoTrophySharp size={40} color='white' />
                            <h1>Esportes</h1>
                        </a>
                    </div>
                </div>
            <div className={style.caixasCassino}>
            <div className={style.tituloBox}>
                    <GiPresent size={60} color='white' />
                    <h1 className={style.tituloPage}>Cassino ao Vivo</h1>
                </div>
                <div className={style.gridContainer}>
                    {cassinoVivo.slice(0, 15).map(cassino => (
                        <a href={`/DetalhesCassino/${cassino.id}`} className={style.caixaJogoCassino} key={cassino.id}>
                            <img src={cassino.src} alt="" />
                        </a >
                    ))}
                </div>

            </div>
        </div>
    )
}