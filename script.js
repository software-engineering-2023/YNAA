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
let user4 = new User("Ahmed Hayitham", "ahmed.hayitham@project.com", "01444444444", "GUC third settelment", "_ahmed", "1");

// Create 2 clients from the existing users and add them to an array
let client1 = new Client(user1.name, user1.email, user1.phone, user1.address, user1.username, user1.password);
let client2 = new Client(user2.name, user2.email, user2.phone, user2.address, user2.username, user2.password);

account1 = new Account("Checking");
client1.accounts.push(account1);

// Create 1 banker from the users add them to an array
let banker1 = new Banker(user3.name, user3.email, user3.phone, user3.address, user3.username, user3.password);

function register() {
    // Read fields
    //alert("HEY");
     //let name = document.getElementById("name").value;
     //let email = document.getElementById("email").value;
    // let phone = document.getElementById("phone").value;
     let newusername = document.getElementById("newusername").value;
     //let newpassword = document.getElementById("newpassword").value;

     // check if username is used
     for (let i = 0; i < User.users.length; i++) {
         if (newusername === User.users[i].username) {
             alert("User name is taken!! Please choose a new One");
             return;
         }
     }
 
     // If userName not found intialize a new user
     //let newUser = new User(name, email, phone, address, newusername, newpassword);
     alert("Sign up successful! Log In Please");
     window.location.assign("login.html");
 }

 function login() {
        // Read username & password fields
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        
        if ((username === "_elazazy" && password ==="1") ||(username === "_joe" && password ==="1")) {
            window.location.assign("clientHome.html");
        }
        else{
            if((username === "_nada" && password ==="1")) {
                window.location.assign("bankerHome.html");
            }
            else {
                window.location.assign("adminHome.html");
            }
        }
 }
 

// Add your custom JavaScript code here
        const notifications = document.getElementById('notifications');

        loginForm.addEventListener('submit', e => {
            const loginForm = document.getElementById('loginForm');
            e.preventDefault();
        });

        registerForm.addEventListener('submit', e => {
            const registerForm = document.getElementById('registerForm');
            e.preventDefault();
            console.log('User registered');
            window.location.assign('login.html');
        });

        bankAccountForm.addEventListener('submit', e => {
            const bankAccountForm = document.getElementById('bankAccountForm');
            e.preventDefault();
            console.log('Bank account operation:', document.getElementById('accountType').value);
        });

        creditCardForm.addEventListener('submit', e => {
            const creditCardForm = document.getElementById('creditCardForm');
            e.preventDefault();
            console.log('Credit card application:', document.getElementById('cardType').value);
        });

        loanForm.addEventListener('submit', e => {
            const loanForm = document.getElementById('loanForm');
            e.preventDefault();
            console.log('Loan application:', document.getElementById('loanType').value, document.getElementById('loanAmount').value);
            displayTransactions();
        });

        function displayTransactions() {
            const dummyTransactions = [
                { description: 'Purchase 1', amount: -50 },
                { description: 'Purchase 2', amount: -25 },
                { description: 'Deposit', amount: 100 },
            ];
            const transactions = document.getElementById('transactions');
            dummyTransactions.forEach(transaction => {
                const li = document.createElement('li');
                li.textContent = `${transaction.description}: ${transaction.amount}`;
                transactions.appendChild(li);
            });
        }

         // Add event listeners for all forms
         redeemPointsForm.addEventListener('submit', (event) => {
            const redeemPointsForm = document.getElementById('redeemPointsForm');
            const points = document.getElementById('points');
            event.preventDefault();
            const redeemAmount = parseFloat(redeemPointsForm.redeemAmount.value);
            // Add your logic for redeeming points here
            alert(`You have successfully redeemed ${redeemAmount} points.`);
        });

        payBillForm.addEventListener('submit', (event) => {
            const payBillForm = document.getElementById('payBillForm');
            event.preventDefault();
            const paymentAmount = parseFloat(payBillForm.paymentAmount.value);
            // Add your logic for paying credit card bills here
            alert(`You have successfully paid ${paymentAmount} for your credit card bill.`);
        });

        transferForm.addEventListener('submit', (event) => {
            const transferForm = document.getElementById('transferForm');
            event.preventDefault();
            const recipient = transferForm.recipient.value;
            const transferAmount = parseFloat(transferForm.transferAmount.value);
            // Add your logic for transferring money to other bank accounts here
            alert(`You have successfully transferred ${transferAmount} to ${recipient}.`);
        });

        setReminderForm.addEventListener('submit', (event) => {
            const setReminderForm = document.getElementById('setReminderForm');
            const paymentReminders =document.getElementById('paymentReminders');
            event.preventDefault();
            const reminderDate = setReminderForm.reminderDate.value;
            // Add your logic for setting payment reminders here
            const reminderElement = document.createElement('li');
            reminderElement.textContent = `Payment reminder set for ${reminderDate}`;
            paymentReminders.appendChild(reminderElement);
        });

        payUtilityForm.addEventListener('submit', (event) => {
            const payUtilityForm = document.getElementById('payUtilityForm');
            event.preventDefault();
            const utilityType = payUtilityForm.utilityType.value;
            const utilityAmount = parseFloat(payUtilityForm.utilityAmount.value);
            // Add your logic for paying utility bills here
            alert(`You have successfully paid ${utilityAmount} for your ${utilityType} bill.`);
        });

        reportIssueForm.addEventListener('submit', (event) => {
            const reportIssueForm = document.getElementById('reportIssueForm');
            const paymentReminders =document.getElementById('paymentReminders');
            event.preventDefault();
            const issueDescription = reportIssueForm.issueDescription.value;
            // Add your logic for reporting technical issues here
            const notificationElement = document.createElement('li');
            notificationElement.textContent = `Issue reported: ${issueDescription}`;
            notifications.appendChild(notificationElement);
        });

        reportCreditCardIssueForm.addEventListener('submit', (event) => {
            const reportCreditCardIssueForm = document.getElementById('reportCreditCardIssueForm');
            event.preventDefault();
            const issueType = reportCreditCardIssueForm.issueType.value;
            // Add your logic for reporting credit card theft, loss, or damage and applying for a replacement here
            alert(`You have successfully reported a credit card ${issueType} and applied for a replacement.`);
        });