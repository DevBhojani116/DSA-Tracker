import React from 'react';

function ProgressBar({ percentage }) {
  return (
    <div className='h-0 bg-white dark:white rounded-full overflow-hidden'>
      <div
        className={`h-full rounded-full ${percentage === 100.00 ? 'bg-green-600 dark:bg-emerald-500' : percentage > 50 ? 'bg-blue-700 dark:[#E65F5C]' : 'bg-white dark:bg-gray-500'} transition-all duration-500`}
        style={{ width: `${percentage}%` }}
      />
      <span className="absolute inset-0 flex items-center justify-center text-sm sm:text-lg font-medium text-black">
        {percentage}%
      </span>
    </div>
  );
}

export default ProgressBar;