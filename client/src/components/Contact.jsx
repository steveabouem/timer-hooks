import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAppTimer from "./common/hooks/useAppTimer";
import usePageTimer from "./common/hooks/UsePageTimer";

const Contact = () => {
    const timer = usePageTimer();
    const appTimer = useAppTimer();
    const navigate = useNavigate();

    useEffect(() => {
        if (appTimer === 120) {
           window.location.href = '/';
        }
    }, [appTimer, navigate]);
    
    useEffect(() => {
        if (timer === 0) {
           navigate('/');
        }
    }, [timer, navigate]);

    return (
        <>
            {appTimer}
            <div>Contact</div>
            {timer}
        </>
    )
};

export default Contact;