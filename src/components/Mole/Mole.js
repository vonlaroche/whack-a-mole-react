import React, {Component} from "react";
import PropTypes from "prop-types";
import "./Mole.css";

class Mole extends Component {
    state = {
        whacked: false
    }

    handleClick = () => {
        if(!this.state.whacked){
            this.setState({whacked: true})
            this.props.onWhack && this.props.onWhack();
        }
    }

    componentDidUpdate(prevProps){
        if(!prevProps.up && this.props.up){
            this.setState({whacked: false})
        }   
    }

    render(){
        let classNames = "mole";
        if(this.props.up){
            classNames += " up";
         }
        return <div className={classNames} onClick={this.handleClick}></div>
    }
   
}

Mole.propTypes = {
    up: PropTypes.bool,
    // only triggers once when the mole is clicked until the new one appears/ reappears
    onWhack: PropTypes.func 
}

export default Mole;