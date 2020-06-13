#!/usr/bin/env node
fs = require('fs');
const regex = /,\n[ ]*file = \{.+\}/g;
const path = 'bibliography.bib';

const file = fs.readFileSync(path).toString();
const newFile = file.replace(/\r\n/g, '\n').replace(regex, '');

fs.writeFileSync(path, newFile);