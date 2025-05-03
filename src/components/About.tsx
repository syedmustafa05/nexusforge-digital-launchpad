
const About = () => {
  return (
    <section id="about" className="section-padding bg-nexus-light-gray">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            {/* Abstract code illustration */}
            <div className="relative bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-nexus-teal/20 to-nexus-blue/20"></div>
              <div className="p-8 relative h-full">
                <div className="flex space-x-2 mb-4">
                  <div className="rounded-full w-3 h-3 bg-red-500"></div>
                  <div className="rounded-full w-3 h-3 bg-yellow-500"></div>
                  <div className="rounded-full w-3 h-3 bg-green-500"></div>
                </div>
                
                <div className="space-y-3 font-mono text-sm">
                  <div className="text-purple-600">.nexusforge-digital <span className="text-gray-500">{" {"}</span></div>
                  <div className="pl-6"><span className="text-nexus-teal">design:</span> <span className="text-orange-500">'modern'</span>;</div>
                  <div className="pl-6"><span className="text-nexus-teal">development:</span> <span className="text-orange-500">'responsive'</span>;</div>
                  <div className="pl-6"><span className="text-nexus-teal">experience:</span> <span className="text-orange-500">'seamless'</span>;</div>
                  <div className="text-gray-500">{"}"}</div>
                  <div className="text-purple-600">.mission <span className="text-gray-500">{" {"}</span></div>
                  <div className="pl-6"><span className="text-nexus-teal">goal:</span> <span className="text-orange-500">'empower businesses'</span>;</div>
                  <div className="text-gray-500">{"}"}</div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-nexus-blue mb-6 flex items-center">
              About Me
              <span className="h-1 w-10 bg-nexus-teal ml-4 rounded-full"></span>
            </h2>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              I'm a passionate web developer and the founder of NexusForge Digital. With a focus on sleek design, responsive development, and seamless user experiences, I help businesses turn ideas into high-converting websites.
            </p>
            
            <p className="text-gray-700 mb-8 leading-relaxed">
              My mission is to empower small businesses and startups with a digital presence that stands out.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="bg-white px-4 py-3 rounded-md shadow-sm border border-gray-100">
                <span className="font-medium text-nexus-teal">Frontend</span>
              </div>
              <div className="bg-white px-4 py-3 rounded-md shadow-sm border border-gray-100">
                <span className="font-medium text-nexus-teal">Backend</span>
              </div>
              <div className="bg-white px-4 py-3 rounded-md shadow-sm border border-gray-100">
                <span className="font-medium text-nexus-teal">UI/UX Design</span>
              </div>
              <div className="bg-white px-4 py-3 rounded-md shadow-sm border border-gray-100">
                <span className="font-medium text-nexus-teal">CMS</span>
              </div>
              <div className="bg-white px-4 py-3 rounded-md shadow-sm border border-gray-100">
                <span className="font-medium text-nexus-teal">E-Commerce</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
