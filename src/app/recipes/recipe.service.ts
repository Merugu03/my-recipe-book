import { Recipe } from "./recipe.model";
import { EventEmitter } from "@angular/core";

export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
    private recipes:Recipe[]=[
        new Recipe("A Test Reipe","This is a simply test",
        "https://www.modernhoney.com/wp-content/uploads/2018/03/The-Best-Chicken-Marinade-Recipe-1024x730.jpg"),
        new Recipe("Second Test","Simply testing",
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-crispy-chicken-thighs-garlic-rosemary-1567793052.png?crop=1.00xw:0.755xh;0,0.0192xh&resize=980:*"),
        new Recipe("Biryani ","Tesing it","https://144f2a3a2f948f23fc61-ca525f0a2beaec3e91ca498facd51f15.ssl.cf3.rackcdn.com/uploads/food_portal_data/recipes/recipe/hero_article_image/3968/b70f9551dc0a9e4b8742/compressed_chickenrice.jpg")
      ];
      getRecipe()
      {
          return this.recipes.slice();
      }
    
}