import User from "./User";
import UserClass from "./UserClass";
import {Component} from "react";
import UserContext from "../utils/UserContext";

//Class based components dont use hooks
class About extends Component {
    constructor(props){
        super(props);
       // console.log("Parent constructor");
    }

    componentDidMount() {
        //called after Constructor -> Render then -> ComponentRender.
        //API call
       // console.log("Parent did mount");
    }

    render(){
        //console.log("Parent Render"); 
        return(
            
            <div>
                <h1>About Us</h1>
                <div>
                    Logged In user:
                    <UserContext.Consumer>
                        {({loggedInUser})=> <h1 className="font-semibold">{loggedInUser}</h1>}
                    </UserContext.Consumer>
                </div>
                <h2>
                    <UserClass name={"First Child"} location={"Boston (class)"}/>
                    
                </h2>
                
            </div>
             
        );
    }
    
}
/*
Parent constructor
Parent Render

-First ChildChild constructor
-First ChildChild Render
-Second ChildChild constructor
-Second ChildChild Render

<DOM UPDATED - IN SINGLE BATCH>
-First ChildChild Component did mount
-Second ChildChild Component did mount

Parent Component did mount

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