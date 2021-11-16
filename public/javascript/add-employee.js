async function newFormHandler(event) {
    event.preventDefault();

    const firstName = document.querySelector('input[name="first-name"]').value;
    const lastName = document.querySelector('input[name="last-name"]').value;
    const role = document.querySelector('input[name="role"]').value;

    const response = await fetch(`/api/employees`, {
        method: 'POST',
        body: JSON.stringify({
            firstName,
            lastName,
            role
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/homepage');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.new-employee-form').addEventListener('submit', newFormHandler);
