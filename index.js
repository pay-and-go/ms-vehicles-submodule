const express = require('express');
const modelo = require('./models');

const app = express()
const port = process.env.PORT || '3000'

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/vehiculo/', function (req, res)  {
    console.log(req.body);
    modelo.vehicle.findAll({
        where: req.body
    }).then(
        (successMessage) => {
            res.send(successMessage);
        }
    );
});

app.post('/vehiculo/', function (req, res) {
    console.log(req.body);
    modelo.vehicle.create(req.body).then(
        (successMessage) => {
            res.send('Got a POST request');
        }
    );
});

app.put('/vehiculo/:dni/', function (req, res) {
    console.log(req.body);
    modelo.vehicle.update(req.body, {
        where: {
            id: req.params.dni
        }
    }).then(
        (successMessage) => {
            res.send('Got a PUT request');
        }
    );
});

app.delete('/vehiculo', function (req, res) {
    console.log(req.body);
    modelo.vehicle.destroy({
        where: req.body
    }
        ).then(
        (successMessage) => {
            res.send('Got a DELETE request');
        }
    );
});


app.listen(port, () => {
    console.log(`[Express App] The app is listening on port: ${port}`)
})