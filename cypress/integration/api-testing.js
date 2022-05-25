/**
 * Feature: Backend (REST API) is listening
 * Scenario: Backend loads and runs successfully
 *    GIVEN I run the backend
 *    WHEN I visit the root endpoint 
 *    THEN it does not smoke
 *    AND returns "Hello World!"
 *    AND the response code is 200
 */

 describe('Backend (REST API) is listening', () => {
    
    context('Backend loads and runs successfully', () => {

        before(() => {
            //this is a beforeAll
            //if needed
            //see more here: https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests#Hooks
        });

        it('GIVEN I run the backend', () => {});

        it('WHEN I visit the root endpoint', () => {
            cy.request('http://localhost:4000/recipes').then((response) => {
                //Using matchers from Chai: https://www.chaijs.com/guide/styles/#assert
                //All Cypress supported matchers here: https://docs.cypress.io/guides/references/assertions
                assert.equal(response.status, 200, 'AND the response code is 200');
                
                //OR use another set of supported matchers from Chai, the Expect style: 
                    //https://www.chaijs.com/guide/styles/#expect
                 expect(response.body).to.be.a('string');
                // expect(response.body).to.equal('Hello World!');
                // expect(response.status).to.equal(200);
            });
        });
    });
});

/**
 * Feature: API takes an obj and adds it to the DB
 *  As an API client I want to be able to send a user object to be added to
 *  the database.
 * 
 * Scenario: Successfull post
 *    GIVEN My user object has valid fields (user and job)
 *    WHEN I attempt to post the user obj 
 *    THEN I receive a successfull response (code 201)
 *    AND the response object contains the property _id
 *    AND the response object contains the same name and job I passed
 * 
 */




describe('API takes an obj and adds it to the DB', () => {
    
    context('Successfull post', () => {

        before(() => {
        });

        let newRecipe = {};

        it('GIVEN My user object has valid fields (name and ingredients)', () => {
            newRecipe = {
                name: 'chicken ',
                ingredients: 'One chicken only'
            }
        });

        it('WHEN I attempt to post the recipe', () => {
            cy.request('POST', 'http://localhost:4000/addRecipe', newRecipe).then((response) => {
                //Using matchers from Chai: https://www.chaijs.com/guide/styles/#assert
                   // All Cypress supported matchers here: https://docs.cypress.io/guides/references/assertions
                assert.equal(response.status, 200,
                    'THEN I receive a successfull response (code 200)');             
            });
        });
    });

});