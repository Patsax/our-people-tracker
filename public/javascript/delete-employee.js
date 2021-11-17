async function deleteFormHandler(event) {
    event.preventDefault();

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    const response = await fetch(`/api/employees/${id}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        document.location.replace('/homepage/');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.delete-employee-btn').addEventListener('click', deleteFormHandler);