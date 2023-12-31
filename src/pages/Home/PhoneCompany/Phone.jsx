import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const Phone = ({ d }) => {
    const handleAddToCart = (d) => {
        const data = { data: d };
        fetch(`https://shop-server-8r7smwjyo-rezuan-alam-reans-projects.vercel.app/selectedProduct`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'success',
                        text: 'Success',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })

                }
            });



    }
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={d?.Image} alt="Shoes" /></figure>
                <div className="card-body  items-center">

                    <h2 className="card-title">{d?.Name}</h2>

                    <p>{d?.BandName}</p>

                    <p> price :{d?.Price} $</p>

                    <div className="rating">
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                    </div>

                    <div className="card-actions flex justify-evenly gap-20">
                       
                        <Link to="/addProduct"><button className="btn btn-primary">Update</button></Link>
                        <button onClick={() => handleAddToCart(d)} className="btn btn-primary">Add Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Phone;