import { Outlet} from 'react-router-dom';
import Navbar from '../../pages/Home/shared/Navbar/Navbar';
import Footer from '../../pages/Home/shared/Footer/Footer';



const MainLayout = () => {
    return (
        <div>
         <Navbar></Navbar>
            <Outlet></Outlet>
          <Footer></Footer>
        </div>
    );
};

export default MainLayout;