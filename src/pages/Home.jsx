import { useState } from "react";
import Header from "../components/Header";
import Sidebar from '../components/Sidebar'
import Inicio from "../components/Home";

function Home() {
    const [open, setOpen] = useState(false);


    return (
        <>
            {/* <Header open={open} setOpen={setOpen} /> */}
            <div>
                {/* <Sidebar open={open} /> */}
                <div>
                   <Inicio/>
                </div>
            </div>
        </>
    );
}

export default Home;
