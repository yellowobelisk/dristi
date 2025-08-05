#!/usr/bin/env node

import express from 'express';
import fetch from 'node-fetch';
const app = express();

app.use(express.static('public')); // index.html and links.json

app.get('/proxy', async (req, res) => {
  const url = req.query.url;
  if (!url || !url.startsWith('https://')) return res.status(400).send('Invalid URL');

  try {
    const response = await fetch(url, {
      headers: {
        'Referer': '',
        'User-Agent': 'Mozilla/5.0'
      }
    });

    res.set('Content-Type', response.headers.get('content-type'));
    response.body.pipe(res);
  } catch (err) {
    console.error(err);
    res.status(500).send('Failed to fetch media');
  }
});

app.listen(3000, () => {
  console.log('Proxy running at http://localhost:3000');
});
