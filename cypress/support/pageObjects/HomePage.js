class HomePage{

    getSearchBox(){
        return cy.get("#twotabsearchtextbox");
    }

    getSearchButton(){
        return cy.get("#nav-search-submit-button");
    }

    getCartNumberOfItems(){
        return cy.get('#nav-cart-count');
    }

    searchForProduct(productName){
        this.getSearchBox().type(productName);
        this.getSearchButton().click();
    }

}

export default HomePage;