import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-brand-deep mb-6">
                Start Your Dream <span className="text-brand-medium">Project</span>
              </h2>
              <p className="text-gray-600 mb-8 max-w-md leading-relaxed">
                Connect with our expert design team to transform your space into a masterpiece of modern luxury and comfort.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-light flex items-center justify-center text-brand-medium">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold">Phone</p>
                    <p className="font-medium">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-light flex items-center justify-center text-brand-medium">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold">Email</p>
                    <p className="font-medium">hello@interior-designer.in</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-light flex items-center justify-center text-brand-medium">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold">Location</p>
                    <p className="font-medium">Skyline Business Center, Mumbai</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-brand-light rounded-2xl p-8 shadow-sm"
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full bg-white border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-medium transition-all"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full bg-white border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-medium transition-all"
                      placeholder="Your Phone"
                    />
                  </div>
                  <div>
                    <label htmlFor="requirement" className="block text-sm font-medium text-gray-700 mb-2">Requirement</label>
                    <select
                      id="requirement"
                      className="w-full bg-white border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-medium transition-all appearance-none"
                    >
                      <option>Kitchen Design</option>
                      <option>Living Room</option>
                      <option>Full Home Interior</option>
                      <option>Office Spaces</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full bg-white border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-medium transition-all"
                      placeholder="Tell us about your project"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-brand-deep hover:bg-brand-medium text-white font-bold py-4 rounded-lg transition-colors duration-300 shadow-lg shadow-brand-deep/20"
                >
                  Start Your Dream Project
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
