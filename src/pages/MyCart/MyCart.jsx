import { useEffect, useState } from "react";
import MyCartTable from "./MyCartTable";
import Swal from "sweetalert2";



const MyCart = () => {
    const [cart,setCart]=useState([])

    useEffect(()=>{
        fetch('https://shop-server-8r7smwjyo-rezuan-alam-reans-projects.vercel.app/myCart')
        .then(res=>res.json())
        .then((data)=>setCart(data))
    },[])
    console.log(cart);

    const handleDelete = (id) => {
     
    
          fetch(`https://shop-server-8r7smwjyo-rezuan-alam-reans-projects.vercel.app/delete/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.deletedCount > 0) {
                Swal.fire({
                  title: "success!",
                  text: "Delete Succesfull",
                  icon: "success",
                  confirmButtonText: "Cool",
                });
                const remaining = cart.filter((t) => t._id !== id);
                setCart(remaining);
              }
            });
        
      };

    return (
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-10 mt-10 mb-10 ">
            {
                cart?.map((c,i)=><MyCartTable key={i} c={c} handleDelete={handleDelete}></MyCartTable>)
            }



            
        </div>
    );
};

export default MyCart;