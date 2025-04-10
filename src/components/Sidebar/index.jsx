import style from './style.module.css'
import { SlPresent } from "react-icons/sl";
import { CiCreditCard1 } from "react-icons/ci";

const Navbar = () => {
    return (
        <div>
            <div className={style.sidebarOverlay}>
                <ul>
                    <li>
                        <SlPresent size={20} color='white' />
                        <h1>dsf</h1>
                    </li>

                    <li>
                        <h2>sfsf</h2>

                    </li>
                </ul>

            </div>
            <div className={style.sidenav}>
                <ul>
                    <li>
                        <SlPresent size={20} color='white' />
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <CiCreditCard1 size={20} color='white' />
                        <a href="/">Cassino</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href=""></a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Navbar