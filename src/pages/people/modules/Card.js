import '../../../App.css';

//Email, education, position
const Card = (props) => {
    return (
        <div>
            <div className="card w-96  shadow-xl">
                <figure><img  style={{ objectFit: "cover", width: "500px", height: "500px"}} src={"/images/people/"+props.imageName} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title" style={{color: "var(--primary1)"}}>
                        {props.fullName}
                        <div className="badge badge-secondary" style={{backgroundColor: "var(--primary2)", borderWidth: "0px"}}>{props.position}</div>
                    </h2>
                    <p style={{color: "var(--primary3)"}}><b>Degree: </b> {props.degree}</p>
                    <p style={{color: "var(--primary3)"}}><b>Contact: </b>{props.contact}</p>
                    <p style={{color: "var(--primary3)"}}><b>Website: </b><a href={props.website}>{props.website}</a></p>

                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
