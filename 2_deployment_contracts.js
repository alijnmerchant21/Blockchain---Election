var Election = artifacts.require("/Users/ali/Desktop/Election_Blockchain/contracts/Election.sol");

module.exports = function(deployer) {
  deployer.deploy(Election);
};
