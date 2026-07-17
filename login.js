

const loginForm = document.getElementById("loginForm");
const email = document.getElementById("email");
const password = document.getElementById("password");

const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

const togglePassword = document.getElementById("togglePassword");

const loginBtn = document.querySelector(".login-btn");

togglePassword.addEventListener("click", () => {

    if (password.type === "password") {

        password.type = "text";

        togglePassword.classList.remove("fa-eye");

        togglePassword.classList.add("fa-eye-slash");

    } else {

        password.type = "password";

        togglePassword.classList.remove("fa-eye-slash");

        togglePassword.classList.add("fa-eye");

    }

});


function isValidEmail(emailValue) {

    const pattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return pattern.test(emailValue);

}



loginForm.addEventListener("submit", function(e) {

    e.preventDefault();

    emailError.textContent = "";
    passwordError.textContent = "";

    let valid = true;

    // Email

    if (email.value.trim() === "") {

        emailError.textContent = "Email is required";

        valid = false;

    } else if (!isValidEmail(email.value.trim())) {

        emailError.textContent = "Enter a valid email";

        valid = false;

    }

    // Password

    if (password.value.trim() === "") {

        passwordError.textContent = "Password is required";

        valid = false;

    } else if (password.value.length < 6) {

        passwordError.textContent =
            "Password must be at least 6 characters";

        valid = false;

    }

    // Success

    if (valid) {

        loginBtn.innerHTML =
            '<i class="fa-solid fa-spinner fa-spin"></i> Logging in...';

        loginBtn.disabled = true;

        setTimeout(() => {

            alert("Login Successful!");

            window.location.href = "dashboard.html";

        }, 1800);

    }

});
