import React from "react";
import PrintLine from "./PrintLine";

function Footer()
{
    const n=10; 
    return <div>
                <PrintLine/>
                <h5>This is Footer{{n}}</h5>
                <PrintLine/>
           </div>;
}
export default Footer;