import React, { useRef, useState } from 'react'

const Stoper = () => {

    const [index, setindex] = useState(0);
    const intervalRef = useRef(null);

    const time = () => {
        setindex(prevIndex => prevIndex + 1);
    }

    const start = () => {
        if (!intervalRef.current) {
            intervalRef.current = setInterval(time, 10);
        }

    };
    const stop = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = 0;
        }
        setindex(0);

    }

    const pause = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = 0;
        }
    }

    return (
        <div>
            <div className="container d-flex justify-content-center align-items-center " style={{ width: "200px", height: "150px" }}>
                <h2 className=''>{index}</h2>
            </div>
            <div className="buttons">
                <button className="btn btn-outline-dark m-2 ps-4 pe-4 text-bg-success" onClick={start}>Start</button>
                <button className="btn btn-outline-dark m-2 ps-4 pe-4 text-bg-danger" onClick={stop}>Stop</button>
                <button className="btn btn-outline-dark m-2 ps-4 pe-4 text-bg-warning" onClick={pause}>Pause</button>
            </div>
        </div>
    )
}

export default Stoper