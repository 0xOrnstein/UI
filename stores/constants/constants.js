import BigNumber from 'bignumber.js'
import * as contractsTestnet from './contractsTestnet'
import * as contracts from './contracts'
import * as actions from './actions'
import * as queries from './graph-queries'

let isTestnet = process.env.NEXT_PUBLIC_CHAINID == 1115

// URLS
let scan = 'https://scan.coredao.org/'
let cont = contracts

if (isTestnet) {
  scan = 'https://scan.coredao.org/'
  cont = contractsTestnet
}

export const ETHERSCAN_URL = scan

export const CONTRACTS = cont
export const ACTIONS = actions
export const QUERIES = queries

export const MAX_UINT256 = new BigNumber(2).pow(256).minus(1).toFixed(0)
export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'
export const Liquify_ADDRESS = '0xe9aece1BA8bBd429a1ed33349C61280441AC8F99'.toLowerCase();
export const WBNB_ADDRESS = '0x987cC98029C4183C5570a8695ff302E2E4457C16'.toLowerCase();
export const NETWORK_TOKEN_NAME = CONTRACTS.FTM_SYMBOL;

export const NETWORK_TOKEN = {
  id: WBNB_ADDRESS,
  address: WBNB_ADDRESS,
  decimals: 18,
  logoURI: 'https://raw.githubusercontent.com/Liquify-network/images/main/core.png',
  name: "CORE CHAIN",
  symbol: "CORE",
};

export const RENAME_ASSETS = {
}

export const BLACK_LIST_TOKENS = []

export const TAXABLE_TOKENS = []

export const BASE_ASSETS_WHITELIST = [
  {
    id: "0x987cC98029C4183C5570a8695ff302E2E4457C16",
    address: "0x987cC98029C4183C5570a8695ff302E2E4457C16",
    chainId: "1116",
    symbol: "WCORE",
    logoURI: "https://raw.githubusercontent.com/Liquify-network/images/main/core.png"
  },
  {
    id: Liquify_ADDRESS,
    address: Liquify_ADDRESS,
    chainId: "56",
    symbol: "Liquify",
    logoURI: "https://raw.githubusercontent.com/Liquify-network/images/main/logo-white.png"
  },
];

const ROUTE_ASSETS_SYMBOLS = [
  "WCORE",
  "LIQUIFY",
];

export const ROUTE_ASSETS = BASE_ASSETS_WHITELIST.filter(x => ROUTE_ASSETS_SYMBOLS.includes(x.symbol));

export const DEFAULT_ASSET_FROM = CONTRACTS.FTM_SYMBOL
export const DEFAULT_ASSET_TO = "0xe9aece1BA8bBd429a1ed33349C61280441AC8F99"
