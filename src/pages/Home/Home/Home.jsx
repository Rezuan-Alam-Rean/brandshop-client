import Banner from "../Banner/Banner";
import Recomended from "../Gallary/Recomended";
import Upcoming from "../Gallary/Upcoming";
import Brands from "./Brands";


const Home = () => {
    return (
        <div>
            <Banner></Banner>

               <Brands></Brands> 

            <Recomended></Recomended>

            <Upcoming></Upcoming>

        </div>
    );
};

export default Home;