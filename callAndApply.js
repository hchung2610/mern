var Car = {Brand: "Tesla", Name: "AI", Price: "100,000$"}

function VehicleInfo (make, model, year, gear, automatic, groundClearance, airbags, crushTestValue) {
    console.log(`
        ${make}
        ${model}
        ${year}
        ${gear}
        ${this.Brand}
        ${this.Name}
        ${this.Price}
        `)
}
var basicInfo = ["USA", "1st", "2005", "6", "yes", "10 inches", "5", "4.5"]
VehicleInfo.call(Car, "USA", "1st", "2005", "6")
VehicleInfo.apply(Car, basicInfo)