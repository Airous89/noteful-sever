const foldersService = {
    getAllFolders(knex) {
      return knex
      .select('*')
      .from('folder')
      .then( folder => {
        return folder;
      });
    },
  
    addFolder(knex, folder) {
      return knex
        .insert(folder)
        .into('folder')
        .returning('*')
        .then(folder => {
          folder[0]});
    },
  
    getById(knex, id) {
      return knex
        .from('folder')
        .select('*')
        .where('id', id).first();
    }
  };
  
  module.exports = foldersService;