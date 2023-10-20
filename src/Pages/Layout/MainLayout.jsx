import { Outlet} from 'react-router-dom';
import Navbar from '../Navbar/Navbar';



const MainLayout = () => {
    return (
        <div>
         <Navbar></Navbar>
            <Outlet></Outlet>
          <h2>footer</h2>
        </div>
    );
};

export default MainLayout;