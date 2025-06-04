
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { MOCK_COMPANIES } from '../constants';
import { Company } from '../types';
import SearchBar from '../components/SearchBar';

const CompanyListItem: React.FC<{ company: Company }> = ({ company }) => {
  return (
    <tr className="bg-card-bg hover:bg-gray-50 border-b border-gray-200 last:border-b-0">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10">
            <img className="h-10 w-10 rounded-md object-cover" src={company.logoUrl} alt={`${company.name} logo`} />
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">{company.name}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="text-sm text-gray-700 max-w-md truncate">{company.description}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        {company.sponsorship ? (
          <span className="px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
            Yes
          </span>
        ) : (
          <span className="px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
            No
          </span>
        )}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
        <Link to={`/companies/${company.id}`} className="text-brand-blue hover:text-blue-700">
          View
        </Link>
        <a href="#" className="ml-4 text-gray-500 hover:text-gray-700"> {/* Placeholder for Edit */}
          Edit
        </a>
      </td>
    </tr>
  );
};

const CompaniesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCompanies = useMemo(() => {
    if (!searchTerm) {
      return MOCK_COMPANIES;
    }
    return MOCK_COMPANIES.filter(company =>
      company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      company.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Companies</h1>
      
      <div className="bg-brand-blue-light p-4 rounded-lg mb-6 shadow">
        <SearchBar
          searchTerm={searchTerm}
          onSearchTermChange={setSearchTerm}
          placeholder="Search companies..."
        />
      </div>

      <div className="bg-card-bg shadow-lg rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Company
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Description
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Sponsorship
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredCompanies.length > 0 ? (
                filteredCompanies.map(company => (
                  <CompanyListItem key={company.id} company={company} />
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="px-6 py-12 text-center text-gray-500">
                    No companies found matching your search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CompaniesPage;
