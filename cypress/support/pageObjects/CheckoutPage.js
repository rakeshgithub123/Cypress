class CheckoutPage{

    getItemsInCheckoutPage(){
        return cy.get('.sc-list-item-content');
    }

    getDeleteItemButton(){
        return cy.get('input[value="Delete"]');
    }

    getBasketEmptyMessage(){
        return cy.get('.a-row.sc-your-amazon-cart-is-empty');
    }

    removeItemsFromCart(){
        this.getDeleteItemButton().each((item, i, items)=>{
            cy.wrap(item[i]).click();
        })
    }

}
export default CheckoutPage;