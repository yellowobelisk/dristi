export default async function handler(req, res) {
  const url = req.query.url;
  if (!url || !url.startsWith('https://')) return res.status(400).send('Invalid URL');

  try {
    const response = await fetch(url, {
      headers: {
        'Referer': '',
        'User-Agent': 'Mozilla/5.0'
      }
    });

    res.setHeader('Content-Type', response.headers.get('content-type'));
    response.body.pipe(res);
  } catch (err) {
    console.error(err);
    res.status(500).send('Failed to fetch media');
  }
}
