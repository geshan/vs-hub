
export interface Company {
  id: string;
  name: string;
  logoUrl: string;
  description: string;
  longDescription: string;
  sponsorship: boolean;
  employeeCount: string;
  industry: string;
  foundedYear: number;
  relatedCompanies?: Pick<Company, 'id' | 'name' | 'logoUrl' | 'industry' | 'description'>[];
  headquarters?: string; // Added for more detail
  website?: string; // Added for more detail
}

export interface NavItem {
  name: string;
  path: string;
}

export enum TabKey {
  Overview = 'overview',
  Jobs = 'jobs',
  Reviews = 'reviews',
}
