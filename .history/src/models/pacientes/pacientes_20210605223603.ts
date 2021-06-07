import { Schema, model } from 'mongoose';
import { constantes } from '../../util/constantes';
import * as moment from 'moment';
const uniqueValidator = require('mongoose-unique-validator');

const PacienteSchema = new Schema(
  {
    nombre: {
      type: String,
      es_indexed: true,
    },
    apellido: {
      type: String,
      es_indexed: true,
    },
    fechaNacimiento: {
      type: Date,
      es_indexed: true,
    },
    documento: {
      type: String,
      es_indexed: true,
    },
    certificadoRenaper: String,
    cuil: {
      type: String,
      es_indexed: true,
    },
    activo: Boolean,
    alias: String,
    estado: ESTADO,
    contacto: [ContactoSchema],
    direccion: [DireccionSchema],
    sexo: SEXO,
    genero: SEXO,
    fechaFallecimiento: Date,
    estadoCivil: ESTADOCIVIL,
    fotoId: mongoose.Schema.Types.ObjectId,
    foto: {
      type: String,
      select: false,
    },
    fotoMobile: String,
    nacionalidad: String,
    // ---------------------
    // Campos asociados a pacientes extranjeros

    tipoIdentificacion: { type: IDENTIFICACION, required: false }, // pasaporte o documento extranjero
    numeroIdentificacion: {
      type: String,
      required: false,
    },
    // --------------------
    relaciones: [
      {
        relacion: ParentescoSchema,
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
    financiador: [FinanciadorSchema],
    claveBlocking: { type: [String], es_indexed: true },
    entidadesValidadoras: [String],
    scan: String,
    reportarError: Boolean,
    notaError: String,
    carpetaEfectores: [
      {
        organizacion: NombreSchema,
        nroCarpeta: String,
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
    tokens: [
      {
        type: String,
        lowercase: true,
      },
    ],
    validateAt: Date,
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
    idPacientePrincipal: mongoose.Schema.Types.ObjectId,
  },
  { versionKey: false }
);
