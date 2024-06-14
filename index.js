console.log("Welcome to my app!");

const { index, create } = require("./src/frozenProductsController")
const { writeJSONFile, readJSONFile } = require("./src/helpers")

const inform = console.log

function run() {
    const action = process.argv[2];
    const productName = process.argv[3];
    let pallets = readJSONFile("./data", "pallets.json")
    let writeToFile = false;
    let updatePallets = []
    switch (action) {
      case "index":
        const palletsView = index(pallets)
        inform(palletsView);
        break;
      case "create":
        updatePallets = create(pallets, productName)
        writeToFile = true;
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
    if (writeToFile) {
        writeJSONFile("./data", "pallets.json", updatePallets)
    }
  }
  run();