import * as mongoose from 'mongoose';


const schema = new mongoose.Schema({
  tipo: {
    type: String,
    required: false,
  },
  codigoPostal: String,
  barrio: { type: String, required: false },
  localidad: { type: String, required: false },
  provincia: { type: String, required: false },
  pais: { type: String, required: false },
  geoReferencia: {
    type: [Number],
  },
  activo: {
    type: Boolean,
    required: true,
    default: true,
  },
  ultimaActualizacion: Date,
});

export = schema;
