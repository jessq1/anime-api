import { Anime } from '../models/anime.js'

export {
  index,
  show,
  create,
  update,
  deleteAnime as delete
}

function index(req, res) {
  Anime.find({})
  .then(Animes => {
    res.status(200).json(Animes)
    res.render('index', { title: 'Anime' })
  })
  .catch(err => {
    res.json(err)
  })
}

function show(req, res) {
  Anime.findById(req.params.id)
  .then(anime => {
    res.json(anime)
  })
}

function create(req, res) {
  Anime.create(req.body)
  .then(anime => {
    res.json(anime)
  })
  .catch(err => {
    res.json(err)
  })
}

function update(req, res) {
  Anime.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then((anime) => {
    res.json(anime)
  })
}

function deleteAnime(req, res) {
  Anime.findByIdAndDelete(req.params.id)
  .then(anime => {
    res.json(anime)
  })
}