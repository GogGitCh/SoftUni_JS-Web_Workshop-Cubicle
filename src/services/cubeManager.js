const uniqid = require('uniqid')
const cubes = [];

exports.getAll = () => cubes.slice();

exports.getOne = (cubeId) => cubes.find(c => c.id == cubeId) 

exports.create = (cubeData) => {
  const newCube = cubes.push({
    id: uniqid(),
    ...cubeData,
  });

  return newCube;
};
