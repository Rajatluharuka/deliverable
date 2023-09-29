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
const data = {};
document.getElementById("registration-form").addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    formData.forEach((value, key) => {
        data[key] = value;
    });
    const userData = JSON.stringify(data);
    localStorage.setItem(data.email,userData);

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

    let deleteBtn=document.createElement('button');
    deleteBtn.className = 'delete';
    deleteBtn.appendChild(document.createTextNode('Delete'));
    user.appendChild(deleteBtn);
    let editBtn=document.createElement('button');
    editBtn.className = 'edit';
    editBtn.appendChild(document.createTextNode('Edit'));
    user.appendChild(editBtn);
    userList.appendChild(user);
});
document.getElementById("list").addEventListener('click',function(e) {
    if(e.target.classList.contains('delete')){
        let user=e.target.parentElement;
        let remUser = user.childNodes[2].textContent;
        localStorage.removeItem(remUser);
        document.getElementById("list").removeChild(user);
    }
});

document.getElementById("list").addEventListener('click',function(e) {
    if(e.target.classList.contains('edit')){
        let user=e.target.parentElement;
        let remUser = user.childNodes[2].textContent;

        naam.value = user.childNodes[0].textContent;
        email.value = user.childNodes[2].textContent;
        phone.value = user.childNodes[4].textContent; 
        date.value = user.childNodes[6].textContent;
        time.value = user.childNodes[8].textContent; 
        
        localStorage.removeItem(remUser);
        document.getElementById("list").removeChild(user);
    }
});
