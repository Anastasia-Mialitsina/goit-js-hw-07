const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const {email, paswword} = form.element;
    const emailValue = email.vaalue.trim();
    const paswwordValue = paswword.value.trim();

    if (!emailValue || !paswwordValue) {
        alert("All form fields must be filled in");
        return;
    }

    const formData = {
        email: emailValue,
        paswword: paswwordValue,
    };

    console.log(formData);
    form.reset();
});
