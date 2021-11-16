async function editFormHandler(event) {
    event.preventDefault();

    const firstName = document.querySelector('input[name="first-name"]').value.trim();
    const lastName = document.querySelector('input[name="last-name"]').value.trim();
    const role = document.querySelector('input[name="role"]').value.trim();
    const salary = document.querySelector('input[name="current-salary"]').value.trim();
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    const response = await fetch(`/api/employees/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            firstName,
            lastName,
            role,
            salary
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/homepage/');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.edit-employee-form').addEventListener('submit', editFormHandler);
