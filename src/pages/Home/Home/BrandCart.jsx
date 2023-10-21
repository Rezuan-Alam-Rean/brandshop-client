import { Link } from "react-router-dom";

const BrandCart = ({ b }) => {
    console.log(b);



    return (


        <Link to={`/Phonec/${b?._id}`} >

            <div className="card card-compact w-96 bg-base-100 shadow-xl  ">



                <figure><img className="w-96" src={b?.brand_image} alt="Shoes" /></figure>
                <div className="card-body text-center ">
                    <h2 className="card-title  justify-center ">{b?.brand_name}</h2>


                </div>
            </div>


        </Link>








    );
};

export default BrandCart;

