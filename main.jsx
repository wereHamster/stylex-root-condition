import React from 'react';
import ReactDOM from 'react-dom/client';

import * as stylex from "@stylexjs/stylex"

const styles = stylex.create({
    root: {
        color: "red",

        ":root[data-theme='dark']": {
            color: "blue"
        },
    }
})

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <div {...stylex.props(styles.root)}>Text</div>
  </React.StrictMode>,
);