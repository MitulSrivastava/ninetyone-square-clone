const Footer = () => {
  return (
    <footer className="bg-dark-bg text-white">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <div className="bg-brand-red text-white px-3 py-2 rounded font-bold text-xl mr-2">
                91
              </div>
              <span className="font-semibold">
                square<br />feet
              </span>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Your trusted partner for commercial fit-outs and workspace transformations.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-gray-600 rounded flex items-center justify-center">
                <span className="text-xs">f</span>
              </div>
              <div className="w-8 h-8 bg-gray-600 rounded flex items-center justify-center">
                <span className="text-xs">in</span>
              </div>
              <div className="w-8 h-8 bg-gray-600 rounded flex items-center justify-center">
                <span className="text-xs">ig</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Our Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Career</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-6 text-white">Services</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Office Fitouts</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Retail Design</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Space Planning</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Interior Design</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Project Management</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-6 text-white">Contact Info</h3>
            <div className="space-y-3 text-gray-300">
              <div>
                <p className="text-sm">📍 123 Business District</p>
                <p className="text-sm">Mumbai, India 400001</p>
              </div>
              <div>
                <p className="text-sm">📞 +91 98765 43210</p>
              </div>
              <div>
                <p className="text-sm">✉️ hello@91squarefeet.com</p>
              </div>
              <div>
                <p className="text-sm">🕒 Mon - Fri: 9AM - 6PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 91 Square Feet. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;