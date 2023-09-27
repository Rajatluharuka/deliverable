document.getElementById("registration-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    formData.forEach((value, key) => {
        localStorage.setItem(key,value);
    });
});