interface LoaderProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  fullScreen?: boolean;
}

export default function Loader({ size = 'md', text, fullScreen = false }: LoaderProps) {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const spinnerSizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  const LoaderContent = () => (
    <div className="flex flex-col items-center justify-center">
      {/* Spinner */}
      <div className={`${sizeClasses[size]} relative`}>
        <div className={`${spinnerSizeClasses[size]} border-2 border-gray-700 rounded-full`}></div>
        <div className={`${spinnerSizeClasses[size]} border-2 border-orange-400 border-t-transparent rounded-full absolute top-0 left-0 animate-spin`}></div>
      </div>

      {/* Loading Text */}
      {text && (
        <div className="mt-4 text-center">
          <p className="text-gray-400 font-medium">{text}</p>
          <div className="flex justify-center mt-2 space-x-1">
            <div className="w-1 h-1 bg-orange-400 rounded-full animate-pulse"></div>
            <div className="w-1 h-1 bg-orange-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-1 h-1 bg-orange-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-[#181818] bg-opacity-95 flex items-center justify-center z-50">
        <LoaderContent />
      </div>
    );
  }

  return <LoaderContent />;
}

// Alternative loader styles
export function DotsLoader({ size = 'md', text }: LoaderProps) {
  const dotSizeClasses = {
    sm: 'w-1.5 h-1.5',
    md: 'w-2 h-2',
    lg: 'w-3 h-3'
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex space-x-2">
        <div className={`${dotSizeClasses[size]} bg-orange-400 rounded-full animate-bounce`}></div>
        <div className={`${dotSizeClasses[size]} bg-orange-400 rounded-full animate-bounce`} style={{ animationDelay: '0.1s' }}></div>
        <div className={`${dotSizeClasses[size]} bg-orange-400 rounded-full animate-bounce`} style={{ animationDelay: '0.2s' }}></div>
      </div>
      {text && (
        <p className="mt-3 text-gray-400 font-medium text-sm">{text}</p>
      )}
    </div>
  );
}

export function PulseLoader({ size = 'md', text }: LoaderProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className={`${sizeClasses[size]} bg-orange-400 rounded-full animate-pulse`}></div>
      {text && (
        <p className="mt-3 text-gray-400 font-medium text-sm">{text}</p>
      )}
    </div>
  );
}

export function SkeletonLoader({ lines = 3 }: { lines?: number }) {
  return (
    <div className="space-y-3">
      {Array.from({ length: lines }).map((_, index) => (
        <div
          key={index}
          className="h-4 bg-gray-700 rounded animate-pulse"
          style={{
            width: `${Math.random() * 40 + 60}%`,
            animationDelay: `${index * 0.1}s`
          }}
        ></div>
      ))}
    </div>
  );
} 