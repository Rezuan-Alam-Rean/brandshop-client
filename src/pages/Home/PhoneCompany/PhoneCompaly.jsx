import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Phone from "./Phone";
import PhoneGallary from "./PhoneGallary";


const PhoneCompaly = () => {


    const [data, setData] = useState([])

    const { id } = useParams();
    console.log(id);
    const details = useLoaderData();
    console.log(details);
    useEffect(() => {
      const findCart = details?.find((item) => item.id === id);
    
      setData(findCart.apple);
    }, [id, details]);
    console.log(data);
  




    return (
        <div>
           <div className=" mt-10 mb-10"> <PhoneGallary></PhoneGallary></div>

            <div className="grid lg:grid-cols-2 sm:grid-cols-1  ">
            {
                data?.map((d,i)=><Phone key={i} d={d}></Phone>)
            }

            </div>
           
        </div>
    );
};

export default PhoneCompaly;