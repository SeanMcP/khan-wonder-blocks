// @flow
import type {IRequestHandler} from "./types.js";

/**
 * Base implementation for creating a request handler.
 *
 * Provides a base implementation of the `IRequestHandler` base class for
 * use with the Wonder Blocks Data framework.
 */
export default class RequestHandler<TOptions, TData>
    implements IRequestHandler<TOptions, TData> {
    _type: string;

    constructor(type: string) {
        this._type = type;
    }

    get type() {
        return this._type;
    }

    invalidateCache(options: TOptions): boolean {
        /**
         * By default, the cache is always valid.
         */
        return false;
    }

    getKey(options: TOptions): string {
        try {
            return options === undefined
                ? "undefined"
                : (JSON.stringify(options): any);
        } catch (e) {
            throw new Error(`Failed to auto-generate key: ${e}`);
        }
    }

    fulfillRequest(options: TOptions): Promise<TData> {
        throw new Error("Not implemented");
    }
}