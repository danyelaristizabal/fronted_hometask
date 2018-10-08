import CountrySearch from "../../components/CountrySearch/CountrySearch";
import  "./Sugestion.css"; 
import React from 'react';

function Sugestion() {
  return (
    <div>
      
      <CountrySearch
        suggestions={[
          "Colombia",
          "Ecuador",
          "Brazil",
          "Russia",
          "USA",
          "Canada",
          "Australia",
          "China",
          "India",
          "Germany"
        ]}
      />
    </div>
  );
}

export default Sugestion;     