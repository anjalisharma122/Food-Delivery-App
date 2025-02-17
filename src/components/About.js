import User from "./User" ;
import UserClass from "./UserClass";
import {Component } from "react";

class About extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
    }


    render() {
        return(
            <div>
                <h1>About Class Component</h1>
                <h2>This is Namaste React Web Series</h2>
                <UserClass name={"First"} location ={"Agra"} />
            </div>
    )
}
}





export default About;