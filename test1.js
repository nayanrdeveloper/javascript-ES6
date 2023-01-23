const animals = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const evenNumber = animals.filter((animal) => animal % 2 == 0);

const evenNumberSingle = animals.find((animal) => animal % 2 == 0);

const totalCount = animals.reduce((intialNumber,animal) => {
    return intialNumber + animal
},0)

// console.log(evenNumber);

// console.log(evenNumberSingle);

console.log(totalCount);

const fetchData = () => {
    const dataPromise = new Promise((resolve, reject) => {
        const data = fetch("hhttps://css-my-home.vercel.app/portfolio/portfolio/")
        console.log(data);
        resolve(data)
        reject("Something Else");
    });
}
