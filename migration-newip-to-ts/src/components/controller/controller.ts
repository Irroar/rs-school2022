import AppLoader from './appLoader';
import { CallBack } from '../../types';

class AppController extends AppLoader {
    public getSources<ISources>(callback: CallBack<ISources>): void {
        super.getResponse(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    public getNews<IData>(e: MouseEvent, callback: CallBack<IData>): void {
        let target: HTMLElement = e.target as HTMLElement;
        const newsContainer: HTMLElement = e.currentTarget as HTMLElement;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId: string = target.getAttribute('data-source-id') as string;
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResponse(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = target.parentNode as HTMLElement;
        }
    }
}

export default AppController;
