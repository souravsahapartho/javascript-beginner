let current = 81;

const intervalId = setInterval(() => {
  console.log(current);

  if (current === 65) {
    clearInterval(intervalId);
    console.log("✔ Countdown complete");
  } else {
    current--;
  }
}, 1000);


/***

Implement a countdown timer that counts down from 81 to 65.

 */

