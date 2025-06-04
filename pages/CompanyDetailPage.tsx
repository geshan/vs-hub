
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MOCK_COMPANIES, COMPANY_DETAIL_TABS } from '../constants';
import { Company, TabKey } from '../types';
import Tabs from '../components/Tabs';
import RelatedCompanyCard from '../components/RelatedCompanyCard';
import CompanyDetailHeader from '../components/CompanyDetailHeader';

const ArrowRightIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={className || "w-3 h-3"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
  </svg>
);


const CompanyDetailPage: React.FC = () => {
  const { companyId } = useParams<{ companyId: string }>();
  const [company, setCompany] = useState<Company | null>(null);
  const [activeTab, setActiveTab] = useState<TabKey>(TabKey.Overview);

  useEffect(() => {
    const foundCompany = MOCK_COMPANIES.find(c => c.id === companyId);
    setCompany(foundCompany || null);
    setActiveTab(TabKey.Overview); // Reset tab on company change
  }, [companyId]);

  if (!company) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-semibold text-gray-700">Company not found.</h1>
        <Link to="/companies" className="mt-4 inline-block text-brand-blue hover:underline">
          Back to Companies
        </Link>
      </div>
    );
  }

  const relatedBgColors = ['bg-related-card-bg-alt1', 'bg-related-card-bg', 'bg-related-card-bg-alt2'];


  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <nav className="mb-6 text-sm text-gray-500 flex items-center space-x-2">
        <Link to="/companies" className="hover:text-brand-blue">Companies</Link>
        <ArrowRightIcon className="w-3 h-3 text-gray-400" />
        <span className="font-medium text-gray-700">{company.name}</span>
      </nav>

      <CompanyDetailHeader company={company} />

      <div className="bg-card-bg p-6 sm:p-8 rounded-lg shadow-lg">
        <Tabs tabs={COMPANY_DETAIL_TABS} activeTab={activeTab} onTabClick={setActiveTab} />

        <div className="mt-8">
          {activeTab === TabKey.Overview && (
            <div>
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">About</h2>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {company.longDescription}
                </p>
                 {company.website && (
                    <p className="mt-4">
                        <a href={`http://${company.website}`} target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">
                            Visit website
                        </a>
                    </p>
                )}
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">Visa Sponsorship</h2>
                {company.sponsorship ? (
                  <p className="text-gray-700 leading-relaxed">
                    {company.name} offers visa sponsorship for eligible candidates. They have a dedicated team to assist with the visa application process and ensure a smooth transition for international employees. Specific details may vary based on role and location.
                  </p>
                ) : (
                  <p className="text-gray-700 leading-relaxed">
                    Currently, {company.name} does not explicitly list visa sponsorship as broadly available. It's recommended to check individual job postings or contact their HR department for specific roles.
                  </p>
                )}
              </section>

              {company.relatedCompanies && company.relatedCompanies.length > 0 && (
                <section>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">Related Companies</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {company.relatedCompanies.map((relatedComp, index) => (
                      <RelatedCompanyCard 
                        key={relatedComp.id} 
                        company={relatedComp} 
                        bgColorClass={relatedBgColors[index % relatedBgColors.length]}
                      />
                    ))}
                  </div>
                </section>
              )}
            </div>
          )}

          {activeTab === TabKey.Jobs && (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-700">Jobs Information</h3>
              <p className="text-gray-500 mt-2">Job listings for {company.name} will be displayed here. (Placeholder)</p>
            </div>
          )}

          {activeTab === TabKey.Reviews && (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-700">Company Reviews</h3>
              <p className="text-gray-500 mt-2">Reviews for {company.name} will be displayed here. (Placeholder)</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CompanyDetailPage;
