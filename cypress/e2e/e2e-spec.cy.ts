describe("E2E spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:5173/");
  });
});

describe("LoginSpec", () => {
  it("report", () => {
    cy.visit("/login");
    cy.get(".username").type("refilwe@mail.com");
    cy.get(".password").type("Password1!");
    cy.get(".loginBtn").click();
  });
});
