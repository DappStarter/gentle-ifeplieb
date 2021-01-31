require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock other sugar fan regret office puppy hockey enroll flat giant'; 
let testAccounts = [
"0xf87e9d2eae895b298c35a49c1374d46bab77c515dd592456747482e22b4d461b",
"0x10745eede45fbe7b8cb613fc9941d9b6f7c99982992b32fa1db3d63e43f8c325",
"0x81110c84e6fd92eaf3db689f3ab73421fbdbd996ac25e7f0063a4254db69e247",
"0xe02d17654f5c2b0349ff1d8a39b32498ef9a4e9d138d9936a0e101a3af927919",
"0x142c6edce53a7ad624f102ed954662477ad1ca1a822a1fbeefbbd2fd08c00145",
"0x82f664bfcf964b13cfb4e21bdfc7b1d47eb90af30ed6f02c3f65cc4411aeeb35",
"0xcd7fc52010fce9e3fe4ab25fe52d774ba329b27970e0c133993be50abdd814f0",
"0x14fbe2c6cddc5bff7c830c64e9ac6d6a96433e771b48195607fbff5db1191be5",
"0xbfff4879759288361069fa9d7e292107364f440a9179c116f009d2436472c372",
"0x7223305bb359bc20fe2eb6f99715fdcc8e3e83079a29f76d6c7bc403bb93b469"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
