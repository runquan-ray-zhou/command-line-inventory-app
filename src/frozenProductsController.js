const { nanoid } = require("nanoid")
const inform = console.log

function index(products) {
    inform("\n")
    return products.map((product) => "Id: " + product.id + " Product Name: " + product.name + " Total Case: " + product.caseCount).join("\n")
}

function create(products, productName, productCode, productType, productBrand, productVendor, productFDAStatus, productCaseCount, productLbPerCase, productCostPerLb, productLocation, productBuyer, productPurchaseDate, productEnterDate, productExpireDate) {
    const product = {
        id: nanoid(4),
        name: productName,
        code: productCode,
        type: productType,
        brand: productBrand,
        vendor: productVendor,
        fdaStatus: productFDAStatus,
        caseCount: productCaseCount,
        lbPerCase: productLbPerCase,
        costPerLb: productCostPerLb,
        totalWeight: productCaseCount * productLbPerCase,
        totalCost: productCaseCount * productLbPerCase * productCostPerLb,
        location: productLocation,
        buyer: productBuyer,
        purchaseDate: productPurchaseDate,
        enterDate: productEnterDate,
        expireDate: productExpireDate
    }
    products.push(product)
    return products
}

function show(products, productId) {
    const selectedProduct = products.find(product => product.id === productId)
    return selectedProduct
}

function remove(products, productID) {
    const index = products.findIndex(product => product.id === productID)
    if (index > -1) {
        products.splice(index, 1)
        inform(`\nHAL 9001: Your selected product have been successfully removed from the warehouse\n`)
        return products
    } else {
        inform("\nHAL 9001: Your product was not found. No action taken\n")
        return products
    }
}

function edit(products, productID, productKEY, productNewValue) {
    const index = products.findIndex(product => product.id === productID);
    if (index > -1) {
    products[index][productKEY] = productNewValue;
      inform("\nHAL 9001: Product successfully updated\n");
      return products;
    } else {
      inform("\nHAL 9001: Product not found. No action taken\n");
      return products;
    }
  }

function ready(products, readiedProducts, productID) {
    const index = products.findIndex(product => product.id === productID)
    if (index > -1) {
        readiedProducts.push(products[index])
        inform(`\nHAL 9001: Your selected product have been successfully moved to ready\n`)
        return readiedProducts
    } else {
        inform("\nHAL 9001: Your product was not found. No action taken\n")
        return readiedProducts
    }
    
}

function total(products) {
    return products.reduce((a, b) => a + b.totalCost, 0)
}


module.exports = { index, create, show, remove, edit, ready, total }