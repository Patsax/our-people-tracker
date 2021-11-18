const router = require('express').Router();
const sequelize = require('../config/connection');
const { Department, Role, Employee } = require('../models');

router.get('/', (req, res) => {
    res.render('login', {});
});

router.get('/department', (req, res) => {
    res.render('/departments', {});
});

router.get('/roles', (req, res) => {
        res.render('/roles', {});
});

router.get('/employees', (req, res) => {
    res.render('/employees', {});
});

router.post("/login", (req, res) => {
    //console.log("request received");
    

    User.findOne({
        where: {
            email: req.body.email,
        },
    })
        .then((dbUserData) => {
            if (!dbUserData) {
                res.status(400).json({ message: "User not found" });
                return;
            }
            const validPassword = dbUserData.checkPassword(req.body.password);

            if (!validPassword) {
                res.status(400).json({ message: "Incorrect Password!" });
                return;
            }

            req.session.save(() => {
                //declare session variables
                req.session.user_id = dbUserData.id;
                req.session.username = dbUserData.username;
                req.session.loggedIn = true;
                //send response
                res.json({ user: dbUserData, message: "You are now logged in!" });
            });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
    });

module.exports = router;
