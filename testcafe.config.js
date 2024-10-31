module.exports = {
  src: 'tests', // Directorio de tus archivos de prueba
  browsers: ['edge:headless'], // Ejecutar pruebas en Edge headless
  reporter: 'spec', // Reporte solo en consola
  quarantineMode: true, // Reintenta pruebas fallidas
  skipJsErrors: true, // Ignora errores de JavaScript en la página
  pageLoadTimeout: 8000, // Tiempo máximo de carga de la página (en ms)
};
