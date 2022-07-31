import { Button } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import FormModal from "./Add/FormModal";

export default function Header() {
  return (
    <div>
      <header>
        <Container>
          <ul>
            <li>
              <Button variant="text">Home</Button>
            </li>
            <li>
             <FormModal /> 
            </li>
          </ul>
        </Container>
      </header>
    </div>
  );
}
