const uniqid = require('uniqid')
const cubes = [];

exports.getAll = () => cubes.slice();

exports.create = (cubeData) => {
  const newCube = cubes.push({
    id: uniqid(),
    ...cubeData,
  });

  return newCube;
};
