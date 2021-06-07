import { Document, Schema, Model, model } from 'mongoose';

const tipoPrestacionSchema = new Schema({
  nombre: String,
  term: String,
});

export const prestacionSchema = model('tipoPrestacion', tipoPrestacionSchema, 'tipoPrestacion');
