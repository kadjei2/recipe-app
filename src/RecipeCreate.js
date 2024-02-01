import React, { useState } from "react";

function RecipeCreate({handleSubmit, handleChangeEvent, formData}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
//   const [name, setName] = useState("");
//   const [cuisine, setCuisine] = useState("");
//   const [photo, setPhoto] = useState("");
//   const [rating, setRating] = useState("");
//   const [ingredients, setIngredients] = useState("");
//   const [preparation, setPreparation] = useState("");
  
  
  
  
  
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmFor="name"> Name: </label>
              <input id="name" name="name" type="text" value={formData['name']} onChange={handleChangeEvent} placeholder="Name" />
            </td>
            <td>
              <label htmFor="cuisine"> Cuisine: </label>
              <input id="cuisine" name="cuisine" type="text" value={formData['cuisine']} onChange={handleChangeEvent} placeholder="Cuisine" />
            </td>
            <td>
              <label htmFor="photo"> Photo: </label>
              <input id="photo" name="photo" type="text" value={formData['photo']} onChange={handleChangeEvent} placeholder="URL" />
            </td>
            <td>
              <label htmFor="ingredients"> Ingredients: </label>
              <textarea id="ingredients" name="ingredients" value={formData['ingredients']} onChange={handleChangeEvent} placeholder="Ingredients" />
            </td>
            <td>
              <label htmFor="preparation"> Preparation: </label>
              <textarea id="preparation" name="preparation" value={formData['preparation']} onChange={handleChangeEvent} placeholder="Preparation" />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
