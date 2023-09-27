document.getElementById("registration-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = {};

    formData.forEach((value, key) => {
        data[key] = value;
    });
    const userData = JSON.stringify(data);
    localStorage.setItem("user",userData);
});