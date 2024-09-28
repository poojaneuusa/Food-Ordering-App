import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props);
       // console.log(this.props.name + "Child constructor");
       this.state = {
        userInfo: {
            name: "Dummy",
            location: "Default",
        },
       };
    }

    async componentDidMount() {
        //called after Constructor -> Render then -> ComponentRender.
        //API call
        //console.log(this.props.name + "Child Component did mount");

        const data = await fetch("https://api.github.com/users/akshaymarch7");
        const json = await data.json();

        this.setState({
            userInfo: json,
        });
        //console.log(json);
    }
    render() {
        //const {name, location} = this.props;
        const {name, location, avatar_url} = this.state.userInfo;

        //console.log(this.props.name + "Child Render");

        return (<div className="user-card">
            <img src={avatar_url} />
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact: kulkarni.pooja@northeastern.edu</h4>
        </div>
        );
    }
}

export default UserClass;