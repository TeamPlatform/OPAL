describe('Redbus application',function(){
  it('CYR-9', function(){

    cy.visit('https://www.redbus.com/');
    cy.get('.close').click();
 
});
});