import { Outlet } from 'react-router-dom';
import SideBar from '../Sidebar';
import './index.scss';

const Layout = () => {
    return (
        <div className='App'>
            <SideBar />
            <Outlet />
        </div>
    )
}
export default Layout;