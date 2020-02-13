const movies = [
  `The Godfather`,
  `The Shawshank Redemption`,
  `Schindler's List`,
  `Raging Bull`,
  `Casablanca`,
  `Citizen Kane`,
  `Gone with the Wind`,
  `The Wizard of Oz`,
  `One Flew Over the Cuckoo's Nest`,
  `Lawrence of Arabia`,
];

const wrapWithTag = (content, tagname) => `<${tagname}>${content}</${tagname}>`;

const parseTitle = title => {
  title = title.toLowerCase();
  if (title.startsWith(`the`)) {
    console.log(`Film met THE:`, title);
    title = title.toUpperCase();
  }
  return title;
};

const createList = movies => {
  return `
    <ol>${movies
      .map(movie => parseTitle(movie))
      .map(movie => wrapWithTag(movie, `li`))
      .join(``)}
    </ol>`;
};

document.write(createList(movies));
