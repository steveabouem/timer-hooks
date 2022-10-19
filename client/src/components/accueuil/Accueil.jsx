import { NavLink } from 'react-router-dom';

import ('./accueuil.css');

const Accueil = () => {
    return (
        <div className="page-container">
            <div className="landing-hero">
                <div className="landing-slogan">
                    <p>Bienvenue au marché Bonne Bouffe,</p>
                    <p>un VRAI marché qui existe VRAIMENT (pour VRAI)</p>
                    <NavLink className="product-link" to="/produits">Consultez nos produits</NavLink>
                </div>
            </div>
        </div>
    )
};

export default Accueil;