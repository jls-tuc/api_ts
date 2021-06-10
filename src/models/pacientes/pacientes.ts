import { Schema, model } from 'mongoose';
import * as mongoose from 'mongoose';
import datosPersonalesSchema from '../comunes/datosPersonales';
import DireccionSchema from '../comunes/direccion';
import { constantes } from '../../util/constantes';
import * as moment from 'moment';

const PacienteSchema = new Schema(
  {
    nroForm: { type: Number, es_indexed: true },
    fechaAlta: { type: String },
    activo: Boolean,
    datosPersonales: [datosPersonalesSchema],
    direccion: [DireccionSchema],
    datosContacto: {
      telefono: { type: String, required: false },
      celular: { type: String, required: false },
      email: { type: String, required: false },
    },
    datosContactoEmergencia: {
      parentesco: { type: String, required: false },
      nombre: { type: String, required: false },
      apellido: { type: String, required: false },
      telefono: { type: String, required: false },
      celular: { type: String, required: false },
      email: { type: String, required: false },
    },

    relaciones: [
      {
        relacion: { type: constantes.PARENTESCO },
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
  },
  { timestamps: true }
);

export const paciente = model('Paciente', PacienteSchema, 'Paciente');
