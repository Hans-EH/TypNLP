import '../App.css';

function NavBar() {
    return (
        <header className="App-header" >
            <div className="navbar Navbar">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl" href="http://hansheje.com/">TypNLP Lab</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0">
                        <li><a href="http://hansheje.com/">People</a></li>
                        <li><a href="http://hansheje.com/">Publications</a></li>
                        <li tabIndex={0}>
                            <a href="http://hansheje.com/">
                                Parent
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </a>
                            <ul className="p-2 Navbar">
                                <li><a href="http://hansheje.com/">Submenu 1</a></li>
                                <li><a href="http://hansheje.com/">Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a href="http://hansheje.com/">Contact</a></li>

                    </ul>
                </div>
            </div>
        </header>
    );
}

export default NavBar;
