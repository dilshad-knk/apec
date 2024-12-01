import React from 'react'

const NewsLetter = () => {
  return (
    <div className='p-10 bg-black'>
        <div className='bg-red-600/80 flex items-center justify-between p-10 rounded-xl'>
            <div className='text-lg text-white space-y-5' >
                <h3 className='font-bold'>Newsletter</h3>
                <p>Be the first one to know about insigths,technologies and innovations</p>
            </div>
            <div>
                <button  className='px-6 py-2 bg-red-500 text-white rounded-lg hover:opacity-85 '>Subscribe</button>
            </div>
        </div>
    </div>
  )
}

export default NewsLetter