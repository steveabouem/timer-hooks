import { NavLink } from "react-router-dom";

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
        <div className="logo"></div>
        <div className="navbar cta-wrapper">
            {links.map(({label, path}) => <NavLink to={path} className="">{label}</NavLink> )}
        </div>
    </div>
);

export default TopNav;