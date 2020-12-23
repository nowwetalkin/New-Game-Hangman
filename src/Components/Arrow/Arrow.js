import React, { useState } from "react"
import "./Arrow.css"
import { Redirect } from "react-router-dom"
function Arrow(props) {
    const [redirect, setRedirect] = useState(null)
    function handleClick() {
        setRedirect(<Redirect to={props.redirect}></Redirect>)
    }
    return <>

        {redirect}

        <div id="container">
            <button class="learn-more" onClick={()=>handleClick()}>
                <span class="circle" aria-hidden="true">
                    <span class="icon arrow"></span>
                </span>
                <span class="button-text">{props.stage}</span>
            </button>
        </div>

    </>
}
export default Arrow;