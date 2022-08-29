import React from "react";

class Immages extends React.Component {
    
    render(){
       return <img alt={this.props.alt} src={this.props.src}/>
    }
}


export default Immages;