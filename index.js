console.log("Welcome to my app!");

const { writeJSONFile, readJSONFile } = require("./src/helpers")

const inform = console.log

function run() {
    const action = process.argv[2];
    const productName = process.argv[3];
    switch (action) {
      case "index":
        inform(action);
        break;
      case "create":
        inform(action, productName);
        break;
      case "show":
        inform(action, productName);
        break;
      case "update":
        inform(action, productName);
        break;
      case "destroy":
        inform(action, productName);
        break;
      case "score":
        inform(action);
        break;
      default:
        inform("There was an error.");
    }
  }
  run();