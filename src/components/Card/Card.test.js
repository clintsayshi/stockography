import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";

it("renders successfully", () => {
  const div = document.createElement("div");
  render(<Card />);
});
