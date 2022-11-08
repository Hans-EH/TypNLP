import '../../App.css';
import WelcomeModule from './modules/WelcomeModule'
import PhotoModule from './modules/PhotoModule'

import { Timeline } from 'react-twitter-widgets'

function FrontPage() {
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

export default FrontPage;
