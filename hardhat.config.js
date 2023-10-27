require("@matterlabs/hardhat-zksync-solc");

const {
  ARTHERA_TESTNET_RPC_ENDPOINT_URL,
  ARTHERA_TESTNET_PRIVATE_KEY
} = process.env

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  zksolc: {
    version: "1.3.9",
    compilerSource: "binary",
    settings: {
      optimizer: {
        enabled: true,
      },
    },
  },
  networks: {
    zksync_testnet: {
      url: "https://zksync2-testnet.zksync.dev",
      ethNetwork: "goerli",
      chainId: 280,
      zksync: true,
    },
    zksync_mainnet: {
      url: "https://zksync2-mainnet.zksync.io/",
      ethNetwork: "mainnet",
      chainId: 324,
      zksync: true,
    },
    "arthera-testnet": {
      url: ARTHERA_TESTNET_RPC_ENDPOINT_URL || "https://rpc-test.arthera.net",
      accounts:
        ARTHERA_TESTNET_PRIVATE_KEY !== undefined
            ? [ARTHERA_TESTNET_PRIVATE_KEY]
            : []
      }
  },
  paths: {
    artifacts: "./artifacts-zk",
    cache: "./cache-zk",
    sources: "./contracts",
    tests: "./test",
  },
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
