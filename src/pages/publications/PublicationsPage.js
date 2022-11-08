import '../../App.css';
import Article from './modules/Article'

function PublicationsPage() {
    return (
        <div>
            <h1>2023</h1>

            <Article title="Low Resource Languages: Haitian" authors="Johannes Bjerva, Heather Christine Lint, Hans Heje" journal="Computational linguistics" paper="https://arxiv.org/abs/2004.14283" text="placeholder text blah blah" />

            <h1>2022</h1>
            <Article title="Low Resource Languages: Haitian" authors="Johannes Bjerva, Heather Christine Lint, Hans Heje" journal="Computational linguistics" paper="https://arxiv.org/abs/2004.14283" text="placeholder text blah blah" />
            <Article title="Low Resource Languages: Haitian" authors="Johannes Bjerva, Heather Christine Lint, Hans Heje" journal="Computational linguistics" paper="https://arxiv.org/abs/2004.14283" text="placeholder text blah blah" />
        </div>
    );
}

export default PublicationsPage;
