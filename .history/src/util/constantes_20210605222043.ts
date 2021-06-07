export const constantes = {
  SEXO: {
    type: String,
    required: true,
    es_indexed: true,
    enum: ['F', 'M', 'O'],
  },
  ESTADOCIVIL: {
    type: String,
    enum: ['casado', 'separado', 'divorciado', 'viudo', 'soltero', 'otro'],
  },
  CONTACTO: {
    type: String,
    enum: ['', 'fijo', 'celular', 'email'],
  },
};
