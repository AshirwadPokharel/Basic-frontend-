function Contact() {
    return (
      <div id="contact" className="p-6 bg-gray-500">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">Contact Us</h2>
  
        {/* Contact Information */}
        <div className="max-w-4xl mx-auto bg-slate-300 p-6 rounded-lg shadow-lg">
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-gray-900">Our Office</h3>
            <p className="text-gray-600 mt-2">
           Carshop venue <br />
              KTM, Pepsi, Nepal
            </p>
          </div>
  
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-gray-900">Phone</h3>
            <p className="text-gray-600 mt-2">
              +977 986772****
            </p>
          </div>
  
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-gray-900">Email</h3>
            <p className="text-gray-600 mt-2">
              <a href="mailto:contact@carshop.com" className="text-blue-500 hover:underline">
                Pokharel_twins@gmail.com
              </a>
            </p>
          </div>
  
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-gray-900">Social Media</h3>
            <p className="text-gray-600 mt-2">
              Follow us on social media:
            </p>
            <div className="flex space-x-6 mt-4">
              <a href="https://facebook.com/twins" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                Facebook
              </a>
              <a href="https://twitter.com/Twins" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
                Twitter
              </a>
              <a href="https://instagram.com/twins" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Contact;