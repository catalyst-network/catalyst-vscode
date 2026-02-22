// The object "Contracts" is injected here, which contains all data for all contracts, keyed on contract name:
// Contracts["HelloWorld"] = {
//  abi: [],
//  address: "0x..",
//  endpoint: "http://...."
// }
// Create an instance of the smart contract, passing it as a property,
// which allows web3js to interact with it.
function HelloWorld(Contract) {
  this.web3 = null;
  this.instance = null;
  this.Contract = Contract;
}

// Initialize the `HelloWorld` object and create an instance of the web3js library
HelloWorld.prototype.init = function () {
  // Create a new Web3 instance using either the Metamask provider
  // or an independent provider created as the endpoint configured for the contract.
  this.web3 = new Web3(
    (window.web3 && window.web3.currentProvider) ||
    new Web3.providers.HttpProvider(this.Contract.endpoint)
  );

  // Create the contract interface using the ABI provided in the configuration.
  var contract_interface = this.web3.eth.contract(this.Contract.abi);

  // Create the contract instance for the specific address provided in the configuration.
  this.instance = this.Contract.address ? contract_interface.at(this.Contract.address) : { message: function () {} };
};

// Gets the message value passed to the instance of the contract.
HelloWorld.prototype.getMessage = function (cb) {
  this.instance.message(function (error, result) {
    cb(error, result);
  });
};

// Gets the block number by using the web3js `getBlockNumber` function.
HelloWorld.prototype.getBlockNumber = function (cb) {
  this.web3.eth.getBlockNumber(function (error, result) {
    cb(error, result);
  });
};

// Calls `getMessage` and `getBlockNumber` then updates DOM elements.
HelloWorld.prototype.update = function () {
  var that = this;
  this.getMessage(function (error, result) {
    if (error) {
      $(".error").show();
      return;
    }

    $("#message").text(result);
    that.getBlockNumber(function (error, result) {
      if (error) {
        $(".error").show();
        return;
      }

      $("#blocknumber").text(result);
      setTimeout(function () { that.update(); }, 1000);
    });
  });
};

HelloWorld.prototype.main = function () {
  $(".blocknumber").show();
  $(".message").show();
  this.update();
};

HelloWorld.prototype.onReady = function () {
  this.init();
  this.main();
};

if (typeof (Contracts) === "undefined") var Contracts = { HelloWorld: { abi: [] } };
var helloWorld = new HelloWorld(Contracts["HelloWorld"]);

$(document).ready(function () {
  helloWorld.onReady();
});
