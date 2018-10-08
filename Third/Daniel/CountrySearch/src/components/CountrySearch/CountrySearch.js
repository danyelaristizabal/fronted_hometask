import React, { Component, Fragment } from "react";

class CountrySearch extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          filteredSuggestions: [],
          showSuggestions: false,
          userInput: ""
        };
      }

    onChange = Event => {
        const { suggestions } = this.props;
        const filteredSuggestions = suggestions;
        this.setState({
        filteredSuggestions,
        userInput: Event.currentTarget.value
        });
    };

  onClick = Event => {
      
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      userInput: Event.currentTarget.innerText
    });
  };

  render() {

    const {
      onChange,
      state: {
        filteredSuggestions,
        userInput
      }
    } = this;

        var DisplayedContries; 
        DisplayedContries = (
            <ul class="suggestions">
                <li>
                  {filteredSuggestions}
                 </li>
             </ul>
        ); 
    return (
      <Fragment>
        <input
          type="text"
          onChange={onChange}
          value={userInput}
        />
        {DisplayedContries}
      </Fragment>
    );    
  }
}

export default CountrySearch;