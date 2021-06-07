import * as mongoose from 'mongoose';
import { paciente } from '../pacientes/pacientes';
import { profesional } from '../profesionales/profesionales';

const pacienteSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  nombre: String,
  apellido: String,
  alias: String,
  documento: String,
  fechaNacimiento: Date,
  telefono: String,
  sexo: String,
});
const turnoSchema = new mongoose.Schema({
  horaInicio: Date,
  horaAsistencia: Date,
  asistencia: {
    type: String,
    enum: ['asistio', 'noAsistio', 'sinDatos'],
  },

  estado: {
    type: String,
    enum: ['disponible', 'asignado', 'suspendido', 'sobre turno'],
    default: 'disponible',
  },
  tipoTurno: {
    type: String,
    enum: ['delDia', 'programado', 'gestion', 'profesional'],
  },
  nota: String,
  motivoSuspension: {
    type: String,
    enum: ['edilicia', 'profesional', 'organizacion', 'agendaSuspendida'],
  },
  avisoSuspension: {
    type: String,
    enum: ['no enviado', 'enviado'],
  },
  emitidoPor: String, // Agregamos Administracion / pag web -app/profecional.
  paciente: pacienteSchema,
  profecional: profecionalSchema,
  motivoConsulta: String,
  tipoPrestacion: {
    type: tipoPrestacionSchema,
  },
  confirmedAt: Date /* Confirmación del turno por el  paciente */,
  updatedAt: Date,
  updatedBy: mongoose.Schema.Types.Mixed,
  fechaHoraDacion: Date,
  usuarioDacion: mongoose.Schema.Types.Mixed,
});

export = turnoSchema;
