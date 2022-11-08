import '../../App.css';
import Card from './modules/Card'

function PeoplePage() {
    return (
        <div>

            <div style ={{marginLeft: "5%", marginRight: "5%"}} className="grid grid-cols-1 md:grid-cols-3 gap-20">
                <div>            
                    <Card fullName="Hans Heje" position="Research Assistant" about="B.Sc. Software engineering" imageUrl="https://hansheje.com/images/me.jpg" />
                </div>
                <div>            
                    <Card fullName="Hans Heje" position="Research Assistant" about="B.Sc. Software engineering" imageUrl="https://hansheje.com/images/me.jpg" />
                </div>
                <div>            
                    <Card fullName="Hans Heje" position="Research Assistant" about="B.Sc. Software engineering" imageUrl="https://hansheje.com/images/me.jpg" />
                </div>
                <div>            
                    <Card fullName="Hans Heje" position="Research Assistant" about="B.Sc. Software engineering" imageUrl="https://hansheje.com/images/me.jpg" />
                </div>
            </div>
        </div>
    );
}

export default PeoplePage;
