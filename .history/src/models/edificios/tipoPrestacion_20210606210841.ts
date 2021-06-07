import * as mongoose from 'mongoose';

const tipoPrestacionSchema = new mongoose.Schema({
  nombre: String,
  term: String,
});

export const prestacionSchema = mongoose.model('tipoPrestacion', tipoPrestacionSchema, 'tipoPrestacion');
