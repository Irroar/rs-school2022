import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '29d5a9bac2f34d79ab91f0e08c63ad6d', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
