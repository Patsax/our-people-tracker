async function editFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="role-title"]').value.trim();
    const dept = document.querySelector('input[name="role-dept"]').value.trim();
    const salary = document.querySelector('input[name="salary"]').value.trim();
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    const response = await fetch(`/api/roles/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
        title,
        dept,
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

document.querySelector('.edit-role-form').addEventListener('submit', editFormHandler);
