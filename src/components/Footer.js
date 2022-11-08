import '../App.css';

function Footer() {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <div>
                    <img width="50" height="50" viewBox="0 0 24 24" src="/images/logo/logo.png" alt=""></img>
                    <p><b>TypNLP Lab</b><br />Aalborg University's Natural Language Processing Lab</p>
                    <p>A. C. Meyers Vænge 15, 2450 København, Denmark</p>
                </div>
                <div>
                    <span className="footer-title" >Connect</span>
                    <a className="link link-hover" href="https://gitlab.com/SaintHans">Github</a>
                    <a className="link link-hover" href="https://twitter.com/TypNLP">Twitter</a>
                </div>
            </footer>
        </div>


    );
}

export default Footer;
