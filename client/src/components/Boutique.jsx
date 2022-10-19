import { useEffect } from 'react'
import {
    MemoryRouter,
    Routes,
    Route,
} from "react-router-dom";
import Accueil from "./Accueil";
import useAppTimer from "./common/hooks/useAppTimer";
import Footer from "./common/Footer";
import TopNav from './common/TopNav';
import Contact from "./Contact";
import Equipe from "./Equipe";
import Produits from "./Produits";

const routes = [
    {
        path: '/',
        component: <Accueil />
    },
    {
        path: '/produits',
        component: <Produits />
    },
    {
        path: '/equipe',
        component: <Equipe />
    },
    {
        path: '/contact',
        component: <Contact />
    },
]
const Boutique = () => {
    const appTimer = useAppTimer();

    useEffect(() => {
        if (appTimer === 120) {
            window.location.href = '/';
        }
    }, [appTimer]);

    return (
        <MemoryRouter initialEntries={['/']} >
            <TopNav />
            {appTimer}
            <Routes>
                {routes.map(({path, component}) => <Route path={path} element={component} />)}
            </Routes> 
            <Footer />
        </MemoryRouter>
    )
};

  export default Boutique;