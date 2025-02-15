import * as React from "react";
import {StyleSheet} from "aphrodite";

import Color, {mix, fade} from "@khanacademy/wonder-blocks-color";
import Spacing from "@khanacademy/wonder-blocks-spacing";
import {LabelMedium} from "@khanacademy/wonder-blocks-typography";
import {View} from "@khanacademy/wonder-blocks-core";
import {getClickableBehavior} from "@khanacademy/wonder-blocks-clickable";

import type {AriaProps, StyleType} from "@khanacademy/wonder-blocks-core";

import {DROPDOWN_ITEM_HEIGHT} from "../util/constants";
import Check from "./check";
import Checkbox from "./checkbox";

type OptionProps = AriaProps & {
    /**
     * Display text of the option item.
     */
    label: string;
    /**
     * Value of the item, used as a key of sorts for the parent to manage its
     * items, because label/display text may be identical for some selects. This
     * is the value passed back when the item is selected.
     */
    value: string;
    /**
     * Whether this option item is disabled.
     */
    disabled: boolean;
    /**
     * Optional user-supplied callback when this item is called.
     */
    onClick?: () => unknown;
    /**
     * Callback for when this item is pressed to change its selection state.
     * Passes value of the item. Auto-populated by menu or select.
     * @ignore
     */
    onToggle: (value: string) => unknown;
    /**
     * Whether this item is selected. Auto-populated by menu or select.
     * @ignore
     */
    selected: boolean;
    /**
     * Aria role to use, defaults to "option".
     */
    role: "menuitem" | "option";
    /**
     * Test ID used for e2e testing.
     */
    testId?: string;
    /**
     * Whether the item should show a check or checkbox to indicate selection
     * state. Auto-populated by menu or select.
     * @ignore
     */
    variant?: "check" | "checkbox";
    /**
     * In case we use react-window, this needs to be added in order to inject
     * styles to calculate the position
     * @ignore
     */
    style?: StyleType;
};

type DefaultProps = {
    disabled: OptionProps["disabled"];
    onToggle: OptionProps["onToggle"];
    role: OptionProps["role"];
    selected: OptionProps["selected"];
};

/**
 * For option items that can be selected in a dropdown, selection denoted either
 * with a check ✔️ or a checkbox ☑️. Use as children in SingleSelect or
 * MultiSelect.
 */
export default class OptionItem extends React.Component<OptionProps> {
    static isClassOf(instance: React.ReactElement<any>): boolean {
        // @ts-expect-error [FEI-5019] - TS2339 - Property '__IS_OPTION_ITEM__' does not exist on type 'string | JSXElementConstructor<any>'.
        return instance && instance.type && instance.type.__IS_OPTION_ITEM__;
    }
    static defaultProps: DefaultProps = {
        disabled: false,
        onToggle: () => void 0,
        role: "option",
        selected: false,
    };
    static __IS_OPTION_ITEM__ = true;

    getCheckComponent(): typeof Check | typeof Checkbox {
        if (this.props.variant === "check") {
            return Check;
        } else {
            return Checkbox;
        }
    }

    handleClick: () => void = () => {
        const {onClick, onToggle, value} = this.props;
        onToggle(value);
        if (onClick) {
            onClick();
        }
    };

    render(): React.ReactNode {
        const {
            disabled,
            label,
            role,
            selected,
            testId,
            style,
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            value,
            /* eslint-disable @typescript-eslint/no-unused-vars */
            onClick,
            onToggle,
            variant,
            /* eslint-enable @typescript-eslint/no-unused-vars */
            ...sharedProps
        } = this.props;

        const ClickableBehavior = getClickableBehavior();
        const CheckComponent = this.getCheckComponent();

        return (
            <ClickableBehavior
                disabled={disabled}
                onClick={this.handleClick}
                role={role}
                tabIndex={0}
            >
                {(state, childrenProps) => {
                    const {pressed, hovered, focused} = state;

                    const defaultStyle = [
                        styles.itemContainer,
                        pressed
                            ? styles.active
                            : (hovered || focused) && styles.focus,
                        disabled && styles.disabled,
                        // pass optional styles from react-window (if applies)
                        style,
                    ];

                    return (
                        <View
                            {...sharedProps}
                            testId={testId}
                            style={defaultStyle}
                            aria-selected={selected ? "true" : "false"}
                            role={role}
                            {...childrenProps}
                        >
                            <CheckComponent
                                disabled={disabled}
                                selected={selected}
                                pressed={pressed}
                                hovered={hovered}
                                focused={focused}
                            />
                            <LabelMedium style={styles.label}>
                                {label}
                            </LabelMedium>
                        </View>
                    );
                }}
            </ClickableBehavior>
        );
    }
}

const {blue, white, offBlack, offBlack32} = Color;

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: "row",
        background: white,
        color: offBlack,
        alignItems: "center",
        height: DROPDOWN_ITEM_HEIGHT,
        minHeight: DROPDOWN_ITEM_HEIGHT,
        border: 0,
        outline: 0,
        paddingLeft: Spacing.xSmall_8,
        paddingRight: Spacing.medium_16,
        whiteSpace: "nowrap",
        cursor: "default",
    },

    focus: {
        color: white,
        background: blue,
    },

    active: {
        color: mix(fade(blue, 0.32), white),
        background: mix(offBlack32, blue),
    },

    disabled: {
        color: offBlack32,
        background: white,
    },

    label: {
        whiteSpace: "nowrap",
        userSelect: "none",
        marginLeft: Spacing.xSmall_8,
        // added to truncate strings that are longer than expected
        overflow: "hidden",
        textOverflow: "ellipsis",
    },

    hide: {
        visibility: "hidden",
    },
});
