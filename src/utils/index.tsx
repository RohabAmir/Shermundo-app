import React from 'react';
import Dashboard from '@/src/assets/icons/Dashboard';
import Logout from '@/src/assets/icons/Logout';
import Object from '@/src/assets/icons/Object';
import Contact from '@/src/assets/icons/Contact';
import Action from '@/src/assets/icons/Action';
import Document from '@/src/assets/icons/Document';
import Billing from '@/src/assets/icons/Billing';
import MileStone from '@/src/assets/icons/MileStone';
import Project from '@/src/assets/icons/Project';
import Configure from '@/src/assets/icons/Configure';
import Profile from '@/src/assets/icons/Profile';
import Time from '@/src/assets/icons/Time';
import { ProfileFormInputs } from '../container/profileSetupPage';




export interface SidebarLink {
  icon: JSX.Element;
  name: string;
  link: string;
}

export const sidebarLinks: SidebarLink[] = [
  { icon: <Dashboard/>, name: 'Dashboard', link: 'dashboard' },
  { icon: <Object />, name: 'Object Recording', link: 'object-recording' },
  { icon: <Time />, name: 'Time & Expenses Recording', link: 'time-expenses-recording' },
  { icon: <Contact />, name: 'Contact Management', link: 'contact-management' },
  { icon: <Action />, name: 'Action Items', link: 'action-items' },
  { icon: <Document />, name: 'Document Management', link: 'document-management' },
  { icon: <Billing />, name: 'Billing', link: 'billing' },
  { icon: <MileStone />, name: 'Milestone Management', link: 'milestone-management' },
  { icon: <Project />, name: 'Project Organisation', link: 'project-organisation' },
  { icon: <Configure />, name: 'Configure', link: 'configure' },
  { icon: <Profile />, name: 'Profile', link: 'profile' },
  { icon: <Logout/>, name: 'Logout', link: 'logout' },
];


export interface FormField {
  name: keyof ProfileFormInputs;
  label: string;
  required?: boolean;
  type?: "text" | "email" | "password";
}

export const formFields: FormField[] = [
  { name: "title", label: "Title" },
  { name: "name", label: "Name*", required: true },
  { name: "surname", label: "Surname", required: true },
  { name: "company", label: "Company" },
  { name: "registrationNo", label: "Registration no." },
  { name: "address", label: "Address*", required: true },
  { name: "postCode", label: "Post code*", required: true },
  { name: "town", label: "Town*", required: true },
  { name: "country", label: "Country", required: true },
  { name: "telephoneNo", label: "Telephone No*", required: true },
  { name: "mobileNo", label: "Mobile No*", required: true },
  { name: "email", label: "Email*", required: true, type: "email" },
  { name: "website", label: "Website*", required: true },
  { name: "taxReferenceNumber", label: "Tax Reference Number*", required: true },
  { name: "bankName", label: "Bank name", required: true },
  { name: "IBAN", label: "IBAN*", required: true },
  { name: "BIC", label: "BIC", required: true },
  { name: "bankAddress", label: "Bank Address", required: true },
  { name: "sharemundoAccountEmail", label: "Sharemundo Account email", type: "email", required: true, },
  { name: "password", label: "Password", required: true, type: "password" },
];
