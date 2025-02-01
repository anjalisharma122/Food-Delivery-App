import React from "react";
import ReactDOM from "react-dom/client";
 
//React.createElement =>Object => HTMLElement(render)

// const heading =React.createElement(
//     "h1",{ id:"heading"},
//     "React"
// );
// console.log(heading);
// //JSX


//React Element



const elem =<span> React Element</span>

const title =() =>(
    <h1 id="heading" tabIndex="5"> 
    {elem}
    Hello React
    </h1>
);

const HeadingComponent1=()=>(
    <div id="container">
        {title}
        <h1 className="heading" >React Functional Component</h1>
    </div>
);


const root =ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent1 />);
