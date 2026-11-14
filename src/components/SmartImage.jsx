import React, { useState } from 'react';

export default function SmartImage({ 
  src, 
  fallbacks = [], 
  alt = '', 
  className = '', 
  fallbackPlaceholder = null 
}) {
  const allCandidates = [src, ...fallbacks].filter(Boolean);
  const [index, setIndex] = useState(0);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [failedAll, setFailedAll] = useState(false);

  const handleError = () => {
    if (index < allCandidates.length - 1) {
      setIndex(prev => prev + 1);
    } else {
      setFailedAll(true);
    }
  };

  if (failedAll) {
    return fallbackPlaceholder || (
      <div className="w-full h-full bg-neutral-900 flex items-center justify-center text-neutral-500 font-mono text-xs">
        No image available
      </div>
    );
  }

  const currentSrc = allCandidates[index];

  return (
    <div className="relative w-full h-full overflow-hidden">
      <img
        src={currentSrc}
        alt={alt}
        onLoad={() => setHasLoaded(true)}
        onError={handleError}
        className={`${className} ${hasLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
      />
      {!hasLoaded && (
        <div className="absolute inset-0 bg-neutral-900 animate-pulse flex items-center justify-center text-neutral-500 font-mono text-xs">
          Loading...
        </div>
      )}
    </div>
  );
}
