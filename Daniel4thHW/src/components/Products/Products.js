import React, {Component} from 'react'; 
import './Products.css'
import Item from '/Users/danielaristizabaljaramillo/Documents/cra/src/components/Item/Item.js'


class Products extends Component {
    constructor(props){
        super(props);
            this.state = {
                items: []
            }; 
            }
             TakeItems (){
                fetch("http://localhost:3001/items")
                .then(res => res.json())
                .then(res => {
                    this.setState(() => ({
                        items: res

                    }))
                });
            }
            render(){
                const {items} = this.state; 
                
                return <div className="Items ">
                    {items.map(item => {
                        const {id, desc, name, pic, price} = item;
                        return <Item
                        id={id}
                        desc={desc}
                        name={name}
                        pic={pic}
                        price={price}
                        key={id}
                        />   
                    }
                    )}

              </div>
            
            }
              
}

export default Products 