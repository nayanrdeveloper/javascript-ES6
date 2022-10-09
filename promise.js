const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let roll_no = [1,3,5,5,6,7,8,9];
        resolve(roll_no);
        reject("Khabar nahi kem error aavi gai");
    },3000)
})

console.log(myPromise);



const getBioData = (indexData) => {
    return new Promise((resolve, reject) => {
        setTimeout((indexData) => {
            let bioData = {
                'name': 'mayur',
                'age': 24
            }
            resolve(`My name is ${bioData.name} and age is ${bioData.age} and roll no is ${indexData}`)
        }, 2000, indexData)
    })
}

/*

myPromise.then((roll_no) => {
    console.log(roll_no);
    getBioData(roll_no[2]).then((result) => {
        console.log(result);
    })
}).catch((error) => {
    console.log(error);
})

*/


myPromise.then((roll_no) => {
    console.log(roll_no);
    return getBioData(roll_no[2])
    .then((result) => {
        console.log(result);
    })
}).catch((error) => {
    console.log(error);
})

