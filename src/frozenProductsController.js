const { nanoid } = require("nanoid")

function index(pallets) {
    return pallets.map(pallet => product.id + " " + product.name).join("\n")
}

function create(pallets, productName) {
    const pallet = {
        name: productName,
        id: nanoid(10),
        released: false
    }
    pallets.push(pallet)
    return pallets
}
const inform = console.log

module.exports = { index, create }