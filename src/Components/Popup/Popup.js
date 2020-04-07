import React, { useRef, useEffect } from "react"
import './Popup.scss'

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideClickListener(ref, close) {
    useEffect(() => {
        /**
         * Close popup if clicked on outside of element
         */
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                close()
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref])
}

/**
 * Component Popup
 */
const Popup = (props) => {
    console.log('POPUP RENDERING')

    const wrapperRef = useRef(null);
    useOutsideClickListener(wrapperRef, props.close)

    return (
        <div className="popup">
            <div className="popup_inner" ref={wrapperRef}>
                {props.children}
            </div>
        </div>
    )
}

export default Popup
