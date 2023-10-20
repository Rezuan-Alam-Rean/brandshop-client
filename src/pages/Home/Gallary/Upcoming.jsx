const Upcoming = () => {
  return (
    <div className="mb-10 mt-10 ">
      <h1 className="text-5xl font-extrabold text-center">Upcoming Brands ....</h1>

      <div className="grid lg:grid-cols-3 sm:grid-cols-1 opacity-20 mt-10">
        <div className="card card-compact w-96 bg-base-100 shadow-xl mt-5  "
        
        
        >
          <figure>
          <img className="w-80  "
              src="https://i.ibb.co/k6Hn6tC/nokia.png"
              alt="Nokia"
            />
          </figure>
          <div className="card-body flex">
            

            <button className="btn btn-primary ">details</button>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl mt-5 "
        
        
        >
          <figure>
          <img className="w-80"
              src="https://i.ibb.co/JFzNy1Q/oppo.png"
              alt="oppo"
            />
          </figure>
          <div className="card-body flex">
           

            <button className="btn btn-primary ">details</button>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl mt-5 "
        
        
        >
          <figure>
          <img className="w-80"
              src="https://i.ibb.co/SmL2PDZ/realme.png"
              alt="reanme"
            />
          </figure>
          <div className="card-body flex">
            

            <button className="btn btn-primary ">details</button>
          </div>
        </div>

      </div>


    
    </div>
  );
};

export default Upcoming;
