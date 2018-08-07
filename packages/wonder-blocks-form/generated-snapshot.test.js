// This file is auto-generated by gen-snapshot-tests.js
// Do not edit this file.  To make changes to these snapshot tests:
//   1. edit the markdown documentation files in the package,
//        packages/wonder-blocks-form
//   2. Run `yarn run gen-snapshot-tests`.
import React from "react";
import renderer from "react-test-renderer";

// Mock react-dom as jest doesn't like findDOMNode.
jest.mock("react-dom");
import Checkbox from "./components/checkbox.js";
import Radio from "./components/radio.js";
import Choice from "./components/choice.js";
import CheckboxGroup from "./components/checkbox-group.js";
import RadioGroup from "./components/radio-group.js";
import CheckboxCore from "./components/checkbox-core.js";
import RadioCore from "./components/radio-core.js";
import ChoiceInternal from "./components/choice-internal.js";

describe("wonder-blocks-form", () => {
    it("example 1", () => {
        const {View} = require("@khanacademy/wonder-blocks-core");
        const {StyleSheet} = require("aphrodite");

        const styles = StyleSheet.create({
            row: {
                flexDirection: "row",
            },
            marginRight: {
                marginRight: 16,
            },
        });

        const handleChanged = (checked) =>
            console.log(
                `clicked on checkbox, will be checked=${checked.toString()}`,
            );

        const example = (
            <View style={[styles.row]}>
                <Checkbox
                    error={false}
                    checked={false}
                    style={[styles.marginRight]}
                    onChange={(checked) => handleChanged(checked)}
                />
                <Checkbox
                    error={false}
                    checked={true}
                    style={[styles.marginRight]}
                    onChange={(checked) => handleChanged(checked)}
                />
                <Checkbox
                    error={true}
                    checked={false}
                    style={[styles.marginRight]}
                    onChange={(checked) => handleChanged(checked)}
                />
                <Checkbox
                    error={true}
                    checked={true}
                    style={[styles.marginRight]}
                    onChange={(checked) => handleChanged(checked)}
                />
                <Checkbox
                    disabled={true}
                    checked={false}
                    style={[styles.marginRight]}
                    onChange={(checked) => handleChanged(checked)}
                />
                <Checkbox
                    disabled={true}
                    checked={true}
                    style={[styles.marginRight]}
                    onChange={(checked) => handleChanged(checked)}
                />
            </View>
        );
        const tree = renderer.create(example).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it("example 2", () => {
        const React = require("react");
        const {View} = require("@khanacademy/wonder-blocks-core");
        const {
            LabelMedium,
            LabelSmall,
        } = require("@khanacademy/wonder-blocks-typography");
        const {StyleSheet} = require("aphrodite");

        class Settings extends React.Component {
            constructor() {
                super();
                this.state = {
                    assignment: false,
                };
            }

            handleChange(choiceKey, checked) {
                this.setState({
                    [choiceKey]: checked,
                });
                // Potentially do something here with this updated state information.
            }

            render() {
                const handleChanged = (checked) =>
                    console.log(
                        `clicked on checkbox with checked=${checked.toString()}`,
                    );
                const headingText = "Functions";
                const descriptionText = `A great cook knows how to take basic ingredients and
                prepare a delicious meal. In this topic, you will become function-chefs! You
                will learn how to combine functions with arithmetic operations and how to
                compose functions.`;
                return (
                    <View>
                        <Checkbox
                            label="Receive assignment reminders for Algebra"
                            description="You will receive a reminder 24 hours before each deadline"
                            checked={this.state.assignment}
                            id="assignment"
                            onChange={(checked) =>
                                this.handleChange("assignment", checked)
                            }
                            testId="algebra-assignment-test"
                            variant="checkbox"
                        />
                    </View>
                );
            }
        }

        const example = <Settings />;
        const tree = renderer.create(example).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it("example 3", () => {
        const React = require("react");
        const {View} = require("@khanacademy/wonder-blocks-core");
        const {
            LabelMedium,
            LabelSmall,
        } = require("@khanacademy/wonder-blocks-typography");
        const {StyleSheet} = require("aphrodite");

        const styles = StyleSheet.create({
            wrapper: {
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-evenly",
            },
            topic: {
                maxWidth: 600,
            },
        });

        class ContentItem extends React.Component {
            constructor() {
                super();
                this.state = {
                    checked: false,
                };
            }

            handleChange(checked) {
                this.setState({
                    checked: checked,
                });
                // Potentially do something here with this updated state information.
            }

            render() {
                const handleChanged = (checked) =>
                    console.log(
                        `clicked on checkbox with checked=${checked.toString()}`,
                    );
                const headingText = "Functions";
                const descriptionText = `A great cook knows how to take basic ingredients and
                prepare a delicious meal. In this topic, you will become function-chefs! You
                will learn how to combine functions with arithmetic operations and how to
                compose functions.`;
                return (
                    <View style={styles.wrapper}>
                        <View style={styles.topic}>
                            <label htmlFor="topic-123">
                                <LabelMedium>{headingText}</LabelMedium>
                            </label>
                            <LabelSmall>{descriptionText}</LabelSmall>
                        </View>
                        <Checkbox
                            checked={this.state.checked}
                            id="topic-123"
                            onChange={(checked) => this.handleChange(checked)}
                        />
                    </View>
                );
            }
        }

        const example = <ContentItem />;
        const tree = renderer.create(example).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it("example 4", () => {
        const {View} = require("@khanacademy/wonder-blocks-core");
        const {StyleSheet} = require("aphrodite");

        const styles = StyleSheet.create({
            row: {
                flexDirection: "row",
            },
            marginRight: {
                marginRight: 16,
            },
        });

        const handleChanged = (checked) =>
            console.log(
                `clicked on radio, will be checked=${checked.toString()}`,
            );
        const groupName = "group";

        const example = (
            <View style={[styles.row]}>
                <Radio
                    error={false}
                    checked={false}
                    style={[styles.marginRight]}
                    groupName={groupName}
                    onChange={(checked) => handleChanged(checked)}
                />
                <Radio
                    error={false}
                    checked={true}
                    style={[styles.marginRight]}
                    groupName={groupName}
                    onChange={(checked) => handleChanged(checked)}
                />
                <Radio
                    error={true}
                    checked={false}
                    style={[styles.marginRight]}
                    groupName={groupName}
                    onChange={(checked) => handleChanged(checked)}
                />
                <Radio
                    error={true}
                    checked={true}
                    style={[styles.marginRight]}
                    groupName={groupName}
                    onChange={(checked) => handleChanged(checked)}
                />
                <Radio
                    disabled={true}
                    checked={false}
                    style={[styles.marginRight]}
                    groupName={groupName}
                    onChange={(checked) => handleChanged(checked)}
                />
                <Radio
                    disabled={true}
                    checked={true}
                    style={[styles.marginRight]}
                    groupName={groupName}
                    onChange={(checked) => handleChanged(checked)}
                />
            </View>
        );
        const tree = renderer.create(example).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it("example 5", () => {
        const React = require("react");
        const {View} = require("@khanacademy/wonder-blocks-core");
        const {StyleSheet} = require("aphrodite");

        const styles = StyleSheet.create({
            wrapper: {
                width: 300,
            },
        });

        class CheckboxGroupPizzaExample extends React.Component {
            constructor() {
                super();
                this.state = {
                    selectedValues: ["pineapple"],
                };
            }

            handleChange(change) {
                console.log(`${change} was selected!`);
                const error = this.checkForError(change);
                this.setState({
                    selectedValues: change,
                    error: error,
                });
            }

            checkForError(input) {
                if (input.length > 3) {
                    return "You have selected too many toppings";
                }
            }

            render() {
                return (
                    <CheckboxGroup
                        label="Pizza order"
                        description="You may choose at most three toppings"
                        errorMessage={this.state.error}
                        groupName="Toppings"
                        onChange={(change) => this.handleChange(change)}
                        selectedValues={this.state.selectedValues}
                    >
                        <Choice label="Pepperoni" value="pepperoni" />
                        <Choice
                            label="Sausage"
                            value="sausage"
                            description="Imported from Italy"
                        />
                        <Choice label="Extra cheese" value="cheese" />
                        <Choice label="Green pepper" value="pepper" />
                        <Choice label="Mushroom" value="mushroom" />
                        <Choice
                            label="Pineapple"
                            value="pineapple"
                            description="Does in fact belong on pizzas"
                        />
                    </CheckboxGroup>
                );
            }
        }
        const example = (
            <View style={styles.wrapper}>
                <CheckboxGroupPizzaExample />
            </View>
        );
        const tree = renderer.create(example).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it("example 6", () => {
        const React = require("react");
        const {View} = require("@khanacademy/wonder-blocks-core");
        const Color = require("@khanacademy/wonder-blocks-color").default;
        const {LabelLarge} = require("@khanacademy/wonder-blocks-typography");
        const {StyleSheet} = require("aphrodite");

        const styles = StyleSheet.create({
            wrapper: {
                width: 650,
            },
            group: {
                flexDirection: "row",
                flexWrap: "wrap",
            },
            choice: {
                marginTop: 8,
                width: 200,
            },
            title: {
                paddingBottom: 8,
                borderBottom: `1px solid ${Color.offBlack64}`,
            },
        });

        class ClassSelectorExample extends React.Component {
            constructor() {
                super();
                this.state = {
                    selectedValues: [],
                };
            }

            handleChange(change) {
                console.log(`${change} was selected!`);
                this.setState({
                    selectedValues: change,
                });
            }

            render() {
                return (
                    <CheckboxGroup
                        groupName="science-classes"
                        onChange={(change) => this.handleChange(change)}
                        selectedValues={this.state.selectedValues}
                        style={styles.group}
                    >
                        <Choice
                            label="Biology"
                            value="1"
                            style={styles.choice}
                        />
                        <Choice
                            label="AP®︎ Biology"
                            value="2"
                            style={styles.choice}
                        />
                        <Choice
                            label="High school biology"
                            value="3"
                            style={styles.choice}
                        />
                        <Choice
                            label="Cosmology and astronomy"
                            value="4"
                            style={styles.choice}
                        />
                        <Choice
                            label="Electrical engineering"
                            value="5"
                            style={styles.choice}
                        />
                        <Choice
                            label="Health and medicine"
                            value="6"
                            style={styles.choice}
                        />
                    </CheckboxGroup>
                );
            }
        }
        const example = (
            <View style={styles.wrapper}>
                <LabelLarge style={styles.title}>Science</LabelLarge>
                <ClassSelectorExample />
            </View>
        );
        const tree = renderer.create(example).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it("example 7", () => {
        const React = require("react");
        const {View} = require("@khanacademy/wonder-blocks-core");
        const {StyleSheet} = require("aphrodite");

        const styles = StyleSheet.create({
            wrapper: {
                width: 300,
            },
        });

        class RadioGroupPokemonExample extends React.Component {
            constructor() {
                super();
                this.state = {
                    selectedValue: null,
                };
            }

            handleChange(change) {
                console.log(`${change} was selected!`);
                const error = this.checkForError(change);
                this.setState({
                    selectedValue: change,
                    error: error,
                });
            }

            checkForError(input) {
                if (input === "infiltrator") {
                    return "Superman isn't a Pokemon!";
                }
            }

            render() {
                return (
                    <RadioGroup
                        label="Choose a starter!"
                        description="Your first Pokemon"
                        errorMessage={this.state.error}
                        groupName="Pokemon"
                        onChange={(change) => this.handleChange(change)}
                        selectedValue={this.state.selectedValue}
                    >
                        <Choice label="Bulbasaur" value="bulb" />
                        <Choice
                            label="Charmander"
                            value="char"
                            description="Oops, we ran out of Charmanders"
                            disabled
                        />
                        <Choice label="Squirtle" value="squirt" />
                        <Choice label="Pikachu" value="pika" />
                        <Choice label="Superman" value="infiltrator" />
                    </RadioGroup>
                );
            }
        }
        const example = (
            <View style={styles.wrapper}>
                <RadioGroupPokemonExample />
            </View>
        );
        const tree = renderer.create(example).toJSON();
        expect(tree).toMatchSnapshot();
    });
});