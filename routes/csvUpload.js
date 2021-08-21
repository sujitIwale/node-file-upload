const express = require('express');
const fs = require('fs');
const path = require('path');
const csv = require('fast-csv');
const { csvUpload } = require('../middleware/upload');
const { error } = require('console');
const { json } = require('express');
const router = express.Router();

router.get('/', csvUpload, (req, res) => {
	const data = [];
	// fs.createReadStream(path.resolve('uploads/csv', req.file.filename))
	// 	.pipe(csv.parse({ headers: true }))
	// 	.on('error', (error) => console.error(error))
	// 	.on('data', (row) => data.push(row))
	// 	.on('end', (rowCount) => {
	// 		console.log(`Parsed ${rowCount} rows`);
	// 		res.send(data);
	// 	});

	try {
		csv.parseFile('uploads/csv/' + req.file.filename, { headers: true })
			.on('error', (error) => console.log(error))
			.on('data', (row) => data.push(row))
			.on('end', (rowCount) => {
				res.send(data);
				fs.unlinkSync('uploads/csv/' + req.file.filename);
				fs.writeFile(
					'rawdata/data.json',
					JSON.stringify(data),
					(error) => console.log(error)
				);
			});
	} catch (error) {
		console.log(error);
		res.send({ error: 'server error' });
	}
});

module.exports = router;
