const uniqid = require("uniqid");
const cubes = [
  {
    id: "5as7z2hwli0n2yyf",
    name: "Cube 1",
    description: "Am Bate bri",
    imageUrl: "bri",
    difficultyLevel: 1,
  },
  {
    id: "1as7z2hwli0n2yy1",
    name: "Cube 2",
    description: "Am Bate bri",
    imageUrl: "bri",
    difficultyLevel: 2,
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
