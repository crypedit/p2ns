var Migrations = artifacts.require("./Migrations.sol");
var P2B = artifacts.require("./HumanStandardToken.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(P2B, 100000, "ThoughtWorks P2 Coin", 2, "P2B");
};
