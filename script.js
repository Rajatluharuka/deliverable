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
    axios.post("https://crudcrud.com/api/c727bc2b952e43d5aaa5c30edeb5f594/appointmentData",data)
    .then((response) => {
        showData(response.data);
    }).catch((err) => {
        console.log(err);
    });
});

window.addEventListener("DOMContentLoaded",()=>{
    axios.get("https://crudcrud.com/api/c727bc2b952e43d5aaa5c30edeb5f594/appointmentData")
    .then((response) => {
        for(let i=0;i<response.data.length;i++){
        showData(response.data[i]);
        }
    }).catch((err) => {
        console.log(err);
    });
})

document.getElementById("list").addEventListener('click',function(e) {
    if(e.target.classList.contains('delete')){
        let user=e.target.parentElement;
        let remUser = e.target.parentElement.dataset.id;
        document.getElementById("list").removeChild(user);

    axios.delete(`https://crudcrud.com/api/c727bc2b952e43d5aaa5c30edeb5f594/appointmentData/${remUser}`)
    .then((response) => {
        console.log(response);
    }).catch((err) => {
        console.log(err);
    });
 }
});

function showData(userData)
{
    let user=document.createElement('li');
    user.dataset.id =`${userData._id}`;

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