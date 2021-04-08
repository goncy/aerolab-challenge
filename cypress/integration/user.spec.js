/// <reference types="Cypress" />

import me from "../fixtures/me.json";
import products from "../fixtures/products.json";

describe("User", () => {
  beforeEach(() => {
    cy.intercept("/user/me", me);
    cy.intercept("/products", products);
  });

  it("deberia mostrar el nombre del usuario", () => {
    cy.visit("/");

    cy.contains(me.name);
  });

  it("deberia agregar mil puntos al tocar los puntos", () => {
    cy.visit("/");

    cy.get('[data-testid="points"]').should("have.text", me.points);
    cy.get('[data-testid="points"]').click();
    cy.get('[data-testid="points"]').should("have.text", me.points + 1000);
  });
});
