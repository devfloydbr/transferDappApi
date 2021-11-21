export function validatePrivateKey(privateKey: any): void;
export function validateCardanoPrivateKey(privateKey: any): void;
export function validateMnemonic(mnemonic: any): void;
export function validateEthereumTransferTransactionParams({ wallet, tokenSymbol, amount, destination, fee, testnet, contractAddress, }: {
    wallet: any;
    tokenSymbol: any;
    amount: any;
    destination: any;
    fee: any;
    testnet: any;
    contractAddress: any;
}): void;
export function validateCeloTransferTransactionParams({ wallet, tokenSymbol, amount, destination, memo, fee, testnet, contractAddress, feeCurrency, }: {
    wallet: any;
    tokenSymbol: any;
    amount: any;
    destination: any;
    memo: any;
    fee: any;
    testnet: any;
    contractAddress: any;
    feeCurrency: any;
}): void;
export function validateSmartContractTransactionParams({ wallet, fee, testnet, contractAddress, feeCurrency, protocol, }: {
    wallet: any;
    fee: any;
    testnet: any;
    contractAddress: any;
    feeCurrency: any;
    protocol: any;
}): void;
export function validateSmartContractDeployTransactionParams({ wallet, fee, testnet, source, contractName, params, feeCurrency, protocol, }: {
    wallet: any;
    fee: any;
    testnet: any;
    source: any;
    contractName: any;
    params: any;
    feeCurrency: any;
    protocol: any;
}): void;
export function validateTokenDeployTransactionParams({ wallet, fee, testnet, tokenType, params, feeCurrency, protocol, }: {
    wallet: any;
    fee: any;
    testnet: any;
    tokenType: any;
    params: any;
    feeCurrency: any;
    protocol: any;
}): void;
export function validateSmartContractCallParams({ contractAddress, contractAbi, method, params, protocol }: {
    contractAddress: any;
    contractAbi: any;
    method: any;
    params: any;
    protocol: any;
}): void;
export function validateBitcoinTransferTransactionParams({ wallet, inputs, outputs }: {
    wallet: any;
    inputs: any;
    outputs: any;
}): void;
export function validateHathorTransferTransactionFromWallet({ wallet, outputs }: {
    wallet: any;
    outputs: any;
}): void;
export function validateHathorTransferTransactionFromUTXO({ inputs, outputs }: {
    inputs: any;
    outputs: any;
}): void;
export function validateHathorTokenTransactionFromWallet({ wallet, tokenUid, tokenName, tokenSymbol, address, changeAddress, mintAuthorityAddress, meltAuthorityAddress, amount, type, }: {
    wallet: any;
    tokenUid: any;
    tokenName: any;
    tokenSymbol: any;
    address: any;
    changeAddress: any;
    mintAuthorityAddress: any;
    meltAuthorityAddress: any;
    amount: any;
    type: any;
}): void;
export function validateHathorTokenTransactionFromUTXO({ inputs, tokenUid, tokenName, tokenSymbol, address, changeAddress, mintAuthorityAddress, meltAuthorityAddress, amount, type, }: {
    inputs: any;
    tokenUid: any;
    tokenName: any;
    tokenSymbol: any;
    address: any;
    changeAddress: any;
    mintAuthorityAddress: any;
    meltAuthorityAddress: any;
    amount: any;
    type: any;
}): void;
export function validateStellarTransferTransactionParams({ wallet, assetSymbol, issuer, amount, destination, memo, fee, testnet, createAccount, timeout, }: {
    wallet: any;
    assetSymbol: any;
    issuer: any;
    amount: any;
    destination: any;
    memo: any;
    fee: any;
    testnet: any;
    createAccount: any;
    timeout: any;
}): void;
export function validateRippleTransferTransactionParams({ wallet, assetSymbol, issuer, amount, destination, memo, fee, testnet, }: {
    wallet: any;
    assetSymbol: any;
    issuer: any;
    amount: any;
    destination: any;
    memo: any;
    fee: any;
    testnet: any;
}): void;
export function validateStellarTrustlineTransactionParams({ wallet, assetSymbol, issuer, fee, limit, memo, timeout, testnet, }: {
    wallet: any;
    assetSymbol: any;
    issuer: any;
    fee: any;
    limit: any;
    memo: any;
    timeout: any;
    testnet: any;
}): void;
export function validateRippleTrustlineTransactionParams({ wallet, assetSymbol, issuer, fee, limit, memo, testnet, }: {
    wallet: any;
    assetSymbol: any;
    issuer: any;
    fee: any;
    limit: any;
    memo: any;
    testnet: any;
}): void;
export function validateSignedTransaction({ signedTx, protocol, type }: {
    signedTx: any;
    protocol: any;
    type: any;
}): void;
export function validateEthAddress(address: any): void;
export function validateRippleAddress(address: any): void;
export function validateStellarAddress(address: any): void;
export function validatePositiveAmount(amount: any): void;
export function validatePositive(n: any): void;
export function validateWalletInfo({ address, protocol, tokenAddresses }: {
    address: any;
    protocol: any;
    tokenAddresses: any;
}): void;
