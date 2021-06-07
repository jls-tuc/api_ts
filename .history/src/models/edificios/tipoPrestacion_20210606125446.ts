import { Document, Schema, Model, model } from 'mongoose';

const tipoPrestacionSchema = new Schema({
  nombre: String,
  term: String,
});

export const PrestacionSchema = model('tipoPrestacion', tipoPrestacionSchema, 'tipoPrestacion');
