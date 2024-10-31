
module.exports = {
    src: 'tests', // Directorio de tus archivos de prueba
    browsers: ['edge:headless'], // Ejecutar pruebas en Edge headless
    reporter: {
      name: 'spec', // Tipo de reporte para la consola
      output: 'reports/report.txt' // Ruta opcional para guardar el reporte
    },
    screenshots: {
      takeOnFails: true, // Toma capturas solo cuando falla una prueba
      path: 'screenshots', // Carpeta para almacenar las capturas
    },
    quarantineMode: true, // Reintenta pruebas fallidas
    skipJsErrors: true, // Ignora errores de JavaScript en la página
    pageLoadTimeout: 8000, // Tiempo máximo de carga de la página (en ms)
  };
  