// We'll ensure that the site has been properly loaded before we can use our event listeners
window.onload = event => {
    console.log("index.html is working")
    let loginBtn = document.querySelector("#login_btn");
    loginBtn.addEventListener("click", () => {
        window.location.href = "/tasks";
    });

};
