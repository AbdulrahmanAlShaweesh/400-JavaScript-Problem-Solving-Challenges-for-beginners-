
// get the boolen value from user
// check if the value is False => returrn NO
// else if value if True => return YES. 
// other wise return unknown Value/ 
function convertBooeanToString(boolean) {
    return boolean === false? 'NO': 'YES';
}

console.log(convertBooeanToString(true))