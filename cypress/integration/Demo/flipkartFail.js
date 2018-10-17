describe('Flipkart application',function(){
  it('CYR-5', function(){

    cy.visit('https://www.flipkart.com/');

    cy.get(':nth-child(1) > ._2zrpKA').type('opaltech@gmail.com');

    cy.get(':nth-child(2) > ._2zrpKA_').type('5555');
 
});
});
