import Footer from "@/components/Footer/Footer";
import { Navbar } from "./_components/Navbar";
import CartProvider from "@/context/CartContext";


function Provider ( {children}:any){
    return (
        <div>
                      <CartProvider>


            <Navbar/>
            {children}

            <Footer/>
                      </CartProvider>
        </div>
    )
}

export default Provider;