export = CeloStakingController;
declare class CeloStakingController extends Interface {
    /**
     * Check if account is registered
     * @param {object} input
     * @param {string} input.address wallet object
     * @returns {Promise<import('../../transaction/entity').SmartContractCallResponse>}
     */
    isRegisteredAccount({ address }: {
        address: string;
    }): Promise<import('../../transaction/entity').SmartContractCallResponse>;
    /**
     * Register account
     * @param {object} input
     * @param {import('../../wallet/entity').Wallet} input.wallet
     * @returns {Promise<import('../../transaction/entity').TransactionResponse>}
     */
    registerAccount({ wallet }: {
        wallet: import('../../wallet/entity').Wallet;
    }): Promise<import('../../transaction/entity').TransactionResponse>;
    /**
     * Lock amount
     * @param {object} input
     * @param {import('../../wallet/entity').Wallet} input.wallet wallet object
     * @param {string} input.amount amount to be locked
     *
     * @returns {Promise<import('../../transaction/entity').TransactionResponse>}
     */
    lock({ wallet, amount }: {
        wallet: import('../../wallet/entity').Wallet;
        amount: string;
    }): Promise<import('../../transaction/entity').TransactionResponse>;
    /**
     * Vote for validator
     * @param {object} input
     * @param {import('../../wallet/entity').Wallet} input.wallet wallet object
     * @param {string} input.amount amount to vote with
     * @param {string} input.validator validator group address
     *
     * @returns {Promise<import('../../transaction/entity').TransactionResponse>}
     */
    vote({ wallet, amount, validator }: {
        wallet: import('../../wallet/entity').Wallet;
        amount: string;
        validator: string;
    }): Promise<import('../../transaction/entity').TransactionResponse>;
    /**
     * Activate all votes
     * @param {object} input
     * @param {import('../../wallet/entity').Wallet} input.wallet wallet object
     *
     * @returns {Promise<import('../../transaction/entity').TransactionResponse>}
     */
    activate({ wallet, validator }: {
        wallet: import('../../wallet/entity').Wallet;
    }): Promise<import('../../transaction/entity').TransactionResponse>;
    /**
     * Revoke active votes
     * @param {object} input
     * @param {import('../../wallet/entity').Wallet} input.wallet wallet object
     * @param {string} input.amount amount of votes to revoke
     * @param {string} input.validator validator group address
     *
     * @returns {Promise<import('../../transaction/entity').TransactionResponse>}
     */
    revokeActive({ wallet, amount, validator }: {
        wallet: import('../../wallet/entity').Wallet;
        amount: string;
        validator: string;
    }): Promise<import('../../transaction/entity').TransactionResponse>;
    /**
     * Revoke pending votes
     * @param {object} input
     * @param {import('../../wallet/entity').Wallet} input.wallet wallet object
     * @param {string} input.amount amount of votes to revoke
     * @param {string} input.validator validator group address
     *
     * @returns {Promise<import('../../transaction/entity').TransactionResponse>}
     */
    revokePending({ wallet, amount, validator }: {
        wallet: import('../../wallet/entity').Wallet;
        amount: string;
        validator: string;
    }): Promise<import('../../transaction/entity').TransactionResponse>;
    /**
     * Unlock amount
     * @param {object} input
     * @param {import('../../wallet/entity').Wallet} input.wallet wallet object
     * @param {boolean} input.amount amount to unlock
     *
     * @returns {Promise<import('../../transaction/entity').TransactionResponse>}
     */
    unlock({ wallet, amount }: {
        wallet: import('../../wallet/entity').Wallet;
        amount: boolean;
    }): Promise<import('../../transaction/entity').TransactionResponse>;
    /**
     * Relock amount that was unlocked
     * @param {object} input
     * @param {import('../../wallet/entity').Wallet} input.wallet wallet object
     * @param {string} input.amount amount to relock from pending withdrawal
     * @param {number} input.index index of pending withdrawal
     *
     * @returns {Promise<import('../../transaction/entity').TransactionResponse>}
     */
    relock({ wallet, amount, index }: {
        wallet: import('../../wallet/entity').Wallet;
        amount: string;
        index: number;
    }): Promise<import('../../transaction/entity').TransactionResponse>;
    /**
     * Withdraw amount
     * @param {object} input
     * @param {import('../../wallet/entity').Wallet} input.wallet wallet object
     * @param {number} input.index index of pending withdrawal
     *
     * @returns {Promise<import('../../transaction/entity').TransactionResponse>}
     */
    withdraw({ wallet, index }: {
        wallet: import('../../wallet/entity').Wallet;
        index: number;
    }): Promise<import('../../transaction/entity').TransactionResponse>;
    /**
     * Get Total Pending Withdrawals
     * @param {object} input
     * @param {string} input.address wallet address
     *
     * @returns {Promise<import('../../transaction/entity').SmartContractCallResponse>}
     */
    getTotalPendingWithdrawals({ address }: {
        address: string;
    }): Promise<import('../../transaction/entity').SmartContractCallResponse>;
    /**
     * Get Pending Withdrawals
     * @param {object} input
     * @param {string} input.address wallet address
     *
     * @returns {Promise<{amount, timestamp}[]>}
     */
    getPendingWithdrawals({ address }: {
        address: string;
    }): Promise<{
        amount;
        timestamp;
    }[]>;
    /**
     * Get groups voted for by account
     * @param {object} input
     * @param {string} input.address wallet address
     *
     * @returns {Promise<import('../../transaction/entity').SmartContractCallResponse>}
     */
    getGroupsVotedForByAccount({ address }: {
        address: string;
    }): Promise<import('../../transaction/entity').SmartContractCallResponse>;
    /**
     * Get votes for group by account
     * @param {object} input
     * @param {string} input.address wallet address
     * @param {string} input.group validator group address
     *
     * @returns {Promise<{pending, active}>}
     */
    getVotesForGroupByAccount({ address, group }: {
        address: string;
        group: string;
    }): Promise<{
        pending: any;
        active: any;
    }>;
    /**
     * Get account summary
     * @param {object} input
     * @param {string} input.address wallet object
     *
     * @returns {Promise<{total: string, nonvoting: string, pendingWithdrawals: string, votes: any[]}>}
     */
    getAccountSummary({ address }: {
        address: string;
    }): Promise<{
        total: string;
        nonvoting: string;
        pendingWithdrawals: string;
        votes: any[];
    }>;
    _getMethodAbi(contract: any, method: any): any[];
    _findLesserGreater({ amount, validator, network }: {
        amount: any;
        validator: any;
        network: any;
    }): Promise<{
        lesser: string;
        greater: string;
    }>;
}
import Interface = require("./interface");
