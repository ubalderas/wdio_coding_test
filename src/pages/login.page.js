import InfoPage from "~/src/pages/info.page.js";
let infoPage = new InfoPage();

class LoginPage {
  // Elements
  get extensionField() {
    return browser.element("input#ext_field");
  }
  get loginButton() {
    return browser.element("button#login_button");
  }

  // Page methods
  visit() {
    browser.url(
      "file:///" + __dirname + "../../../tests/test_pages/test_page_1.html"
    );
  }

  title() {
    return browser.getTitle();
  }

  login(extension) {
    // Fix me!
    this.extensionField.setValue(extension);
    this.loginButton.click();
    infoPage.pageIsLoaded();
  }
}

export default LoginPage;
