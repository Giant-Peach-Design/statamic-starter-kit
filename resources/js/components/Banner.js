import Flickity from "flickity";
import "flickity/css/flickity.css";

const Banner = () => {
    console.log("banner");
    const els = document.querySelectorAll("[data-banner]");

    if (els) {
        [...els].forEach((el) => {
            const flkty = new Flickity(el, {
                autoPlay: 6000,
                wrapAround: true,
                pauseAutoPlayOnHover: false,
                prevNextButtons: false,
            });

            const slides = el.querySelectorAll(".slide picture");

            flkty.on("scroll", function () {
                flkty.slides.forEach(function (slide, i) {
                    var sl = slides[i];
                    var x = ((slide.target + flkty.x) * -1) / 3;
                    sl.style["transform"] = "translateX(" + x + "px)";
                });
            });
        });
    }
};

export default Banner;
