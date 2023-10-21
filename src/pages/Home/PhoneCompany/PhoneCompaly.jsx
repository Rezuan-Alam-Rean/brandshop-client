import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import Phone from "./Phone";
import PhoneGallary from "./PhoneGallary";


const PhoneCompaly = () => {


    const [data, setData] = useState([])

    const { id } = useParams();
    console.log(id);

  
    useEffect(() => {
    fetch(`https://shop-server-8r7smwjyo-rezuan-alam-reans-projects.vercel.app/product/${id}`)
    .then(res=>res.json())
    .then((data)=>setData(data))
    }, [id]);
    console.log(data);
  




    return (
        <div className=" ">
           <div className=" mt-10 mb-10"> <PhoneGallary></PhoneGallary></div>

            <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-5">
            {
                data?.apple?.map((d,i)=><Phone key={i} d={d}></Phone>)
            }

            </div>
           
        </div>
    );
};

export default PhoneCompaly;