import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import usePageTimer from "./hooks/usePageTimer";

const Page = ({children}) => {
    const timer = usePageTimer();
    const redirect = useNavigate();

    useEffect(() => {
        if (timer === 0) {
            redirect('/');
        }


    }, [timer, redirect]);
    return (
        <>
            {timer}
            {children}
        </>
    )
};

export default Page;