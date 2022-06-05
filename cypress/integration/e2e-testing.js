/**
 * Feature: Add Recipe
 *
 * Scenario: Successfull post
 *    GIVEN I navigate to the recipe page
 *    WHEN I enter recipe name and ingredients and submit the form
 *    THEN a new recipe is added to the table with the given name and ingredients
 *
 * Scenario: Unsuccessfull post
 *    GIVEN I navigate to the add user page
 *    WHEN I enter user and and no name and submit the form
 *    THEN the recipe is not added to the table
 */

describe("Add recipe", () => {
  context("Successfull post", () => {
    it("GIVEN I navigate to the add recipe", () => {
      cy.visit("http://localhost:3000/recipes");
    });

    it("WHEN I enter recipe name and ingredients and submit the form", () => {
      cy.intercept("POST", "http://localhost:3000/recipes").as("addRecipe");
      cy.get("form").within(() => {
        cy.get('input[name="recipeName"]').type("Roast Beef");
        cy.get('input[name="recipeIngredients"]').type("Cow, Stew, Salt");
        cy.get('input[type="submit"]').click();
        //Or
        //cy.contains('Submit').click()
      });
      cy.wait("@addRecipe");
    });

    it("THEN a new user is added to the table with the given recipe name and ingredients", () => {
      cy.visit("http://localhost:3000/recipes");
    });
  });

  context("Unsuccessfull post", () => {
    it("GIVEN I navigate to the add user page", () => {
      cy.visit("http://localhost:3000/recipes");
    });

    it("WHEN I enter recipe with no fields and submit the form", () => {
      cy.intercept("POST", "http://localhost:3000/addRecipe").as("addRecipe");
      cy.get("form").within(() => {
        cy.get('input[type="submit"]').click();
        //Or
        //cy.contains('Submit').click()
      });
      cy.wait("@addRecipe");
    });

    it("THEN the user is redirected to the recipes page without any changes", () => {
      cy.visit("http://localhost:3000/recipes");
    });
  });
});
