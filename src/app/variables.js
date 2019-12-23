exports.name = function(voxaEvent) {
  return voxaEvent.model.name;
};

exports.foodType = voxaEvent => {
  return voxaEvent.rawEvent.queryResult.parameters.foodType;
};
