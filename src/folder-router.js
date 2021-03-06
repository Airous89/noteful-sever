'use strict';

const express = require('express');

const folderRouter = express.Router();
const bodyParser = express.json();
const folderService = require('./foldersService');
const xss = require('xss');

folderRouter
  .route('/')
  .get((req, res, next) => {
    folderService
      .getAllFolder(req.app.get('db'))
      .then(folders => {
        let newFolders = folders.map(folder => {
          return { id: folder.id.toString(), name: xss(folder.folder_name) };
        });
        return newFolders;
      })
      .then(sanitizedFolders => {
        res.json(sanitizedFolders);
      })
      .catch(next);
  })

  .post(bodyParser, (req,res,next) => {
    const {name} = req.body;
    if (!name) {
      return res.status(400).send('Folder name is required');
    }

  folderService
    .addFolder(req.app.get('db'), { folder_name: name })
    .then(folder => {
      res
        .status(201)
        .location(`postgres://brfebwbluaohdy:08d1425cecd1afafdf782fa501879757bd5e04ad5c2a92386262074e518b9d6a@ec2-50-19-95-77.compute-1.amazonaws.com:5432/debnapqhhptg4q/api/folder/${folder.id}`)
        .json({ id: folder.id.toString(), name: xss(folder.folder_name) });
    })
    .catch(next);
  });

  folderRouter.route('/:id').get((req, res, next) => {
    const { id } = req.params;
    folderService
      .getById(req.app.get('db'), id)
      .then(folder => {
        if (!folder) {
          res.status(400).send('This folder does not exist');
        }
        res.json({ id: folder.id.toString(), name: xss(folder.folder_name) });
      })
      .catch(next);
  });
  
  module.exports = folderRouter;

  