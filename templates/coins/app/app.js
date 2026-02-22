// The object Contracts will be injected here, which contains all data for all contracts, keyed on contract name:
// Contracts["Coin"] = {
//  abi: [],
//  address: "0x..",
//  endpoint: "http://...."
// }
function Coin(Contract) {
  this.web3 = null;
  this.instance = null;
  this.Contract = Contract;
}

Coin.prototype.init = function () {
  this.web3 = new Web3(
    (window.web3 && window.web3.currentProvider) ||
    new Web3.providers.HttpProvider(this.Contract.endpoint)
  );
  var contract_interface = this.web3.eth.contract(this.Contract.abi);
  this.instance = this.Contract.address ? contract_interface.at(this.Contract.address) : null;
};

Coin.prototype.getBalance = function (address, cb) {
  this.instance.balances(address, function (error, result) {
    cb(error, result);
  });
};

Coin.prototype.showAddressBalance = function () {
  var address = $("#balance-address").val();
  if (!isValidAddress(address)) {
    console.log("Invalid address");
    return;
  }

  this.getBalance(address, function (error, balance) {
    if (error) {
      console.log(error);
      return;
    }
    $("#message").text(balance.toNumber());
  });
};

Coin.prototype.createTokens = function () {
  var that = this;
  var address = $("#create-address").val();
  var amount = $("#create-amount").val();

  if (!isValidAddress(address)) {
    console.log("Invalid address");
    return;
  }
  if (!isValidAmount(amount)) {
    console.log("Invalid amount");
    return;
  }

  this.instance.mint(
    address,
    amount,
    { from: window.web3.eth.accounts[0], gas: 100000, gasPrice: 100000 },
    function (error, txHash) {
      if (error) {
        console.log(error);
        return;
      }
      that.waitForReceipt(txHash, function (receipt) {
        if (receipt && receipt.status) {
          $("#create-address").val("");
          $("#create-amount").val("");
        }
      });
    }
  );
};

Coin.prototype.waitForReceipt = function (hash, cb) {
  var that = this;
  this.web3.eth.getTransactionReceipt(hash, function (err, receipt) {
    if (err) {
      console.log(err);
      return;
    }
    if (receipt !== null) {
      if (cb) cb(receipt);
    } else {
      window.setTimeout(function () {
        that.waitForReceipt(hash, cb);
      }, 2000);
    }
  });
};

function isValidAddress(address) {
  return /^(0x)?[0-9a-f]{40}$/i.test(address);
}

function isValidAmount(amount) {
  var n = Number(amount);
  return Number.isFinite(n) && n > 0;
}

Coin.prototype.bindButtons = function () {
  var that = this;
  $(document).on("click", "#button-create", function () {
    that.createTokens();
  });
  $(document).on("click", "#button-check", function () {
    that.showAddressBalance();
  });
};

Coin.prototype.onReady = function () {
  this.bindButtons();
  this.init();
};

if (typeof (Contracts) === "undefined") var Contracts = { Coin: { abi: [] } };
var coin = new Coin(Contracts["Coin"]);
$(document).ready(function () {
  coin.onReady();
});
