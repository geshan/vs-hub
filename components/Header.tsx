
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';
import { NavItem } from '../types';

const SearchIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-5 h-5"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
  </svg>
);

const BellIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
  </svg>
);

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <header className="bg-card-bg shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Nav */}
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-2xl font-bold text-brand-blue">
              Visa Sponsor Hub
            </Link>
            <nav className="hidden md:flex space-x-4">
              {NAV_ITEMS.map((item: NavItem) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path))
                      ? 'text-brand-blue border-b-2 border-brand-blue'
                      : 'text-gray-600 hover:text-brand-blue hover:bg-brand-blue-light'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              {/* Added Community Link */}
              <Link
                to="/community"
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  location.pathname === "/community" || location.pathname.startsWith("/community")
                    ? 'text-brand-blue border-b-2 border-brand-blue'
                    : 'text-gray-600 hover:text-brand-blue hover:bg-brand-blue-light'
                }`}
              >
                Community
              </Link>
            </nav>
          </div>

          {/* Search and User Actions */}
          <div className="flex items-center space-x-4">
            <div className="relative hidden sm:block">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <SearchIcon className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-brand-blue focus:border-brand-blue sm:text-sm"
              />
            </div>
            <button className="p-1 rounded-full text-gray-500 hover:text-brand-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue">
              <BellIcon className="w-6 h-6" />
            </button>
            <button className="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300">
              <img
                className="h-8 w-8 rounded-full object-cover"
                src="https://picsum.photos/seed/useravatar/100/100"
                alt="User avatar"
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
