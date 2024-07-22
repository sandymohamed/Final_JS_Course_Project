// Variables + Strings + Objects
let contacts = [];

// Functions
function addContact() {
    // Variables + Strings
    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;
    let email = document.getElementById('email').value;

    // Conditions
    if (name === "" || phone === "" || email === "") {
        alert("Please fill out all fields.");
        return;
    }

    // Creating an Object
    let contact = {
        name: name,
        phone: phone,
        email: email
    };

    // Adding Object to an Array
    contacts.push(contact);

    // Reset form fields
    document.getElementById('name').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('email').value = '';

    // Display Contacts
    displayContacts();
}

function displayContacts() {
    let contactList = document.getElementById('contacts');
    contactList.innerHTML = ''; // Clear the list

    // Loops
    for (let i = 0; i < contacts.length; i++) {
        let contact = contacts[i];
        let li = document.createElement('li');
        li.textContent = `Name: ${contact.name}, * Phone: ${contact.phone}, * Email: ${contact.email}`;
        contactList.appendChild(li);
    }
}

function searchContact() {
    let searchTerm = document.getElementById('search').value.toLowerCase();
    let contactList = document.getElementById('contacts');
    contactList.innerHTML = ''; // Clear the list

    // Loops + Conditions
    for (let i = 0; i < contacts.length; i++) {
        let contact = contacts[i];
        if (contact.name.toLowerCase().includes(searchTerm) ||
            contact.phone.toLowerCase().includes(searchTerm) ||
            contact.email.toLowerCase().includes(searchTerm)) {
            let li = document.createElement('li');
            li.textContent = `Name: ${contact.name}, * Phone: ${contact.phone}, * Email: ${contact.email}`;
            contactList.appendChild(li);
        }
    }
}

// Display contacts on page load (if any)
displayContacts();
