console.log("Welcome to my app!");

const { index, create } = require("./src/frozenProductsController")
const { writeJSONFile, readJSONFile } = require("./src/helpers")

const inform = console.log

function run() {
    const action = process.argv[2];
    const productName = process.argv[3];
    let products = readJSONFile("./data", "products.json")
    let writeToFile = false;
    let updateProducts = []
    switch (action) {
      case "index":
        const productsView = index(products)
        inform(productsView);
        break;
      case "create":
        updateProducts = create(products, productName)
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
        writeJSONFile("./data", "products.json", updateProducts)
    }
  }
  run();