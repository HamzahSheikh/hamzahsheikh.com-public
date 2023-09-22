import React, { useState, useEffect, useRef, memo } from 'react'

// Libraries
import { m } from "framer-motion";
import { useLocation } from "react-router-dom";

// Components
import ReactCustomScrollbar from "./ReactCustomScrollbar";
import Buttons from './Button/Buttons'
import PortfolioSwitchImg from "./Portfolio/PortfolioSwitchImg";
import { fadeIn } from "../Functions/GlobalAnimations";
import useOnClickOutside from "../Functions/UseOnClickOutside";

// Data
import { LandingDemoData } from "../Pages/LandingData";

const SideButtons = memo((props) => {
    const [show, setShow] = useState(false);
    const [visible, setVisible] = useState(false)
    const ref = useRef(null);
    useOnClickOutside(ref, () => setShow(false));
    const location = useLocation()

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const scrolled = document.documentElement.scrollTop;
            if (scrolled > 100) {
                setVisible(true)
            }
        });
    }, [])

    useEffect(() => {
        const close = (e) => {
            if (e.keyCode === 27) {
                setShow(false)
            }
        }

        if (show === true) {
            document.querySelector('body').classList.add("overflow-hidden");
        } else {
            document.querySelector('body').classList.remove("overflow-hidden");
        }

        window.addEventListener('keydown', close)
        return () => window.removeEventListener('keydown', close)
    }, [show])

    useEffect(() => {
        setVisible(false)
        if (props.animation === false) {
            setVisible(true)
        }
    },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [location])

    return (
        <></>
    )
})

export default memo(SideButtons)