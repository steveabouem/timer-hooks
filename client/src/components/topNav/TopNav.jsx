import { NavLink } from "react-router-dom";
import('./topNav.css');

const links = [
    {
        label: 'Produits',
        path: '/produits',
    },
    {
        label: 'Équipe',
        path: '/equipe',
    },
    {
        label: 'Contact',
        path: '/contact',
    },
    
];

const TopNav = () => (
    <div className="top-navigation">
        <div className="navbar cta-wrapper">
            <NavLink to="/">
                <div className="logo" />
            </NavLink>
            {links.map(({label, path}) => <NavLink key={path} to={path} className="nav-link">{label}</NavLink> )}
        </div>
    </div>
);

export default TopNav;