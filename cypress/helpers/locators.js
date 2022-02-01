class Locators {
  static get elements() {
    return {
      hamburger: '[data-testid="hamburgerMenu"]',
      privacyPolicy: '[data-testid="privacyPolicy"]',
      section14: "li#lgpd-notice-new",
    };
  }
  clickOnHamburger() {
    cy.get(Locators.elements.hamburger).click();
    return this;
  }

  clickOnPrivacyPolicy() {
    cy.get(Locators.elements.privacyPolicy).click();
    return this;
  }

  getSection14() {
    return cy.get(Locators.elements.section14).as("privacySection");
  }

  verifyPrivacyContent(privacy) {
    this.getSection14().find("h2").should("have.text", privacy.header);
    cy.get("@privacySection")
      .find("p")
      .each((section, index) => {
        cy.wrap(section).should("have.text", privacy.paragraph[index]);
      });

    return this;
  }
}

export const locators = new Locators();
