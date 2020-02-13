const movies = [
  `SARAH VANHEE (BE) - The Making of Justice`,
  `HOME`,
  `LA LA LAND`,
  `MINUSCULE`,
  `THE WORLD OF US`,
  `JACKIE`,
  `LE PASSÉ DEVANT NOUS`,
  `SILENCE`,
  `MOONLIGHT`,
];

const wrapWithTag = (content, tagname) => `<${tagname}>${content}</${tagname}>`;

document.write(
  `<ul>${
    movies
      .reverse()
      .map(movie => wrapWithTag(movie.toLowerCase(), `li`))
      .join(``)
  }</ul>`);


/*
const listItems = movies
  .reverse()
  .map(movie => wrapWithTag(movie.toLowerCase(), `li`))
  .join(``);

document.write(`<ul>`);
document.write(listItems);
document.write(`</ul>`);
*/
