import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            count: 0,
          
        };
        console.log(this.props.name + "Child constructor");
    }

    componentDidMount() {
        //called after Constructor -> Render then -> ComponentRender.
        //API call
        console.log(this.props.name + "Child Component did mount");
    }
    render() {
        const {name, location} = this.props;
        const {count} = this.state;

        console.log(this.props.name + "Child Render");

        return (<div className="user-card">
            <h1>Count: {count}</h1>
            <button onClick={ () => {
                //Never update state variables directly!!
                this.setState({
                    count: this.state.count + 1,
                });
            }}> Count Increase</button>
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact: kulkarni.pooja@northeastern.edu</h4>
        </div>
        );
    }
}

export default UserClass;