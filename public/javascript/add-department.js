async function newFormHandler(event) {
    event.preventDefault();

    const deptartment = docutment.querySelector('input[name="dept-name"]').value;

    const response = await fetch(`/api/departments`, {
        method: 'POST',
        body: JSON.stringify({
            deptartment
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

document.querySelector('.new-department-form').addEventListener('submit', newFormHandler);
