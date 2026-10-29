let users = [];
const demo = 1500;

const dark = document.getElementById('dark')


let i = 0

dark.addEventListener('click', () => {
    i++
    if (i % 2 == 0){
        document.head.innerHTML = `
        <style>
.container {
    margin: 50px auto;
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
    box-shadow: 0px 0px 10px 1px blue;
    width: 70%;
    border-radius: 10px;
    padding: 15px;
    background:  rgb(255, 255, 255);
    backdrop-filter: blur(10px);
}


    #dark{
 position: absolute;
 top: 20px;
 width: 80px;
 right: 20px;
 border-radius: 10px ;
 padding: 10px 20px;
 animation: haha 0.1s;
}

body {
    font-family: Arial, Helvetica, sans-serif;
    background-color: #f3f3f3;
    height:  100vh;
}

button {
    background-color: rgba(0, 0, 255, 0.588);
    border: none;
    color: white;
    padding: 10px;
    border-radius: 5px;
    width: 180px;

}

button:hover {
    background-color: red;
    transition: 8s;

}

button:focus {
    animation: haha 0.1s;

}

input {
    background-color: #ffffff;
    border: 1px solid black;
    padding: 10px;
    width: 70%;
    outline: none;
    border-radius: 5px;
    box-shadow:
        0 0 4px rgb(4, 255, 4),
        0 0 10px blue;
}

.controls {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
}

@keyframes haha {
    0% {
        transform: rotate(0deg);

    }

    100% {
        transform: rotate(1800deg);

    }
}

.user-card {
    background-color: #fff;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 170px;
    text-align: center;
    height: 200px;
    transform: scale(0.9);
    flex-direction: column;
    transition: 0.4s;

    box-shadow: 0px 0px 10px 0px black;
}

.user-card:hover {
    box-shadow: 0px 0px 50px 0px black;
    transform: translateY(-10px);
}

.user-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    flex-wrap: wrap;
    gap: 10px;
}


        </style>
    `}
else{
document.head.innerHTML = `
        <style>
.container {
    margin: 50px auto;
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
    box-shadow: 0px 0px 15px 1px rgb(146, 166, 255);
    width: 70%;
    border-radius: 10px;
    padding: 15px;
    background:  rgba(255, 255, 255, 0.225);
    backdrop-filter: blur(10px);
}


    #dark{
 position: fixed;
 top: 20px;
 width: 80px;
 right: 20px;
 z-index: 1;
 border-radius: 10px ;
 animation: haha 0.1s;
 padding: 10px 20px;
}

body {
    font-family: Arial, Helvetica, sans-serif;
    background-color: #272727;
    color: white;
    height:  100vh;
}

button {
    background-color: rgb(0, 0, 255);
    border: none;
    color: white;
    padding: 10px;
    border-radius: 5px;
    width: 180px;
    transition: 8s;

}

button:hover {
    background-color: yellow;

}

button:focus {
    animation: haha 0.1s;

}

input {
    background-color: #ffffff;
    border: 1px solid black;
    padding: 10px;
    width: 70%;
    outline: none;
    border-radius: 5px;
    box-shadow:
        0 0 4px rgb(4, 255, 4),
        0 0 10px blue;
}

.controls {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
}

@keyframes haha {
    0% {
        transform: rotate(0deg);

    }

    100% {
        transform: rotate(1800deg);

    }
}

.user-card {
    background-color: #fff;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 170px;
    text-align: center;
    height: 200px;
    transform: scale(0.9);
    flex-direction: column;
    transition: 0.4s;

    box-shadow: 0px 0px 10px 0px black;
}

.user-card:hover {
    box-shadow: 0px 0px 50px 0px black;
    transform: translateY(-10px);
}

.user-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    flex-wrap: wrap;
    gap: 10px;
}

        </style>
`}


})




function fetchUser() {
    loader(true)
    userList().innerHTML = '';

    fetch('https://dummyjson.com/users?limit=10')
        .then(r => r.json())
        .then(d => new Promise(res => setTimeout(() => res(d), demo)))
        .then(d => {
            users = d.users.map(u => ({
                name: u.firstName + " " + u.lastName,
                age: u.age,
                picture: u.image
            }));
            displayUsers(users)

        })
        .catch(error  => (userList().innerHTML = 'Ошибка в:  ' + error.message))
        .finally(() => loader(false));

}
function displayUsers(list) {
    userList().innerHTML = list.map(u => `
        <div class="user-card">
        <img src="${u.picture}" alt="">
        <p>${u.name}, ${u.age} лет</p>
        </div>`).join('')
}
function sortUser(type) {
    users.sort((a, b) => type === "name"
        ? a.name.localeCompare(b.name)
        : a.age - b.age
    );
    displayUsers(users);
}

function filterUsers() {
    const q = document.getElementById("filterInput").value.toLowerCase();
    displayUsers(users.filter(u => u.name.toLowerCase().includes(q)));
}

function userList() {
    return document.getElementById("userList");
}

function loader(show) {
    document.querySelector(".loader").style.display = show ? "block" : "none";
}


































































































































































































