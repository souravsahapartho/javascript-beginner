/*
⚠️ Function Name Must be isSame()

Your task is to create a function named isSame().
This function will take two arrays as input, then check if these two arrays are the same.

👉 If both arrays are the same, the function should return true. Otherwise, it should return false.

Conditions for two arrays to be considered the same:

🚩 The length of both arrays must be equal.
🚩 The value of each index in both arrays must be exactly the same.
*/



function isSame(A, B) {
    if (!Array.isArray(A) || !Array.isArray(B)) {
        return 'Invalid';
    }

    if (A.length !== B.length) {
        return false;
    }

    for (let i = 0; i < A.length; i++) {
        if (A[i] !== B[i]){
            return false;
        }
    }
    return true;
}

const A = [1, 2, 3];
const B = [1, 2, 3];

console.log(isSame(A,B));
