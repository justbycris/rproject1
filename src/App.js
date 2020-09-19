import React,{useEffect, useState} from 'react';
import Recipe from './recipe';
import "./App.css";
const App = () => {

  const APP_ID = '0e7fbf4c';
  const APP_KEY = 'f88cd3fcf378b9faa77046ebfa85bcb1';

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
      getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);

  };

  return(
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button className="search-button" type="submit">Search</button>
      </form>
      {recipes.map(recipe => (
        <Recipe />
      ))};
      
    </div>
  );
};



export default App;

//24