import React from "react";

function RecipeList({recipes, handleRecipeDelete}) {
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            recipes.map((recipe, index) => {
              return ( 
                <tr key={index}>
                  <td> { recipe.name }</td>
                  <td> { recipe.cuisine }</td>
                  <td> <img src={ recipe.photo } /></td>
                  <td> { recipe.ingredients }</td>
                  <td> { recipe.preparation }</td>
                  <td> <button id={index} name="delete" onClick={handleRecipeDelete}> Delete </button> </td>
                </tr> 
              )
              }
            )
          }
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
