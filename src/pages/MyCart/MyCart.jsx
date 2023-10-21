import { useEffect, useState } from "react";
import MyCartTable from "./MyCartTable";



const MyCart = () => {
    const [cart,setCart]=useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/myCart')
        .then(res=>res.json())
        .then((data)=>setCart(data))
    },[])
    console.log(cart);
    return (
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-10 mt-10 mb-10 ">
            {
                cart?.map((c,i)=><MyCartTable key={i} c={c}></MyCartTable>)
            }



            
        </div>
    );
};

export default MyCart;