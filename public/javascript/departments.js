function departmentBtnHandler() {
    console.log('were are here');

    fetch('/api/department')
        .then(response => response.json())
        .then(data => {
            console.log('data; ', data);
        })

}

document.querySelector('#dept-btn')
    .addEventListener('click', () => {
        console.log('clicked');
        departmentBtnHandler();
    });
