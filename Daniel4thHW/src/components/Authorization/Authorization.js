import React, {Component} from 'react'; 
import './Authorization.css'

class Authorization extends Component {
    constructor(props){
        super(props); 
        this.state = {
            inputText:"", 
            placeholder: ''
         }
         this.handleClick = this.handleClick.bind(this);
    }

    handleChange = (event) => {
        const value = event.target.value; 
        this.setState(prevState => ({
            inputText: value,
        }));
    }
    
    handleClick = () => {
        const value = this.state.inputText;
        value === '' ? alert('text smth') : this.SendLogin(value)
        }
    SendLogin = (value) => {
        fetch("http://localhost:3001/login", {
            method: "POST",
            credentials:'include', 
            headers: new Headers({
                'Content-Type' : 'application/json',
                'Accept' : 'application/json'
            }),
            body: JSON.stringify({
                "login":value
            }),
        })
        .then(res => res.json())
        .then(res => alert(`loged in ${res.status}`))
}





render(){



return  <div className="Navigation-bar">
                      <ul>                 
                            <li><a href="index.html">Online store </a></li>
                                  <li><a href="index.html">Home</a></li>
                                  <li><a href="cart.html">Cart</a></li>
                                  <li class="Right form-control-sm">
 <input id="input_catcher" type="text" onChange={this.handleChange} placeholder="Login"></input>
 </li>
 <li><button  href="#" onClick={this.handleClick}>Log in/Sign in</button></li>
                               
                      </ul>
        </div> 
}


}
export default Authorization 





