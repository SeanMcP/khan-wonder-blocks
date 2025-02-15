import * as React from "react";
import * as ReactDOM from "react-dom";
import {findFocusableNodes} from "../util/util";
import InitialFocus from "./initial-focus";

type Props = {
    /**
     * The popover content container
     */
    children: React.ReactElement<any>;
    /**
     * A reference to the trigger element
     */
    anchorElement: HTMLElement | null | undefined;
    /**
     * The selector for the element that will be focused when the dialog shows.
     * When not set, the first tabbable element within the dialog will be used.
     */
    initialFocusId?: string;
};

/**
 * This component ensures that focus flows correctly when the popover is open.
 *
 * Inside the popover:
 * - `tab`: Moves focus to the next focusable element.
 * - `shift + tab`: Moves focus to the previous focusable element.
 *
 * After the focus reaches the start/end of the popover,  then we handle two
 * different scenarios:
 *
 * 1. If the focus has reached the last focusable element inside the popover,
 *    the next tab will set focus on the next focusable element that exists
 *    after the PopoverAnchor.
 * 2. If the focus is set to the first focusable element inside the popover, the
 *    next shift + tab will set focus on the PopoverAnchor element.
 *
 */
export default class FocusManager extends React.Component<Props> {
    /**
     * The focusable element that is positioned after the trigger element
     */
    nextElementAfterPopover: HTMLElement | null | undefined;

    /**
     * Tabbing is restricted to descendents of this element.
     */
    rootNode: HTMLElement | null | undefined;

    componentDidMount() {
        this.addEventListeners();
    }

    componentDidUpdate() {
        this.addEventListeners();
    }

    /**
     * Remove keydown listeners
     */
    componentWillUnmount() {
        const {anchorElement} = this.props;

        if (anchorElement) {
            // wait for styles to applied, then return the focus to the anchor
            setTimeout(() => anchorElement.focus(), 0);

            anchorElement.removeEventListener(
                "keydown",
                this.handleKeydownPreviousFocusableElement,
                true,
            );
        }

        if (this.nextElementAfterPopover) {
            this.nextElementAfterPopover.removeEventListener(
                "keydown",
                this.handleKeydownNextFocusableElement,
                true,
            );
        }
    }

    /**
     * List of focusable elements within the popover content
     */
    focusableElementsInPopover: Array<HTMLElement> = [];

    /**
     * Add keydown listeners
     */
    addEventListeners: () => void = () => {
        const {anchorElement} = this.props;

        if (anchorElement) {
            anchorElement.addEventListener(
                "keydown",
                this.handleKeydownPreviousFocusableElement,
                true,
            );
        }

        // tries to get the next focusable element outside of the popover
        this.nextElementAfterPopover = this.getNextFocusableElement();

        if (this.nextElementAfterPopover) {
            this.nextElementAfterPopover.addEventListener(
                "keydown",
                this.handleKeydownNextFocusableElement,
                true,
            );
        }
    };

    /**
     * Gets the next focusable element after the anchor element
     */
    getNextFocusableElement: () => HTMLElement | null | undefined = () => {
        const {anchorElement} = this.props;

        if (!anchorElement) {
            return;
        }

        // get the total list of focusable elements within the document
        const focusableElements = findFocusableNodes(document);

        // get anchor element index
        const anchorIndex = focusableElements.indexOf(anchorElement);

        if (anchorIndex >= 0) {
            // guess next focusable element index
            const nextElementIndex =
                anchorIndex < focusableElements.length - 1
                    ? anchorIndex + 1
                    : 0;

            // get next element's DOM reference
            return focusableElements[nextElementIndex];
        }

        return;
    };

    /**
     * Gets the list of focusable elements inside the popover
     */
    // @ts-expect-error [FEI-5019] - TS2322 - Type '(node: any) => void' is not assignable to type '() => void'.
    getComponentRootNode: () => void = (node: any) => {
        if (!node) {
            // The component is being umounted
            return;
        }

        const rootNode: HTMLElement = ReactDOM.findDOMNode(node) as any;

        if (!rootNode) {
            throw new Error(
                "Assertion error: root node should exist after mount",
            );
        }

        this.rootNode = rootNode as HTMLElement;

        // store the list of possible focusable elements inside the popover
        this.focusableElementsInPopover = findFocusableNodes(this.rootNode);
    };

    /**
     * Triggered when the focus is set to the first sentinel. This way, the
     * focus will be redirected to the anchor element.
     */
    handleFocusPreviousFocusableElement: () => void = () => {
        if (this.props.anchorElement) {
            this.props.anchorElement.focus();
        }
    };

    /**
     * Triggered when the focus is set to the last sentinel. This way, the focus
     * will be redirected to next element after the anchor element.
     */
    handleFocusNextFocusableElement: () => void = () => {
        if (this.nextElementAfterPopover) {
            this.nextElementAfterPopover.focus();
        }
    };

    /**
     * Triggered when the focus is leaving the previous focusable element. This
     * way, the focus is redirected to the first focusable element inside the
     * popover.
     */
    handleKeydownPreviousFocusableElement: (e: KeyboardEvent) => void = (e) => {
        // It will try focus only if the user is pressing `tab`
        if (e.key === "Tab" && !e.shiftKey) {
            e.preventDefault();
            this.focusableElementsInPopover[0].focus();
        }
    };

    /**
     * Triggered when the focus is leaving the next focusable element. This way,
     * the focus is redirected to the last focusable element inside the popover.
     */
    handleKeydownNextFocusableElement: (e: KeyboardEvent) => void = (e) => {
        // It will try focus only if the user is pressing `Shift+tab`
        if (e.key === "Tab" && e.shiftKey) {
            e.preventDefault();
            const lastElementIndex = this.focusableElementsInPopover.length - 1;
            this.focusableElementsInPopover[lastElementIndex].focus();
        }
    };

    render(): React.ReactNode {
        const {children} = this.props;

        return (
            <React.Fragment>
                {/* First sentinel
                 * We set the sentinels to be position: fixed to make sure
                 * they're always in view, this prevents page scrolling when
                 * tabbing. */}
                <div
                    tabIndex={0}
                    onFocus={this.handleFocusPreviousFocusableElement}
                    style={{position: "fixed"}}
                />
                <div ref={this.getComponentRootNode}>
                    <InitialFocus initialFocusId={this.props.initialFocusId}>
                        {children}
                    </InitialFocus>
                </div>
                {/* last sentinel */}
                <div
                    tabIndex={0}
                    onFocus={this.handleFocusNextFocusableElement}
                    style={{position: "fixed"}}
                />
            </React.Fragment>
        );
    }
}
