async function employeeBtnHandler() {
    event.preventDefault();
    window.location.assign('/employees')
    // const response = await fetch('/api/employee', {
    //     method: 'GET'
    // });
};

document.querySelector('#employee-btn').addEventListener('click', employeeBtnHandler);



// async function newFormHandler(event) {
//     event.preventDefault();

//     const firstName = document.querySelector('input[name="first-name"]').value;
//     const lastName = document.querySelector('input[name="last-name"]').value;
//     const role = document.querySelector('input[name="role"]').value;
//     const salary = document.querySelector('input[name="current-salary"]').value;

//     const response = await fetch(`/api/employees`, {
//         method: 'POST',
//         body: JSON.stringify({
//             firstName,
//             lastName,
//             role,
//             salary
//         }),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     });

//     if (response.ok) {
//         document.location.replace('/homepage');
//     } else {
//         alert(response.statusText);
//     }
// }

// document.querySelector('.new-employee-form').addEventListener('submit', newFormHandler);



// async function deleteFormHandler(event) {
//     event.preventDefault();

//     const id = window.location.toString().split('/')[
//         window.location.toString().split('/').length - 1
//     ];
//     const response = await fetch(`/api/employees/${id}`, {
//         method: 'DELETE'
//     });

//     if (response.ok) {
//         document.location.replace('/homepage/');
//     } else {
//         alert(response.statusText);
//     }
// }

// document.querySelector('.delete-employee-btn').addEventListener('click', deleteFormHandler);

