import React from "react";

const teamMembers = [
  {
    name: "John Doe",
    role: "CEO & Founder",
    imageUrl: "/team1.jpg", // Replace with your image
  },
  {
    name: "Jane Smith",
    role: "Lead Designer",
    imageUrl: "/team2.jpg", // Replace with your image
  },
  {
    name: "Sam Wilson",
    role: "Lead Developer",
    imageUrl: "/team3.jpg", // Replace with your image
  },
];

const AboutPage = () => {
  return (
    <div className="bg-background text-text-primary font-sans">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 font-heading">About Us</h1>
          <p className="text-lg text-text-secondary">
            We are a team of passionate developers and designers who love
            creating beautiful and functional web applications. Our mission is
            to help businesses and individuals bring their ideas to life on the
            web.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 font-heading">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold font-heading">
                  {member.name}
                </h3>
                <p className="text-text-secondary">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
