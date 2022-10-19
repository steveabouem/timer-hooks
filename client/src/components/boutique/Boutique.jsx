import { useEffect } from 'react'
import {
    MemoryRouter,
    Routes,
    Route,
} from "react-router-dom";
import Accueil from "../accueuil/Accueil";
import useAppTimer from "../common/hooks/useAppTimer";
import Footer from "../common/footer/Footer";
import TopNav from '../topNav/TopNav';
import Contact from "../contact/Contact";
import Equipe from "../Equipe";
import Produits from "../produits/Produits";
import('./boutique.css');

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
];

const Boutique = () => {
    const appTimer = useAppTimer();

    useEffect(() => {
        if (appTimer === 120) {
            window.location.href = '/';
        }
    }, [appTimer]);

    return (
        <MemoryRouter initialEntries={['/']} >
            <div className="app-container">
                <TopNav />
                <div className="main-container">
                    <Routes>
                        {routes.map(({path, component}) => <Route key={path} path={path} element={component} />)}
                    </Routes> 
                </div>
                <Footer />
            </div>
        </MemoryRouter>
    )
};

  export default Boutique;