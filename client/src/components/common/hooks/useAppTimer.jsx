import { useState, useEffect, useMemo } from 'react';

const useAppTimer = () => {
    const [inactiveTime, setInactiveTime] = useState(0);
    const [eventDetected, setEventDetected] = useState(false);

    useEffect(() => {
        const captureEvent = () =>  setEventDetected(true);

        document.addEventListener('click', () => {
           captureEvent();
        });
        
        document.addEventListener('keyup', () => {
            captureEvent();
        });
        
        return () => {
            document.removeEventListener('click', () => {
                captureEvent();
            });
            
            document.removeEventListener('keyup', () => {
                captureEvent();
            });
        }
    }, []);
    
    useEffect(() => {
        if (inactiveTime === 120) {
            return;
        }

        setTimeout(() => {
            if (!eventDetected) {
                setInactiveTime((prev) => prev + 1)
            }
           

        }, 1000);
           
        return () => {
            if (eventDetected) {
                setInactiveTime(0);
            } 
            
            setEventDetected(false);
        }
    }, [inactiveTime, eventDetected]);

    return inactiveTime;
};

export default useAppTimer;