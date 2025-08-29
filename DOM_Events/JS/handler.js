console.log('file added');

document
    .getElementById("btn-update-text")
    .addEventListener("click", function () {
        //   console.log("btn clicked");

        const pageTitleElement = document.getElementById("page-title");
        console.log("Updated title");
        pageTitleElement.innerText = "Updated page Title text";
    });


document
    .getElementById("btn-login")
    .addEventListener("click", function () {
        //   console.log("login btn clicked");

        const userInfoEl = document.getElementById("user-info");
        userInfoEl.innerText = "user logged in succesfully";
    });