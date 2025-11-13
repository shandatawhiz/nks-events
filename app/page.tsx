export default function Home() {
  const services = [
    { title: 'LED Screens', desc: 'High-resolution displays for events of any size' },
    { title: 'Audio Visuals', desc: 'Crystal-clear sound systems and projectors' },
    { title: 'Emcee Services', desc: 'Professional hosts for corporate and tech events' },
    { title: 'Walkie Talkies', desc: 'Seamless team coordination during events' },
    { title: 'Crowd Management', desc: 'Safety and flow management for large gatherings' },
    { title: 'Entertainment', desc: 'Games, activities, and artist bookings' }
  ];

  const events = [
    { name: 'Hello Techies Meetup', desc: 'Co-coordinated 200+ attendee tech conference', img: 'https://placehold.co/300x200?text=Hello+Techies' },
    { name: 'Chennai Data Circle', desc: 'Managed AV and crowd for data professionals event', img: 'https://placehold.co/300x200?text=Data+Circle' },
    { name: 'Pro IT Bridge Event', desc: 'Full event coordination with LED screens', img: 'https://placehold.co/300x200?text=Pro+IT+Bridge' }
  ];

  const gallery = [
    'https://placehold.co/300x200?text=Event+1',
    'https://placehold.co/300x200?text=Event+2',
    'https://placehold.co/300x200?text=Event+3',
    'https://placehold.co/300x200?text=Event+4'
  ];

  return (
    <main>
      <section className="hero">
        <h1>NKS Events</h1>
        <p>Experts in LED Screens, Audio Visuals, Emcee, Walkie Talkies, Crowd Management & Entertainment</p>
        <a className="btn-primary" href="#register">Enquire Now</a>
      </section>

      <section>
        <h2>Our Services</h2>
        <ul className="cards">
          {services.map((service, idx) => (
            <li key={idx}>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Recent Events</h2>
        <div className="cards">
          {events.map((event, idx) => (
            <div key={idx} className="event-card">
              <img src={event.img} alt={event.name} />
              <h3>{event.name}</h3>
              <p>{event.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Gallery</h2>
        <div className="gallery">
          {gallery.map((img, i) => (
            <img key={i} src={img} alt={`Gallery ${i + 1}`} />
          ))}
        </div>
      </section>

      <section id="register">
        <h2>Register Your Event</h2>
        <form>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input type="tel" placeholder="Phone" required />
          <textarea placeholder="Event Details" required />
          <button type="submit">Submit</button>
        </form>
      </section>

      <a className="whatsapp-chat" href="https://wa.me/919876543210?text=Hello%20NKS%20Events" target="_blank">WhatsApp Chat</a>
    </main>
  );
}
