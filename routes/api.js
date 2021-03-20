const fetch = require('node-fetch');

const { router } = require('./index');

const apiKey = process.env.API_KEY;
const apiUrl = process.env.API_URL;
const searchUrl = process.env.API_SEARCH_URL;
const songUrl = process.env.LYRICS_URL;
const trackUrl = process.env.TRACK_URL;

/**
 * @desc GET 10 tracks from api
 * @param /api/tracks
 */
router.get('/tracks', async (req, res) => {
  const url = `${apiUrl}chart.tracks.get?page=1&page_size=10&country=gb&f_has_lyrics=1&apikey=${apiKey}`;
  try {
    const getAll = await fetch(url);
    const json = await getAll.json();

    res.status(200).json(json);
  } catch (error) {
    console.log(error);
    res.status(404).send(error.message);
  }
});

/**
 * @desc GET search song or artist
 * @param /api/search?trackID - use req.query
 */
router.get('/search', async (req, res) => {
  const trackID = req.query.trackID;
  const url = `${searchUrl}q_track=${trackID}&page_size=10&page=1&s_track_rating=desc&country=gb&apikey=${apiKey}`;

  try {
    const search = await fetch(url);
    const json = await search.json();

    res.status(200).json(json);
  } catch (error) {
    console.log(error);
    res.status(404).send(error.message);
  }
});

/**
 * @desc GET song lyrics using req.query track ID
 * @param /api/lyrics?track_id - use req.query
 */
router.get('/lyrics', async (req, res) => {
  const songID = req.query.track_id;
  const url = `${songUrl}track_id=${songID}&apikey=${apiKey}`;

  try {
    const songLyric = await fetch(url);
    const json = await songLyric.json();

    res.status(200).json(json);
  } catch (error) {
    console.log(error);
    res.status(404).send(error.message);
  }
});

/**
 * @desc GET track by ID
 * @param /api/track?track_id - use req.query
 */
router.get('/track', async (req, res) => {
  const songID = req.query.track_id;
  const url = `${trackUrl}track_id=${songID}&apikey=${apiKey}`;

  try {
    const track = await fetch(url);
    const json = await track.json();

    res.status(200).json(json);
  } catch (error) {
    console.log(error);
    res.status(404).send(error.message);
  }
});

module.exports = router;
