const ToDolists = artifacts.require("ToDolist");

module.exports = function(deployer) {
  deployer.deploy(ToDolists);
};
