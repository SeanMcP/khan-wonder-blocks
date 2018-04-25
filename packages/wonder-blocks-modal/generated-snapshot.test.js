// This file is auto-generated by gen-snapshot-tests.js
// Do not edit this file.  To make changes to these snapshot tests
// edit packages/wonder-blocks-modal/docs.md and run `npm run gen-snapshot-tests`.
import React from "react";
import renderer from "react-test-renderer";
import TwoColumnModal from "./components/two-column-modal.js";

describe("wonder-blocks-modal", () => {
    it("example 1", () => {
        const {StyleSheet, css} = require("aphrodite");
        const {View} = require("wonder-blocks-core");
        const {Title, Body} = require("wonder-blocks-typography");
        const TwoColumnModal = require("./components/two-column-modal.js")
            .default;

        const styles = StyleSheet.create({
            example: {
                // Checkerboard background
                backgroundImage:
                    "linear-gradient(45deg, #ccc 25%, transparent 25%), linear-gradient(-45deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%), linear-gradient(-45deg, transparent 75%, #ccc 75%)",
                backgroundSize: "20px 20px",
                backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px",

                padding: 32,
            },

            title: {
                marginBottom: 16,
            },
        });

        const example = (
            <View style={styles.example}>
                <TwoColumnModal
                    leftContent={
                        <View>
                            <Title style={styles.title}>Left column</Title>
                            <Body>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris.
                            </Body>
                        </View>
                    }
                    rightContent={
                        <View>
                            <Title style={styles.title}>Right column</Title>
                            <Body>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est.
                            </Body>
                        </View>
                    }
                />
            </View>
        );
        const tree = renderer.create(example).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
