
import React from 'react';
import { Company } from '../types';

interface CompanyDetailHeaderProps {
  company: Company;
}

const BriefcaseIcon: React.FC<{ className?: string }> = ({ className }) => (
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-4 h-4"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.073a2.25 2.25 0 0 1-2.25 2.25h-10.5a2.25 2.25 0 0 1-2.25-2.25V6.573a2.25 2.25 0 0 1 2.25-2.25h9.552a2.25 2.25 0 0 1 1.697.748l2.303 2.999A2.25 2.25 0 0 1 21.75 9.373V10.5M12 15.75h.008v.008H12v-.008ZM12 12.25h.008v.008H12v-.008ZM12 8.75h.008v.008H12V8.75Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75h15" />
 </svg>
);

const CalendarIcon: React.FC<{ className?: string }> = ({ className }) => (
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-4 h-4"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-3.75h.008v.008H12v-.008Z" />
 </svg>
);

const LocationIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-4 h-4"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
  </svg>
);


const CompanyDetailHeader: React.FC<CompanyDetailHeaderProps> = ({ company }) => {
  return (
    <div className="bg-card-bg p-6 sm:p-8 rounded-lg shadow-lg mb-8">
      <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
        <img 
          src={company.logoUrl} 
          alt={`${company.name} logo`}
          className="w-24 h-24 sm:w-32 sm:h-32 rounded-lg object-cover border border-gray-200"
        />
        <div className="flex-1">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">{company.name}</h1>
          <p className="text-gray-600 text-base mb-3">{company.description}</p>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-500">
            {company.employeeCount && (
              <span className="flex items-center">
                <BriefcaseIcon className="w-4 h-4 mr-1.5 text-gray-400" />
                {company.employeeCount}
              </span>
            )}
            {company.industry && (
               <span className="flex items-center">
                <BriefcaseIcon className="w-4 h-4 mr-1.5 text-gray-400" /> {/* Using Briefcase as generic icon */}
                {company.industry}
              </span>
            )}
            {company.foundedYear && (
              <span className="flex items-center">
                <CalendarIcon className="w-4 h-4 mr-1.5 text-gray-400" />
                Founded {company.foundedYear}
              </span>
            )}
             {company.headquarters && (
              <span className="flex items-center">
                <LocationIcon className="w-4 h-4 mr-1.5 text-gray-400" />
                {company.headquarters}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetailHeader;
