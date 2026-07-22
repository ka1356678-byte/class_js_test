let marks = [45, 88, 32, 76, 90, 55];
console.log (marks)



// push to end
marks.push(67);

console.log(marks);
console.log(marks.length);

// pop remove to end value

marks.pop();

console.log(marks);
console.log(marks.length);

// shift
marks.shift();

console.log(marks);
console.log(marks.length);

// unshift
marks.unshift(67);

console.log(marks);
console.log(marks.length);

// splice

marks.splice(2, 1);

console.log(marks);

let className = "Class 8";
let totalStudents = marks.length;
let resultsPublished = false;

console.log("Class Name:", className);
console.log("Total Students:", totalStudents);
console.log("Results Published:", resultsPublished);

// ===========================
// Step 2 - Add & Remove Students
// ===========================

// New student joins
marks.push(67);

console.log("After Push:");
console.log("Marks:", marks);
console.log("Length:", marks.length);

// ===========================
// Step 3 - Grade Each Student
// ===========================

// ===========================
// Step 3 - Grade Each Student
// ===========================

// Function to return grade
function getGrade(mark) {

    if (mark >= 80) {
        return "A";
    }
    else if (mark >= 60) {
        return "B";
    }
    else if (mark >= 40) {
        return "C";
    }
    else {
        return "Fail";
    }

}

// Print every student's mark and grade
console.log("Student Grades:");

for (let i = 0; i < marks.length; i++) {

    console.log(
        "Student " + (i + 1) +
        ": " + marks[i] +
        " -> " + getGrade(marks[i])
    );

}


// ===========================
// Step 4 - Class Summary
// ===========================
function classSummary(arr) {

    let total = 0;
    let highest = arr[0];
    let passedCount = 0;

    // Loop only once
    for (let i = 0; i < arr.length; i++) {

        total = total + arr[i];

        if (arr[i] > highest) {
            highest = arr[i];
        }

        if (arr[i] >= 40) {
            passedCount++;
        }

    }

    let average = total / arr.length;

    return {
        total: total,
        average: average,
        highest: highest,
        passedCount: passedCount
    };

}

// Call function
let summary = classSummary(marks);

console.log("\nClass Summary");
console.log("Total Marks:", summary.total);
console.log("Average:", summary.average);
console.log("Highest:", summary.highest);
console.log("Passed Students:", summary.passedCount);

// ===========================
// Step 5 - Final Check
// ===========================

if (resultsPublished === false) {

    console.log("\nResults not published yet.");

}
else if (summary.average >= 60) {

    console.log("\nGreat performance overall!");

}
else {

    console.log("\nNeeds improvement.");

}

// Check if any failing mark exists
if (marks.includes(32)) {

    console.log("Some students failed");

}
else {

    console.log("No failures");

}
