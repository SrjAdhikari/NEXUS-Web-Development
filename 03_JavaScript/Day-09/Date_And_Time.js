//* ****************************************************
//* Date And Time In JavaScript
//* ****************************************************


//* Date Object:
// The Date object is a built-in object used to work with dates and times. It allows us to create, manipulate, and format dates and times easily.


//* ****************************************************
//* Creating a Date Object
//* ****************************************************

//* 1. Using the new Date() constructor.
const now = new Date();
console.log(now);                                       // Output -> Current date and time
console.log(typeof now);                                // Output -> object


//* 2. Using Date string.
// Pass a date string in the format "YYYY-MM-DD".

const date = new Date("2024-12-03");
console.log(date);                                      // Output -> 2024-12-03T00:00:00.000Z


//* 3. Using Specific Components.
// Pass year, month (0-indexed), day, hour, minute, second, and millisecond.

const specificDate = new Date(2024, 11, 3, 10, 49, 45, 201);
console.log(specificDate);                              // Output -> 2024-12-03T01:49:45.201Z


//* 4. Using Timestamps:
// A timestamp is the number of milliseconds since January 1, 1970 (UTC), with leap seconds ignored. 

const timestamp = Date.now();
console.log(timestamp);                                 // Output -> 1733191546386 (Time in milisecond from 1970 to now)

// We can create a Date object from a timestamp by passing it to the Date constructor.
const dateFromTimestamp = new Date(timestamp);
console.log(dateFromTimestamp);                         // Output -> 2024-12-03T02:06:21.784Z (Current date and time)


//* ****************************************************
//* Date and Time Components
//* ****************************************************

const currDate = new Date();

//* 1. getFullYear()
// Returns the year as a four-digit number.

console.log(currDate.getFullYear());                    // Output -> 2024
// OR
console.log(new Date().getFullYear());                  // Output -> 2024


//* 2. getMonth()
// Returns the month as a number  (0-11, where 0 = January).
console.log(currDate.getMonth());                       // Output -> 11 (December)


//* 3. getDate()
// Returns the day of the month as a number (1-31).
console.log(currDate.getDate());                        // Output -> 3


//* 4. getDay()
// Returns the day of the week as a number (0-6, where 0 = Sunday).
console.log(currDate.getDay());                         // Output -> 2 (Tuesday)


//* 5. getHours()
// Returns the hour as a number (0-23).
console.log(currDate.getHours());                       // Output -> 10 (10 AM) => current hour


//* 6. getMinutes()
// Returns the minute as a number (0-59).
console.log(currDate.getMinutes());                     // Output -> 59 (49 minutes) => current minute


//* 7. getSeconds()
// Returns the second as a number (0-59).
console.log(currDate.getSeconds());                     // Output -> 30 (30 seconds) => current second


//* 8. getMilliseconds()
// Returns the milliseconds as a number (0-999).
console.log(currDate.getMilliseconds());                // Output -> 915 (915 milliseconds) => current millisecond


//* ****************************************************
//* String Representation of Dates and Times
//* Convert a date to a readable string.
//* ****************************************************

const currentDate = new Date();

//* 1. toString()
// Returns a string representation of the date in the local time zone.
console.log(currentDate.toString());                    // Output -> Tue Dec 03 2024 11:13:17 GMT+0900 (Japanese Standard Time)


//* 2. toDateString()
// Returns only the date portion.
console.log(currentDate.toDateString());                // Output -> Tue Dec 03 2024


//* 3. toTimeString()
// Returns only the time portion.
console.log(currentDate.toTimeString());                // Output -> 11:15:05 GMT+0900 (Japanese Standard Time)


//* 4. toLocaleString()
// Returns a string representation of the date and time in the local time zone.
console.log(currentDate.toLocaleString());              // Output -> 2024/12/3 11:16:24


//* 5. toISOString()
// Returns a string representation of the date and time in the ISO 8601 format.
console.log(currentDate.toISOString());                 // Output -> 2024-12-03T02:18:42.587Z


//* 6. toLocaleDateString()
// Returns a string representation of the date in the local time zone.
console.log(currentDate.toLocaleDateString());          // Output -> 2024/12/3


//* 7. toLocaleTimeString()
// Returns a string representation of the time in the local time zone.
console.log(currentDate.toLocaleTimeString());          // Output -> 11:19:41


//* ****************************************************
//* Setting Date Components
//* ****************************************************

const newDate = new Date();

//* 1. setFullYear()
// Sets the year of the date.

newDate.setFullYear(2025);                              // Sets the year to 2025
console.log(newDate);                                   // Output -> 2025-12-03T02:28:02.044Z


//* 2. setMonth()
// Sets the month of the date, months are 0-indexed (0 = January, 11 = December).

newDate.setMonth(9);                                    // Sets the month to October
console.log(newDate);                                   // Output -> 2025-10-03T02:29:29.299Z


//* 3. setDate()
// Sets the day of the date.

newDate.setDate(20);                                    // Sets the day to 20
console.log(newDate);                                   // Output -> 2025-10-20T02:30:07.756Z


//* 4. setHours(), setMinutes(), setSeconds(), setMilliseconds()
// Sets the hours, minutes, seconds, or milliseconds of the date.

newDate.setHours(18);                                   // Sets the time to 6 PM
newDate.setMinutes(45);                                 // Sets the minutes to 45
newDate.setSeconds(30);                                 // Sets the seconds to 30
newDate.setMilliseconds(500);                           // Sets the milliseconds to 500

console.log(newDate);                                   // Output -> 2025-10-20T09:45:30.500Z
console.log(newDate.toLocaleString());                  // Output -> 2025/10/20 18:45:30


//* ****************************************************
//* Count Down Timer For Olympics
//* ****************************************************

const today = new Date();
const olympicsDate = new Date("2028-07-14T00:00:00");
const timeDiff = olympicsDate - today;

const remainingDays = Math.floor(timeDiff / (1000 * 60 * 60 * 24));         // Converting milliseconds to days
const remainingHours = Math.floor(timeDiff / (1000 * 60 * 60) % 24);        // Converting milliseconds to hours
const remainingMinutes = Math.floor(timeDiff / (1000 * 60) % 60);           // Converting milliseconds to minutes
const remainingSeconds = Math.floor(timeDiff / 1000) % 60;                  // Converting milliseconds to seconds

console.log(`Time left for Olympics:`);
console.log(`${remainingDays} days, ${remainingHours} hours, ${remainingMinutes} minutes, ${remainingSeconds} seconds`);


//* ****************************************************

//* Create a Date object for January 5, 2024.
// Note: Months are zero-based (0 = January, 11 = December)
let newDate1 = new Date(2024, 0, 5);
console.log(newDate1.toDateString());                                       // Output -> Fri Jan 05 2024


//* Create a Date object for December 5, 2024.
// December is represented by 11
let newDate2 = new Date(2024, 11, 5);
console.log(newDate2.toDateString());                                       // Output -> Thu Dec 05 2024


//* Create a Date object for January 12, 2024, 5:10 AM.
// Year, Month (0-based), Day, Hour, Minute
let newDate3 = new Date(2024, 0, 12, 5, 10);
console.log(newDate3.toLocaleString());                                     // Output -> 2024/1/12 5:10:00


//* Create a Date object from a date string in ISO format (YYYY-MM-DD)
let newDate4 = new Date("2024-05-15");
console.log(newDate4.toLocaleString());                                     // Output -> 2024/5/15 9:00:00