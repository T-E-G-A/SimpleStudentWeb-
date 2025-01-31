export default function Programs() {
    return (
      <section className="programs" id="programs">
        <h2>Our Programs</h2>
        <div className="program-list">
          <div className="program-card">
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="STEM Program"
            />
            <h3>STEM Program</h3>
            <p>Science, Technology, Engineering, and Mathematics.</p>
          </div>
          <div className="program-card">
            <img
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Arts Program"
            />
            <h3>Arts Program</h3>
            <p>Creative arts, music, and drama.</p>
          </div>
          <div className="program-card">
            <img
              src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Sports Program"
            />
            <h3>Sports Program</h3>
            <p>Athletics and physical education.</p>
          </div>
        </div>
      </section>
    );
  }