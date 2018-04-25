pragma solidity ^0.4.17;

contract P2NS {
    function () public payable {
        revert();
    }

    /* Public variables of the token */

    mapping (address => string) names;
    mapping (string => address) addresses;

    /*
    NOTE:
    The following variables are OPTIONAL vanities. One does not have to include them.
    They allow one to customise the token contract & in no way influences the core functionality.
    Some wallets/interfaces might not even bother to look at this information.
    */

    string public version = 'H0.1';       //human 0.1 standard. Just an arbitrary versioning scheme.

    function PutName(string _name) public {
        require(addresses[_name] == 0);         // name is not taken
        addresses[names[msg.sender]] = 0;       // release my current name
        addresses[_name] = msg.sender;          // take new name slot
        names[msg.sender] = _name;              // put my address on name
    }

    function NameOf(address _addr) public view returns (string name) {
        return names[_addr];                    // name of address
    }

    function AddressOf(string _name) public view returns (address addr) {
        return addresses[_name];                // address of name
    }
}
