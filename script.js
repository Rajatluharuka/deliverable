let naam=document.getElementById("name");
let email=document.getElementById("email");
let phone=document.getElementById("phone");
let date=document.getElementById("start");
let time=document.getElementById("time");
let forms=document.getElementById("registration-form");
let userList=document.createElement('ul');
userList.className = 'userList';
userList.id = 'list';
forms.appendChild(userList);

document.getElementById("registration-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = {};

    formData.forEach((value, key) => {
        data[key] = value;
    });
    axios.post("https://crudcrud.com/api/0c1524c3b83845bf880a83f2514afe02/appointmentData",data)
    .then((response) => {
        showData(response.data);
    }).catch((err) => {
        console.log(err);
    });
});

window.addEventListener("DOMContentLoaded",()=>{
    axios.get("https://crudcrud.com/api/0c1524c3b83845bf880a83f2514afe02/appointmentData")
    .then((response) => {
        for(let i=0;i<response.data.length;i++){
        showData(response.data[i]);
        }
    }).catch((err) => {
        console.log(err);
    });
})

function showData(userData)
{
    let user=document.createElement('li');
    user.appendChild(document.createTextNode(userData.name));
    user.appendChild(document.createTextNode(' - '));
    user.appendChild(document.createTextNode(userData.email));
    user.appendChild(document.createTextNode(' - '));
    user.appendChild(document.createTextNode(userData.phone));
    user.appendChild(document.createTextNode(' - '));
    user.appendChild(document.createTextNode(userData.date));
    user.appendChild(document.createTextNode(' - '));
    user.appendChild(document.createTextNode(userData.time));

    let deleteBtn=document.createElement('button');
    deleteBtn.className = 'delete';
    deleteBtn.appendChild(document.createTextNode('Delete'));
    user.appendChild(deleteBtn);
    let editBtn=document.createElement('button');
    editBtn.className = 'edit';
    editBtn.appendChild(document.createTextNode('Edit'));
    user.appendChild(editBtn);
    userList.appendChild(user);
}