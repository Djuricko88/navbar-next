import React from "react";
import "./rolespage.css";
import {
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";
import Link from "next/link";

let roles = [
  { id: 11, roleName: "HR", description: "Human Resources role" },
  { id: 12, roleName: "Sales", description: "Sales representative role" },
  { id: 13, roleName: "Executive", description: "Executive leadership role" },
  {
    id: 14,
    roleName: "Customer Service",
    description: "Customer service representative role",
  },
  {
    id: 15,
    roleName: "Project Manager",
    description: "Project management role",
  },
  {
    id: 16,
    roleName: "Business Analyst",
    description: "Business analyst role",
  },
  {
    id: 17,
    roleName: "System Administrator",
    description: "System administrator role",
  },
  {
    id: 18,
    roleName: "Security Officer",
    description: "IT security officer role",
  },
  {
    id: 19,
    roleName: "Network Engineer",
    description: "Network engineer role",
  },
  { id: 20, roleName: "Scrum Master", description: "Scrum Master role" },
  { id: 21, roleName: "Product Manager", description: "Product manager role" },
  { id: 22, roleName: "Legal Counsel", description: "Legal counsel role" },
  { id: 23, roleName: "Event Planner", description: "Event planner role" },
  { id: 24, roleName: "Content Creator", description: "Content creation role" },
  {
    id: 25,
    roleName: "Health and Safety Officer",
    description: "Health and safety officer role",
  },
  { id: 26, roleName: "Architect", description: "Architectural role" },
  {
    id: 27,
    roleName: "Researcher",
    description: "Research and development role",
  },
  { id: 28, roleName: "Librarian", description: "Librarian role" },
  { id: 29, roleName: "Economist", description: "Economist role" },
  {
    id: 30,
    roleName: "Supply Chain Manager",
    description: "Supply chain management role",
  },
  {
    id: 31,
    roleName: "Social Media Manager",
    description: "Social media manager role",
  },
  { id: 32, roleName: "Data Scientist", description: "Data scientist role" },
  {
    id: 33,
    roleName: "UX/UI Designer",
    description: "User experience/UI designer role",
  },
  { id: 34, roleName: "Chef", description: "Culinary chef role" },
  {
    id: 35,
    roleName: "Biomedical Engineer",
    description: "Biomedical engineer role",
  },
  {
    id: 36,
    roleName: "Mechanical Engineer",
    description: "Mechanical engineer role",
  },
  { id: 37, roleName: "Chemist", description: "Chemist role" },
  { id: 38, roleName: "Pharmacist", description: "Pharmacist role" },
  { id: 39, roleName: "Translator", description: "Language translator role" },
  { id: 40, roleName: "Electrician", description: "Electrician role" },
  { id: 41, roleName: "Plumber", description: "Plumber role" },
  { id: 42, roleName: "Paramedic", description: "Paramedic role" },
  { id: 43, roleName: "Firefighter", description: "Firefighter role" },
  { id: 44, roleName: "Painter", description: "Painter role" },
  { id: 45, roleName: "Dentist", description: "Dentist role" },
  { id: 46, roleName: "Psychologist", description: "Psychologist role" },
  { id: 47, roleName: "Biologist", description: "Biologist role" },
  { id: 48, roleName: "Meteorologist", description: "Meteorologist role" },
  { id: 49, roleName: "Librarian", description: "Librarian role" },
  { id: 50, roleName: "Geologist", description: "Geologist role" },
  { id: 51, roleName: "Animator", description: "Animator role" },
  { id: 52, roleName: "Tour Guide", description: "Tour guide role" },
  { id: 53, roleName: "Fitness Trainer", description: "Fitness trainer role" },
  { id: 54, roleName: "Yoga Instructor", description: "Yoga instructor role" },
  { id: 55, roleName: "Actuary", description: "Actuary role" },
  { id: 56, roleName: "Astronomer", description: "Astronomer role" },
  { id: 57, roleName: "Dietitian", description: "Dietitian role" },
  { id: 58, roleName: "Statistician", description: "Statistician role" },
  { id: 59, roleName: "Veterinarian", description: "Veterinarian role" },
  { id: 60, roleName: "Journalist", description: "Journalist role" },
  { id: 61, roleName: "Photographer", description: "Photographer role" },
  {
    id: 62,
    roleName: "Event Coordinator",
    description: "Event coordinator role",
  },
  {
    id: 63,
    roleName: "Fashion Designer",
    description: "Fashion designer role",
  },
  { id: 64, roleName: "Archivist", description: "Archivist role" },
  { id: 65, roleName: "Archeologist", description: "Archeologist role" },
];

const RolesPage = () => {
  return (
    <main className="container">
      <h1 className="title">Roles Page</h1>
      <Link href="/roleForm">
        <Button
          variant="contained"
          color="primary"
          className="createRoleButton"
        >
          Create Role
        </Button>
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th className="columnHeader">Role Name</th>
            <th className="columnHeader">Short Description</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr key={role.id} className="row">
              <td className="cell">{role.roleName}</td>
              <td className="cell">{role.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default RolesPage;
