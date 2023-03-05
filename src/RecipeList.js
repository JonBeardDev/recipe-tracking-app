import React from "react";
import RecipeRow from "./RecipeRow";

function RecipeList({ recipes, deleteRecipe }) {
  // Return table with header row and a row for each existing recipe, via RecipeRow.js
  return (
    <div className="recipe-list">
      <table className="zebra">
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
          {recipes.map((recipe, index) => (
            <RecipeRow
              deleteRecipe={() => deleteRecipe(index)}
              key={index}
              recipe={recipe}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
