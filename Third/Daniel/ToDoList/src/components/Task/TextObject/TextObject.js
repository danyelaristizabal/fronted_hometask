import React, {Component} from 'react'; 
import "./textobject.css"; 


class TextObject extends Component {
    constructor(props){
        super(props);
        this.state = {
            done : props.intialDone
        };
    }
        Clicked = () => {

            this.setState((prevState) => ({
                done:!prevState.done
            }))
         } 
    render() {

    const {done} = this.state;
    const {text} = this.props;
    

   return <div className="TextObject">

    {
        <div style={{textDecoration: done ? "line-through": "" }}> {text} </div>
    }

     </div>    
        } 
} 
export default TextObject; 