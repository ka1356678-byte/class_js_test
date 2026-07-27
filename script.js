// let marks = [45, 88, 32, 76, 90, 55];
// console.log (marks)



// // push to end
// marks.push(67);

// console.log(marks);
// console.log(marks.length);

// // pop remove to end value

// marks.pop();

// console.log(marks);
// console.log(marks.length);

// // shift
// marks.shift();

// console.log(marks);
// console.log(marks.length);

// // unshift
// marks.unshift(67);

// console.log(marks);
// console.log(marks.length);

// // splice

// marks.splice(2, 1);

// console.log(marks);

// let className = "Class 8";
// let totalStudents = marks.length;
// let resultsPublished = false;

// console.log("Class Name:", className);
// console.log("Total Students:", totalStudents);
// console.log("Results Published:", resultsPublished);

// // ===========================
// // Step 2 - Add & Remove Students
// // ===========================

// // New student joins
// marks.push(67);

// console.log("After Push:");
// console.log("Marks:", marks);
// console.log("Length:", marks.length);

// // ===========================
// // Step 3 - Grade Each Student
// // ===========================

// // ===========================
// // Step 3 - Grade Each Student
// // ===========================

// // Function to return grade
// function getGrade(mark) {

//     if (mark >= 80) {
//         return "A";
//     }
//     else if (mark >= 60) {
//         return "B";
//     }
//     else if (mark >= 40) {
//         return "C";
//     }
//     else {
//         return "Fail";
//     }

// }

// // Print every student's mark and grade
// console.log("Student Grades:");

// for (let i = 0; i < marks.length; i++) {

//     console.log(
//         "Student " + (i + 1) +
//         ": " + marks[i] +
//         " -> " + getGrade(marks[i])
//     );

// }


// // ===========================
// // Step 4 - Class Summary
// // ===========================
// function classSummary(arr) {

//     let total = 0;
//     let highest = arr[0];
//     let passedCount = 0;

//     // Loop only once
//     for (let i = 0; i < arr.length; i++) {

//         total = total + arr[i];

//         if (arr[i] > highest) {
//             highest = arr[i];
//         }

//         if (arr[i] >= 40) {
//             passedCount++;
//         }

//     }

//     let average = total / arr.length;

//     return {
//         total: total,
//         average: average,
//         highest: highest,
//         passedCount: passedCount
//     };

// }

// // Call function
// let summary = classSummary(marks);

// console.log("\nClass Summary");
// console.log("Total Marks:", summary.total);
// console.log("Average:", summary.average);
// console.log("Highest:", summary.highest);
// console.log("Passed Students:", summary.passedCount);

// // ===========================
// // Step 5 - Final Check
// // ===========================

// if (resultsPublished === false) {

//     console.log("\nResults not published yet.");

// }
// else if (summary.average >= 60) {

//     console.log("\nGreat performance overall!");

// }
// else {

//     console.log("\nNeeds improvement.");

// }

// // Check if any failing mark exists
// if (marks.includes(32)) {

//     console.log("Some students failed");

// }
// else {

//     console.log("No failures");

// }



// // let name = "Aabiyah";

// // let result = name.substring(0, 3);

// // console.log(result);

// // let name2 = "kamran";
// // let results = name.substring(0, 3);
// // console.log(result);

// // // let text = "Pakistan";

// // // console.log(text.substring(3));

// // let text = "aabyahkamran";

// // console.log(text.substring(4));

// // let name3 = "   Aabiyah   ";

// // console.log(name.trim());

// // let name4 = "  kamran1  ";
// // console.log(name4.trim());

// // let text = "I love JavaScript";

// // let result = text.split(" ");

// // console.log(result);

// // let fruits = "Apple,Mango,Banana,Orange";

// // let result2 = fruits.split(",");

// // console.log(result2);

// // let date = "28-07-2026";

// // let result3 = date.split(",");

// // console.log(result3);

// // let date = "28-07-2026";

// // let result4 = date.split("-");

// // console.log(result4[0] + "/" + result4[1] + "/" + result4[2]);

// // let fruits = ["Apple", "Mango", "Banana"];

// // let result = fruits.join(",");

// // console.log(result);

// // let fruits1 = "Apple,Mango,Banana,Orange";

// // let result2 = fruits1.split("-");

// // console.log(result2);

// // let date = ["28","07","2026"];

// // let result5 = date.join("/");
// // console.log(result5);

// // // let date = ["28", "07", "2026"];

// // // let result = date.join("/");

// // // console.log(result);

// // let text = "I love JavaScript";

// // console.log(text.includes("you"));

// // let today = new Date();

// // console.log(today.getDate());
// // console.log(today);
// // let now = new Date();

// // console.log(now.getMilliseconds());

// // let birthDate = new Date("1995-12-04");
// // let today = new Date();

// // let ageInMilliseconds = today - birthDate;

// // console.log(ageInMilliseconds);

// let microseconds = 966883208700;

// let milliseconds = microseconds / 1000;

// let date6 = new Date(milliseconds);

// console.log(date6);


let username = " Ahmed_Khan99 ";
let city = "Karachi,Lahore,Islamabad,Multan";
let cnic = "42101-1234567-1";
let bio = "I am a MERN stack student learning JavaScript at Saylani.";

// Remove spaces
let cleanUsername = username.trim();
console.log(cleanUsername);
console.log(cleanUsername.length);

// Last 2 digits of CNIC
console.log(cnic.slice(-2));

// Split city
let cityArray = city.split(",");
console.log(cityArray);

// Join city
console.log(cityArray.join(" | "));

// Check city
console.log(city.includes("Karachi"));
console.log(city.includes("Lahore"));

// Bio
console.log(bio.includes("JavaScript"));
console.log(bio.toUpperCase());
console.log(bio.toLowerCase());

// Count words
console.log(bio.split(" ").length);


// ===========================
// Part B - Validation
// ===========================

// Name
function isNameValid(name){

    name = name.trim();

    return name.length >= 3 && isNaN(name);
}

// Username
function isUsernameValid(username){

    username = username.trim();

    return username.length >= 5 &&
           username.length <= 15 &&
           !username.includes(" ");
}


// City
function isCityValid(city){

    city = city.trim();

    return city.length >= 3;
}

// Phone
function isPhoneValid(phone){

    return phone.startsWith("03") &&
           phone.length == 11 &&
           !isNaN(phone);
}

// Bio
function isBioValid(bio){

    bio = bio.trim();

    let words = bio.split(" ");

    return bio.length >= 50 &&
           words.length >= 10;
}

// Bonus
function isPasswordMatch(password, confirmPassword){

    return password === confirmPassword;
}

// Auto lowercase username
let usernameInput = document.getElementById("username");

usernameInput.addEventListener("input", function(){

    this.value = this.value.toLowerCase();

});


// Form Submit

document.getElementById("signupForm").addEventListener("submit", function(event){

    event.preventDefault();

    let fullName = document.getElementById("fullName").value;
    let username = document.getElementById("username").value;
    let city = document.getElementById("city").value;
    let phone = document.getElementById("phone").value;
    let bio = document.getElementById("bio").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if(!isNameValid(fullName)){
        alert("Invalid Full Name");
    }
    else if(!isUsernameValid(username)){
        alert("Invalid Username");
    }
    else if(!isCityValid(city)){
        alert("Invalid City");
    }
    else if(!isPhoneValid(phone)){
        alert("Invalid Phone Number");
    }
    else if(!isBioValid(bio)){
        alert("Invalid Bio");
    }
    else if(!isPasswordMatch(password, confirmPassword)){
        alert("Password does not match");
    }
    else{
        alert("Signup Successful!");
    }

});
