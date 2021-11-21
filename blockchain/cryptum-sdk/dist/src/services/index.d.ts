/**
 * Method to get an specific api method how get, post, put and delete
 *
 * All methods present in axios are compatibles with this method
 *
 * @param {object} setup an object with this data: { requests, key, config }, requests an list with requests,
 * an example is { key: { method: 'post' } }, key an string key to get specific request, and config is an object
 * with this data: { enviroment: 'production'/'development' }
 * @param setup.requests
 * @param setup.key
 * @param setup.config
 * @returns an method to make an request using axios
 */
export function getApiMethod({ requests, key, config }: {
    requests: any;
    key: any;
    config: any;
}): any;
/**
 * Method to handle errors and throw an error by response
 *
 * @param {*} error Error for analysis
 */
export function handleRequestError(error: any): never;
/**
 * Method to mount an hearders with api key
 *
 * @param {string} apiKeyCryptum need an api key cryptum to add key
 * @returns an object with x-api-key value
 */
export function mountHeaders(apiKeyCryptum: string): {
    'x-api-key': string;
};
/**
 * Mehtod to verify if protocol is supported by Cryptum
 *
 * @param {string} protocol string with protocol enum, you can use only ['ETHEREUM' or 'BITCOIN'] protocols
 * @returns true if protocol is valid, and false if not
 */
export function isValidProtocol(protocol: string): boolean;
