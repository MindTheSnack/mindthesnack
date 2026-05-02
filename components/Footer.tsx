export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-bg/40 backdrop-blur-md border-t border-glass relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-3">MindTheSnack</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Redefining workplace wellness through natural, sustainable snacking solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4 uppercase text-sm tracking-widest">
              Navigate
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '#home' },
                { label: 'About Us', href: '#chi-siamo' },
                { label: 'Products', href: '#prodotti' },
                { label: 'Partnership', href: '#partnership' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-accent-cyan transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4 uppercase text-sm tracking-widest">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="mailto:customerservice.mindthesnack@gmail.com"
                  className="text-gray-400 hover:text-accent-cyan transition-colors"
                >
                  customerservice.mindthesnack@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+447379509885" className="text-gray-400 hover:text-accent-cyan transition-colors">
                  07379509885
                </a>
              </li>
              <li className="text-gray-400">London, United Kingdom</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-white mb-4 uppercase text-sm tracking-widest">
              Follow Us
            </h4>
            <div className="flex gap-3">
              {[
                { label: 'Instagram', href: '#' },
                { label: 'Facebook', href: '#' },
                { label: 'LinkedIn', href: '#' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full border border-glass bg-dark-card/50 text-gray-400 hover:text-accent-cyan hover:border-accent-cyan/50 hover:bg-accent-cyan/10 transition-all flex items-center justify-center text-xs font-bold"
                  title={social.label}
                >
                  {social.label.charAt(0)}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-glass to-transparent my-8" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} MindTheSnack. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-gray-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
