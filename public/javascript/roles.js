async function roleBtnHandler(event) {
    event.preventDefault();
    window.location.assign('/roles')
    // const response = await fetch('/api/role', {
    //     method: 'GET'
    // });
}

document.querySelector('#role-btn').addEventListener('click', roleBtnHandler);


// // add
// async function newFormHandler(event) {
//     event.preventDefault();

//     const title = document.querySelector('input[name="role-title"]').value;
//     const dept = document.querySelector('input[name="role-dept"]').value;
//     const salary = document.querySelector('input[name="salary"]').value;

//     const response = await fetch(`/api/roles`, {
//         method: 'POST',
//         body: JSON.stringify({
//             title,
//             dept,
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

// document.querySelector('.add-role-form').addEventListener('submit', newFormHandler);


// // delete
// async function deleteFormHandler(event) {
//     event.preventDefault();

//     const id = window.location.toString().split('/')[
//         window.location.toString().split('/').length - 1
//     ];
//     const response = await fetch(`/api/roles/${id}`, {
//         method: 'DELETE'
//     });

//     if (response.ok) {
//         document.location.replace('/homepage/');
//     } else {
//         alert(response.statusText);
//     }
// }

// document.querySelector('.delete-role-btn').addEventListener('click', deleteFormHandler);
