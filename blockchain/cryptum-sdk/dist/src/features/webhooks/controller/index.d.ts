export = Controller;
declare class Controller extends Interface {
    /**
     * Method to create an webhook in Cryptum
     *
     * @param {object} webhook object with all webhook data required: { asset, url, event, address, confirmations, protocol }
     * @param {string} webhook.asset
     * @param {string} webhook.url
     * @param {string} webhook.event
     * @param {string} webhook.address
     * @param {number} webhook.confirmations
     * @param {Protocol} webhook.protocol
     */
    createWebhook(webhook: {
        asset: string;
        url: string;
        event: string;
        address: string;
        confirmations: number;
        protocol: any;
    }): Promise<any>;
    /**
     * Method to get webhooks of the Cryptum
     * @param {object} input
     * @param {string} input.protocol protocol to get yours webhooks
     * @param {string=} input.asset asset to get respective webhooks
     * @param {string=} input.limit pagination limit
     * @param {string=} input.offset pagination offset
     * @param {string=} input.startDate pagination start date
     * @param {string=} input.endDate pagination end date
     */
    getWebhooks({ asset, protocol, startDate, endDate, limit, offset }: {
        protocol: string;
        asset?: string | undefined;
        limit?: string | undefined;
        offset?: string | undefined;
        startDate?: string | undefined;
        endDate?: string | undefined;
    }): Promise<any>;
    /**
     * Method to destroy an webhook of the Cryptum
     *
     * @param {object} webhookDestroy object with all data required to destroy: { webhookId, protocol }
     * @param {string} webhookDestroy.webhookId
     * @param {string} webhookDestroy.protocol
     */
    destroyWebhook({ webhookId, protocol }: {
        webhookId: string;
        protocol: string;
    }): Promise<any>;
}
import Interface = require("./interface");
