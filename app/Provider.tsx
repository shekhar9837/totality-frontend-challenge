import { Navbar } from "@/components/navbar/Navbar";


function Provider ( {children}:any){
    return (
        <div>
            <Navbar/>
            {children}
        </div>
    )
}

export default Provider;