import { HTTPStatusCodes, RequestOptions, CallBack } from '../../types';

class Loader {
    baseLink: Required<string>;
    options: object;

    constructor(baseLink: string, options: object) {
        this.baseLink = baseLink;
        this.options = options;
    }

    protected getResponse<ResponseInterface>(
        { endpoint, options = {} }: { endpoint: string; options?: Partial<RequestOptions> },
        callback: CallBack<ResponseInterface> = (): void => {
            console.error('No callback for GET response');
        }
    ): void {
        this.load('GET', endpoint, callback, options);
    }

    private errorHandler(res: Response): Response {
        if (!res.ok) {
            if (res.status === HTTPStatusCodes.UNAUTHORIZED || res.status === HTTPStatusCodes.NOT_FOUND)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    private makeUrl(options: Record<string, never>, endpoint: string): string {
        const urlOptions: { [property: string]: string } = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key: string) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    private load<ResponseInterface>(
        method: string,
        endpoint: string,
        callback: CallBack<ResponseInterface>,
        options = {}
    ): void {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res: Response) => res.json())
            .then((data: ResponseInterface) => callback(data))
            .catch((err: Error) => console.error(err));
    }
}

export default Loader;
