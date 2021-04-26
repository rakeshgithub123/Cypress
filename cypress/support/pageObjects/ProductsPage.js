class ProductsPage{

    getAddToCartButton(){
        return cy.get("#add-to-cart-button");
    }

    getIndividualProduct(productName){
        return cy.get('[href*='+productName+']')
    }

    getCartButton(){
        return cy.get('.nav-cart-icon');
    }

    openProductFromList(){
        cy.get('.a-link-normal.a-text-normal').each(($el,index,list)=>{
            if(index===0){
                cy.wrap($el).invoke('removeAttr', 'target').click()
            }
                
        })
    }

}

export default ProductsPage;