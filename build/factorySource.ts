const stakingAbi = {"ABIversion":2,"version":"2.3","header":["pubkey","time","expire"],"functions":[{"name":"constructor","inputs":[{"name":"stakingTokenRoot","type":"address"},{"name":"stakingNFTRoot","type":"address"},{"name":"sendRemainingGasTo","type":"address"}],"outputs":[]},{"name":"onTokenWallet","inputs":[{"name":"value","type":"address"}],"outputs":[]},{"name":"onAcceptTokensTransfer","inputs":[{"name":"value0","type":"address"},{"name":"amount","type":"uint128"},{"name":"sender","type":"address"},{"name":"value3","type":"address"},{"name":"remainingGasTo","type":"address"},{"name":"payload","type":"cell"}],"outputs":[]},{"name":"stake","inputs":[{"name":"amount","type":"uint128"}],"outputs":[]},{"name":"_stakingTokenRoot","inputs":[],"outputs":[{"name":"_stakingTokenRoot","type":"address"}]},{"name":"_stakingTokenWallet","inputs":[],"outputs":[{"name":"_stakingTokenWallet","type":"address"}]},{"name":"_stakingNFTRoot","inputs":[],"outputs":[{"name":"_stakingNFTRoot","type":"address"}]},{"name":"stakes","inputs":[],"outputs":[{"components":[{"name":"amount","type":"uint256"},{"name":"timestamp","type":"uint256"},{"name":"nftIds","type":"uint256[]"}],"name":"stakes","type":"map(address,tuple)"}]},{"name":"totalStakedAmount","inputs":[],"outputs":[{"name":"totalStakedAmount","type":"uint128"}]}],"data":[{"key":1,"name":"_nonce","type":"uint16"},{"key":2,"name":"_owner","type":"address"}],"events":[],"fields":[{"name":"_pubkey","type":"uint256"},{"name":"_timestamp","type":"uint64"},{"name":"_constructorFlag","type":"bool"},{"name":"_nonce","type":"uint16"},{"name":"_owner","type":"address"},{"name":"_stakingTokenRoot","type":"address"},{"name":"_stakingTokenWallet","type":"address"},{"name":"_stakingNFTRoot","type":"address"},{"components":[{"name":"amount","type":"uint256"},{"name":"timestamp","type":"uint256"},{"name":"nftIds","type":"uint256[]"}],"name":"stakes","type":"map(address,tuple)"},{"name":"totalStakedAmount","type":"uint128"}]} as const

export const factorySource = {
    Staking: stakingAbi
} as const

export type FactorySource = typeof factorySource
export type StakingAbi = typeof stakingAbi
