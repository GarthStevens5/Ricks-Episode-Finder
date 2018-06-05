describe("Enter and test website", () =>{
  it("Clicks the button to enter the site", () =>{
    cy.visit("/");
    cy.get("button").click()
    cy.get("li").eq(0).click()
    cy.get("li").eq(0).should("contain", "PilotS01E01")
    cy.get("button").eq(1).click()
    cy.get("li").eq(20).click()
    cy.get("li").eq(0).should("contain", "Close Rick-counters of the Rick KindS01E10")
    cy.get("button").eq(0).click()
    cy.get("li").eq(1).click()
    cy.get("li").eq(0).should("contain", "PilotS01E01")
  })
})