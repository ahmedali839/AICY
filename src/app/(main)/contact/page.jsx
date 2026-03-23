
import React from 'react';

const ContactPage = () => {
  return (
    <div className="bg-background text-text-primary font-sans">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold font-heading">Contact Us</h1>
            <p className="text-text-secondary mt-2">Have a question or want to work together? Drop us a line.</p>
          </div>
          <form className="bg-white p-8 rounded-lg shadow-md">
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-text-secondary">Name</label>
              <input type="text" id="name" className="w-full px-4 py-3 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-text-secondary">Email</label>
              <input type="email" id="email" className="w-full px-4 py-3 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium mb-2 text-text-secondary">Message</label>
              <textarea id="message" rows="5" className="w-full px-4 py-3 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
            </div>
            <button type="submit" className="w-full bg-primary hover:bg-opacity-90 text-white font-bold py-3 px-4 rounded-md">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
