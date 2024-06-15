const { index, create, show, destroy, edit } = require("./src/frozenProductsController")
const { createInterface } = require ('node:readline')
const { writeJSONFile, readJSONFile } = require("./src/helpers")

const inform = console.log
const products = readJSONFile("./data", "products.json")
const productsView = index(products)

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
  });

function getIndex() {
    inform(`\nHAL 9001: Current products in warehouse are:\n\n${productsView}`)
rl.close()
}

function createProduct() {
    rl.question('\nHAL 9001: What is the product name?\n\n', (productName) => {
        rl.question('\nHAL 9001: What is the product code?\n\n', (productCode) => {
            rl.question('\nHAL 9001: What is the product type?\n\n', (productType) => {
                rl.question('\nHAL 9001: What is the product brand?\n\n', (productBrand) => {
                    rl.question('\nHAL 9001: Who is the product vender?\n\n', (productVendor) => {
                        rl.question('\nHAL 9001: What is the product FDA status?\n\n', (productFDAStatus) => {
                            rl.question('\nHAL 9001: What is the product count?\n\n', (productCaseCount) => {
                                rl.question('\nHAL 9001: What is the product lb per case?\n\n', (productLbPerCase) => {
                                    rl.question('\nHAL 9001: What is the product price per lb?\n\n', (productCostPerLb) => {
                                        rl.question('\nHAL 9001: Where is the product pallet location?\n\n', (productLocation) => {
                                            rl.question('\nHAL 9001: Who is the product purchaser/buyer?\n\n', (productBuyer) => {
                                                rl.question('\nHAL 9001: When was the product purchased?\n\n', (productPurchaseDate) => {
                                                    rl.question('\nHAL 9001: When was the product entry date?\n\n', (productEnterDate) => {
                                                        rl.question('\nHAL 9001: When does product expire?\n\n', (productExpireDate) => {

    let writeToFile = false;
    let updateProducts = []

    const count = parseInt(productCaseCount)
    const pound = parseInt(productLbPerCase)
    const cost = parseFloat(productCostPerLb)

    updateProducts = create(products, productName, productCode, productType, productBrand, productVendor, productFDAStatus, count, pound, cost, productLocation, productBuyer, productPurchaseDate, productEnterDate, productExpireDate)

    writeToFile = true;

    if (writeToFile) {
        writeJSONFile("./data", "products.json", updateProducts)
    }
    inform(`\nHAL 9001: Your new product have been added to the warehouse\n`)
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

function showProduct() {
    inform(`\nHAL 9001: Current products in warehouse are:\n\n${productsView}`)

    rl.question("\nHAL 9001: Please type in product Id to display that product's details\n\n", (productId) => {
        const singleProductsView = show(products, productId)
        inform(singleProductsView)
        rl.close()

    })
}

function removeProduct() {
    inform(`\nHAL 9001: Current products in warehouse are:\n\n${productsView}`)

    rl.question('\nHAL 9001: What is the id of the product you want to remove?\n\n', (productID) => {
    let writeToFile = false;
    let updateProducts = []

    updateProducts = destroy(products, productID)
    writeToFile = true;

    if (writeToFile) {
        writeJSONFile("./data", "products.json", updateProducts)
    }
        rl.close()
    })
}

function updateProduct() {
    inform(`\nHAL 9001: Current products in warehouse are:\n\n${productsView}`)

    rl.question('\nHAL 9001: What is the id of the product you want to update?\n\n', (productID) => {
        rl.question('\nHAL 9001: Please choose from following, which value you want update:\n\nname\ncode\ntype\nbrand\nvendor\nfdaStatus\ncaseCount\nlbPerCase\ncostPerLb\nlocation\nbuyer\npurchaseDate\nenterDate\nexpireDate\n\n', (productKEY) => {
            rl.question('\nHAL 9001: What is the new updated value?\n\n', (productNewValue) => {

        let writeToFile = false;
        let updateProducts = []
    
        updateProducts = edit(products, productID, productKEY, productNewValue)
        writeToFile = true;
    
        if (writeToFile) {
            writeJSONFile("./data", "products.json", updateProducts)
        }
        rl.close()
            })
        })
    })
}

function getCommand() {
    rl.question('HAL 9001: Hello, what is your command?\n\nHAL 9001: Please choose from the following:\n\nDisplay a list of products: Type - index\nAdd product to inventory:   Type - add\nDisplay product details:    Type - show\nRemove/delete product:      Type - destroy\nUpdate product detail:      Type - update\nDisplay total amount:       Type - calculate\n\n', (command) => {
    switch (command) {
        case "index":
        getIndex();
        break;
        case "add":
        createProduct()
        break;
        case "show":
        showProduct()
        break;
        case "update":
        updateProduct()
        break;
        case "destroy":
        removeProduct()
        break;
        case "total":
        break;
        default:
            inform("HAL 9001: There was an error.")
    }

    });
  }

  module.exports = { getCommand }