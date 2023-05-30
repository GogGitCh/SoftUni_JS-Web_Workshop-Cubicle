const uniqid = require("uniqid");
const cubes = [
  {
    id: "5as7z2hwli0n2yyf",
    name: "Cube 1",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, minima, tenetur eum beatae hic qui, accusamus praesentium ex ratione ipsam odit? Dolore labore maiores reiciendis, dolor quo dignissimos cumque voluptatum iste doloribus ratione officiis eius aliquid, at vitae aperiam possimus magnam repellendus unde facilis itaque sequi corrupti explicabo porro fuga. Hic, error aliquam laudantium impedit adipisci natus necessitatibus, recusandae cupiditate, provident praesentium veniam delectus. Earum distinctio quaerat aliquam rem laborum incidunt doloremque a eligendi. Incidunt, illo sunt voluptatum quos obcaecati eos nihil! Tempora enim excepturi repellendus dolor iure ratione molestiae dolore rem quaerat! Quaerat quidem qui quibusdam culpa minima dolore!",
    imageUrl: "https://www.google.com/search?q=weird+rubic+cube+&tbm=isch&ved=2ahUKEwinjq3TvY3_AhWPhaQKHbG4CsIQ2-cCegQIABAA&oq=weird+rubic+cube+&gs_lcp=CgNpbWcQAzoECCMQJzoHCAAQigUQQzoFCAAQgAQ6BggAEAcQHjoICAAQCBAHEB5Q-wJY9z5gjEFoAnAAeACAAYQBiAHOCJIBAzIuOJgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=X8NtZOfiK4-LkgWx8aqQDA&bih=633&biw=1312&client=firefox-b-d#imgrc=bEtJNj5r5QD_FM",
    difficultyLevel: 1,
  },
  {
    id: "1as7z2hwli0n2yy1",
    name: "Cube 2",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda asperiores, fugiat, magnam eius deserunt in dolores et quam repellendus voluptates, mollitia hic provident perspiciatis impedit. A culpa deserunt quis cupiditate, aliquid voluptas unde quidem, pariatur voluptatibus aliquam esse quam! Tempore, id fugit maiores delectus enim, molestiae numquam pariatur saepe voluptas dignissimos veniam maxime et autem quis? Ex quibusdam porro numquam?",
    imageUrl: 'https://www.google.com/search?q=rubic+cube&client=firefox-b-d&sxsrf=APwXEdfxSKiSNHPm6CUbT3lbTaPvHl8eqA:1684915036554&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjsxuvRvY3_AhVtSvEDHZ4RCMUQ_AUoAXoECAEQAw&biw=1312&bih=633&dpr=1.46#imgrc=TN7fG5rI84T7iM',
    difficultyLevel: 3,
  },
];

exports.getAll = (search, from, to) => {
  let result = cubes.slice();
  if (search) {
    result = result.filter((cube) => cube.name.toLowerCase().includes(search.toLowerCase()));
  }

  if (from) {
      result = result.filter((cube) => cube.difficultyLevel >= Number(from));
    }

  if (to) {
      result = result.filter((cube) => cube.difficultyLevel <= Number(to));
  }
  return result;
};

exports.getOne = (cubeId) => cubes.find((c) => c.id == cubeId);

exports.create = (cubeData) => {
  const newCube = cubes.push({
    id: uniqid(),
    ...cubeData,
  });

  return newCube;
};
