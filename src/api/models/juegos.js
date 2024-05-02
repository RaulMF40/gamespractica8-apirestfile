const mongoose = require('mongoose')

const juegoSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    imagen: { type: String, required: true },
    precio: { type: Number, required: true },
    categoria: {
      type: String,
      required: true,
      enum: [
        'puzzles',
        'acción',
        'aventuras',
        'miedo',
        'coches',
        'desportes',
        'plataformas',
        'granjas',
        'rpg',
        'shooter'
      ]
    },
    verified: { type: Boolean, required: true, default: false }
  },
  {
    timestamps: true,
    collection: 'juegos'
  }
)

const Juego = mongoose.model('juegos', juegoSchema, 'juegos')
module.exports = Juego
