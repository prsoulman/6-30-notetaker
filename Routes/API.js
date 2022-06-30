const router = require('express').Router();
const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);
const {v4:uuidv4} = require('uuid');

const getNotes = () => {
    return readFile('db/db.json', 'utf-8').then(rawNotes => {
        let parsedNotes = [];
        try {
            parsedNotes = parsedNotes.concat(JSON.parse(rawNotes))
        } catch (error) {
            parsedNotes = [];
        }
        return parsedNotes;
    })
}

router.get('/api/notes',(req,res) => {
    getNotes().then(notes => res.json(notes))
})

router.post('/api/notes',(req,res) => {
    getNotes().then(oldNotes => {
        console.log(req.body)
    })
})


module.exports=router