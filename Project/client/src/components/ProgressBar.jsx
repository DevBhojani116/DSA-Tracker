import React from 'react';

function ProgressBar({ percentage }) {
  return (
    <div className='progress bg-white dark:white overflow-hidden flex justify-start'>
      <div
        className={`progress rounded-tl-{12px} ${percentage === 100.00 ? 'bg-green-600 dark:bg-emerald-500' : percentage === 0.00? 'bg-white':'bg-gray-500'} transition-all duration-500`}
        style={{ width: `${percentage}%` }}
      />
      <span className="absolute inset-0 flex items-center justify-center text-sm sm:text-lg font-medium text-black">
        {percentage}%
      </span>
    </div>
  );
}

export default ProgressBar;