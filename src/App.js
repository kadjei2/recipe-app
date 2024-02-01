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
    console.log(event.target);
    setRecipes((currentResults) =>
    currentResults.filter((ignored, index) => Number(index) !== Number(event.target.id))
  );
//    index !== event.target.id
  };

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

  
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} handleRecipeDelete={handleRecipeDelete}/>
      <RecipeCreate handleChangeEvent={handleChangeEvent}  handleSubmit={handleSubmit} formData={formData}/>
    </div>
  );
}

export default App;
