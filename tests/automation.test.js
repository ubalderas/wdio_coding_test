import LoginPage from "~/src/pages/login.page.js";

// Do NOT change any of the code in the tests themselves, any code
// outside of the tests is fair game though...

describe("My Awesome Website", () => {
  // this test should pass
  it("will show the correct title", () => {
    let loginPage = new LoginPage();
    loginPage.visit();
    expect(loginPage.title()).to.equal("Test Page");
  });

  // make these tests pass
  it("will show the the correct extension in myInfo", () => {
    let extension = Date.now();

    let loginPage = new LoginPage();
    loginPage.visit();
    loginPage.login(extension);

    let data = infoPage.parseData(); // hmm, does infoPage exist?

    let expectedData = {
      email: extension,
      url: extension,
      phone: extension
    };

    expect(data).to.equal(expectedData);
  });

  it("will show the my extension in the JSON output", () => {
    let extension = Date.now();

    let loginPage = new LoginPage();
    loginPage.visit();
    loginPage.login(extension);

    infoPage.getJsonButton.click();
    let data = infoPage.parseJson();

    let expectedData = {
      email: extension,
      url: extension,
      phone: extension
    };

    expect(data).to.equal(expectedData);
  });

  it("BONUS: will show NEW chat messages", () => {
    let extension = Date.now();

    let loginPage = new LoginPage();
    loginPage.visit();
    loginPage.login(extension);

    infoPage.showChats.click();

    let data = infoPage.parseNewChats();

    let thirdChat = {
      sender: "Toby Flenderson",
      time: "11:41 AM",
      message: "What are you guys doing for lunch?"
    };

    expect(data[2]).to.equal(thirdChat);
  });
});
