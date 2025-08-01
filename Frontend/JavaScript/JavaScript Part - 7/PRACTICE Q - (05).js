
// ---: PRACTICE Q - (05) :---

const object = {

  message: 'Hello, World!',

  logMessage() {
    console.log(this.message);
  }

};

setTimeout(object.logMessage,1000);

