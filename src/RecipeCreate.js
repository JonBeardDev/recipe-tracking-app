import React, { useState } from "react";

function RecipeCreate({ recipes, addRecipe }) {
  // Set fields to initially be blank, aside from placeholder text
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  // Form data variable, initially blank, updates as data is entered into fields
  const [recipeFormData, setRecipeFormData] = useState({ ...initialFormState });

  // Update each key/value pair in form Data variable as user interacts with fields
  const handleChange = ({ target }) => {
    setRecipeFormData({
      ...recipeFormData,
      [target.name]: [target.value],
    });
  };

  // Add entered information as new recipe to recipe bank, reset fields to blank
  const handleSubmit = (event) => {
    event.preventDefault();
    addRecipe(recipeFormData);
    setRecipeFormData({ ...initialFormState });
  };

  // Checks if an odd number of recipes currently exists
  // This is used to ensure that form row color follows list color pattern (white if previous row is yellow and vice versa)
  const isOdd = recipes.length % 2 === 1;

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr className={isOdd ? "" : "even_row"}>
            <td>
              <input
                id="name"
                type="text"
                name="name"
                onChange={handleChange}
                value={recipeFormData.name}
                placeholder="Name"
                required={true}
              />
            </td>
            <td>
              <input
                id="cuisine"
                type="text"
                name="cuisine"
                onChange={handleChange}
                value={recipeFormData.cuisine}
                placeholder="Cuisine"
                required={true}
              />
            </td>
            <td>
              <input
                id="photo"
                type="text"
                name="photo"
                onChange={handleChange}
                value={recipeFormData.photo}
                placeholder="URL"
                required={true}
              />
            </td>
            <td>
              <textarea
                id="ingredients"
                name="ingredients"
                onChange={handleChange}
                value={recipeFormData.ingredients}
                placeholder="Ingredients"
                rows={2}
                required={true}
              />
            </td>
            <td>
              <textarea
                id="preparation"
                name="preparation"
                onChange={handleChange}
                value={recipeFormData.preparation}
                placeholder="Preparation"
                rows={2}
                required={true}
              />
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
