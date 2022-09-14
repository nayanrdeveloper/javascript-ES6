const companies = [
    {name: "Google", category: "Product Based", start:"1991", end: "2002"},
    {name: "Paytm", category: "Product Based", start:"1995", end: "2007"},
    {name: "Yahoo", category: "Product Based", start:"1996", end: "2003"},
    {name: "TCS", category: "Service Based", start:"1993", end: "2009"},
    {name: "Mindtree", category: "Service Based", start:"1993", end: "2014"},
];

const ages = [23,56,12,78,56,25,90,76,10,6,32,45];

/*

for (let i = 0; i < companies.length; i++) {
    console.log(companies[i]);
}

*/


/*

companies.forEach((company) => {
    console.log(company);
})

*/

/*
const filter_age = ages.filter((age) => {
    if (age >= 25){
        return age;
    }
})

console.log(filter_age);

*/

/*

const finalAge = ages.filter((age) => age >= 50);
console.log(finalAge);

*/

/*

const sbc = companies.filter((company) => {
    if(company.category == "Service Based"){
        return company;
    }
})

console.log(sbc);

*/

/*

const myCompany = companies.map((company) => {
    return company;
})

console.log(myCompany);

*/

/*

const mapCompany = companies.map((company) => {
    return `company name is ${company.name} and category are ${company.category}`;
})

console.log(mapCompany);

*/

/*

const sortedCompanies = companies.sort((c1,c2) => {
    if (c1.start < c2.start){
        return 1;
    }
    else{
        return -1;
    }
})

console.log(sortedCompanies);

*/

/*

const sortedCompanies = companies.sort((c1, c2) => (c1.start > c2.start ? 1 : -1));

console.log(sortedCompanies);

*/

/*

const sortedAges = ages.sort((a1,a2) => (a2 - a1));

console.log(sortedAges);

*/

/*

const sumAge = ages.reduce((total, age) => {
   return total += age;
}, 0);  // 0 are initial value of parameter (total are 0)

console.log(sumAge);

*/

/*

const sumage1 = ages.reduce((total, age) => total + age, 0);

console.log(sumage1);

*/

