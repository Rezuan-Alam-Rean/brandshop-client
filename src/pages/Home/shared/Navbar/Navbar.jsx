import logo from "../../../../assets/logo.jpg"
import { Link } from "react-router-dom";
import './Navbar.css'
import { useContext } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";
import Swal from "sweetalert2";
const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navItems = (
    <>
      <li>
        <Link className=" font-bold" to="/">Home</Link>
      </li>
      
      {user && <>  <li>
        {" "}
        <Link to="/MyCart" className=" font-bold">My Cart</Link>
      </li>
       
      <li><Link to="/addProduct" className=" font-bold">Add Product</Link></li>
       
        </>}
      
    </>
  );
  const handleLogOut = () => {
    logout()
      .then(() => {
        Swal.fire({
          title: 'success!',
          text: 'Logout Succesfull',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="navbar bg-cyan-950 h-28">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >

            {navItems}
          </ul>
        </div>
        <img src={logo} style={{ width: "80px" }} />


        {/* <Link className=" normal-case text-2xl font-bold">Speedy-Racer-Toys</Link> */}
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navItems}
        </ul>
      </div>

      <div className="navbar-end">
        <label className=" mr-5">
          {user && <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
            <img style={{ width: "50px" }} className="w-50 rounded-full circle" src={user?.photoURL} />
          </div>}
        </label>
        {user ? <button onClick={handleLogOut} className="btn">LogOut</button>
          : <Link to="/login" className="btn">Login</Link>}
      </div>
    </div>
  );
};

export default Navbar;



























// import { Link } from "react-router-dom";



// const Navbar = () => {

//   const navItems = (
//     <>
//       <li>
//         <Link className=" font-bold" to="/">Home</Link>
//       </li>
     

//         <li><Link to="/addProduct" className=" font-bold">Add Product</Link></li>
//     </>
//   );

//   return (
//     <div className="navbar bg-base-200 h-28">
//       <div className="navbar-start">
//         <div className="dropdown">
//           <label tabIndex={0} className="btn btn-ghost lg:hidden">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h8m-8 6h16"
//               />
//             </svg>
//           </label>

//               <img src="" alt="" />

//           <ul
//             tabIndex={0}
//             className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
//           >
            
//            {navItems}
//           </ul>
//         </div>
     
            
       
//         {/* <Link className=" normal-case text-2xl font-bold">Speedy-Racer-Toys</Link> */}
//       </div>
//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal px-1">
//         {navItems}
//         </ul>
//       </div>
    
    
//     </div>
//   );
// };

// export default Navbar;
