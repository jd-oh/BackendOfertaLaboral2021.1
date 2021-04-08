export namespace Keys {
  export const origenCorreoElectronico = 'juandavidoh4@gmail.com';
  export const asuntoNuevoUsuario = '[Nuevo usuario Oferta Laboral] Mensaje de Bienvenida';
  export const tiempoVencimientoJWT = Math.floor(Date.now() / 1000) + (60 * 60 * 12);
  export const claveSecretaJWT = 'jwt@Prog3*';
  export const twilioPhone = '+18285481153'
  export const carpetaImagenPersonas = '../../archivos/personas';
  export const nombreCampoImagenPersona = 'file';
  export const extensionesPermitidasIMG: string[] = ['.PNG', '.JPG', '.JPEG', '.SVG'];
  export const tamMaxImagenPersona = 1024 * 1024;
  export const carpetaDocumentoPersona = '../../archivos/documentos';
  export const nombreCampoDocumentoPersona = 'file';
  export const extensionesPermitidasDOC: string[] = ['.PDF', '.DOC', '.DOCX', '.XLS', '.XLSX'];
}
