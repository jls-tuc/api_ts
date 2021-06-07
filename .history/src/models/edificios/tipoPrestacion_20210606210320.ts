import { Document, Schema, Model, model } from 'mongoose';
import * as mongoose from 'mongoose';
const tipoPrestacionSchema = new mongoose.Schema({
  nombre: String,
  term: String,
});

export const prestacionSchema = mongoose.model('tipoPrestacion', tipoPrestacionSchema, 'tipoPrestacion');
