"use client";
import React, { useState } from "react";
import { TextField, Button, Container } from "@mui/material";
import { useRouter } from "next/navigation";
import "./roleForm.css";

const RoleFormPage = () => {
  const [roleName, setRoleName] = useState("");
  const [description, setDescription] = useState("");
  const [roleNameError, setRoleNameError] = useState("");

  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!roleName || roleName.length < 2 || roleName.length > 16) {
      setRoleNameError(
        "Role name is required and must be between 2 and 16 characters"
      );
      return;
    }

    setRoleName("");
    setDescription("");
    setRoleNameError("");
  };

  return (
    <Container>
      <h1>Create Role</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Role Name"
          fullWidth
          value={roleName}
          onChange={(e) => setRoleName(e.target.value)}
          error={!!roleNameError}
          helperText={roleNameError}
        />
        <br />
        <TextField
          label="Short Description"
          fullWidth
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default RoleFormPage;
