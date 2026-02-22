// The object "Contracts" will be injected here, which contains all data for all contracts, keyed on contract name:
// Contracts["MyContract"] = {
//  abi: [],
//  address: "0x..",
//  endpoint: "http://...."
// }
function Empty(Contract) {
  this.web3 = null;
  this.instance = null;
  this.Contract = Contract;
}

Empty.prototype.init = function (cb) {
  this.web3 = new Web3(
    (window.web3 && window.web3.currentProvider) ||
    new Web3.providers.HttpProvider(this.Contract.endpoint)
  );
  var contract_interface = this.web3.eth.contract(this.Contract.abi);
  this.instance = this.Contract.address ? contract_interface.at(this.Contract.address) : null;
  cb();
};

Empty.prototype.onReady = function () {
  this.init(function () {
    $("#message").append("DApp loaded successfully.");
  });
};

if (typeof (Contracts) === "undefined") var Contracts = { MyContract: { abi: [] } };
var empty = new Empty(Contracts["MyContract"]);

$(document).ready(function () {
  empty.onReady();
});
