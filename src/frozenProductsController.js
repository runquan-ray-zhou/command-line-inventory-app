const { nanoid } = require("nanoid")
const inform = console.log

function index(products) {
    inform("\n")
    inform(products)
    return products.map(product => product.id + " " + product.name).join("\n")
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

function show(products, productsId) {
    const selectedProduct = products.find((product) => product.id === productsId)
    return selectedProduct
}

module.exports = { index, create, show }