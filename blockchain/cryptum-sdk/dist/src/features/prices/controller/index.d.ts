export = Controller;
declare class Controller extends Interface {
    /**
     * Async method to retrieve prices of the given asset
     *
     * @param {string} asset string with the symbol of the asset
     */
    getPrices(asset: string): Promise<Prices>;
}
import Interface = require("./interface");
import Prices = require("../entity");
