import * as mongoose from 'mongoose';
import * as direccionSchema from '../comunes/direccion';
import salaSchema from './salas';

export const edificioSchema = new mongoose.Schema({
  nombre: String,
  detalle: String,
  descripcion: String,
  direccion: { type: direccionSchema },
  servicio: {
    type: String,
    required: false,
  },
  areas: [{ type: salaSchema }],
  equipamiento: [
    {
      conceptId: String,
      term: String,
      fsn: String,
    },
  ],
  activo: Boolean,
  estado: {
    type: String,
    enum: ['disponible', 'mantenimiento', 'clausurado', 'baja permanente'],
    default: 'disponible',
  },
});

export const edificio = mongoose.model('Edificio', edificioSchema, 'Edificio');
