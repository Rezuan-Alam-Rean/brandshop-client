const Recomended = () => {
  return (
    <div className="mt-10 mb-10  ">
      <h1 className="text-center  text-5xl font-extrabold mt-10 mb-10">
        Recommended For You
      </h1>
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 ">
        <div className="card card-compact w-96 bg-base-100 shadow-xl mt-5 "
        
        
        >
          <figure>
            <img className="w-96"
              src="https://i.ibb.co/WcpJzss/apple.jpg"
              alt="Apple"
            />
          </figure>
          <div className="card-body flex">
            <div className="text-center">
              <h2 className="font-extrabold text-center text-2xl">best</h2>
              <p>Apple</p>
            </div>

            <button className="btn btn-primary ">details</button>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl mt-5 "
        
        
        >
          <figure>
            <img className=" w-96"
              src="https://i.ibb.co/vP2fYvg/googlelpgo.png"
              alt="Google"
            />
          </figure>
          <div className="card-body flex">
            <div className="text-center">
              <h2 className="font-extrabold text-center text-2xl">batter</h2>
              <p>google</p>
            </div>

            <button className="btn btn-primary ">details</button>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl mt-5 "
        
        
        >
          <figure>
            <img  className="w-96"
              src="https://i.ibb.co/HK6hgtX/samsung.png"
              alt="samsang"
            />
          </figure>
          <div className="card-body flex">
            <div className="text-center">
              <h2 className="font-extrabold text-center text-2xl">good</h2>
              <p>samsang</p>
            </div>

            <button className="btn btn-primary ">details</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Recomended;
