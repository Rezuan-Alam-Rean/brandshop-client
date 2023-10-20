import { useEffect, useState } from "react";
import BrandCart from "./BrandCart";


const Brands = () => {


    const [brands, setBrands] = useState([])

    useEffect(() => {

        fetch(`/public/Brands.json`)
            .then(res => res.json())
            .then(data => setBrands(data))



    }, [])
    console.log(brands);




    return (


        <div>
                         <h1 className="text-5xl font-extrabold text-center mt-10 mb-10">Brands</h1>
 
            <div className="grid lg:grid-cols-3 sm:grid-cols-1">


                {
                    brands?.map((b, i) =>
                        <BrandCart key={i} b={b}></BrandCart>
                    )
                }


            </div>

        </div>

    );
};

export default Brands;