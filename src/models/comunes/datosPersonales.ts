import * as mongoose from 'mongoose';
import { constantes } from '../../util/constantes';

const datosPersonalesSchema = new mongoose.Schema({
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
  sexo: constantes.SEXO,
  genero: constantes.SEXO,
  fechaFallecimiento: Date,
  estadoCivil: constantes.ESTADOCIVIL,
  fotoId: mongoose.Schema.Types.ObjectId,
  foto: {
    type: String,
    select: false,
  },
  fotoMobile: String,
  nacionalidad: String,
});

export = datosPersonalesSchema;
