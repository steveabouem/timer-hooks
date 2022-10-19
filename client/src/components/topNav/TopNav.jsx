import { useEffect } from "react";
import { useState } from "react";
import { NavLink, useHref } from "react-router-dom";
import useAppTimer from "../common/hooks/useAppTimer";
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

const TopNav = () => {
    const [width, setWidth] = useState(100);
    const appTimer = useAppTimer();
    const currentPage = useHref();

    useEffect(() => {
        if (appTimer === 120) {
            window.location.href = '/';
        }
        
        setWidth((prev) => {
            return (100 - (appTimer * 100 / 120));
        });
    }, [appTimer]);

    return (
        <div className="top-nav-wrapper">
            <div className="app-timer" style={{width:`${width}%` }} />
            <div className="top-navigation">
                <div className="navbar cta-wrapper">
                    <NavLink className="logo-wrapper" to="/">
                        <div className="logo" />
                    </NavLink>
                    {links.map(({label, path}) => <NavLink key={path} to={path} className="nav-link">{label}</NavLink> )}
                </div>
            </div>
        </div>
    );
};

export default TopNav;