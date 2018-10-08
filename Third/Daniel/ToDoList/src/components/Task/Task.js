import React, {Component} from 'react'; 
import TextObject from './TextObject/TextObject.js';
import CheckBox from '/Users/danielaristizabaljaramillo/Documents/cra/src/components/Task/CheckBox/CheckBox.js';
import "./Task.css"; 


class Task extends Component {   
    constructor(props) {
        super(props);
        this.child = React.createRef();
      }   
render() {

    var {text} = this.props;

return <div className="Task" > 
<CheckBox  onclick={this.DownClick} text={text}/>
<TextObject ref={this.child} text={text}/>
</div>  

}
DownClick = ()=> {
   
    this.child.current.Clicked();
   }

}   
export default Task; 

