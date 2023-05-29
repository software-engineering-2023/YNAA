        // Add your custom JavaScript code here
        const registerForm = document.getElementById('registerForm');
        const bankAccountForm = document.getElementById('bankAccountForm');
        const creditCardForm = document.getElementById('creditCardForm');
        const loanForm = document.getElementById('loanForm');
        const transactions = document.getElementById('transactions');
        const creditCardTransactions = document.getElementById('creditCardTransactions');
        const points = document.getElementById('points');
        const redeemPointsForm = document.getElementById('redeemPointsForm');
        const payBillForm = document.getElementById('payBillForm');
        const transferForm = document.getElementById('transferForm');
        const setReminderForm = document.getElementById('setReminderForm');
        const paymentReminders =document.getElementById('paymentReminders');
        const payUtilityForm = document.getElementById('payUtilityForm');
        const reportIssueForm = document.getElementById('reportIssueForm');
        const notifications = document.getElementById('notifications');
        const reportCreditCardIssueForm = document.getElementById('reportCreditCardIssueForm');

        registerForm.addEventListener('submit', e => {
            e.preventDefault();
            console.log('User registered');
        });

        bankAccountForm.addEventListener('submit', e => {
            e.preventDefault();
            console.log('Bank account operation:', document.getElementById('accountType').value);
        });

        creditCardForm.addEventListener('submit', e => {
            e.preventDefault();
            console.log('Credit card application:', document.getElementById('cardType').value);
        });

        loanForm.addEventListener('submit', e => {
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

            dummyTransactions.forEach(transaction => {
                const li = document.createElement('li');
                li.textContent = `${transaction.description}: ${transaction.amount}`;
                transactions.appendChild(li);
            });
        }

         // Add event listeners for all forms
         redeemPointsForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const redeemAmount = parseFloat(redeemPointsForm.redeemAmount.value);
            // Add your logic for redeeming points here
            alert(`You have successfully redeemed ${redeemAmount} points.`);
        });

        payBillForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const paymentAmount = parseFloat(payBillForm.paymentAmount.value);
            // Add your logic for paying credit card bills here
            alert(`You have successfully paid ${paymentAmount} for your credit card bill.`);
        });

        transferForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const recipient = transferForm.recipient.value;
            const transferAmount = parseFloat(transferForm.transferAmount.value);
            // Add your logic for transferring money to other bank accounts here
            alert(`You have successfully transferred ${transferAmount} to ${recipient}.`);
        });

        setReminderForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const reminderDate = setReminderForm.reminderDate.value;
            // Add your logic for setting payment reminders here
            const reminderElement = document.createElement('li');
            reminderElement.textContent = `Payment reminder set for ${reminderDate}`;
            paymentReminders.appendChild(reminderElement);
        });

        payUtilityForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const utilityType = payUtilityForm.utilityType.value;
            const utilityAmount = parseFloat(payUtilityForm.utilityAmount.value);
            // Add your logic for paying utility bills here
            alert(`You have successfully paid ${utilityAmount} for your ${utilityType} bill.`);
        });

        reportIssueForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const issueDescription = reportIssueForm.issueDescription.value;
            // Add your logic for reporting technical issues here
            const notificationElement = document.createElement('li');
            notificationElement.textContent = `Issue reported: ${issueDescription}`;
            notifications.appendChild(notificationElement);
        });

        reportCreditCardIssueForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const issueType = reportCreditCardIssueForm.issueType.value;
            // Add your logic for reporting credit card theft, loss, or damage and applying for a replacement here
            alert(`You have successfully reported a credit card ${issueType} and applied for a replacement.`);
        });