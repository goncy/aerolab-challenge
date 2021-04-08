/// <reference types="Cypress" />

import me from "../fixtures/me.json";
import products from "../fixtures/products.json";

describe("Productos", () => {
  beforeEach(() => {
    cy.intercept("/user/me", me);
    cy.intercept("/products", products);
  });

  it("deberia mostrar todos los productos que vienen del servidor", () => {
    cy.visit("/");

    cy.get('[data-testid="product"]').should("have.length", products.length);
  });

  it("deberia mostrar un mensaje cuando no hay productos", () => {
    cy.intercept("/products", []);

    cy.visit("/");

    cy.contains("No hay productos");
  });

  it("deberia mostrar un error cuando falla al traer la informacion inicial", () => {
    cy.intercept("/products", {
      statusCode: 500,
      body: "Se rompio todo",
    });

    cy.visit("/");

    cy.contains("Press F to pay respect");
  });

  it("deberia restar los puntos cuando se hace una compra", () => {
    cy.visit("/");

    cy.get('[data-testid="points"]').should("have.text", me.points);
    cy.get('[data-testid="product"]:first-of-type button').click();
    cy.get('[data-testid="points"]').should("have.text", me.points - products[0].cost);
  });

  it("deberia estar deshabilitado si no tengo suficientes puntos para comprar", () => {
    cy.intercept("/user/me", {...me, points: 0});

    cy.visit("/");

    cy.get('[data-testid="product"]:first-of-type button').should("be.disabled");
  });
});
