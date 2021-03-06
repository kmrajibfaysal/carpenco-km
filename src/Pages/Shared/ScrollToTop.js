/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/destructuring-assignment */
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop(props) {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return <>{props.children}</>;
}

export default ScrollToTop;
