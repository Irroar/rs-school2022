import { IData, ISources } from '../../interfaces';
import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {
    controller: AppController;
    view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    public start(): void {
        (document.querySelector('.sources') as HTMLElement).addEventListener('click', (e: MouseEvent) =>
            this.controller.getNews(e, (data: IData) => this.view.drawNews(data))
        );
        (document.querySelector('.burger') as HTMLElement).addEventListener('click', (): void => {
            this.toggleBurger();
        });
        this.controller.getSources((data: ISources) => this.view.drawSources(data));
    }

    private toggleBurger(): void {
        const burger: HTMLElement = document.querySelector('.burger') as HTMLElement;
        const sources: HTMLElement = document.querySelector('.sources') as HTMLElement;
        if (getComputedStyle(burger).display === 'block') {
            burger.classList.toggle('active');
            sources.classList.toggle('active');
        }
    }
}

export default App;
