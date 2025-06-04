
import React from 'react';
import { Link } from 'react-router-dom';
import { Company } from '../types';

interface RelatedCompanyCardProps {
  company: Pick<Company, 'id' | 'name' | 'logoUrl' | 'industry' | 'description'>;
  bgColorClass?: string;
}

const RelatedCompanyCard: React.FC<RelatedCompanyCardProps> = ({ company, bgColorClass = 'bg-related-card-bg' }) => {
  return (
    <Link to={`/companies/${company.id}`} className={`block p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 ${bgColorClass}`}>
      <div className="flex flex-col items-center text-center">
        <img 
          src={company.logoUrl} 
          alt={`${company.name} logo`} 
          className="w-20 h-20 rounded-lg object-cover mb-4"
        />
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{company.name}</h3>
        <p className="text-sm text-gray-600">{company.industry || company.description.substring(0,30) + "..."}</p>
      </div>
    </Link>
  );
};

export default RelatedCompanyCard;
