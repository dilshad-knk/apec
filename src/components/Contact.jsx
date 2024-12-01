import { ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-black/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold text-gray-400 mb-2">Got a project in mind?</h2>
            <h3 className="text-4xl font-bold text-white mb-8">Reserve a Call</h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-400">
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                An in depth session to understand your needs
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                Learn which plan is right for your team
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                Get onboarding help
              </div>
            </div>

            <div className="mt-12">
              <p className="text-gray-400">Technical support or some query?</p>
              <a href="#support" className="text-red-500 flex items-center gap-2 hover:gap-3 transition-all">
                Contact support <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="bg-red-950/30 p-8 rounded-xl">
            <h3 className="text-2xl font-semibold text-white mb-6">Tell us about yourself.</h3>
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full bg-black/50 border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-500"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Work Email"
                  className="w-full bg-black/50 border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-500"
                />
              </div>
              <div>
                <select className="w-full bg-black/50 border border-gray-800 rounded-lg px-4 py-3 text-gray-500 focus:outline-none focus:border-red-500">
                  <option>Company Size</option>
                  <option>1-20</option>
                  <option>21-50</option>
                  <option>51-200</option>
                  <option>201+</option>
                </select>
              </div>
              <div>
                <textarea
                  placeholder="How Can We Help?"
                  rows={4}
                  className="w-full bg-black/50 border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-500"
                ></textarea>
              </div>
              <button className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors">
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}