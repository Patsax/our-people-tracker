const router = require('express').Router();
const { Department } = require('../models');

//TODO: Get all departments
// router.get('/api/deparments', (req, res) => {
//     Department.findAll({})
//         .then((departments) => res.json(departments))
//         .catch(err => console.log(err));
// });

//TODO: Get single department
// router.get('/api/department/:id', (req, res) => {
//     Department.findOne({
//         where: {
//             id: req.params.id
//         }
//     })
//         .then((department) => res.json(department))
//         .catch(err => console.log(err));
// });

// //TODO: Create a department
// router.post('api/department', (req, res) => {
//     Department.create({
//         department_name: req.body.department_name
//     }).then(Department => {
//         res.json(Department);
//     }).catch(err => console.log(err));
// });

// //TODO: Update a department
// router.put('api/department/:id', (req, res)=> {
//     Department.update({
//         department_name: req.body.department_name
//     },
//         {
//             where: {
//                 id: req.params.id
//             }
//         }).then(Department => {
//             res.json(Department);
//         });
// });

// //TODO: Delet a department
// router.delete('api/department/:id', (req, res)=> {
//     Department.destroy({
//         where: {
//             id: req.params.id
//         }
//     }).then(Department => {
//         res.json(Department);
//     });
// });

module.exports = router;