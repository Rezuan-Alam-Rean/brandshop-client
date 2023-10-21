import Swal from "sweetalert2";


const MyCartTable = ({ c }) => {
    console.log(c);
    const handleAddtoCart = (d) => {
        const data = { data: d };
        fetch(`http://localhost:5000/selectedProduct`, {
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
            <div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src= {c?.data.Image} alt="Shoes" /></figure>
                    <div className="card-body">


                       

                               <h2 className="card-title">{c?.data.Name}</h2>
         
                                  <p>{c?.data.BandName}</p>

                                     <p>{c?.data.Price}</p>
                      

                        <div className="rating">
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                        </div>

                        <div className="card-actions flex justify-evenly">
                            <button className="btn btn-primary">Delete </button>
                            <button  className="btn btn-primary">update</button>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyCartTable;


// onClick={() => handleAddtoCart(c)}