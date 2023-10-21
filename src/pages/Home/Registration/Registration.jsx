import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import useTitle from "../../../hooks/useTitle";
import toast from "react-hot-toast";

const Registration = () => {
  useTitle('Registration')
    const {createUser,updateUserData} =useContext(AuthContext)
        const [error, setError] = useState("")
        const [success, setSuccess] = useState("")
        const location =useLocation()
        const navigate = useNavigate()
        const from = location.state?.from?.pathname || "/";
        const handleRegister =(event)=>{
            event.preventDefault()
            setError('')
            setSuccess('')
            const form = event.target;
            const name =form.name.value;
            const photo =form.photo.value;
            const email =form.email.value;
             const password = form.password.value;



             if (
              password.length < 6 ||
              !/[A-Z]/.test(password) ||
              !/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(password)
            ) {
              toast.error('Password must be at least 6 characters, contain a capital letter, and have a special character');
            }
          
            else{
                  
          
              createUser(email,password)
              .then(result=>{
                  // eslint-disable-next-line no-unused-vars
                  const loggedUser = result.user;
                  // console.log(loggedUser);
                 
                  updateUserData(result.user,name,photo)
                  navigate(from, { replace: true })
                  form.reset()
                  Swal.fire({
                      title: 'success!',
                      text: 'Registration Succesfull',
                      icon: 'success',
                      confirmButtonText: 'OK'
                    })
              })
              .catch(error=>{
                  setError(error.message)
              })
              
                
          
            }
          
            
          
            
        }


    return (
        <div className="mt-10 mb-10">
        <div className="hero-content">
         
          <div className="card w-full max-w-sm shadow-2xl bg-base-100">
         
         <div className="card-body">
            <h1 className="text-3xl font-bold text-center mb-5">Register</h1>
            <form onSubmit={handleRegister}>
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
              </div>
            <div className="form-control">
                <label className="label">
                  <span className="label-text">PhotoURL</span>
                </label>
                <input type="url" placeholder="Photo URL" name="photo" className="input input-bordered" required />
              </div>
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" placeholder="email" name="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          
              </div>
           
              <div className="form-control mt-6">
                
                <input className="btn btn-primary" type="submit" value="Register" />
              </div>
              <br />
      <p className="text-green-600">
        {success}
        </p>
      <br />
      <p className="text-red-700">
        {error}
        </p>
            </form>
            <p > <span className="font-semibold"> Alredy have an Account?</span>  <Link className="text-orange-400 font-bold" to="/login">Login</Link></p>
      
            </div>
      
        
          </div>
        </div>
      </div>
    );
};

export default Registration;