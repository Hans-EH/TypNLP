import '../App.css';

const NavBar = (props) => {
    return (
        <header className="App-header" >
            <div className="navbar Navbar">
                <div className="flex-1">
                    <button className="btn btn-ghost normal-case text-xl" onClick={event => props.setPage("Home")}>TypNLP Lab</button>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0">
                        <li><button onClick={event => props.setPage("People")}>People</button></li>
                        <li><button onClick={event => props.setPage("Publications")}>Publications</button></li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default NavBar;
