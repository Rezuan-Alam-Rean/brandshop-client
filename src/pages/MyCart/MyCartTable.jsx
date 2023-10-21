

import { Link } from "react-router-dom";



const MyCartTable = ({ c,handleDelete }) => {
    console.log(c?._id);
  
    return (
        <div>
            <div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src= {c?.data.Image} alt="Shoes" /></figure>
                    <div className="card-body items-center">


                       

                               <h2 className="card-title">{c?.data.Name}</h2>
         
                                  <p>{c?.data.BandName}</p>

                                     <p>Price :{c?.data.Price} $</p>
                      

                        <div className="rating">
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                        </div>

                        <div className="card-actions flex justify-evenly gap-20">
                            <button onClick={()=>handleDelete(c?._id)} className="btn btn-primary">Delete </button>

                            <Link to="/addProduct" >  <button  className="btn btn-primary">update</button>    </Link>
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyCartTable;


