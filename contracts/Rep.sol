//SPDX-License-Identifier: MatiAlvarez21
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Rep is ERC20{
    constructor() ERC20("REP", "Augur token") {}
    
    function faucet(address to, uint amount) external {
        _mint(to, amount);
    }
    
}