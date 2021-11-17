async function departmentBtnHandler(event) {
    event.preventDefault();

    const response = await fetch('/departments', {
        method: 'GET'
    });

    if (response.ok) {
        document.location.replace('/homepage/');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.dept-btn').addEventListener('click', departmentBtnHandler);
