import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './ContactUs.css';

const center = {
  lat: -3.745,
  lng: -38.523
};

const ContactUs = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    setMessages([...messages, {user: "You", text: input}]);
    setInput("");
  }

  const sendEmail = (e) => {
    e.preventDefault();
    alert(`Form submitted with data: ${JSON.stringify(Object.fromEntries(new FormData(e.target).entries()))}`);
    e.target.reset();
  }

  return (
    <div className="ContactUs">
      <h1>Contact Us</h1>
      <div className="grid-container">
        <div className="info">
          <h2>Restaurant Information</h2>
          <p>Our Address: 123 Street, City, Country</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@restaurant.com</p>
        </div>
        <div className="map">
          <h2>Location</h2>
          <MapContainer center={center} zoom={13} style={{ height: "400px", width: "100%" }}>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={center}>
              <Popup>
                Our Restaurant
              </Popup>
            </Marker>
          </MapContainer>
        </div>
        <div className="form">
          <h2>Send us a message</h2>
          <form className="contact-form" onSubmit={sendEmail}>
            <input type="hidden" name="contact_number" />
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
          </form>
        </div>
        <div className="chat">
          <h2>Live Chat</h2>
          <div className="chatbox">
            {messages.map((message, index) => (
              <p key={index}><strong>{message.user}:</strong> {message.text}</p>
            ))}
          </div>
          <form onSubmit={sendMessage}>
            <input value={input} onChange={e => setInput(e.target.value)} />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
