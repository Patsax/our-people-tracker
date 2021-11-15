async function editFormHandler(event) {
    event.preventDefault();

    const department = document.querySelector('input[name="dept-name"]').value.trim();
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    const response = await fetch(`/api/departments/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            department
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

document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);
