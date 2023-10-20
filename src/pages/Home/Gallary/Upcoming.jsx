const Upcoming = () => {
  return (
    <div className="mb-10 mt-10 ">
      <h1 className="text-5xl font-extrabold text-center">Upcoming Brands ....</h1>
      <div
        className="grid lg:grid-cols-3 sm:grid-cols-1 gap-10 mt-10 "
        
       
      >
        <div className="card w-96 bg-base-50 shadow-xl ">
        
            <img className="image-full"
              src="https://i.ibb.co/k6Hn6tC/nokia.png"
              alt="Nokia"
            />
          
          
           
        
          
          
        </div>
        <div className="card w-96 bg-base-50 shadow-xl ">
        
            <img className="image-full"
              src="https://i.ibb.co/JFzNy1Q/oppo.png"
              alt="oppo"
            />
          
         
        </div>
        <div className="card w-96 bg-base-50 shadow-xl ">
        
            <img className="image-full"
              src="https://i.ibb.co/SmL2PDZ/realme.png"
              alt="reanme"
            />
          
       
        </div>
      
      
      </div>
    </div>
  );
};

export default Upcoming;
