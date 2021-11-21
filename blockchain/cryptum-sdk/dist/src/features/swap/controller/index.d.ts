export = Controller;
declare class Controller extends Interface {
    /**
     * Async method to retrieve list of all supported currencies to swap from and to. Examples: BTC, ETH, XLM, XRP, BNB, USDT and others.
     * @returns {Promise<string[]>} list of currencies
     */
    getSupportedCurrencies(): Promise<string[]>;
    /**
     * Async method to retrieve the minimum amount to swap
     * @param {object} inputs
     * @param {string} inputs.currencyFrom criptocurrency to swap from
     * @param {string} inputs.currencyTo criptocurrency to swap to
     * @returns {Promise<{ currencyFrom:string, currencyTo:string, amount:string }>}
     */
    getMinimumAmount(inputs?: {
        currencyFrom: string;
        currencyTo: string;
    }): Promise<{
        currencyFrom: string;
        currencyTo: string;
        amount: string;
    }>;
    /**
     * Estimate amount to receive from the swap.
     * @param {object} inputs
     * @param {string} inputs.currencyFrom criptocurrency to swap from
     * @param {string} inputs.currencyTo criptocurrency to swap to
     * @param {string} inputs.amount amount to swap
     * @returns {Promise<{ currencyFrom:string, currencyTo:string, amountTo:string }>}
     */
    getEstimateAmount(inputs: {
        currencyFrom: string;
        currencyTo: string;
        amount: string;
    }): Promise<{
        currencyFrom: string;
        currencyTo: string;
        amountTo: string;
    }>;
    /**
     * Get the swap order by its id.
     * @param {string} id swap order id
     * @returns {Promise<SwapOrder>}
     */
    getOrder(id: string): Promise<SwapOrder>;
    /**
     * Create new swap order.
     * @param {object} input
     * @param {string} input.amountFrom destination address
     * @param {string} input.currencyFrom origin cryptocurrency to swap
     * @param {string} input.addressTo destination address
     * @param {string} input.currencyTo destination cryptocurrency
     * @param {string} input.memoTo memo or extra id string to pass along with the addressTo (only for some currencies like XLM, XRP, etc)
     * @param {string} input.refundAddress address to return funds to the user in case the swapping goes wrong
     * @param {string} input.refundFrom memo or extra id string to pass along with the refundAddress (only for some currencies like XLM, XRP, etc)
     * @returns {Promise<SwapOrder>}
     */
    createOrder(input: {
        amountFrom: string;
        currencyFrom: string;
        addressTo: string;
        currencyTo: string;
        memoTo: string;
        refundAddress: string;
        refundFrom: string;
    }): Promise<SwapOrder>;
    /**
     * Get orders
     * @param {object} input
     * @param {number=} input.limit
     * @param {number=} input.offset
     * @param {Promise<SwapOrder[]>}
     */
    getOrders(input?: {
        limit?: number | undefined;
        offset?: number | undefined;
    }): Promise<any>;
}
import Interface = require("./interface");
