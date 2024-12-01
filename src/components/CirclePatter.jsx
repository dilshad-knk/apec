const CirclePattern = ({ className = "" }) => {
  const dashedStyle = {
    borderStyle: 'dashed',
    borderDasharray: '20 10', // Larger dash (20px) with larger gap (10px)
  };
  return (
    <div className={`absolute ${className}`}>
      <div className="relative flex flex-col items-center justify-center ">
        <div className="absolute -top-7  w-[20rem] h-48 border-2 border-dashed border-red-800/50 border-b-0 rounded-t-full z-10"style={dashedStyle}></div>
        <div className="absolute top-0  w-64 h-32 border-2 border-dashed border-red-800/40  border-b-0 rounded-t-full z-10 [border-dash-array:40px_15px]" ></div>
        <div className="absolute top-7 w-48 h-24 border-2 border-dashed border-red-800/30 [border-dash-array:40px_15px] border-b-0 rounded-t-full z-20"></div>
        <div className="absolute top-14 w-32 h-16 border-2 border-dashed border-red-800/20 [border-dash-array:40px_15px] border-b-0 rounded-t-full z-20"></div>
      </div>
    </div>
  );
};

export default CirclePattern;
