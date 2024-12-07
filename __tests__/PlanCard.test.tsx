import React from "react";
import { render, screen } from "@testing-library/react";
import PlanCard from "../src/components/PlanCard/PlanCard";

//Prueba de componente
describe("PlanCard", () => {
  it("debería renderizar correctamente con props", () => {
    render(
      <PlanCard
        title="Plan en Casa"
        icon="/icon.png"
        currentCost={100}
        benefits={[{ title: "Benefit 1", detail: "Detail 1" }]}
        onSelect={() => {}}
      />
    );

    expect(screen.getByText("Plan en Casa")).toBeInTheDocument();
    expect(screen.getByText("$100.00 al mes")).toBeInTheDocument();
  });
});
