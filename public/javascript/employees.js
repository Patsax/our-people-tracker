async function employeeBtnHandler() {
    await fetch('/employees', {
        method: 'GET'
    });
}

document.querySelector('#employee-btn').addEventListener('click', employeeBtnHandler());
