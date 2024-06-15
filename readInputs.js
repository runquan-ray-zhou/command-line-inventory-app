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
        rl.question('\nWhat is the product code?\n\n', (productCode) => {
            rl.question('\nWhat is the product type?\n\n', (productType) => {
                rl.question('\nWhat is the product brand?\n\n', (productBrand) => {
                    rl.question('\nWho is the product vender?\n\n', (productVendor) => {
                        rl.question('\nWhat is the product FDA status?\n\n', (productFDAStatus) => {
                            rl.question('\nWhat is the product count?\n\n', (productCaseCount) => {
                                rl.question('\nWhat is the product lb per case?\n\n', (productLbPerCase) => {
                                    rl.question('\nWhat is the product price per lb?\n\n', (productCostPerLb) => {
                                        rl.question('\nWhere is the product pallet location?\n\n', (productLocation) => {
                                            rl.question('\nWho is the product purchaser/buyer?\n\n', (productBuyer) => {
                                                rl.question('\nWhen was the product purchased?\n\n', (productPurchaseDate) => {
                                                    rl.question('\nWhen was the product entry date?\n\n', (productEnterDate) => {
                                                        rl.question('\nWhen does product expire?\n\n', (productExpireDate) => {
    let products = readJSONFile("./data", "products.json")
    let writeToFile = false;
    let updateProducts = []

    const count = parseInt(productCaseCount)
    const pound = parseInt(productLbPerCase)
    const cost = parseInt(productCostPerLb)

    updateProducts = create(products, productName, productCode, productType, productBrand, productVendor, productFDAStatus, count, pound, cost, productLocation, productBuyer, productPurchaseDate, productEnterDate, productExpireDate)

    writeToFile = true;

    if (writeToFile) {
        writeJSONFile("./data", "products.json", updateProducts)
    }

    rl.close()
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })  
                            })
                        })
                    })  
                })
            })
        })
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
    rl.question('HAL 9001: Hello, what is your command?\n\nPlease choose from the following:\n\nDisplay a list of products: Type - index\nAdd product to inventory:   Type - add\nDisplay product details:    Type - show\nRemove/delete product:      Type - remove\nUpdate product detail:      Type - update\nDisplay total amount:       Type - calculate\n\n', (command) => {
    switch (command) {
        case "index":
        getIndex();
        break;
        case "add":
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