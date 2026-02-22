// Specifies that the source code is for a version
// of Solidity greater than 0.5.0
pragma solidity >=0.5.0 <0.7.0;

// A contract is a collection of functions and data (its state)
// that resides at a specific address on the Ethereum blockchain.
contract Coin {
  // The keyword "public" makes variables accessible from outside a contract
  // and creates a function that other contracts or SDKs can call to access the value

  // An address stores addresses of contracts or external (user) accounts
  address public minter;

  // A mapping lets you create complex custom data types.
  // This mapping assigns an unsigned integer to an address
  // and is also a public variable.
  mapping(address => uint) public balances;

  // Events allow Ethereum clients to react to specific contract changes you declare.
  event Sent(address from, address to, uint amount);

  // A special function only run during the creation of the contract
  constructor() public {
    minter = msg.sender;
  }

  // Sends an amount of newly created coins to an address
  function mint(address receiver, uint amount) public {
    require(msg.sender == minter);
    require(amount < 1e60);
    balances[receiver] += amount;
  }

  // Sends an amount of existing coins from any caller to an address
  function send(address receiver, uint amount) public {
    require(amount <= balances[msg.sender], "Insufficient balance.");
    balances[msg.sender] -= amount;
    balances[receiver] += amount;
    emit Sent(msg.sender, receiver, amount);
  }
}
