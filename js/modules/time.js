/*En resumen, estas funciones son utilidades que permiten
obtener una versión explícita de una fecha (con el nombre del mes)
y calcular el promedio de palabras por minuto en un texto. Estas
funciones pueden ser útiles en un contexto de manipulación de
fechas o de análisis de texto en una aplicación o página web.¨*/

const getExplicitDate = (date) => {
  const month = date.getMonth();
  const day = date.getDate();

  let explicitmonth = '';

  switch (month + 1) {
    case 1:
      explicitmonth = 'Enero';
      break;
    case 2:
      explicitmonth = 'Febrero';
      break;
    case 3:
      explicitmonth = 'Marzo';
      break;
    case 4:
      explicitmonth = 'Abril';
      break;
    case 5:
      explicitmonth = 'Mayo';
      break;
    case 6:
      explicitmonth = 'Junio';
      break;
    case 7:
      explicitmonth = 'Julio';
      break;
    case 8:
      explicitmonth = 'Agosto';
      break;
    case 9:
      explicitmonth = 'Septiembre';
      break;
    case 10:
      explicitmonth = 'Octubre';
      break;
    case 11:
      explicitmonth = 'Noviembre';
      break;
    case 12:
      explicitmonth = 'Diciembre';
      break;
  }

  return `${explicitmonth} ${day}`;
};

const getPPM = (words) =>
  Math.trunc(words.split(' ').length / 30) > 0
    ? Math.trunc(words.split(' ').length / 30)
    : 1;

export { getExplicitDate, getPPM };
