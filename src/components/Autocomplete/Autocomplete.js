import React,{ useState } from "react";
import { data } from '../../data'
import { useHistory } from "react-router-dom";
import './Autocomplete.css'

const Autocomplete = () => {
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [activeSuggestionIndex, setActiveSuggetistionsIndex] = useState(0);
  const [showSuggestions, setShowSugesstions] = useState(false);
  const [input, setInput] = useState("");

  const history = useHistory()

  const handleClick = () => {
    history.push('/listdoctor')
  }
  
  const onChange = (e) => {
    let suggestionAll = data
    const userInput = e.target.value;
    const unliked = suggestionAll.filter(suggestion => suggestion.location.toLowerCase().indexOf(userInput.toLowerCase()) > -1 )

    setInput(e.target.value);
    setFilteredSuggestions(unliked);
    setActiveSuggetistionsIndex(0);
    setShowSugesstions(true);
  };

  const onClick = (e) => {
    setFilteredSuggestions([])
    setInput(e.target.innerText)
    setActiveSuggetistionsIndex(0)
    setShowSugesstions(false)
  }

  const SuggestionsListComponent = () => {
    return filteredSuggestions.length ? (
      <ul className="suggestions">
        {filteredSuggestions.map((suggestion, index) => {
          let className;
          // Flag the active suggestion with a class
          if (index === activeSuggestionIndex) {
            className = "suggestion-active";
          }
          return (
            <li className={className} key={suggestion.id} onClick={onClick}>
              {suggestion.location}
            </li>
          );
        })}
      </ul>
    ) : (
      <div className="no-suggestions">
        <em>No suggestions, you're on your own!</em>
      </div>
    );
  };

  return (
    <div className='container'>
      <input 
        type="text" 
        onChange={onChange}
        value={input}
        onClick={onClick}
        placeholder='Search Your Area'
      />
      {showSuggestions && input && <SuggestionsListComponent />}
      <div>
        <button type="button" className="btn btn-primary btn-submit" onClick={handleClick}>Find Doctor</button>
      </div>
    </div>
  );
};


export default Autocomplete;


