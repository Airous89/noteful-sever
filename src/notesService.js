const folderService = {
    getAllNotes(knex) {
      return knex
      .select('*')
      .from('note')
      .then(note => {
        return note;
      });

    },
  
    addNote(knex, note) {
      return knex
        .insert(note)
        .into('note')
        .returning('*')
        .then(note => {
          return note[0]});
    },
  
    getNoteById(knex, id) {
      return knex
        .from('note')
        .select('*')
        .where('id', id).first();
    },
  
    deleteNote(knex, id) {
      return knex('notes')
        .where({ id })
        .delete();
    }
  };
  
  module.exports = folderService;