import React from "react";
import "./Services.css"; 

function Services() {
  const servicesList = [
    "Custom Garden Design",
    "Landscape Planning",
    "Plant Selection and Installation",
    "Regular Garden Maintenance",
    "Pest and Disease Control",
    "Irrigation System Installation",
    "Outdoor Lighting Design",
    "Seasonal Plantings",
    "Soil Testing and Analysis",
    "Organic Gardening Consultation",
    "Garden Pathway Construction",
    "Water Feature Installation",
    "Garden Furniture Arrangement",
    "Fertilization and Nutrient Management",
    "Garden Workshops and Training",
    "Garden Cleanup Services",
    "Greenhouse Design and Setup",
    "Vertical Garden Installations",
    "Container Gardening",
  ];

  return (
    <div className="services-container">
      <h1 className="services-title">Our Gardening Services</h1>
      <p>
        At Gardaenia Home Gardening Services, we take pride in offering a wide
        range of services to meet all your gardening needs. Our team of experts
        is dedicated to creating and maintaining beautiful gardens that you can
        enjoy year-round. Whether you're a seasoned gardener or a complete
        beginner, we're here to assist you on your gardening journey.
      </p>
      <p>
        Our comprehensive list of services includes everything from custom
        garden design to regular garden maintenance. Here are some of the key
        services we offer:
      </p>
      <ul className="service-list">
        {servicesList.map((service, index) => (
          <li key={index} className="service-item">
            {service}
          </li>
        ))}
      </ul>
      <p>
        No matter the size of your outdoor space, we have the expertise to
        tailor our services to your unique needs and preferences. We believe
        that every garden has the potential to be a work of art, and we're here
        to make that vision a reality.
      </p>
      <p>
        Gardaenia is committed to sustainable and eco-friendly gardening
        practices. We prioritize the health of your garden and the environment
        by using organic methods whenever possible.
      </p>
      <p>
        Contact us today to explore how we can help you transform your outdoor
        space into a beautiful and thriving garden that you'll cherish for
        years to come.
      </p>
    </div>
  );
}

export default Services;
