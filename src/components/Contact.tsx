
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="section-padding gradient-bg text-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
            Ready to transform your online presence? Let's talk.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              Contact Information
              <span className="h-1 w-10 bg-nexus-teal ml-4 rounded-full"></span>
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 mt-1 bg-white/10 p-2 rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium mb-1">Email</p>
                  <a href="mailto:syedmustafax@gmail.com" className="text-nexus-teal hover:underline">syedmustafax@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1 bg-white/10 p-2 rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium mb-1">Follow Me</p>
                  <div className="flex space-x-4 mt-2">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-md hover:bg-white/20 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-md hover:bg-white/20 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h3 className="text-2xl font-semibold mb-6">Schedule a Meeting</h3>
              <p className="opacity-90 mb-6">
                Prefer to plan a call? Use the contact form or send me an email to schedule a consultation.
              </p>
              <a href="mailto:syedmustafax@gmail.com" className="inline-flex items-center bg-white/10 hover:bg-white/20 transition-colors px-5 py-3 rounded-md font-medium">
                Request a Call
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 md:p-8">
            <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
