const { index, create, destroy } = require("./src/frozenProductsController")
const { createInterface } = require ('node:readline')
const { writeJSONFile, readJSONFile } = require("./src/helpers")

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
  });

const inform = console.log

function getIndex() {
    let products = readJSONFile("./data", "products.json")
    const productsView = index(products)
    inform(`\nCurrent products in warehouse are:\n\n${productsView}`)
rl.close()
}

function createProduct() {
    rl.question('\nWhat is the product name?\n\n', (productName) => {
    let products = readJSONFile("./data", "products.json")
    let writeToFile = false;
    let updateProducts = []

    updateProducts = create(products, productName)
    writeToFile = true;

    if (writeToFile) {
        writeJSONFile("./data", "products.json", updateProducts)
    }

    rl.close()
})
}

function removeProduct() {
    rl.question('\nWhat is the product id?\n\n', (productName) => {
    let products = readJSONFile("./data", "products.json")
    let writeToFile = false;
    let updateProducts = []

    updateProducts = destroy(products, productName)
    writeToFile = true;

    if (writeToFile) {
        writeJSONFile("./data", "products.json", updateProducts)
    }

    rl.close()
})
}

function getCommand() {
    rl.question('HAL 9001: What is your command?\n\nPlease choose from the following:\n\nDisplay a list of products: Type - index\nAdd product to inventory:   Type - add\nDisplay product details:    Type - show\nRemove/delete product:      Type - delete\nUpdate product detail:      Type - update\nDisplay total amount:       Type - calculate\n\n', (command) => {
    switch (command) {
        case "index":
        getIndex();
        break;
        case "create":
        createProduct()
        break;
        case "show":
        break;
        case "update":
        break;
        case "destroy":
        removeProduct()
        break;
        case "total":
        break;
        default:
            inform("There was an error.")
    }

    });
  }

  module.exports = { getCommand }