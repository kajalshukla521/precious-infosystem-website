import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Homepage.css";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore from "swiper";
import { Container } from "react-bootstrap";



SwiperCore.use([Pagination, Autoplay]);
const Homepage = () => {
  // apply counter
  const [count, setCount] = useState({
    projectsdelivered: 0,
    clientretention: 0,
    happyclients: 0,
    years: 0,
  });

  useEffect(() => {
    const incrementCounters = () => {
      setCount((prev) => ({
        // increment by
        projectsdelivered:
          prev.projectsdelivered < 500 ? prev.projectsdelivered + 70 : 500,
        // increment by 5
        clientretention:
          prev.clientretention < 90 ? prev.clientretention + 10 : 90,
        // increment by 30
        happyclients: prev.happyclients < 300 ? prev.happyclients + 30 : 300,
        // increment by 1
        years: prev.years < 9 ? prev.years + 1 : 9,
      }));
    };

    // Start interval to increment the counters every 100ms
    const interval = setInterval(incrementCounters, 100);

    // Stop interval after 1 second (1000ms)
    const timeout = setTimeout(() => {
      clearInterval(interval);
    }, 1000);

    // Cleanup when the component unmounts
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      {/* Main Content */}
      <div className="container homepage-container">
        <div className="row">
          {/* Left Side - Heading, Paragraph, Button */}
          <div className="col-md-6   ">
            <h1>
              Developing <br />
              Software For Your <br /> Digital Success
            </h1>
            <p>
              We enable businesses to meet today's needs through robust and
              adaptable digital solutions while unlocking tomorrow's
              possibilities.
            </p>
            <button type="button" class="btn-contact">
              contact Us
            </button>
          </div>

          {/* Right Side - Images */}
          <div className="col-md-6 d-flex justify-content-center align-items-center position-relative homepage-right">
            <img
              src="https://www.preciousinfosystem.com/images/assets/ils_13.svg"
              alt="Background Image"
              className="img-fluid"
            />
            <img
              src="https://www.preciousinfosystem.com/images/assets/ils_13_1.svg"
              alt="Rotated Center Image"
              className="img-fluid rotated-img"
            />
          </div>
        </div>

        {/* New Section with Centered Heading and Paragraph */}

        <div className="col-xxl-12 col-md-12 text-center">
          <h1 className="heading1">
            Empowering Digital Success
            <br /> through Software Solutions
          </h1>
          <p>
            Empowering digital success through our robust and adaptable software
            solutions, we enable businesses to meet their current needs while
            unlocking endless possibilities for tomorrow. With our expertise and
            forward-thinking approach, we provide businesses with the tools and
            technologies they need to thrive in the digital realm. Our tailored
            software solutions are designed to drive growth, enhance efficiency,
            and deliver exceptional results, ensuring long-term success in
            today's dynamic business landscape.
          </p>
        </div>

        <div></div>
      </div>

      {/* start counter */}

      <div className="container-fluid counters-container">
        <div className="row justify-content-center align-items-center">
          {/* Counter 1 */}
          <div className="col-md-3 counter" style={{maxWidth:"1240"}} >
            <div className="counter-image">
              <img
                src="https://www.preciousinfosystem.com/images/assets/project.png"
                alt="Calculation"
                className="img-fluid rotated-img3"
              />
            </div>
            <div className="counter-content">
              <h2>{count.projectsdelivered}+</h2>
              <p>projects delivered</p>
            </div>
          </div>

          {/* Counter 2 */}
          <div className="col-md-3 counter"  style={{maxWidth:"1240"}}>
            <div className="counter-image">
              <img
                src="https://www.preciousinfosystem.com/images/assets/project.png"
                alt="Percentage"
                className="img-fluid rotated-img3"
              />
            </div>
            <div className="counter-content">
              <h2>{count.clientretention}%</h2>
              <p>enterprise client retention</p>
            </div>
          </div>

          {/* Counter 3 */}
          <div className="col-md-3 counter" style={{maxWidth:"1240"}} >
            <div className="counter-image">
              <img
                src="https://www.preciousinfosystem.com/images/assets/project.png"
                alt="Projects"
                className="img-fluid rotated-img3"
              />
            </div>
            <div className="counter-content">
              <h2>{count.happyclients}+</h2>
              <p>happy clients</p>
            </div>
          </div>

          {/* Counter 4 */}
          <div className="col-md-3 counter"  style={{maxWidth:"1240%"}}>
            <div className="counter-image">
              <img
                src="https://www.preciousinfosystem.com/images/assets/project.png"
                alt="Years"
                className="img-fluid rotated-img3"
              />
            </div>
            <div className="counter-content">
              <h2>{count.years}+</h2>
              <p>Years of Experience</p>
            </div>
          </div>
        </div>
      </div>



      {/* 
      technology start  */}

      <div className="technology-section">
        <div className="container-fluid">
          <h1 className="technology">Technologies We Work With</h1>
          <div className="grid-container">
            <div className="rotating-container">
              <div className="rotating-image">
                <img
                  src="https://www.preciousinfosystem.com/images/assets/ror.png"
                  alt="JavaScript"
                />
              </div>
              <h2 className="heading5">JavaScript</h2>
            </div>
            <div className="rotating-container">
              <div className="rotating-image">
                <img
                  src="https://www.preciousinfosystem.com/images/assets/html.png"
                  alt="React Js"
                />
              </div>
              <h2 className="heading5">HTML</h2>
            </div>
            <div className="rotating-container">
              <div className="rotating-image">
                <img
                  src="https://www.preciousinfosystem.com/images/assets/html.png"
                  alt="HTML"
                />
              </div>
              <h2 className="heading5">HTML</h2>
            </div>
            <div className="rotating-container">
              <div className="rotating-image">
                <img
                  src="https://www.preciousinfosystem.com/images/assets/js.png"
                  alt="CSS"
                />
              </div>
              <h2 className="heading5">JavaScript</h2>
            </div>

            <div className="rotating-container">
              <div className="rotating-image">
                <img
                  src="https://www.preciousinfosystem.com/images/assets/css.png"
                  alt="CSS"
                />
              </div>
              <h2 className="heading5">CSS</h2>
            </div>
          </div>
        </div>
        <div className="container-fluid ">
          <div className="grid-container">
            <div className="rotating-container">
              <div className="rotating-image">
                <img
                  src="https://www.preciousinfosystem.com/images/assets/js.png"
                  alt="JavaScript"
                />
              </div>
              <h2 className="heading5">JavaScript</h2>
            </div>
            <div className="rotating-container">
              <div className="rotating-image">
                <img
                  src="https://www.preciousinfosystem.com/images/assets/react.png"
                  alt="React Js"
                />
              </div>
              <h2 className="heading5">React Js</h2>
            </div>
            <div className="rotating-container">
              <div className="rotating-image">
                <img
                  src="https://www.preciousinfosystem.com/images/assets/html.png"
                  alt="HTML"
                />
              </div>
              <h2 className="heading5">HTML</h2>
            </div>
            <div className="rotating-container">
              <div className="rotating-image">
                <img
                  src="https://www.preciousinfosystem.com/images/assets/css.png"
                  alt="CSS"
                />
              </div>
              <h2 className="heading5">CSS</h2>
            </div>

            <div className="rotating-container">
              <div className="rotating-image">
                <img
                  src="https://www.preciousinfosystem.com/images/assets/html.png"
                  alt="CSS"
                />
              </div>
              <h2 className="heading5">CSS</h2>
            </div>
          </div>
        </div>

        {/* Industries web server */}

        <div className="container my-5">
          <h1 className="technology">Industries We Serve</h1>
          <div className="row">
            {/* Left Side - Paragraph + Image + Text */}
            <div className="col-md-6">
              {/* Paragraph */}
              <div className="paragraph-section">
                <p>
                  This is a 5-6 line paragraph that will sit on the left side of
                  the page. You can add any content here to fit the context of
                  your page. This paragraph could be used to describe something
                  in more detail. It's flexible and adjustable for your needs.
                </p>
              </div>

              {/* Image + Text Section */}
              <div className="image-text-section mt-4">
                <div className="d-flex align-items-center mb-2">
                  <img
                    src="https://www.preciousinfosystem.com/images/assets/checked.png"
                    alt="check"
                    className="small-check-image"
                  />
                  <span className="mx-2">Increased company value</span>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <img
                    src="https://www.preciousinfosystem.com/images/assets/checked.png"
                    alt="check"
                    className="small-check-image"
                  />
                  <span className="mx-2">Reduces training overheads</span>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <img
                    src="https://www.preciousinfosystem.com/images/assets/checked.png"
                    alt="check"
                    className="small-check-image"
                  />
                  <span className="mx-2">Improves productivity</span>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <img
                    src="https://www.preciousinfosystem.com/images/assets/checked.png"
                    alt="check"
                    className="small-check-image"
                  />
                  <span className="mx-2">Boosts employee morale</span>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <img
                    src="https://www.preciousinfosystem.com/images/assets/checked.png"
                    alt="check"
                    className="small-check-image"
                  />
                  <span className="mx-2">Enhances team collaboration</span>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <img
                    src="https://www.preciousinfosystem.com/images/assets/checked.png"
                    alt="check"
                    className="small-check-image"
                  />
                  <span className="mx-2">Drives innovation</span>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <img
                    src="https://www.preciousinfosystem.com/images/assets/checked.png"
                    alt="check"
                    className="small-check-image"
                  />
                  <span className="mx-2">Supports scalable growth</span>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <img
                    src="https://www.preciousinfosystem.com/images/assets/checked.png"
                    alt="check"
                    className="small-check-image"
                  />
                  <span className="mx-2">Increases market competitiveness</span>
                </div>
              </div>
            </div>

            {/* Right Side - Single Image */}
            <div className="col-md-6 d-flex justify-content-center align-items-center">
              <img
                src="https://www.preciousinfosystem.com/images/assets/industry.png"
                alt="Right Side Image"
                className="right-side-image"
              />
            </div>
          </div>
        </div>
      </div>

      {/* card with swiper */}
      <div className="subscribe-area" style={{ marginTop: "-48px" }}>
        <Container className="text-center my-5">
          <div className="sc-title">Testimonials</div>
          {/* Heading */}
          <div>
            {" "}
            <h2 className="mt-4">
              Word from <span className="desigin">Client</span>
            </h2>
          </div>

          {/* Swiper for Cards */}
          <div className="swiper-container-flex">
            <Swiper
            // Space between cards
              spaceBetween={20} 
              slidesPerView={3} // Show 3 cards at once
              slidesPerGroup={1} // Scroll one card at a time
              autoplay={{ delay: 3000 }} // Autoplay with 3-second delay
              loop={true} // Loop slides
              className="mySwiper"
              direction="horizontal" // Only horizontal swipe
              pagination={{ clickable: true }} // Enable clickable pagination
            >
              {/* Swiper Slides */}
              <SwiperSlide>
                <div className="card testimonial-card">
                  <img
                    src="https://www.preciousinfosystem.com/images/assets/sarah.jpg"
                    className="card-img-top rounded-circle mx-auto mt-3"
                    alt="client"
                  />
                  <div className="card-body">
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aliquam imperdiet.
                    </p>
                    <h5 className="card-title mt-2">John Doe</h5>
                    <p className="card-text text-muted">CEO, Company A</p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="card testimonial-card">
                  <img
                    src="https://www.preciousinfosystem.com/images/assets/sarah.jpg"
                    className="card-img-top rounded-circle mx-auto mt-3"
                    alt="client"
                  />
                  <div className="card-body">
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nullam facilisis.
                    </p>
                    <h5 className="card-title mt-2">Jane Smith</h5>
                    <p className="card-text text-muted">CTO, Company B</p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="card testimonial-card">
                  <img
                    src="https://www.preciousinfosystem.com/images/assets/sarah.jpg"
                    className="card-img-top rounded-circle mx-auto mt-3"
                    alt="client"
                  />
                  <div className="card-body">
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <h5 className="card-title mt-2">Michael Johnson</h5>
                    <p className="card-text text-muted">Manager, Company C</p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="card testimonial-card">
                  <img
                    src="https://www.preciousinfosystem.com/images/assets/sarah.jpg"
                    className="card-img-top rounded-circle mx-auto mt-3"
                    alt="client"
                  />
                  <div className="card-body">
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer lacinia.
                    </p>
                    <h5 className="card-title mt-2">Sara Williams</h5>
                    <p className="card-text text-muted">Founder, Company D</p>
                  </div>
                </div>
              </SwiperSlide>

              {/* Additional slides */}
              <SwiperSlide>
                <div className="card testimonial-card">
                  <img
                    src="https://www.preciousinfosystem.com/images/assets/sarah.jpg"
                    className="card-img-top rounded-circle mx-auto mt-3"
                    alt="client"
                  />
                  <div className="card-body">
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <h5 className="card-title mt-2">Alice Brown</h5>
                    <p className="card-text text-muted">Developer, Company E</p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>

            {/* Pagination outside the cards */}
            <div className="swiper-pagination"></div>
          </div>
        </Container>

        {/* contact from */}

        <div className="container mt-5">
          <div className="row">
            {/* Left side */}
            <div className="col-md-6">
              <h2>Get in Touch with Us.</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus non dui at turpis suscipit placerat. Suspendisse quis
                aliquet dolor. Vivamus viverra augue ut libero volutpat
                tincidunt. Integer consectetur odio sed libero iaculis, sit amet
                aliquet felis viverra.
              </p>
              <img
                src="https://www.preciousinfosystem.com/images/assets/gignup.png"
                alt="Sample"
                className="img-fluid mt-3"
              />
            </div>

            {/* Right side */}
            <div className="col-md-6">
              <form>
                {/* Name */}
                <div className="mb-3">
                  <label className="form-label">
                    Name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter full name"
                  />
                </div>

                {/* Company & Country */}
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Company Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Company Name"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Country</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Country"
                    />
                  </div>
                </div>

                {/* Phone & Email */}
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">
                      Phone <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">
                      Email <span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="mb-3">
                  <label className="form-label">Give us a message</label>
                  <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Your message"
                  ></textarea>
                </div>

                {/* Blur Paragraph */}
                <p className="blur-text">
                  Please fill out the form to the best of your ability. We will
                  get back to you as soon as possible. Thank you for your
                  patience.
                </p>

                {/* Submit Button */}
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
