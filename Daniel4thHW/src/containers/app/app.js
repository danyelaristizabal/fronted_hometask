import React, {Component} from 'react';
import "./app.css"; 
import Authorization from '/Users/danielaristizabaljaramillo/Documents/cra/src/components/Authorization/Authorization.js'
import Products from '/Users/danielaristizabaljaramillo/Documents/cra/src/components/Products/Products.js'

const MyFooterBar = () => <div  id="blackline">
<div id="footertext">
        <a href="index.html">Contact us</a>
</div>
</div>

class App extends Component{
constructor(props){
    super(props);
        this.state = {
        }; 
        
        }
        render( ) {
                return <fragment>
                <Authorization/> 
                <Products/> 
                <MyFooterBar/> 
                </fragment>
                  }
}

export default App; 