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
document.getElementById("registration-form").addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = {};

    formData.forEach((value, key) => {
        data[key] = value;
    });
    const userData = JSON.stringify(data);
    localStorage.setItem(email.value,userData);

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
    userList.appendChild(user);
});
console.log(document.getElementById("list"));
document.getElementById("list").addEventListener('click',function(e) {
    if(e.target.classList.contains('delete')){
        let user=e.target.parentElement;
        document.getElementById("list").removeChild(user);
        
        localStorage.removeItem(email.value);
    }
});
