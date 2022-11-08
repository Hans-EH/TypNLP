import '../../../App.css';

const Card = (props) => {
    return (
        <div>
            <div className="card w-96  shadow-xl">
                <figure><img src={props.imageUrl} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title" style={{color: "var(--primary1)"}}>
                        {props.fullName}
                        <div className="badge badge-secondary" style={{backgroundColor: "var(--primary2)", borderWidth: "0px"}}>{props.position}</div>
                    </h2>
                    <p style={{color: "var(--primary3)"}}>{props.about}</p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
