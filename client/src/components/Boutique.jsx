import { useEffect } from 'react'
import {
    MemoryRouter,
    Routes,
    Route,
    useLocation,
} from "react-router-dom";
import Accueil from "./Accueil";
import useAppTimer from "./common/hooks/useAppTimer";
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

    return (
        <div>
            {appTimer}
            <MemoryRouter initialEntries={['/']} >
                <Routes>
                    {routes.map(({path, component}) => <Route path={path} element={component} />)}
                </Routes> 
            </MemoryRouter>

        </div>
    )
};

  export default Boutique;