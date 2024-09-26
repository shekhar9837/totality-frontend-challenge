import Footer from "@/components/Footer/Footer";
import { Navbar } from "./_components/Navbar";
import Properties from "./_components/properties";


function Provider ( {children}:any){
    return (
        <div>
            <Navbar/>
            {children}
        </div>
    )
}

export default Provider;