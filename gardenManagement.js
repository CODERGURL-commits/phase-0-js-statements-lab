const temperature = 90;
const timeOfDay = "morning";
let soilMoisture = 30;

// watering control
if(temperature > 80) {
    console.log("Watering on");
}
else{
    console.log("watering off");
}

// Garden lights control.
if(timeOfDay === "evening"){
    console.log("Lights on");
}
else{
    console.log("Lights off");
}
//  Soil Moisture Adjustment
while (soilMoisture < 40) {
    soilMoisture += 5;
    if (soilMoisture > 40) {
        soilMoisture = 40;
    }
    console.log(soilMoisture);
}
    // Add loop logic here
