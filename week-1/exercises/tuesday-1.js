/*  The following array contains multiple data types.
    Normalize them by converting them all to numbers using a function
    and log the result in the console */

const data = [
    1,
    2,
    "3",
    "4",
    5
]

function convertArrayStringsToNumbers() {
    const newData = data.map(function (str) {
        // using map() to convert array of strings to numbers

        return parseInt(str);
    });
    console.log(newData);
}
convertArrayStringsToNumbers();
/* Your code here should convert the data array to an array containing only numbers and no strings and log the code to the console. */