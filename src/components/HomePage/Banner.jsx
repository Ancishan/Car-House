

const Banner = () => {
    const banners = [
        {
            title: "adorable price for car servicing 1",
            description: "There are many variations of passages of  available, but the majority have suffered alteration in some form",
            next: "#slide2",
            prev: "#slide4"
        },
        {
            title: "adorable price for car servicing 2",
            description: "There are many variations of passages of  available, but the majority have suffered alteration in some form",
            next: "#slide3",
            prev: "#slide1"
        },
        {
            title: "adorable price for car servicing 3",
            description: "There are many variations of passages of  available, but the majority have suffered alteration in some form",
            next: "#slide4",
            prev: "#slide2"
        },
        {
            title: "adorable price for car servicing 4",
            description: "There are many variations of passages of  available, but the majority have suffered alteration in some form",
            next: "#slide1",
            prev: "#slide3"
        },
    ]
    return (
        <div className="container mx-auto mt-12">
            <div className="carousel w-full ">
                <div id="slide1" className="carousel-item relative w-full ">
                    {
                        banners.map((banner, index) => (
                            <div
                                style={{ backgroundImage: `linear-gradient(45deg, rgba(7, 25, 82, 0.7), rgba(0,0,0,0.3)), url(/assets/images/banner/${index + 1}.jpg)` }}
                                key={index}
                                id={`slide${index + 1}`}
                                className="carousel-item relative w-full bg-top bg-no-repeat h-[90vh]">
                                <div className="h-full w-full flex items-center pl-36">
                                    <div>
                                        <h1 className="text-5xl font-bold">{banner.title}</h1>
                                        <p>{banner.description}</p>
                                        <button className="btn btn-primary mr-4 mt-2">Discover More</button>
                                        <button className="btn btn-primary btn-outline mt-2">latest Project</button>
                                    </div>

                                </div>

                                <div className="absolute flex bottom-12 right-12 transform justify-between">
                                    <a href={banner.prev} className="btn btn-circle mr-4">❮</a>
                                    <a href={banner.next} className="btn btn-circle">❯</a>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    );
};

export default Banner;