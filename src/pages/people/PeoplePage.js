import '../../App.css';
import Card from './modules/Card'



function PeoplePage() {
    let peopleArray = [];
    peopleArray.push({fullName: "Johannes Bjerva", position: "Associate Professor", degree: "PhD, Natural Language Processing,", contact: "jbjerva@cs.aau.dk", website: "https://bjerva.github.io/", imageName:"Johannes.jpg"});
    peopleArray.push({fullName: "Marcell R. Fekete", position: "PhD Student", degree: "M.Sc., Natural Language Processing", contact: "mrfe@cs.aau.dk", website: "linkedin.com/in/marcellfekete/", imageName:"Marcel.jpg"});
    peopleArray.push({fullName: "Yiyi Chen", position: "PhD Fellow", degree: "", contact: "yiyic@cs.aau.dk", website: "", imageName:""});
    peopleArray.push({fullName: "Heather C. Lint", position: "Research Assistant", degree: "", contact: "hcle@cs.aau.dk", website: "", imageName:""});
    peopleArray.push({fullName: "Hans Heje", position: "Research Assistant", degree: "B.Sc., Software engineering", contact: "HansHeje@hotmail.com", website: "https://hansheje.com/", imageName:"Hans.jpg"});

    return (
        <div>

            <div style ={{marginLeft: "5%", marginRight: "5%"}} className="grid grid-cols-1 md:grid-cols-3 gap-20">
                    {peopleArray.map(person => <div><Card {...person} /></div>)}               
            </div>
        </div>
    );
}

export default PeoplePage;
