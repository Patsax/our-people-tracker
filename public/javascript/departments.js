async function departmentBtnHandler() {
    await fetch('/departments', {
        method: 'GET'
    });
}

document.querySelector('#dept-btn').addEventListener('click', departmentBtnHandler());
