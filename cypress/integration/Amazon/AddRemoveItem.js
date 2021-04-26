/// <reference types="Cypress" />
import HomePage from '../../support/pageObjects/HomePage';
import CheckoutPage from '../../support/pageObjects/CheckoutPage';
import ProductsPage from '../../support/pageObjects/ProductsPage';

describe("Add and Remove Items from cart", function(){
    

    before(function() {
        cy.fixture('testData').then(function(data){
            this.data=data
        })
      })

    it("Verify Add and Remove Items from cart", function(){
        var homePage = new HomePage();
        var checkoutPage = new CheckoutPage();
        var productPage = new ProductsPage();

        cy.visit(Cypress.env('url'))
        homePage.searchForProduct(this.data.product);
        productPage.openProductFromList();
        productPage.getAddToCartButton().click();
        cy.wait(3000);
        productPage.getCartButton().click({force: true});
        checkoutPage.getItemsInCheckoutPage().each((item, i, items)=>{
            expect(items).to.have.length.greaterThan(0);
        })

        checkoutPage.removeItemsFromCart();
        checkoutPage.getBasketEmptyMessage().should('be.visible');
    })

})