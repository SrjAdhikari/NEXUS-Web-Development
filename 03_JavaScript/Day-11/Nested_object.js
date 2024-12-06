//* ****************************************************
//* Nested Object In JavaScript
//* ****************************************************


//* Example: 1
const user = {
    email : "srj@gmail.com",
    fullName : {                                                    // "fullName" object inside the "user" object
            userFullName : {                                        // "userFullName" object inside the "fullName" object
                firstName : "Suraj",
                lastName : "Adhikari"
            }
    } 
}

console.log(user.fullName);                                         // Output -> { userFullName: { firstName: 'Suraj', lastName: 'Adhikari' } }
console.log(user.fullName.userFullName);                            // Output -> { firstName: 'Suraj', lastName: 'Adhikari' }
console.log(user.fullName.userFullName.firstName);                  // Output -> Suraj
console.log(user.fullName.userFullName.lastName);                   // Output -> Adhikari


//* Example: 2
const userInfo = {
    firstName: 'Suraj',
    lastName: 'Adhikari',
    details: {
        age: 25,
        country: 'Nepal',
        state: 'KTM',
        moreDetails: {
            email: 'suraj123@gmail.com',
            gender: 'Male',
            DOB: 1999,
            hobbies: ['coding', 'reading', 'football']
        }
    }
}

//* 1. Access object Using Dot Notation
console.log(userInfo.firstName);                                    // Output -> Suraj
console.log(userInfo.details.country);                              // Output -> Nepal
console.log(userInfo.details.state);                                // Output -> KTM
console.log(userInfo.details.moreDetails.gender);                   // Output -> Male
console.log(userInfo.details.moreDetails.hobbies[1]);               // Output -> reading
console.log(userInfo.details.moreDetails.hobbies[2]);               // Output -> football


//* 2. Access object Using Bracket Notation
console.log(userInfo['lastName']);                                  // Output -> Adhikari
console.log(userInfo['details']['age']);                            // Output -> 25
console.log(userInfo['details']['country']);                        // Output -> Nepal
console.log(userInfo['details']['moreDetails']['email']);           // Output -> suraj123@gmail.com
console.log(userInfo['details']['moreDetails']['DOB']);             // Output -> 1999
console.log(userInfo['details']['moreDetails']['hobbies'][0]);      // Output -> coding
console.log(userInfo['details']['moreDetails']['hobbies'][2]);      // Output -> football