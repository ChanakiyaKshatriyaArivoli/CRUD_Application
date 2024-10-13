let users = [];
const form = document.getElementById('crud-form');
const tableBody = document.querySelector('#user-table tbody');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;

    if (name && age) {
        const newUser = { id: Date.now(), name, age };
        users.push(newUser);
        renderTable();
        form.reset();
    }
});

function renderTable() {
    tableBody.innerHTML = '';
    users.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.name}</td>
            <td>${user.age}</td>
            <td>
                <button onclick="editUser(${user.id})">Edit</button>
                <button onclick="deleteUser(${user.id})">Delete</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

function deleteUser(id) {
    users = users.filter(user => user.id !== id);
    renderTable();
}

function editUser(id) {
    const user = users.find(user => user.id === id);
    document.getElementById('name').value = user.name;
    document.getElementById('age').value = user.age;
    deleteUser(id);
}
