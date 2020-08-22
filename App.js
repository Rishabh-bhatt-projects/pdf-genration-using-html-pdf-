const express = require('express');
const bodyParser = require('body-parser');
const pdf = require('html-pdf');


const pdfTemplate = require('./pdfdocument/template');

const app = express();
app.use(express.static('pdf'));
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post('/create-pdf', (req, res) => {
    pdf.create(pdfTemplate(req.body.Students), {}).toFile(`./pdf/${req.body.filename}.pdf`, (err) => {
        if(err) {
            res.send(Promise.reject());
        }
        res.status(201).json({
            message : "Created Successfully",
            link : `http://localhost:5000/${req.body.filename}.pdf`
        })
    });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
