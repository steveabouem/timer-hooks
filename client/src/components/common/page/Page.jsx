import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import usePageTimer from "../hooks/usePageTimer";
import('./page.css');

const Page = ({children, header}) => {
    const timer = usePageTimer();
    const redirect = useNavigate();

    useEffect(() => {
        if (timer === 0) {
            redirect('/');
        }


    }, [timer, redirect]);
    return (
        <div className="page-container">
            {/* {timer} */}
            <h1 className="page-header">{header}</h1>
            {children}
        </div>
    )
};

export default Page;