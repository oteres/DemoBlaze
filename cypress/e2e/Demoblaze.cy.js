/// <reference types='cypress' />
import { generateUser } from '../support/generate';

describe('demoBlaze flow', () => {
  const user = generateUser();

  it('should sing up', () => {
    cy.visit('/');

    cy.get('#signin2').click();
    cy.get('#sign-username').type(user.username);
    cy.get('#sign-password').type(user.password);
    cy.get('button[onclick="register()"]').click();
  }); 

  it('should log in', () => {
    cy.visit('/'); 

    cy.get('#login2').click(); 
    cy.get('#loginusername').type(user.username);
    cy.get('#loginpassword').type(user.password);
    cy.get('button[onclick="logIn()"]').click(); 
  });

  it('should add Samsung Galaxy s6 to the cart', () => {
    cy.visit('/'); 
    cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click();
    cy.get('.col-sm-12 > .btn').click();
    cy.get('#cartur').click();
    cy.get('.success > :nth-child(2)').should('contain', 'galaxy s6');

  });
});
