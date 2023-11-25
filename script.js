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
let remUser = 0;

document.getElementById("registration-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = {};

    formData.forEach((value, key) => {
        data[key] = value;
    });
    if(remUser === 0){
    axios.post("https://crudcrud.com/api/de76fa8d5be74f349172845eef90623c/appointmentData",data)
    .then((response) => {
        showData(response.data);
    }).catch((err) => {
        console.log(err);
    });
}else{
    axios.put(`https://crudcrud.com/api/de76fa8d5be74f349172845eef90623c/appointmentData/${remUser}`,data)
    .then((response) => {
        showData(data);
    }).catch((err) => {
        console.log(err);
    });
}
});

window.addEventListener("DOMContentLoaded",()=>{
    axios.get("https://crudcrud.com/api/de76fa8d5be74f349172845eef90623c/appointmentData")
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

    axios.delete(`https://crudcrud.com/api/de76fa8d5be74f349172845eef90623c/appointmentData/${remUser}`)
    .then((response) => {
        console.log(response);
    }).catch((err) => {
        console.log(err);
    });
 }
});

document.getElementById("list").addEventListener('click',function(e) {
    if(e.target.classList.contains('edit')){
        let user=e.target.parentElement;
        remUser = e.target.parentElement.dataset.id;

        naam.value = user.childNodes[0].textContent;
        email.value = user.childNodes[2].textContent;
        phone.value = user.childNodes[4].textContent; 
        date.value = user.childNodes[6].textContent;
        time.value = user.childNodes[8].textContent; 
        
        document.getElementById("list").removeChild(user);
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