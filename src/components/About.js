import User from "./User";
import UserClass from "./UserClass";
import {Component} from "react";

class About extends Component {
    constructor(props){
        super(props);
        console.log("Parent constructor");
    }

    componentDidMount() {
        //called after Constructor -> Render then -> ComponentRender.
        //API call
        console.log("Parent did mount");
    }

    render(){
        console.log("Parent Render"); 
        return(
            
            <div>
                <h1>About Us</h1>
                <h2>
                    <UserClass name={"First Child"} location={"Boston (class)"}/>
                    <UserClass name={"Second Child"} location={"NewYork"}/>
                </h2>
                
            </div>
             
        );
    }
    
}
/*
Parent constructor
Parent Render
First ChildChild constructor
First ChildChild Render
Second ChildChild constructor
Second ChildChild Render
First ChildChild Component did mount
Second ChildChild Component did mount
Parent did mount

*/
/*
const About = () => {
    return(
        <div>
            <h1>About Us</h1>
            <h2>
                <UserClass name={"Pooja (class)"} location={"Boston (class)"}/>
            </h2>
            
        </div>
    )
}*/
export default About;