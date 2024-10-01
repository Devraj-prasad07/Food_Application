import React from "react";
import ContactUs from "../ContactUs";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";


    it("Should load Contact Us Component", () => {
        render(<ContactUs />);
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
      });
      
      it("Should load Contact Us Component", () => {
        render(<ContactUs />);
        const inputName = screen.getAllByRole("textbox");
      
        expect(inputName).toBeInTheDocument();
      });

