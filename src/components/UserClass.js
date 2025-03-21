import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props);

        this.state ={
            userInfo:{
                name:"dummy",
                location :"default",
                
            }
        };
        //console.log(this.props.name + "Child Constructor");
    }

    async componentDidMount(){
        const data =await fetch("https://api.github.com/users/anjalisharma122")
        const json =await data.json();
        
        this.setState ({
            userInfo:json,
        })
        console.log(json);

    }
    render(){
        const {name , location ,avatar_url}=this.state.userInfo;
        

        return(
            <div className="user-card">
            
            <h2>Name :{name}</h2>
            <h3>Location : {location}</h3>
            <h4>Contact : @anjalisharma18</h4>
        </div>
        )
    }
}

export default UserClass;