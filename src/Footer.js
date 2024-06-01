import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-y fixed bottom-0 w-full">
      <div className="mx-auto w-full max-w-screen-xl lg:py-4">
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center">
            © 2023 Haresh Vegad. All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            {/* Your social media links */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
