const cubes = [];

exports.getAll = () => cubes.slice();

exports.create = (cubeData) => {
  const newCube = cubes.push({
    id: cubes.length + 1,
    ...cubeData,
  });

  return newCube;
};
