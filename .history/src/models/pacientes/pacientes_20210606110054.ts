import { Schema, model } from 'mongoose';
import * as mongoose from 'mongoose';
import datosPersonalesSchema from '../comunes/datosPersonales';
import DireccionSchema from '../comunes/direccion';
import { constantes } from '../../util/constantes';
import * as moment from 'moment';

const uniqueValidator = require('mongoose-unique-validator');

const PacienteSchema = new Schema(
  {
    datosPersonales: [datosPersonalesSchema],
    activo: Boolean,
    alias: String,
    estado: constantes.ESTADO,
    direccion: [DireccionSchema],
    // Campos asociados a pacientes extranjeros
    tipoIdentificacion: { type: constantes.IDENTIFICACION, required: false }, // pasaporte o documento extranjero
    numeroIdentificacion: {
      type: String,
      required: false,
    },
    relaciones: [
      {
        relacion: { type: constantes.PARENTESCO, required: true },
        referencia: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'paciente',
        },
        nombre: String,
        apellido: String,
        documento: String,
        fechaFallecimiento: Date,
        numeroIdentificacion: String,
        fotoId: mongoose.Schema.Types.ObjectId,
      },
    ],
    notas: [
      {
        fecha: Date,
        titulo: String,
        nota: String,
        destacada: Boolean,
      },
    ],
    documentos: [
      {
        fecha: Date,
        archivos: [
          {
            ext: String,
            id: String,
          },
        ],
        tipo: {
          id: String,
          label: String,
        },
      },
    ],
  },
  { timestamps: true }
);

export const Paciente = model('Paciente', PacienteSchema, 'Paciente');
