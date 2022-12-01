const util = require('util');
const fs = require('fs');


const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Tarot {
  read() {
    return readFileAsync('db/tarot-images.json', 'utf8');
  }

  write(note) {
    return writeFileAsync('db/db.json', JSON.stringify(note));
  }

  getTarot() {
    return this.read().then((cards) => {
        let parsedCards;

        // If notes isn't an array or can't be turned into one, send back a new empty array
        try {
          parsedCards = [].concat(JSON.parse(cards));
        } catch (err) {
          parsedCards = [];
        }
  
        return parsedCards;
  
    });
  }

//   addNote(note) {
//     const { title, text } = note;

//     if (!title || !text) {
//       throw new Error("Note 'title' and 'text' cannot be blank");
//     }

//     // Add a unique id to the note using uuid package
//     const newNote = { title, text, id: uuidv1() };

//     // Get all notes, add the new note, write all the updated notes, return the newNote
//     return this.getNotes()
//       .then((notes) => [...notes, newNote])
//       .then((updatedNotes) => this.write(updatedNotes))
//       .then(() => newNote);
//   }

//   removeNote(id) {
//     // Get all notes, remove the note with the given id, write the filtered notes
//     return this.getNotes()
//       .then((notes) => notes.filter((note) => note.id !== id))
//       .then((filteredNotes) => this.write(filteredNotes));
//   }
}

module.exports = new Tarot();
