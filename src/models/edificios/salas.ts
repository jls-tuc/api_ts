import * as mongoose from 'mongoose';

const salaSchema = new mongoose.Schema({
  nombre: String,
  detalle: String,
  tipo: String,
  ubicacion: String,
  activo: Boolean,
  estado: {
    type: String,
    enum: ['disponible', 'mantenimiento', 'clausurado', 'baja permanente'],
    default: 'disponible',
  },
});

export = salaSchema;
