import { useState } from "react";

const SlidePreview = ({ number }) => {
  return (
    <>
      <div className="Slide-View">{/* <h3>{number}</h3> */}</div>
    </>
  );
};

const SlidesView = () => {
  const [slides, setSlides] = useState([{ number: 1 }]);

  const handleNewSlide = () => {
    setSlides([...slides, { number: slides[slides.length - 1].number + 1 }]);
  };

  const handleDeleteSlide = () => {
    if (slides.length > 1) {
      setSlides([...slides.slice(0, slides.length - 1)]);
    }
  };

  return (
    <div className="Slides-view">
      {/* <h2>Slides View</h2> */}
      <div className="slides-scroll-view">
        {slides.map((slide) => (
          <SlidePreview number={slide.number} />
        ))}
      </div>
      <div>
        <button onClick={handleNewSlide}>+ New Slide</button>
        <button
          onClick={handleDeleteSlide}
          style={{
            backgroundColor: "red",
          }}
        >
          - Delete Slide
        </button>
      </div>
    </div>
  );
};

export default SlidesView;
