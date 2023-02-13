import React from "react";
import TimeTableCard from "../../Components/SetMenus/TimeTableCard";
import "./services.css";

const Services = () => {
  return (
    <div>
      <div>
        <p id="title">Services</p>
      </div>
      <div>
        <p id="title2">Catering</p>
      </div>
      <div className="article-container">
        <article>
          <p>
            Our restaurant provides a top-quality catering service for all types
            of events, big or small. Whether you're hosting a corporate
            function, birthday party, or wedding reception,
          </p>
          <p>
            Our team of experienced chefs and catering staff will work with you
            to create a menu that perfectly suits your needs and tastes. Our
            menu options are made with fresh, locally sourced ingredients and
            are expertly prepared to ensure that your guests enjoy the best
            possible dining experience,
          </p>
          <p>
            Our catering service also includes a full range of services, from
            set-up and service to clean-up and take-down. We take care of all
            the details, so you can focus on enjoying your event,
          </p>
          <p>
            If you're looking for a catering service that delivers exceptional
            quality and value, look no further than our restaurant. Contact us
            today to request a quote and learn more about our catering services.
          </p>
        </article>
      </div>
      <div className="table-container">
        <TimeTableCard />
      </div>
    </div>
  );
};

export default Services;
