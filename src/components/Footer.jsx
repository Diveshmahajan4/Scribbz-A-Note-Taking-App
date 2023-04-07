import React from "react"

function Footer(){
    const current = new Date().getFullYear();
    return <footer>
        <p>
        Copyright @ {current}
    </p>
    </footer>
    
}

export default Footer;