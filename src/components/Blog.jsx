import { ArrowUpRight } from 'lucide-react';


export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-black/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gray-400">Read Our Blog</span>
          <h2 className="text-3xl font-bold text-white mt-2">
            Read Daily news about<br />startup companies
          </h2>
        </div>

        <div className="">
          <div className="bg-red-950/30 rounded-xl p-6 hover:bg-red-950/40 transition-all cursor-pointer grid grid-cols-1 gap-10 md:grid-cols-2 group">
            <img 
              src="https://images.unsplash.com/photo-1499750310107-5fef28a66643"
              alt="Blog post"
              className=" h-auto w-auto object-cover rounded-lg "
            />
           <div className='flex flex-col justify-between'>
            <div>
            <h3 className="text-xl font-semibold text-white mb-2 mt-4 group-hover:text-red-500 transition-colors">
              Not Another Framework
            </h3>
            <p className="text-gray-400 mb-4">
              We brought all the Remix goodies over to React Router and made improvements in the process.
              Now it's time to bring those improved APIs back over to Remix where they started!
            </p>
            </div>
            <div className="flex items-end  justify-between mt-12">
              <div className="flex space-x-3">
                <span className="text-red-500">Collaboration Tools</span>
              </div>
              <ArrowUpRight className="w-5 h-5 text-red-500" />
            </div>
            <div className="flex items-end  justify-between">
              <div className="flex space-x-3">
                <span className="text-red-500">Collaboration Tools</span>
              </div>
              <ArrowUpRight className="w-5 h-5 text-red-500" />
            </div>
           </div>
          </div>
       

         
        </div>
        

        <div className="text-center mt-12">
          <button className="border border-red-500 text-red-500 px-6 py-3 rounded-lg hover:bg-red-500 hover:text-white transition-colors">
            Read more
          </button>
        </div>
      </div>
    </section>
  );
}