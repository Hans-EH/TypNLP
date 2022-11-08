import '../../../App.css';

function PhotoModule() {
    return (
        <div style={{marginTop: "1%",marginBottom: "1%"}}>
            <div className="carousel w-full carousel-end carousel-center">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://pbs.twimg.com/profile_banners/1564154700815106048/1664432068/1080x360" className="w-full" alt="The typNLP group"/>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://pbs.twimg.com/profile_banners/1564154700815106048/1664432068/1080x360" className="w-full" alt="The typNLP group"/>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PhotoModule;
