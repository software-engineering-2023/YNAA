// Initialize User class
class User {
    static users = [];
    constructor(name, email, phone, address, username, password) {
        this.name=name;
        this.email=email;
        this.phone=phone;
        this.address=address;
        this.username=username;
        this.password=password;
        User.users.push(this);
    }
}
// Initialize Client class 
class Client extends User {
    static count = 0; // to hold the number of clients created
    static clients = []; // save all clients
    constructor(name, email, phone, address, username, password) {
        super(name, email, phone, address, username, password);
        Client.count++;
        this.id = "C-" + Client.count;
        this.accounts = []; // hold the accounts of each user
        Client.clients.push(this);
    }
}
// Initialize Banker class
class Banker extends User {
    static bankers = [];
    static count = 0;
    constructor(name, email, phone, address, username, password) {
        super(name, email, phone, address, username, password);
        Banker.count++;
        this.id ="B-" + Banker.count;
        Banker.bankers.push(this);
    }
}

class Account {
    static count = 0;
    constructor(type) {
        Account.count++;
        this.accNumber = Account.count;
        this.status = "Running";
        this.balance = 0;
        this.type=type;
    }
}

// Create a 4 users
let user1 = new User("Mohamed Elazazy", "mohamed.elazazy@project.com", "01111111111", "GUC third settelment", "_elazazy", "1");
let user2 = new User("Youssef Mostafa", "youssef.mostafa@project.com", "01222222222", "GUC third settelment", "_joe", "1");
let user3 = new User("Nada Khaled", "nada.khaled@project.com", "01333333333", "GUC third settelment", "_nada", "1");
// let user4 = new User("Ahmed Hayitham", "ahmed.hayitham@project.com", "01444444444", "GUC third settelment", "_ahmed", "88776655");

// Create 2 clients from the existing users and add them to an array
let client1 = new Client(user1.name, user1.email, user1.phone, user1.address, user1.username, user1.password);
let client2 = new Client(user2.name, user2.email, user2.phone, user2.address, user2.username, user2.password);

account1 = new Account("Checking");
client1.accounts.push(account1);

// Create 1 banker from the users add them to an array
let banker1 = new Banker(user3.name, user3.email, user3.phone, user3.address, user3.username, user3.password);

function signup() {
   // Read fields
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let address = document.getElementById("address").value;
    let newusername = document.getElementById("newusername").value;
    let newpassword = document.getElementById("newpassword").value;

    // check if username is used
    for (let i = 0; i < User.users.length; i++) {
        if (newusername === User.users[i].username) {
            alert("User name is taken!! Please choose a new One");
            return;
        }
    }

    // If userName not found intialize a new user
    let newUser = new User(name, email, phone, address, newusername, newpassword);
    alert("Sign up successful! Log In Please");
    window.location.assign("login.html");
}

function login() {
    // Read username & password fields
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
   
    // loop on users array to search for username & password
    for (let i = 0; i < User.users.length; i++) {
       if (username === User.users[i].username && password === User.users[i].password) {
            for (let j = 0; j < Client.clients.length; i++) {
                if (Client.clients[j].username === User.users[i].username) {
                    sessionStorage.setItem("clientId", Client.clients[j].id);
                    window.location.assign("clientHome.html");
                    return;    
                }
            }
       }
   }
   
   // username & password are not found
    alert("Invalid username or password.");
    return;
}

function openAcc() {
window.location.assign("openAcc.html");
}

function closeAcc() {
    window.location.assign("closeAcc.html");
}

function selectAcc() {
    window.location.assign("selectAcc.html");
    console.log("Da5lna awel function");
    window.onload = selecttheAcc;
    // selecttheAcc();
}

function opentheAcc() {
    let accType = document.getElementById("accType");
    tempAcc = new Account(accType.value);

    let clientId = sessionStorage.getItem("clientId");

    for (let i = 0; i < Client.clients.length; i++) {
        if (Client.clients[i].id === clientId) {
            Client.clients[i].accounts.push(tempAcc);
            alert("new Account is opened successfully");
            window.location.assign("clientHome.html");
        }
    }    
}

function selecttheAcc() {
    console.log("Da5lna tany function");

    // let clientId = sessionStorage.getItem("clientId");
    // console.log("gebna el client id ", clientId);


    let newBtn = document.createElement("button");
    newBtn.textContent = "accountNum: ";
    console.log("3amlna el text elly 3ala el button");

    // let myDiv = document.querySelector("#parent");
    // console.log("gebna el div", myDiv);
    console.log("gebna el div", document.querySelector("#parent"))

    document.querySelector("#parent").appendChild(newBtn);

}