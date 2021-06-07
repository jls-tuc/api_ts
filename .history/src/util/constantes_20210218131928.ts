export const constantes = {
	SEXO: {
		type: String,
		required: true,
		es_indexed: true,
		enum: [ 'F', 'M', 'O' ]
	},
	ESTADOCIVIL: {
		type: String,
		enum: [ 'casado', 'separado', 'divorciado', 'viudo', 'soltero', 'otro' ]
	},
	CONTACTO: {
		type: String,
		enum: [ '', 'fijo', 'celular', 'email' ]
	}
};

export const MOTIVOS_DEUDOR_MOROSO = {
	vigente: 'vigente',
	vigente_con_suspensión_transitoria: 'vigente con suspensión transitoria',
	baja_definitiva: 'baja definitiva'
}

