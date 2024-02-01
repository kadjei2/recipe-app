import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: ""
  };
  const [recipes, setRecipes] = useState(RecipeData);
  const [formData, setFormData] = useState({...initialFormState});
  const handleChangeEvent = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    let recipeLength = recipes.length;
    setRecipes([...recipes, formData]);
    setFormData({...initialFormState});
  }
  const handleRecipeDelete = (event) => {
    setRecipes((currentResults) =>
    currentResults.filter((ignored, index) => Number(index) !== Number(event.target.id))
  );
  };

  
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} handleRecipeDelete={handleRecipeDelete}/>
      <RecipeCreate handleChangeEvent={handleChangeEvent}  handleSubmit={handleSubmit} formData={formData}/>
    </div>
  );
}

export default App;
