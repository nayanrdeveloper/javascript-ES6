const userData = {
    name : "Nayan",
    profession: "BLockchain Developer",
    city: "Rajkot",
    getData: function(star){
        console.log(`MY Name is ${this.name} and my city is ${this.city} and it's rating are ${star}`);
    }
}

userData.getData(7);

const mayurData = {
    name : "Mayur",
    profession : "Solar Pannel Contracotr",
    city : "Jasdan"
}

userData.getData.call(mayurData,2)