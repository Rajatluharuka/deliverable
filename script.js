let naam=document.getElementById("name");
let email=document.getElementById("email");
let phone=document.getElementById("phone");
let date=document.getElementById("start");
let time=document.getElementById("time");
let forms=document.getElementById("registration-form");
document.getElementById("registration-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = {};

    formData.forEach((value, key) => {
        data[key] = value;
    });
    //localStorage.setItem(email.value,userData);
    axios.post("https://crudcrud.com/api/312a643fd4a1428b93d817f2ce81e937/appointmentData",data)
    .then((response) => {
        showData(response.data);
    }).catch((err) => {
        console.log(err);
    });
});
function showData(data)
{
    let userList=document.createElement('ul');
    let user=document.createElement('li');
    user.appendChild(document.createTextNode(naam.value));
    user.appendChild(document.createTextNode(' - '));
    user.appendChild(document.createTextNode(email.value));
    user.appendChild(document.createTextNode(' - '));
    user.appendChild(document.createTextNode(phone.value));
    user.appendChild(document.createTextNode(' - '));
    user.appendChild(document.createTextNode(date.value));
    user.appendChild(document.createTextNode(' - '));
    user.appendChild(document.createTextNode(time.value));
    userList.appendChild(user);
    forms.appendChild(userList);
}