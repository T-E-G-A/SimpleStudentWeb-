export default function Testimonials() {
    return (
      <section className="testimonials" id="testimonials">
        <h2>What Our Students Say</h2>
        <div className="testimonial-list">
          <div className="testimonial-card">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="John Doe"
            />
            <h3>John Doe</h3>
            <p>Greenwood High helped me achieve my dreams!</p>
          </div>
          <div className="testimonial-card">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Jane Smith"
            />
            <h3>Jane Smith</h3>
            <p>The teachers are amazing and very supportive.</p>
          </div>
          <div className="testimonial-card">
            <img
              src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Alice Johnson"
            />
            <h3>Alice Johnson</h3>
            <p>I love the extracurricular activities here.</p>
          </div>
        </div>
      </section>
    );
  }