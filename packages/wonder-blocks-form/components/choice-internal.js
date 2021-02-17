// @flow

import * as React from "react";
import {StyleSheet} from "aphrodite";

import Color from "@khanacademy/wonder-blocks-color";
import {View} from "@khanacademy/wonder-blocks-core";
import {getClickableBehavior} from "@khanacademy/wonder-blocks-clickable";
import {Strut} from "@khanacademy/wonder-blocks-layout";
import Spacing from "@khanacademy/wonder-blocks-spacing";
import {LabelMedium, LabelSmall} from "@khanacademy/wonder-blocks-typography";
import type {AriaProps, StyleType} from "@khanacademy/wonder-blocks-core";
import CheckboxCore from "./checkbox-core.js";
import RadioCore from "./radio-core.js";

type Props = {|
    ...AriaProps,

    /** Whether this choice is checked. */
    checked: boolean,

    /** Whether this choice option is disabled. */
    disabled: boolean,

    /** Whether this choice is in error mode. */
    error: boolean,

    /** Returns the new checked state of the component. */
    onChange: (newCheckedState: boolean) => mixed,

    /**
     * Used for accessibility purposes, where the label id should match the
     * input id.
     */
    id?: string,

    /**
     * Optional additional styling.
     */
    style?: StyleType,

    /**
     * Adds CSS classes to the Button.
     */
    className?: string,

    /**
     * Optional id for testing purposes.
     */
    testId?: string,

    /**
     * Label for the field.
     */
    label?: string,

    /** Optional description for the field. */
    description?: string,

    /** Auto-populated by parent's groupName prop if in a group. */
    groupName?: string,

    /** Takes either "radio" or "checkbox" value. */
    variant: "radio" | "checkbox",
|};

type DefaultProps = {|
    checked: $PropertyType<Props, "checked">,
    disabled: $PropertyType<Props, "disabled">,
    error: $PropertyType<Props, "error">,
|};

/**
 * This is a potentially labeled 🔘 or ☑️ item. This is an internal component
 * that's wrapped by Checkbox and Radio. Choice is a wrapper for Checkbox and
 * Radio with many of its props auto-populated, to be used with CheckboxGroup
 * and RadioGroup. This design allows for more explicit prop typing. For
 * example, we can make onChange a required prop on Checkbox but not on Choice
 * (because for Choice, that prop would be auto-populated by CheckboxGroup).
 */ export default class ChoiceInternal extends React.Component<Props> {
    static defaultProps: DefaultProps = {
        checked: false,
        disabled: false,
        error: false,
    };

    handleLabelClick: (event: SyntheticEvent<>) => void = (event) => {
        // Browsers automatically use the for attribute to select the input,
        // but we use ClickableBehavior to handle this.
        event.preventDefault();
    };

    handleClick: () => void = () => {
        const {checked, onChange, variant} = this.props;
        // Radio buttons cannot be unchecked
        if (variant === "radio" && checked) {
            return;
        }
        onChange(!checked);
    };

    getChoiceCoreComponent(): typeof RadioCore | typeof CheckboxCore {
        if (this.props.variant === "radio") {
            return RadioCore;
        } else {
            return CheckboxCore;
        }
    }
    getLabel(): React.Node {
        const {disabled, id, label} = this.props;
        return (
            <LabelMedium
                style={[styles.label, disabled && styles.disabledLabel]}
            >
                <label htmlFor={id} onClick={this.handleLabelClick}>
                    {label}
                </label>
            </LabelMedium>
        );
    }
    getDescription(): React.Node {
        const {description} = this.props;
        return (
            <LabelSmall style={styles.description}>{description}</LabelSmall>
        );
    }
    render(): React.Node {
        const {
            label,
            description,
            // eslint-disable-next-line no-unused-vars
            onChange,
            style,
            className,
            variant,
            ...coreProps
        } = this.props;
        const ChoiceCore = this.getChoiceCoreComponent();
        const ClickableBehavior = getClickableBehavior();
        return (
            <View style={style} className={className}>
                <ClickableBehavior
                    disabled={coreProps.disabled}
                    onClick={this.handleClick}
                    role={variant}
                >
                    {(state, childrenProps) => {
                        return (
                            <View
                                style={styles.wrapper}
                                {...childrenProps}
                                // We are resetting the tabIndex=0 from handlers
                                // because the ChoiceCore component will receive
                                // focus on basis of it being an input element.
                                tabIndex={-1}
                            >
                                <ChoiceCore {...coreProps} {...state} />
                                <Strut size={Spacing.xSmall_8} />
                                {label && this.getLabel()}
                            </View>
                        );
                    }}
                </ClickableBehavior>
                {description && this.getDescription()}
            </View>
        );
    }
}
const styles = StyleSheet.create({
    wrapper: {
        flexDirection: "row",
        alignItems: "flex-start",
        outline: "none",
    },
    label: {
        userSelect: "none",
        // NOTE: The checkbox/radio button (height 16px) should be center
        // aligned with the first line of the label. However, LabelMedium has a
        // declared line height of 20px, so we need to adjust the top to get the
        // desired alignment.
        marginTop: -2,
    },
    disabledLabel: {
        color: Color.offBlack32,
    },
    description: {
        // 16 for icon + 8 for spacing strut
        marginLeft: Spacing.medium_16 + Spacing.xSmall_8,
        marginTop: Spacing.xxxSmall_4,
        color: Color.offBlack64,
    },
});
