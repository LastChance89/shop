import {Routes, Route, BrowserRouter} from 'react-router-dom';
import { first_page, landing_page } from './constants/routes';
import StoreMainPage from './components/StoreMainPage';
import LandingPage from './components/LandingPage';
function AppRoutes(){
    return ( 
    
        <Routes> 
            <Route path={landing_page} element = {<LandingPage/>}/>
            <Route path= {first_page} element = {<StoreMainPage/>}/>
        </Routes>
    )
}

export default AppRoutes;
