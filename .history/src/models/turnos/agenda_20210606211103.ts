import * as mongoose from 'mongoose';
import turnoSchema from './turno';

export const agendaSchema = new mongoose.Schema({
  /* tipoPrestaciones: {
    type: String,
    required: true,
  }, */

  horaInicio: {
    type: Date,
    required: true,
  },
  horaFin: {
    type: Date,
    required: true,
  },
  estado: {
    type: String,
    enum: ['planificacion', 'disponible', 'publicada', 'suspendida', 'pausada', 'pendienteAsistencia'],
    required: true,
    default: 'planificacion',
  },
  avisos: [
    {
      _id: false,
      profesionalId: mongoose.Schema.Types.ObjectId,
      fecha: Date,
      estado: {
        type: String,
        enum: ['confirma', 'suspende'],
      },
    },
  ],
  sobreturnos: [turnoSchema],
});

// Exportar modelo
export const agenda = mongoose.model('agenda', agendaSchema, 'agenda');
