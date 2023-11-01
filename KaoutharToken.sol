// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract KaoutharToken is ERC20, Ownable {
    constructor() ERC20("KaoutharToken", "KT") {}
    string public text; 
    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
    function callk()external  view onlyOwner returns (string memory) {
    string memory x = name();
    return x;
    }
    function write(string memory newText) public onlyOwner {
    text = newText; // Store the new string in the contract's state
    }

    function readText() public view returns (string memory) {
        return text;
    }

}