async function roleBtnHandler() {
    await fetch('/roles', {
        method: 'GET'
    });
}

document.querySelector('#role-btn').addEventListener('click', roleBtnHandler());
