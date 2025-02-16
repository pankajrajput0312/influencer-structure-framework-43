
const Footer = () => {
  return (
    <footer className="bg-secondary py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">InfluenceReach</h3>
            <p className="text-sm text-gray-600">
              Connecting brands with influential voices to create authentic and impactful marketing campaigns.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-sm text-gray-600 hover:text-accent transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-sm text-gray-600 hover:text-accent transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-gray-600 hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm text-gray-600">
              Email: hello@influencereach.com
              <br />
              Phone: (555) 123-4567
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-sm text-gray-600">
            © {new Date().getFullYear()} InfluenceReach. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
