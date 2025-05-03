
import { useState, useEffect } from "react";

const Testimonials = () => {
  const testimonials = [
    {
      text: "Syed was incredibly professional and built a beautiful, fast-loading website for our startup. Highly recommended!",
      author: "Jane D.",
      role: "Startup Founder",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      text: "Working with NexusForge Digital transformed our online presence. Our new website has significantly increased our leads.",
      author: "Mark T.",
      role: "Marketing Director",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      text: "Syed's attention to detail and technical expertise made our e-commerce site both beautiful and high-performing.",
      author: "Sarah L.",
      role: "E-commerce Manager",
      image: "https://randomuser.me/api/portraits/women/68.jpg"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Client Testimonials</h2>
          <p className="section-subtitle">
            Don't take my word for it - here's what my clients have to say
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="min-w-full px-4">
                  <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                    <div className="flex justify-center mb-6">
                      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-nexus-teal">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.author} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <svg 
                      className="w-8 h-8 mx-auto mb-6 text-nexus-teal/30" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <p className="text-gray-600 mb-6 text-lg italic">{testimonial.text}</p>
                    <p className="font-semibold text-nexus-blue">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  activeIndex === index ? "bg-nexus-teal" : "bg-gray-300"
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
