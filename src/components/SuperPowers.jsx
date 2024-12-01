import { SiJavascript, SiFlutter, SiPrisma, SiPostgresql, SiRemix, SiMongodb } from 'react-icons/si';

export function OurPowers() {
  return (
    <>
        <div className='py-24'>

      <h1 className='text-4xl text-center text-white'>Our Powers</h1>
        <div className="grid text-white grid-cols-2 lg:grid-cols-6 gap-24 md:gap-52 lg:gap-3 lg:mx-20 py-4 text-4xl md:text-5xl pt-20">
          <div className="flex flex-col items-center justify-center">
            <SiJavascript />
          </div>
          <div className="flex gap-2 items-center justify-center">
            <SiFlutter />
          </div>
          <div className="flex justify-center items-center">
            <SiPrisma />
            <span className="text-lg lg:text-3xl">Prisma</span>

          </div>

          <div className="flex flex-col items-center justify-center">
            <SiPostgresql />
          </div>
          <div className="flex flex-col items-center justify-center">
            <SiRemix />
          </div>
          <div className="flex flex-col items-center justify-center">
            <SiMongodb />
          </div>
        </div>
        </div>
     
    </>
  );
}
