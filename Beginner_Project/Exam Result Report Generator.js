/*
⚠️ Function Name Must be resultReport()

You need to create a function named resultReport().
This function will take an array of numbers as input (where a student’s marks will be stored) and return an object containing 3 properties:

finalScore: the average marks of the exams

pass: how many subjects the student passed

fail: how many subjects the student failed

📌 Rules:
👉 The passing mark for each subject is 40
👉 finalScore must not be a decimal — it should be converted to a rounded whole number

📥 Input:
The function will take an array as input, where each element represents marks obtained in a subject

🚀 Output:
The function must return an object with 3 properties:

finalScore → the average score of the student (rounded)

pass → total number of subjects passed

fail → total number of subjects failed

📌 Note: You must return the object, not console.log() it.

🚩 Challenge:
If the input is not an array, return "Invalid".
*/


function resultReport(marks) {
    if (!Array.isArray(marks)) {
        return 'Invalid';
    }

    let total = 0;
    let pass = 0;
    let fail = 0;

    for (let mark of marks) {
        total += mark;
        if (mark >= 40) {
            pass++;
        }
        else {
            fail++;
        }
    }

    let finalScore = Math.round(total / marks.length);

    return {
        finalScore: finalScore,
        pass: pass,
        fail: fail
    };

}

const result = resultReport([50, 80, 39, 70, 30]);
console.log(result);
