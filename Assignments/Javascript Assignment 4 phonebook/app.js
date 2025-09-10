const apiUrl = 'data.json'; // Path to the JSON file 

let contacts = [];

// Fetching all contacts
async function fetchContacts() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error('Network error');
        contacts = await response.json();
        displayContacts(contacts);
    } catch (error) {
        console.error('Fetch error:', error);
        alert('Failed to load contacts.');
    }
}

// Displaying contacts in the list
function displayContacts(contactArray) {
    const contactList = document.getElementById('contactList');
    contactList.innerHTML = '';
    contactArray.forEach(contact => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${contact.name} - ${contact.phone}</span>
            <div>
                <button onclick="editContact(${contact.id})">Edit</button>
                <button onclick="deleteContact(${contact.id})">Delete</button>
            </div>`;
        contactList.appendChild(li);
    });
}

// Adding a new contact
function addContact() {
    const name = document.getElementById('nameInput').value.trim();
    const phone = document.getElementById('phoneInput').value.trim();
    if (!name || !phone) {
        alert('Please enter name and phone number.');
        return;
    }
    const newContact = {
        id: Date.now(),
        name,
        phone
    };
    contacts.push(newContact);
    displayContacts(contacts);
    document.getElementById('nameInput').value = '';
    document.getElementById('phoneInput').value = '';
}

// Editing an existing contact
function editContact(id) {
    const contact = contacts.find(c => c.id === id);
    const newName = prompt("Enter new name", contact.name);
    const newPhone = prompt("Enter new phone number", contact.phone);
    if (newName && newPhone) {
        contact.name = newName;
        contact.phone = newPhone;
        displayContacts(contacts);
    }
}

// Deleting a contact
function deleteContact(id) {
    if (confirm("Are you sure you want to delete this contact?")) {
        contacts = contacts.filter(c => c.id !== id);
        displayContacts(contacts);
    }
}

// Searching for contacts
function searchContacts() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const filtered = contacts.filter(contact =>
        contact.name.toLowerCase().includes(query) ||
        contact.phone.includes(query)
    );
    displayContacts(filtered);
}


document.getElementById('addContactBtn').addEventListener('click', addContact);
document.getElementById('searchInput').addEventListener('input', searchContacts);

fetchContacts();