const { ethers } = require("ethers");

async function connect() {
  if (typeof window.ethereum !== "undefined") {
    // console.log("We see metamask");
    await ethereum.request({ method: "eth_requestAccounts" });
  }
}
async function execute() {
  // need address, abi, function, node connection
}

module.exports = {
  connect,
  execute,
};
