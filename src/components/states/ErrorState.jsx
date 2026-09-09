import React from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';
import Button from '../common/Button';

export const ErrorState = ({
  title = 'Something went wrong',
  message = "We couldn't load your productivity data. Please check your connection and try again.",
  onRetry,
  className = ''
}) => {
  return (
    <div
      role="alert"
      className={`flex flex-col items-center justify-center p-8 sm:p-12 text-center bg-rose-50/80 border border-rose-200 rounded-2xl shadow-xs ${className}`}
    >
      <div className="p-3.5 rounded-2xl bg-rose-100 border border-rose-200 text-[#C94C4C] mb-4 shadow-2xs">
        <AlertTriangle className="w-8 h-8" />
      </div>
      <h3 className="text-lg font-semibold text-[#1F2933] mb-2">
        {title}
      </h3>
      <p className="text-sm text-[#535D6C] max-w-md mb-6 leading-relaxed">
        {message}
      </p>
      {onRetry && (
        <Button
          variant="primary"
          onClick={onRetry}
          leftIcon={<RefreshCw className="w-4 h-4" />}
          className="bg-[#C94C4C] hover:bg-[#B33E3E] text-white font-semibold shadow-xs"
        >
          Retry Connection
        </Button>
      )}
    </div>
  );
};

export default ErrorState;
