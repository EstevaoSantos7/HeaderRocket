import style from './style.module.css'
import { FiAlignJustify } from "react-icons/fi";



export default function Header() {
    return (
        <div className={style.headerCima}>
            <div className={style.containerHeader}>
                <nav>
                    <FiAlignJustify size={50} style={{ color: "white" }} />

                </nav>
            </div>
        </div>

    )

}
