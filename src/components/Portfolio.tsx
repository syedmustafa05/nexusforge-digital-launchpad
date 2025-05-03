
const Portfolio = () => {
  const projects = [
    {
      title: "Startup Landing Page",
      description: "Modern landing page design with animations and conversion-focused elements for a tech startup.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&h=400&q=80",
      tags: ["React", "Tailwind CSS", "Animation"]
    },
    {
      title: "Agency Website Redesign",
      description: "Complete overhaul of a digital marketing agency website with focus on portfolio showcasing.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&h=400&q=80",
      tags: ["WordPress", "Custom Theme", "SEO"]
    },
    {
      title: "Personal Portfolio",
      description: "Minimalist yet impactful portfolio design for a creative professional showcasing their work.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=600&h=400&q=80",
      tags: ["React", "GSAP", "Responsive"]
    },
    {
      title: "E-commerce Platform",
      description: "Full-featured online store with product catalog, secure checkout and inventory management.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&h=400&q=80",
      tags: ["Shopify", "Custom Development", "Payment Integration"]
    },
    {
      title: "SaaS Dashboard",
      description: "Intuitive admin dashboard for a SaaS platform with data visualization and user management.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&h=400&q=80", 
      tags: ["Vue.js", "Charting", "API Integration"]
    },
    {
      title: "Travel Blog",
      description: "Content-focused blog design with advanced categorization and social sharing capabilities.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&h=400&q=80",
      tags: ["WordPress", "Custom Blocks", "Performance"]
    }
  ];

  return (
    <section id="portfolio" className="section-padding bg-nexus-light-gray">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Portfolio</h2>
          <p className="section-subtitle">
            Explore a selection of my recent projects and crafted digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="portfolio-card">
              <div className="relative overflow-hidden h-60">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-nexus-blue">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs bg-nexus-teal/10 text-nexus-teal px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
