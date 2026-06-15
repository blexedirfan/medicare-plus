import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-white to-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-16">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 text-xl font-bold text-slate-800">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-blue-600"
              >
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
              MediCare Plus
            </Link>

            <p className="mt-4 text-sm text-slate-600 leading-relaxed">
              Your trusted partner for modern healthcare. Book appointments,
              consult doctors, and manage your health in one place.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 mb-4">Services</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><Link className="hover:text-blue-600 transition" href="#services">General Medicine</Link></li>
              <li><Link className="hover:text-blue-600 transition" href="#services">Online Consultation</Link></li>
              <li><Link className="hover:text-blue-600 transition" href="#services">Emergency Care</Link></li>
              <li><Link className="hover:text-blue-600 transition" href="#services">Lab & Diagnostics</Link></li>
              <li><Link className="hover:text-blue-600 transition" href="#services">Mental Health</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><Link className="hover:text-blue-600 transition" href="#">About Us</Link></li>
              <li><Link className="hover:text-blue-600 transition" href="#doctors">Our Doctors</Link></li>
              <li><Link className="hover:text-blue-600 transition" href="#pricing">Pricing</Link></li>
              <li><Link className="hover:text-blue-600 transition" href="#">Blog</Link></li>
              <li><Link className="hover:text-blue-600 transition" href="#contact">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 mb-4">Legal</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><Link className="hover:text-blue-600 transition" href="#">Privacy Policy</Link></li>
              <li><Link className="hover:text-blue-600 transition" href="#">Terms of Service</Link></li>
              <li><Link className="hover:text-blue-600 transition" href="#">Cookie Policy</Link></li>
              <li><Link className="hover:text-blue-600 transition" href="#">HIPAA Compliance</Link></li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="my-10 border-t border-slate-200" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <span>© 2025 MediCare Plus. All rights reserved.</span>

          <span>
            Built by{" "}
            <a
              href="https://shopbuilt.store"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline font-medium"
            >
              ShopBuilt
            </a>
          </span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;