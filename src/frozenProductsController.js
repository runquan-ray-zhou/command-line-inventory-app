const { nanoid } = require("nanoid")

function index(products) {
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
const inform = console.log

module.exports = { index, create }