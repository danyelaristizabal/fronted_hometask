import React, {Component} from 'react'; 
import "./checkbox.css"; 



class CheckBox extends Component {
    
    render() {
       
     return <div className="CheckBox">
     {<input onClick={this.props.onclick} type="checkbox" />}
    </div>
    }

}
export default CheckBox;
 
