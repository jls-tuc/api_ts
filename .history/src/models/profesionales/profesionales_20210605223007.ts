import { Schema, model } from 'mongoose';
import { constantes } from '../../util/constantes';
import * as direccionSchema from '../comunes/direccion';
const uniqueValidator = require('mongoose-unique-validator');

const matriculacionSchema = new Schema({
  matriculaNumero: { type: Number, required: false },
  libro: { type: String, required: false },
  folio: { type: String, required: false },
  inicio: Date,
  baja: {
    motivo: { type: String, required: false },
    fecha: { type: String, required: false },
  },
  notificacionVencimiento: { type: Boolean, required: false },
  fin: Date,
  revalidacionNumero: Number,
});

const ProfesionalSchema = new Schema({
  habilitado: { type: Boolean, default: true },
  nombre: { type: String, required: false },
  apellido: { type: String, required: false },
  tipoDocumento: { type: String, required: false },
  documento: { type: String, required: false },
  cuit: { type: String, required: false },
  fechaNacimiento: { type: Date, required: false },
  sexo: { type: String, required: false },
  domicilios: [direccionSchema],
  foto: { type: String, required: false },
  fotoArchivo: { type: String, required: false },
  firmas: [
    {
      imgArchivo: { type: String, required: false },
      fecha: { type: String, required: false },
    },
  ],
  incluidoSuperintendencia: { type: Boolean, default: false },
  formacionGrado: [
    {
      profesion: { type: String, required: false },
      entidadFormadora: { type: String, required: false },
      titulo: { type: String, required: false },
      tituloFileId: { type: String, required: false },
      fechaTitulo: { type: Date, required: false },
      fechaEgreso: { type: Date, required: false },
      renovacion: { type: Boolean, default: false },
      papelesVerificados: { type: Boolean, default: false },
      matriculacion: [matriculacionSchema],
      matriculado: { type: Boolean, default: false },
      fechaDeInscripcion: Date,
    },
  ],
  formacionPosgrado: [
    {
      profesion: { type: String, required: false },
      institucionFormadora: { type: String, required: false },
      especialidad: { type: String, required: false },
      fechaIngreso: { type: Date, required: false },
      fechaEgreso: { type: Date, required: false },
      tituloFileId: { type: String, required: false },
      observacion: String,
      certificacion: {
        fecha: { type: Date, required: false },
        modalidad: { type: String, required: false },
        establecimiento: { type: String, required: false },
      },
      matriculacion: [
        {
          matriculaNumero: { type: Number, required: false },
          libro: { type: String, required: false },
          folio: { type: String, required: false },
          inicio: Date,
          baja: {
            motivo: { type: String, required: false },
            fecha: { type: String, required: false },
          },
          notificacionVencimiento: { type: Boolean, required: false },
          fin: Date,
          revalidacionNumero: Number,
        },
      ],
      fechasDeAltas: [{ fecha: { type: Date, required: false } }],
      matriculado: { type: Boolean, default: false },
      revalida: { type: Boolean, default: false },
      papelesVerificados: { type: Boolean, default: false },
      exportadoSisa: Boolean,
      tieneVencimiento: Boolean,
      notas: [{ type: String, required: false }],
    },
  ],
  sanciones: [
    {
      numero: { type: Number, required: false },
      sancion: {
        id: Number,
        nombre: String,
      },
      motivo: { type: String, required: false },
      normaLegal: { type: String, required: false },
      fecha: { type: Date, required: false },
      vencimiento: { type: Date, required: false },
    },
  ],
  notas: [{ type: String, required: false }],
  rematriculado: { type: Number, default: false },
  agenteMatriculador: { type: String, required: false },
  supervisor: {
    id: String,
    nombreCompleto: String,
  },
  OtrosDatos: [
    {
      matriculaProvincial: { type: Number, required: false },
      folio: { type: String, required: false },
      libro: { type: String, required: false },
      anio: { type: Number, required: false },
    },
  ],
});

export const Profesional = model('profesional', ProfesionalSchema, 'profesional');
