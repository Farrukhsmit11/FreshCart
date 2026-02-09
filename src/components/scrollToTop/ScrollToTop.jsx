import React from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {

    const { pathname } = useLocation();

    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    [pathname]

    return (
        <>
        </>
    )
}

export default ScrollToTop