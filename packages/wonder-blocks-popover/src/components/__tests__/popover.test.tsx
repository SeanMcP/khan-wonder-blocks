import * as React from "react";
import {render, screen, waitFor} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import {View} from "@khanacademy/wonder-blocks-core";
import Button from "@khanacademy/wonder-blocks-button";

import Popover from "../popover";
import PopoverContent from "../popover-content";
import {PopoverContentCore} from "../../index";

describe("Popover", () => {
    it("should set the anchor as the popover ref", async () => {
        // Arrange
        const ref: React.RefObject<HTMLButtonElement> = React.createRef();

        render(
            <Popover
                placement="top"
                content={<PopoverContent title="Title" content="content" />}
            >
                {({open}: any) => (
                    <button data-anchor onClick={open} ref={ref}>
                        Open default popover
                    </button>
                )}
            </Popover>,
        );

        // Act

        // Assert
        await waitFor(() => {
            expect(ref.current).toBeInstanceOf(HTMLButtonElement);
        });
    });

    it("should hide the popover dialog by default", () => {
        // Arrange, Act
        render(
            <Popover
                placement="top"
                content={<PopoverContent title="Title" content="content" />}
            >
                {({open}: any) => (
                    <button data-anchor onClick={open}>
                        Open default popover
                    </button>
                )}
            </Popover>,
        );

        // Assert
        expect(screen.queryByText("Title")).not.toBeInTheDocument();
    });

    it("should render the popover content after clicking the trigger", () => {
        // Arrange
        render(
            <Popover
                placement="top"
                content={<PopoverContent title="Title" content="content" />}
            >
                {({open}: any) => (
                    <button data-anchor onClick={open}>
                        Open default popover
                    </button>
                )}
            </Popover>,
        );

        // Act
        userEvent.click(screen.getByRole("button"));

        // Assert
        expect(screen.getByText("Title")).toBeInTheDocument();
    });

    it("should close the popover from inside the content", () => {
        // Arrange
        const onCloseMock = jest.fn();

        render(
            <Popover
                placement="top"
                onClose={onCloseMock}
                content={({close}: any) => (
                    <PopoverContentCore>
                        <span>custom popover</span>
                        <button data-close-button onClick={close}>
                            close popover
                        </button>
                    </PopoverContentCore>
                )}
            >
                {({open}: any) => (
                    <button data-anchor onClick={open}>
                        Open default popover
                    </button>
                )}
            </Popover>,
        );

        // open the popover
        userEvent.click(screen.getByRole("button"));

        // Act
        // we try to close it from inside the content
        userEvent.click(screen.getByRole("button", {name: "close popover"}));

        // Assert
        expect(screen.queryByText("Title")).not.toBeInTheDocument();
        expect(onCloseMock).toBeCalled();
    });

    it("should close the Popover using the default close button", () => {
        // Arrange
        const onCloseMock = jest.fn();

        render(
            <Popover
                placement="top"
                onClose={onCloseMock}
                content={
                    <PopoverContent
                        title="Title"
                        content="content"
                        closeButtonVisible={true}
                        closeButtonLabel="Click to close popover"
                    />
                }
            >
                {({open}: any) => (
                    <button data-anchor onClick={open}>
                        Open default popover
                    </button>
                )}
            </Popover>,
        );

        // open the popover
        userEvent.click(screen.getByRole("button"));

        // Act
        // we try to close it using the default close button
        userEvent.click(
            screen.getByRole("button", {name: "Click to close popover"}),
        );

        // Assert
        expect(screen.queryByText("Title")).not.toBeInTheDocument();
        expect(onCloseMock).toBeCalled();
    });

    it("should close the Popover if dismissEnabled is set", async () => {
        // Arrange
        render(
            <Popover
                dismissEnabled={true}
                placement="top"
                content={<PopoverContent title="Title" content="content" />}
            >
                {({open}: any) => (
                    <button data-anchor onClick={open}>
                        Open default popover
                    </button>
                )}
            </Popover>,
        );

        // open the popover
        userEvent.click(
            screen.getByRole("button", {name: "Open default popover"}),
        );

        // Act
        // we try to close it using the same trigger element
        userEvent.click(
            screen.getByRole("button", {name: "Open default popover"}),
        );

        // Assert
        await waitFor(() => {
            expect(screen.queryByText("Title")).not.toBeInTheDocument();
        });
    });

    it("should shift-tab back to the anchor after popover is closed", async () => {
        // Arrange
        const PopoverComponent = () => {
            const [opened, setOpened] = React.useState(true);
            return (
                <View>
                    <Popover
                        opened={opened}
                        onClose={() => {
                            setOpened(false);
                        }}
                        content={({close}) => (
                            <PopoverContent
                                title="Controlled popover"
                                content="This popover is controlled programatically."
                                actions={
                                    <Button
                                        onClick={() => {
                                            close();
                                        }}
                                    >
                                        Click to close the popover
                                    </Button>
                                }
                            />
                        )}
                    >
                        <Button>Anchor element</Button>
                    </Popover>
                    <Button onClick={() => setOpened(true)}>
                        Outside button (click here to re-open the popover)
                    </Button>
                </View>
            );
        };

        render(<PopoverComponent />);

        // Act
        const closeButton = screen.getByRole("button", {
            name: "Click to close the popover",
        });
        closeButton.click();
        // Shift-tab over to the anchor button
        userEvent.tab({shift: true});
        userEvent.tab({shift: true});

        // Assert
        const anchorButton = screen.getByRole("button", {
            name: "Anchor element",
        });
        expect(anchorButton).toHaveFocus();
    });
});
