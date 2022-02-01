import { locators } from "../helpers/locators";

describe("On Privacy Page,", () => {
  it("Should verify the content of section 14", () => {
    cy.fixture("privacyContent.json").then((privacy) => {
      cy.visit("");
      cy.wait(10000);
      locators
        .clickOnHamburger()
        .clickOnPrivacyPolicy()
        .verifyPrivacyContent(privacy);
    });
  });
});
