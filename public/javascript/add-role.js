async function newFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="role-title"]').value;
    const dept = document.querySelector('input[name="role-dept"]').value;
    const salary = document.querySelector('input[name="salary"]').value;

    const response = await fetch(`/api/roles`, {
        method: 'POST',
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
        document.location.replace('/homepage');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.add-role-form').addEventListener('submit', newFormHandler);
