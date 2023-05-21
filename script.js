// Intiialize user class
class User {
    constructor(name, email, phone, address, username, password) {
        this.name=name;
        this.email=email;
        this.phone=phone;
        this.address=address;
        this.username=username;
        this.password=password;
    }
}

// An array to hold users
let users = [];

// Create a 2 default users
let defaultuser1 = new User("Mohamed Elazazy", "mohamed.elazazy@project.com", "01111111111", "GUC third settelment", "_elazazy", "12345678");
let defaultuser2 = new User("Youssef Mostafa", "youssef.mostafa@project.com", "01222222222", "GUC third settelment", "_joe", "11223344");
let defaultuser3 = new User("Nada Khaled", "nada.khaled@project.com", "01333333333", "GUC third settelment", "_nada", "87654321");

// Add the default user to the array
users.push(defaultuser1);
users.push(defaultuser2);
users.push(defaultuser3);

// Log in function
function login() {

    // Read username & password fields
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // loop on users array to search for username & password
    for (let i = 0; i < users.length; i++) {
        if (username === users[i].username && password === users[i].password) {
            alert("Login successful!");
            return user[i];
        }
    }

    // username & password are not found
    alert("Invalid username or password.");
}

function signup() {

    // Read fields
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let address = document.getElementById("address").value;
    let newusername = document.getElementById("newusername").value;
    let newpassword = document.getElementById("newpassword").value;

    // check if username is used
    for (let i = 0; i < users.length; i++) {
        if (newusername === users[i].username) {
            alert("User name is taken!! Please choose a new One");
            return;
        }
    }

    // If userName not found intialize a new user
    let user = new User(name, email, phone, address, newusername, newpassword);
    users.push(user);

    // Update users in local storage
    alert("Sign up successful! Log In Please");
}