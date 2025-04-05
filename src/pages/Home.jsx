import { FaArrowRight } from "react-icons/fa";

export const Home = () =>{
return (
    <main className="hero-section main" >
        <div className="container grid grid-two-cols" >
<div className="hero-content" >
    <h1 className="heading-xl">
        Explore the world One Country at a time .

    </h1>
    <p className="paragraph" >
        Discover the history, culture , and beauty of every nation. Sort, Search, and filter through countries to find the details .
    </p>
    <button className="btn btn-darken btn-inline bg-white-box " >
        Start Exploring<FaArrowRight /> 

    </button>
</div>
<div className="hero-image" >
    <img src="/images/nasa-Q1p7bh3SHj8-unsplash.jpg" alt="world beauty" className="banner-image" />
</div>
        </div>
    </main>
)
};