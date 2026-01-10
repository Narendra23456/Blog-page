/* LOGIN FUNCTION */
function login() {
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const password = document.getElementById("password").value;
    const error = document.getElementById("error");

    if (
        name === "Manjusha" &&
        phone === "7893292541" &&
        password === "Manju@pradeep"
    ) {
        document.getElementById("loginBox").style.display = "none";
        document.getElementById("birthdayPage").style.display = "block";
    } else {
        error.textContent = "Invalid details ❌";
    }
}

/* NEXT PAGE FUNCTION */
function nextPage(current) {
    document.getElementById("page" + current).classList.remove("active");
    document.getElementById("page" + (current + 1)).classList.add("active");
}

/* ENTER KEY → MOVE TO NEXT INPUT */
const inputs = document.querySelectorAll("#loginBox input");
inputs.forEach((input, index) => {
    input.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            e.preventDefault();
            if (index < inputs.length - 1) {
                inputs[index + 1].focus();
            } else {
                document.getElementById("loginBtn").click();
            }
        }
    });
});