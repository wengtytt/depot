import React, { useEffect } from 'react'
import '../../../node_modules/firebaseui/dist/firebaseui.css'
import './Login.scss'
import { initFiarebaseUI } from '../../Firebase/firebaseui'
import Popup from '../Popup'

const Login = (props) => {
    useEffect(() => {
        initFiarebaseUI()
    })

    return (
        <Popup close={props.close}>
            <div id="firebaseui-auth-container"></div>
        </Popup>
    )
}


export default Login