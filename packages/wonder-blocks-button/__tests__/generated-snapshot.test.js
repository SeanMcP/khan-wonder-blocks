// This file is auto-generated by gen-snapshot-tests.js
// Do not edit this file.  To make changes to these snapshot tests:
//   1. edit the markdown documentation files in the package,
//        packages/wonder-blocks-button
//   2. Run `yarn run gen-snapshot-tests`.
import React from "react";
import renderer from "react-test-renderer";

// Mock react-dom as jest doesn't like findDOMNode.
jest.mock("react-dom");
import Button from "@khanacademy/wonder-blocks-button";
import {View} from "@khanacademy/wonder-blocks-core";
import {StyleSheet} from "aphrodite";
import Color from "@khanacademy/wonder-blocks-color";
import {MemoryRouter, Route, Switch} from "react-router-dom";
import {icons} from "@khanacademy/wonder-blocks-icon";

describe("wonder-blocks-button", () => {
    it("example 1", () => {
        const styles = StyleSheet.create({
            row: {
                flexDirection: "row",
            },
            button: {
                marginRight: 10,
            },
        });
        const example = (
            <View style={styles.row}>
                <Button
                    style={styles.button}
                    onClick={(e) => window.alert("Hello, world!")}
                >
                    Primary
                </Button>
                <Button
                    style={styles.button}
                    onClick={(e) => window.alert("Hello, world!")}
                    kind="secondary"
                >
                    Secondary
                </Button>
                <Button
                    style={styles.button}
                    onClick={(e) => window.alert("Hello, world!")}
                    kind="tertiary"
                >
                    Tertiary
                </Button>
            </View>
        );
        const tree = renderer.create(example).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("example 2", () => {
        const styles = StyleSheet.create({
            row: {
                flexDirection: "row",
            },
            button: {
                marginRight: 10,
            },
        });
        const example = (
            <View style={styles.row}>
                <Button
                    style={styles.button}
                    onClick={(e) => window.alert("Hello, world!")}
                    color="destructive"
                >
                    Primary
                </Button>
                <Button
                    style={styles.button}
                    onClick={(e) => window.alert("Hello, world!")}
                    kind="secondary"
                    color="destructive"
                >
                    Secondary
                </Button>
                <Button
                    style={styles.button}
                    onClick={(e) => window.alert("Hello, world!")}
                    kind="tertiary"
                    color="destructive"
                >
                    Tertiary
                </Button>
            </View>
        );
        const tree = renderer.create(example).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("example 3", () => {
        const styles = StyleSheet.create({
            row: {
                flexDirection: "row",
            },
            button: {
                marginRight: 10,
            },
        });
        const example = (
            <View style={styles.row}>
                <Button
                    style={styles.button}
                    onClick={(e) => window.alert("Hello, world!")}
                    disabled={true}
                >
                    Primary
                </Button>
                <Button
                    style={styles.button}
                    href={"/foo"}
                    kind="secondary"
                    disabled={true}
                >
                    Secondary
                </Button>
                <Button
                    style={styles.button}
                    onClick={(e) => window.alert("Hello, world!")}
                    kind="tertiary"
                    disabled={true}
                >
                    Tertiary
                </Button>
            </View>
        );
        const tree = renderer.create(example).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("example 4", () => {
        const styles = StyleSheet.create({
            row: {
                flexDirection: "row",
                backgroundColor: Color.darkBlue,
                padding: 10,
            },
            button: {
                marginRight: 10,
            },
        });
        const example = (
            <View style={styles.row}>
                <Button
                    light={true}
                    style={styles.button}
                    onClick={(e) => window.alert("Hello, world!")}
                >
                    Primary
                </Button>
                <Button
                    light={true}
                    style={styles.button}
                    onClick={(e) => window.alert("Hello, world!")}
                    kind="secondary"
                >
                    Secondary
                </Button>
                <Button
                    light={true}
                    style={styles.button}
                    onClick={(e) => window.alert("Hello, world!")}
                    kind="tertiary"
                >
                    Tertiary
                </Button>
                <Button
                    light={true}
                    style={styles.button}
                    onClick={(e) => window.alert("Hello, world!")}
                    disabled={true}
                >
                    Primary
                </Button>
                <Button
                    light={true}
                    style={styles.button}
                    onClick={(e) => window.alert("Hello, world!")}
                    kind="secondary"
                    disabled={true}
                >
                    Secondary
                </Button>
                <Button
                    light={true}
                    style={styles.button}
                    onClick={(e) => window.alert("Hello, world!")}
                    kind="tertiary"
                    disabled={true}
                >
                    Tertiary
                </Button>
            </View>
        );
        const tree = renderer.create(example).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("example 5", () => {
        const styles = StyleSheet.create({
            row: {
                flexDirection: "row",
                marginBottom: 8,
            },
            button: {
                marginRight: 10,
            },
        });
        const example = (
            <View>
                <View style={styles.row}>
                    <Button
                        style={styles.button}
                        onClick={(e) => window.alert("Hello, world!")}
                        size="small"
                    >
                        Label
                    </Button>
                    <Button
                        style={styles.button}
                        onClick={(e) => window.alert("Hello, world!")}
                        kind="secondary"
                        size="small"
                    >
                        Label
                    </Button>
                    <Button
                        style={styles.button}
                        onClick={(e) => window.alert("Hello, world!")}
                        kind="tertiary"
                        size="small"
                    >
                        Label
                    </Button>
                </View>
                <View style={styles.row}>
                    <Button
                        style={styles.button}
                        onClick={(e) => window.alert("Hello, world!")}
                        size="medium"
                    >
                        Label
                    </Button>
                    <Button
                        style={styles.button}
                        onClick={(e) => window.alert("Hello, world!")}
                        kind="secondary"
                        size="medium"
                    >
                        Label
                    </Button>
                    <Button
                        style={styles.button}
                        onClick={(e) => window.alert("Hello, world!")}
                        kind="tertiary"
                        size="medium"
                    >
                        Label
                    </Button>
                </View>
                <View style={styles.row}>
                    <Button
                        style={styles.button}
                        onClick={(e) => window.alert("Hello, world!")}
                        size="xlarge"
                    >
                        Label
                    </Button>
                    <Button
                        style={styles.button}
                        onClick={(e) => window.alert("Hello, world!")}
                        kind="secondary"
                        size="xlarge"
                    >
                        Label
                    </Button>
                    <Button
                        style={styles.button}
                        onClick={(e) => window.alert("Hello, world!")}
                        kind="tertiary"
                        size="xlarge"
                    >
                        Label
                    </Button>
                </View>
            </View>
        );
        const tree = renderer.create(example).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("example 6", () => {
        const styles = StyleSheet.create({
            row: {
                flexDirection: "row",
                alignItems: "center",
            },
            button: {
                marginRight: 10,
            },
        });
        const example = (
            <View style={styles.row}>
                <Button
                    spinner={true}
                    aria-label="loading"
                    size="xlarge"
                    style={styles.button}
                >
                    Click me!
                </Button>
                <Button
                    spinner={true}
                    aria-label="loading"
                    style={styles.button}
                    href="/foo"
                >
                    Click me!
                </Button>
                <Button
                    spinner={true}
                    aria-label="loading"
                    size="small"
                    style={styles.button}
                >
                    Click me!
                </Button>
            </View>
        );
        const tree = renderer.create(example).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("example 7", () => {
        const styles = StyleSheet.create({
            row: {
                flexDirection: "row",
            },
            button: {
                marginRight: 10,
            },
        });
        const example = (
            <View style={styles.row}>
                <Button href="#button-1" style={styles.button}>
                    href
                </Button>
                <Button
                    kind="secondary"
                    onClick={(e) => window.alert("Hello, world!")}
                    style={styles.button}
                >
                    onClick
                </Button>
                <Button
                    kind="tertiary"
                    href="#button-1"
                    onClick={(e) => window.alert("Hello, world!")}
                    style={styles.button}
                >
                    both
                </Button>
            </View>
        );
        const tree = renderer.create(example).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("example 8", () => {
        const styles = StyleSheet.create({
            row: {
                flexDirection: "row",
                alignItems: "center",
            },
            button: {
                marginRight: 10,
            },
        }); // NOTE: In actual code you would use BrowserRouter instead

        const example = (
            <MemoryRouter>
                <View style={styles.row}>
                    <Button href="/foo" style={styles.button}>
                        Uses Client-side Nav
                    </Button>
                    <Button href="/foo" style={styles.button} skipClientNav>
                        Avoids Client-side Nav
                    </Button>
                    <Switch>
                        <Route path="/foo">
                            <View id="foo">Hello, world!</View>
                        </Route>
                    </Switch>
                </View>
            </MemoryRouter>
        );
        const tree = renderer.create(example).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("example 9", () => {
        const styles = StyleSheet.create({
            row: {
                flexDirection: "row",
                alignItems: "center",
            },
            button: {
                marginRight: 10,
            },
        }); // NOTE: In actual code you would use BrowserRouter instead

        const example = (
            <MemoryRouter>
                <View style={styles.row}>
                    <Button
                        href="/foo"
                        style={styles.button}
                        beforeNav={() =>
                            new Promise((resolve, reject) => {
                                setTimeout(resolve, 1000);
                            })
                        }
                    >
                        Async action, client-side nav
                    </Button>
                    <Button
                        href="/foo"
                        style={styles.button}
                        skipClientNav={true}
                        beforeNav={() =>
                            new Promise((resolve, reject) => {
                                setTimeout(resolve, 1000);
                            })
                        }
                    >
                        Async action, server-side nav
                    </Button>
                    <Button
                        href="https://google.com"
                        target="_blank"
                        style={styles.button}
                        skipClientNav={true}
                        beforeNav={() =>
                            new Promise((resolve, reject) => {
                                setTimeout(resolve, 1000);
                            })
                        }
                    >
                        Async action, open URL in new tab
                    </Button>
                    <Switch>
                        <Route path="/foo">
                            <View id="foo">Hello, world!</View>
                        </Route>
                    </Switch>
                </View>
            </MemoryRouter>
        );
        const tree = renderer.create(example).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("example 10", () => {
        const styles = StyleSheet.create({
            row: {
                flexDirection: "row",
                alignItems: "center",
            },
            button: {
                marginRight: 10,
            },
        }); // NOTE: In actual code you would use BrowserRouter instead

        const example = (
            <MemoryRouter>
                <View style={styles.row}>
                    <Button
                        href="/foo"
                        style={styles.button}
                        onClick={(e) => e.preventDefault()}
                    >
                        This button prevent navigation.
                    </Button>
                    <Switch>
                        <Route path="/foo">
                            <View id="foo">Hello, world!</View>
                        </Route>
                    </Switch>
                </View>
            </MemoryRouter>
        );
        const tree = renderer.create(example).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("example 11", () => {
        const styles = StyleSheet.create({
            row: {
                flexDirection: "row",
                marginBottom: 10,
            },
            button: {
                marginRight: 10,
            },
        });
        const kinds = ["primary", "secondary", "tertiary"];
        const example = (
            <View>
                <View style={styles.row}>
                    {kinds.map((kind, idx) => (
                        <Button
                            kind={kind}
                            icon={icons.contentExercise}
                            style={styles.button}
                            key={idx}
                        >
                            {kind}
                        </Button>
                    ))}
                </View>
                <View style={styles.row}>
                    {kinds.map((kind, idx) => (
                        <Button
                            kind={kind}
                            icon={icons.contentExercise}
                            style={styles.button}
                            key={idx}
                            size="small"
                        >
                            {kind} small
                        </Button>
                    ))}
                </View>
            </View>
        );
        const tree = renderer.create(example).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("example 12", () => {
        const example = (
            <View>
                <form onSubmit={() => alert("the form was submitted")}>
                    <Button type="submit">Submit</Button>
                </form>
            </View>
        );
        const tree = renderer.create(example).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("example 13", () => {
        const example = (
            <View>
                <Button>Label</Button>
            </View>
        );
        const tree = renderer.create(example).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("example 14", () => {
        const styles = StyleSheet.create({
            column: {
                alignItems: "flex-start",
            },
            row: {
                flexDirection: "row",
            },
            gap: {
                height: 16,
            },
            button: {
                marginRight: 10,
            },
        });
        const example = (
            <View>
                <View style={styles.row}>
                    <Button>Button in a row</Button>
                </View>
                <View style={styles.gap} />
                <View style={styles.column}>
                    <Button>Button in a column</Button>
                </View>
            </View>
        );
        const tree = renderer.create(example).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("example 15", () => {
        const styles = StyleSheet.create({
            row: {
                flexDirection: "row",
            },
            gap: {
                height: 16,
            },
            button: {
                marginRight: 10,
                minWidth: 144,
            },
        });
        const example = (
            <View style={styles.row}>
                <Button style={styles.button} kind="secondary">
                    label
                </Button>
                <Button style={styles.button}>
                    label in a different language
                </Button>
            </View>
        );
        const tree = renderer.create(example).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("example 16", () => {
        const styles = StyleSheet.create({
            row: {
                flexDirection: "row",
                width: 300,
            },
            gap: {
                height: 16,
            },
            button: {
                marginRight: 10,
                minWidth: 144,
            },
        });
        const example = (
            <View style={styles.row}>
                <Button style={styles.button} kind="secondary">
                    label
                </Button>
                <Button style={styles.button}>
                    label too long for the parent container
                </Button>
            </View>
        );
        const tree = renderer.create(example).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("example 17", () => {
        const styles = StyleSheet.create({
            row: {
                flexDirection: "row",
            },
            button: {
                marginRight: 10,
            },
        });
        const example = (
            <View>
                <View style={styles.row}>
                    <Button style={styles.button} kind="tertiary">
                        Tertiary
                    </Button>
                    <Button style={styles.badButton}>Primary</Button>
                </View>
            </View>
        );
        const tree = renderer.create(example).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("example 18", () => {
        const styles = StyleSheet.create({
            row: {
                flexDirection: "row",
            },
            button: {
                marginRight: 10,
            },
        });

        class Example extends React.Component {
            constructor(props) {
                super(props);
                this.state = {
                    waiting: false,
                };
            }

            componentWillUnmount() {
                this.timeout && this.timeout.clear();
            }

            handleClick() {
                this.setState({
                    waiting: true,
                });
                this.timeout = setTimeout(() => {
                    this.setState({
                        waiting: false,
                    });
                }, 2000);
            }

            render() {
                return (
                    <View style={styles.row}>
                        <Button
                            spinner={this.state.waiting}
                            aria-label={this.state.waiting ? "waiting" : ""}
                            onClick={() => this.handleClick()}
                        >
                            Click me!
                        </Button>
                    </View>
                );
            }
        }

        const example = <Example />;
        const tree = renderer.create(example).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
