class InfoPage {
  // Elements
  get emailTextField() {
    return browser.element("span#email");
  }
  get urlTextField() {
    return browser.element("span#url");
  }
  get phoneTextField() {
    return browser.element("span#phone");
  }
  get showChats() {
    return browser.element("button#showChats");
  }
  get getJsonButton() {
    return browser.element("button#buildJSON");
  }
  get jsonOutput() {
    return browser.element("pre#json_output");
  }
  get myChats() {
    return browser.element("div#myChats");
  }
  get newChats() {
    return browser.element("div#myChats ul.chats:nth-child(4)")
  }

  // Page methods
   pageIsLoaded() {
    this.emailTextField.waitForVisible();
    this.urlTextField.waitForVisible();
    this.phoneTextField.waitForVisible();
    this.showChats.waitForVisible();
    this.getJsonButton.waitForVisible();
  }
  
  parseData() {
    const emailValue = this.emailTextField.getHTML(false);
    const urlValue = this.urlTextField.getHTML(false);
    const phoneValue = this.phoneTextField.getHTML(false);
    
    const parsedEmail = this.parseEmail(emailValue);
    const parsedUrl = this.parseUrl(urlValue);
    const parsedPhone = this.parsePhone(phoneValue);
    
    let data = {
      email: parsedEmail,
      url: parsedUrl,
      phone: parsedPhone
    };
    
    return data;    
  }

  parseJson() {
    const jsonValue = this.jsonOutput.getHTML(false);
    
    let data = JSON.parse(jsonValue);

    data.email = this.parseEmail(data.email);
    data.url = this.parseUrl(data.url);
    data.phone = this.parsePhone(data.phone);

    return data;
  }

  parseEmail(textValue) {
    return parseInt(textValue.substring(0, textValue.indexOf('@')));
  }

  parseUrl(textValue) {
    return parseInt(textValue.substring(textValue.indexOf('1'), textValue.lastIndexOf('/')));
  }

  parsePhone(textValue) {
    return parseInt(textValue.substring(textValue.indexOf('ext')+4));
  }
  
  parseNewChats() {
    this.myChats.waitForVisible();
    this.newChats.waitForVisible();

    let chatsArray = [];
    
    const chatsRaw = this.newChats.elements('li');
    
    chatsRaw.value.forEach(function(messageElement) {
      if (messageElement.isExisting("div")) {
        let senderAndTime = messageElement.element("div:nth-child(1)").getHTML(false);
        let message = messageElement.element("div:nth-child(2)").getHTML(false);

        let sender = senderAndTime.substring(0, senderAndTime.indexOf(' @'));
        let time = senderAndTime.substring(senderAndTime.indexOf(' @')+2);
        
        chatsArray.push({
          sender: sender,
          time: time,
          message: message
        })
      }
      else {
        let senderAndMessage = messageElement.getHTML(false);
        let sender = senderAndMessage.substring(0, senderAndMessage.indexOf(' '));
        let message = senderAndMessage.substring(senderAndMessage.indexOf(' ')+1);
        
        chatsArray.push({
          sender: sender,
          time: '',
          message: message
        })
      }
    });
    
    return chatsArray;
  }

}

export default InfoPage;
