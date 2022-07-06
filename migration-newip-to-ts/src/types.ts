export enum HTTPStatusCodes {
    UNAUTHORIZED = 401,
    NOT_FOUND = 404,
}

export type RequestOptions = {
    sources: string;
};

export type CallBack<T> = (data: T) => void;
