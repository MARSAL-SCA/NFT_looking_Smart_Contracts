require("@nomiclabs/hardhat-waffle");

require('dotenv').config()

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      gasPrice: 50000000000, // 50 Gwei
      accounts: { mnemonic: `${process.env.DEVELOPMENT_PRIVATE_KEY}` },
    },
    ropsten: {
      url: `wss://eth-ropsten.alchemyapi.io/v2/${process.env.ROPSTEN_API_KEY}`,
      accounts: { mnemonic: `${process.env.DEVELOPMENT_PRIVATE_KEY}` },
    },
    rinkeby: {
      url: `wss://eth-rinkeby.alchemyapi.io/v2/${process.env.RINKEBY_API_KEY}`,
      accounts: { mnemonic: `${process.env.DEVELOPMENT_PRIVATE_KEY}` },
    },
    ethereum: {
      url: `wss://eth-mainnet.alchemyapi.io/v2/${process.env.ETHEREUM_API_KEY}`,
      accounts: { mnemonic: `${process.env.MAINNET_PRIVATE_KEY}` },
    },
    polygon: {
      url: `wss://polygon-mainnet.alchemyapi.io/v2/${process.env.POLYGON_API_KEY}`,
      accounts: { mnemonic: `${process.env.MAINNET_PRIVATE_KEY}` },
    }
  }
};
