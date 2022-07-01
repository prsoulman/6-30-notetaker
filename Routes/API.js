const router = require('express').Router();
const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
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
    saveNotes().then(oldNotes => {
        console.log(req.body)
        
    })
})
router.delete('/api/notes'),(req,res) => {
    getNotes().then(notes => res.json(notes))
}

        // // Display index.html when all other routes are accessed
        // app.get('*', (req,res) => {
        //     res.sendFile(path.join(__dirname, "../public/index.html"));
        // });

        // //updates the json file whenever a note is added or deleted
        // function updateDb() {
        //     fs.writeFile("db/db.json",JSON.stringify(notes,'\t'),err => {
        //         if (err) throw err;
        //         return true;
        //     });


module.exports=router