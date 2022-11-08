import '../../App.css';
import WelcomeModule from './modules/WelcomeModule'
import PhotoModule from './modules/PhotoModule'

import { Timeline } from 'react-twitter-widgets'

function HomePage() {
    return (
        <div>
            <WelcomeModule />
            <PhotoModule />
            <Timeline
                dataSource={{
                    sourceType: 'profile',
                    screenName: 'TypNLP'
                }}
                options={{
                    height: '550'
                }}
            />
        </div>
    );
}

export default HomePage;
