import React from "react";

function About() {
  const containerStyle = {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  };

  const headerStyle = {
    fontSize: "28px",
    color: "#333",
  };

  const paragraphStyle = {
    fontSize: "16px",
    lineHeight: "1.5",
    color: "#666",
  };

  const listStyle = {
    listStyleType: "disc",
    marginLeft: "20px",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>About Gardaenia Home Gardening Services</h1>
      <p style={paragraphStyle}>
        Welcome to Gardaenia Home Gardening Services, your trusted partner in
        creating and maintaining beautiful gardens right at your doorstep.
        We're passionate about transforming your outdoor spaces into lush,
        green retreats that you can enjoy year-round.
      </p>
      <p style={paragraphStyle}>
        Our team of experienced horticulturists and garden designers are
        dedicated to providing top-notch gardening services, including:
      </p>
      <ul style={listStyle}>
        <li>Custom Garden Design</li>
        <li>Landscape Planning</li>
        <li>Plant Selection and Installation</li>
        <li>Regular Garden Maintenance</li>
        <li>Pest and Disease Control</li>
      </ul>
      <p style={paragraphStyle}>
        Whether you have a small balcony, a spacious backyard, or anything in
        between, we have the expertise to tailor our services to your unique
        needs and preferences. We believe that every garden has the potential
        to be a work of art, and we're here to bring that vision to life.
      </p>
      <p style={paragraphStyle}>
        At Gardaenia, we're committed to sustainability and eco-friendly
        practices. We use organic gardening methods whenever possible to ensure
        the health of your garden and the environment.
      </p>
      <p style={paragraphStyle}>
        Thank you for considering Gardaenia Home Gardening Services for your
        gardening needs. We look forward to the opportunity to create a
        beautiful and thriving garden for you to enjoy for years to come.
      </p>
    </div>
  );
}

export default About;
