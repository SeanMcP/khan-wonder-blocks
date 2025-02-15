import * as React from "react";
import {render, screen} from "@testing-library/react";

import DropdownPopper from "../dropdown-popper";

describe("DropdownPopper", () => {
    it("renders the children if valid props are passed in", () => {
        // Arrange
        const referenceElement = document.createElement("button");

        // Act
        render(
            <DropdownPopper referenceElement={referenceElement}>
                {(shouldHide: any) => (
                    <div data-test-id="dropdown-container">
                        dropdown container
                    </div>
                )}
            </DropdownPopper>,
        );

        // Assert
        expect(screen.getByTestId("dropdown-container")).toBeInTheDocument();
    });

    it("renders the dropdown aligned to the right", () => {
        // Arrange
        const referenceElement = document.createElement("button");

        // Act
        render(
            <DropdownPopper
                referenceElement={referenceElement}
                alignment="right"
            >
                {(shouldHide: any) => (
                    <div data-test-id="dropdown-container">
                        dropdown container
                    </div>
                )}
            </DropdownPopper>,
        );

        // Assert
        expect(screen.getByTestId("dropdown-popper")).toHaveAttribute(
            "data-placement",
            "bottom-end",
        );
    });
});
