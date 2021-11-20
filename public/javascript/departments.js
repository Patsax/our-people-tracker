async function departmentBtnHandler(event) {
    event.preventDefault();
    window.location.assign('/department');
    // const response = await fetch('/api/department', {
    //     method: 'GET'
    // });
}

document.querySelector('#dept-btn').addEventListener('click', departmentBtnHandler);



// // add
// async function newFormHandler(event) {
//     event.preventDefault();

//     const deptartment = docutment.querySelector('input[name="dept-name"]').value;

//     const response = await fetch(`/api/departments`, {
//         method: 'POST',
//         body: JSON.stringify({
//             deptartment
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

// document.querySelector('.new-department-form').addEventListener('submit', newFormHandler);


// // delete
// async function deleteFormHandler(event) {
//     event.preventDefault();

//     const id = window.location.toString().split('/')[
//         window.location.toString().split('/').length - 1
//     ];
//     const response = await fetch(`/api/departments/${id}`, {
//         method: 'DELETE'
//     });

//     if (response.ok) {
//         document.location.replace('/homepage/');
//     } else {
//         alert(response.statusText);
//     }
// }

// document.querySelector('.delete-department-btn').addEventListener('click', deleteFormHandler);

