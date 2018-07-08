// @flow
// A menu that consists of action items

import * as React from "react";
import {StyleSheet} from "aphrodite";

import DropdownCore from "./dropdown-core.js";
import SelectBox from "./select-box.js";
import SelectItem from "./select-item.js";
import type {SelectItemProps} from "../utils/types.js";

type Props = {
    /**
     * The items in this menu.
     */
    items: Array<SelectItemProps>,

    /**
     * Callback for when the selection of the menu changes. Parameter is the
     * newly selected item.
     */
    onChange: (selectedValue: string) => void,

    /**
     * Placeholder for the opening component when there are no items selected.
     */
    placeholder: string,

    /**
     * Value of the currently selected item for this menu.
     */
    selectedValue?: string,

    /**
     * Whether this menu should be left-aligned or right-aligned with the
     * opener component. Defaults to left-aligned.
     */
    alignment: "left" | "right",

    /**
     * Whether to display the "light" version of this component instead, for
     * use when the item is used on a dark background.
     */
    light: boolean,

    /**
     * Whether this menu is disabled. A disabled menu may not be opened and
     * does not support interaction. Defaults to false.
     */
    disabled: boolean,

    /**
     * Optional styling to add to dropdown.
     */
    style?: any,
};

type State = {
    /**
     * Whether or not menu is open.
     */
    open: boolean,
};

export default class SingleSelectMenu extends React.Component<Props, State> {
    static defaultProps = {
        alignment: "left",
        disabled: false,
        light: false,
    };

    constructor(props: Props) {
        super(props);

        this.state = {
            open: false,
        };
    }

    toggleMenu() {
        this.setState((prevState) => ({
            open: !prevState.open,
        }));
    }

    handleClose() {
        this.setState({
            open: false,
        });
    }

    handleSelected(selectedValue: string) {
        this.setState({
            open: false, // close the menu upon selection
        });

        // Call callback if selection changes.
        if (selectedValue !== this.props.selectedValue) {
            this.props.onChange(selectedValue);
        }
    }

    render() {
        const {
            alignment,
            disabled,
            items,
            light,
            placeholder,
            selectedValue,
            style,
        } = this.props;

        const {open} = this.state;

        const selectedItem = items.find((item) => item.value === selectedValue);
        // If nothing is selected, or if the selectedValue doesn't match any
        // item in the menu, use the placeholder.
        const menuText = selectedItem ? selectedItem.label : placeholder;

        const opener = (
            <SelectBox
                disabled={disabled}
                light={light}
                onClick={() => this.toggleMenu()}
                style={style}
            >
                {menuText}
            </SelectBox>
        );

        const menuItems = items.map((item, index) => {
            return (
                <SelectItem
                    disabled={item.disabled}
                    key={item.value}
                    label={item.label}
                    onToggle={(value, state) => this.handleSelected(value)}
                    selected={selectedValue === item.value}
                    value={item.value}
                    variant={"check"}
                />
            );
        });

        return (
            <DropdownCore
                alignment={alignment}
                items={menuItems}
                light={light}
                onClose={() => this.handleClose()}
                open={open}
                opener={opener}
                style={[styles.menuSpacer, style]}
            />
        );
    }
}

const styles = StyleSheet.create({
    // This is to add extra space on top of the menu options to separate the
    // options from the opener component.
    menuSpacer: {
        top: 48,
    },
});