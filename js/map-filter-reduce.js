const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];


//1 Use .filter to create an array of user objects where each user object
// has at least 3 languages in the languages array.
const threeLanguagesOrMore = users.filter(user => user.languages.length >= 3);
console.log(threeLanguagesOrMore)

//2 Use .map to create an array of strings where each element is a user's email address
const userEmail = users.map(user => user.email);
console.log(userEmail);

//3 Use .reduce to get the total years of experience from the list of users.
//     Once you get the total of years you can use the result to calculate the average.
const totalYears = users.reduce((total, user) => total + user.yearsOfExperience, 0);
const averageOfYears = totalYears / users.length;
console.log('Total Years of Experience = ', totalYears);
console.log('Average years of Experience = ', averageOfYears);

//4 Use .reduce to get the longest email from the list of users.
const longestEmail = users.reduce((longest, user) =>{
    return user.email.length > longest.length ? user.email : longest;
}, "");
console.log("The longest Email is:", longestEmail)

//5 Use .reduce to get the list of user's names in a single string. '
// 'Example: Your instructors are: ryan, luis, zach, fernando, justin.
const userNamesList = users.reduce((userNames, user) => {
    return userNames === "" ? user.name : userNames + ', ' + user.name;
}, "");
console.log("User Names are: " + userNamesList);