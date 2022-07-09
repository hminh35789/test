import React from "react";

export interface AboutPage {}
 function AboutPage ({children }){
    return <div>
        <h1>{children}</h1>
    </div>
}
export default AboutPage;