import * as stylex from "@stylexjs/stylex"

const styles = stylex.create({
    root: {
        color: "red",

        "@media (prefers-color-scheme: dark)": {
            color: "green"
        },
        ":root[data-theme='dark']": {
            color: "blue"
        },
    }
})

console.log(stylex.props(styles.root))
