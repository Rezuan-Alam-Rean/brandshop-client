import { useContext } from "react";
import { useForm } from "react-hook-form";
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'
import { AuthContext } from "../../Provider/AuthProvider";
import useTitle from "../../hooks/useTitle";

const AddProduct = () => {
  useTitle('Addproduct')
    // eslint-disable-next-line no-unused-vars
    const {user}=useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = data => {
     
     
        fetch("http://localhost:5000/post/product", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          })
            .then((res) => res.json())
            .then((data) => {
            
                if(data.insertedId){
                    Swal.fire({
              title: 'success!',
              text: 'product Added',
              icon: 'success',
              confirmButtonText: 'Cool'
            })
              
        
            }});
          console.log(data);
          
    }

     
    return (
        

<div>
<div className=" min-h-screen bg-base-200">
  <div className="hero-content ">
    
    <div className="card w-full max-w-3xl shadow-2xl bg-base-100">
    <div className="card-body">
    <form onSubmit={handleSubmit(onSubmit)} >
    {errors.exampleRequired && <span>This field is required</span>}
        <h1 className="text-center font-extrabold mt-5 mb-5 text-3xl">Add A product</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="url" placeholder="Photo URL"  {...register("photoUrl", { required: true })} className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">product Name</span>
          </label>
          <input type="text" placeholder="product Name"  {...register("productName", { required: true })} className="input input-bordered" />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Seller Name</span>
          </label>
          <input type="text" placeholder="Seller Name" defaultValue={user?.displayName} readOnly {...register("sellerName", { required: true })} className="input input-bordered" />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Seller Email</span>
          </label>
          <input type="text" placeholder="Seller Email" defaultValue={user?.email} readOnly  {...register("sellerEmail", { required: true })} className="input input-bordered" />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Sub Catagory</span>
          </label>
          <select className="input input-bordered" {...register("category")}>
            <option value="apple">apple</option>
            <option value="google">google</option>
            <option value="samsung">samsung</option>
          </select>
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="number" placeholder="Price"  {...register("price", { required: true })} className="input input-bordered" />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Rating</span>
          </label>
          <input type="text" placeholder="Rating"  {...register("rating", { required: true })} className="input input-bordered" />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Quantity</span>
          </label>
          <input type="text" placeholder="Quantity"  {...register("quantity", { required: true })} className="input input-bordered" />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
         <textarea {...register("description", { required: true })}  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none  "></textarea>
          
        </div>
        <div className="form-control mt-6">
          <button  className="btn btn-primary">Add product</button>
        </div>
    </form>
      </div>
    </div>
  </div>
</div>
</div>
    );
};

export default AddProduct ;