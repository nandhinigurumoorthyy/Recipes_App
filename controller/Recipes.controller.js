const RecipesModel = require("../model/Recipes.model");

const RecipeRouter = require("express").Router();

// // fetches all the orders:
// RecipeRouter.get("/", function (request, response) {
//   return response.status(200).json({
//     message: "Recipes fetched successfully...",
//   });
// });

// Fetch all the recipes
RecipeRouter.get("/", async function (request, response) {
  try {
    const result = await RecipesModel.find();
    return response.status(200).json({
      message: "Recipe fetcheed successfully",
      data: result,
    });
  } catch (error) {
    return response.status(500).json({
      message: "something went wrong !!!",
      error: error.message,
    });
  }
});

// fetches order matches given orderId
RecipeRouter.get("/:orderId", async function (request, response) {
  try {
    const { orderId } = request.params;
    const result = await RecipesModel.findById(orderId);
    if (!result) {
      return response.status(404).json({
        message: "Recipe not found",
      });
    }
    return response.status(200).json({
      message: "Recipe fetched successfully",
      data: result,
    });
  } catch (error) {
    return response.status(500).json({
      message: "Something went wrong !!!",
      error: error.message,
    });
  }
});

// Create a recipe
RecipeRouter.post("/createRecipe", async function (request, response) {
  try {
    const result = await RecipesModel.create(request.body);
    return response.status(200).json({
      message: "Recipes created",
      result: result,
    });
  } catch (error) {
    return response.status(400).json({
      message: "Invalid!!!!",
      error: error.message,
    });
  }
});

// updateRecipe
RecipeRouter.put("/updateRecipe/:recipeId", async function (request, response) {
  try {
    const { recipeId } = request.params;
    const updatedRecipe = await RecipesModel.findByIdAndUpdate(
      recipeId,
      request.body,
      { new: true }
    );
    if (!updatedRecipe) {
      return response.status(404).json({
        message: "Recipe not found",
      });
    }
    return response.status(200).json({
      message: "Recipe updated successfully",
      data: updatedRecipe,
    });
  } catch (error) {
    return response.status(500).json({
      message: "Something went wrong !!!",
      error: error.message,
    });
  }
});

//deleteRecipe
RecipeRouter.delete(
  "/deleteRecipe/:recipeId",
  async function (request, response) {
    try {
      const { recipeId } = request.params;
      const deletedRecipe = await RecipesModel.findByIdAndDelete(recipeId);
      if (!deletedRecipe) {
        return response.status(404).json({
          message: "Recipe not found",
        });
      }
      return response.status(200).json({
        message: "Recipe deleted successfully",
        data: deletedRecipe,
      });
    } catch (error) {
      return response.status(500).json({
        message: "Something went wrong !!!",
        error: error.message,
      });
    }
  }
);

module.exports = RecipeRouter;
