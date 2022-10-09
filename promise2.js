const getUserData = () => {
    return new Promise((resolve, reject) => {
        const myData = fetch('https://css-my-home.vercel.app/portfolio/portfolio/', { method: 'get'});
        resolve(myData);
        reject("Few issue in server try again");
    })
}

const getUserData1 = new Promise((resolve, reject) => {
    const myData = fetch('https://css-my-home.vercel.app/portfolio/portfolio/fhfdhdf', { method: 'get'});
        resolve(myData);
        reject("Few issue in server try again");
})

getUserData1.then((result) => {
    console.log(result);
    console.log("Sucess");
}).catch((error) => {
    console.log(error);
    console.log("Fail");
})