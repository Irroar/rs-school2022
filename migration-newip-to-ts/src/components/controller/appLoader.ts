import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://nodenews.herokuapp.com/', {
            apiKey: '29d5a9bac2f34d79ab91f0e08c63ad6d',
        });
    }
}

export default AppLoader;
