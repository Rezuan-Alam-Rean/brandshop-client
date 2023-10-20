

import Swal from 'sweetalert2'



const AddProduct = () => {


const handlePost =(event)=>{
    event.preventDefault();
    // console.log(event);
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const myData={
        email :email,
        password :password
    }
    console.log(myData);
    fetch("http://localhost:5000/post/product", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(myData),
      })
        .then((res) => res.json())
        .then((data) => {
        
            if(data.insertedId){
                Swal.fire({
          title: 'success!',
          text: 'Toys Added',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
          
    
        }});
}
     
    return (
        

<div>
<div className=" min-h-screen bg-base-200">
  <div className="hero-content ">
    
    <div className="card w-full max-w-3xl shadow-2xl bg-base-100">
    <div className="card-body">
    <form onSubmit={handlePost} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6 p-0">
                            <button type='submit' className="btn btn-neutral">Login</button>
                        </div>
                  
                    </form>
      </div>
    </div>
  </div>
</div>
</div>
    );
};

export default AddProduct;