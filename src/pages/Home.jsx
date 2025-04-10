import { useState } from "react";
import Header from "../components/Header";
import Sidebar from '../components/Sidebar'

function Home() {
    const [open, setOpen] = useState(false);


    return (
        <>
            <Header open={open} setOpen={setOpen} />
            <div>
                <Sidebar open={open} />
                <div>
                    {/* resto do conteudo da tela */}
                </div>
            </div>
        </>
    );
}

export default Home;
