import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const Update = () => {
    const [data, setData] = useState([])
    const [dat, setDat] = useState([])

    const { id } = useParams();
   console.log(id);
    const details = useLoaderData();
   console.log(data);
useEffect(()=>{
    {
        details?.map(d=>
            setData(d?.apple))
       }
},[details])
    useEffect(() => {
      const findCart = data.find((item) =>{console.log(item); item.id == id});
    
      setDat(findCart);
    }, [data,id]);
    console.log(dat);
    return (
        <div>
            <h1>updATE</h1>
        </div>
    );
};

export default Update;