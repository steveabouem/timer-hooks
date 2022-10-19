import { useState, useEffect } from 'react';

const usePageTimer = () => {
    const [elapsedTime, setElapsedTime ] = useState(45);

    useEffect(() => {
        if (elapsedTime === 0) {
            return;
        }

        setTimeout(() => {
            setElapsedTime(elapsedTime - 1)
        }, 1000);
    }, [elapsedTime]);

    

    return elapsedTime;
};

export default usePageTimer;