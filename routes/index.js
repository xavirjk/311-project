const express = require('express');
const vet = require('./vet');
const client = require('./client');

const vetRouter = express.Router();
const clientRouter = express.Router();

const { ensureVetIsAuth, ensureClientIsAuth } = require('../authMiddlewares');

exports.auth = require('./auth');
exports.ui = require('./ui');

exports.vet = vetRouter.use(ensureVetIsAuth, vet);

exports.client = clientRouter.use(ensureClientIsAuth, client);
