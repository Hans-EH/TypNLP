import '../../../App.css';

//Email, education, position
const Card = (props) => {
    return (
        <div>
            <div className="collapse collapse-arrow" style={{ margin: "2.5%" }}>
                <input type="checkbox" className="peer" />
                <div style={{ backgroundColor: "var(--primary1)" }} className="collapse-title text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <h2 style={{ color: "white", fontSize: "3vmin" }}>{props.title}</h2>
                </div>
                <div style={{ backgroundColor: "var(--primary1)"}} className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p><b>Authors: </b>{props.authors}</p>
                    <p><b>Journal: </b>{props.journal}</p>
                    <p><b>Paper: </b><a href={props.paper}>{props.paper}</a></p>
                    <p><b>Description:</b> {props.text}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;
