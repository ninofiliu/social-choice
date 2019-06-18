# social-choice

Providing social choice algorithms and voting rules through an NPM package

## Roadmap

🛑 blocked<br>
💬 to do<br>
🚀 in progress<br>
🎫 done but didn't pass tests yet<br>
️️️️️️✔️ done<br>

- Business
    - ️️️️️️✔️ deploy on NPM
    - 💬 add `Usage` section in README.md
    - 💬 add `Contribute` section in README.md
- Package
    - ️️️️️️✔️ setup test scripts
    - ✔️ include JSDoc in built library
    - ✔️ Node support
    - 🎫 browser support
- Features
    - 🚀 preference profiles
        - ️️️️️️✔️ preference profile object, in `Profile`
        - ️️️️️️✔️ C1 graph, in `Profile.pGraph`
        - ️️️️️️✔️ C2 graph, in `Profile.nGraph`
        - ✔️ Condorcet winner, in `Profile.cw`
        - 💬 `Max(R_N, A)`
        - 💬 dominions
        - 💬 dominators
    - 💬 domains detection
        - 💬 single-caved
        - 💬 single-peaked
        - 💬 dichotomous
        - 💬 value-restricted
    - 🚀 social choice functions
        - ✔️ plurality
        - 💬 plurality with runoff
        - 💬 anti-plurality
        - 🎫 Borda's rule
        - 💬 instant runoff
        - 💬 sequential majority comparisons
        - 🎫 scoring rule
        - 💬 approval voting
        - 💬 Black's rule
        - 💬 Nanson's rule
        - 💬 top cycle
        - 💬 Copeland’s rule
        - 💬 maximin
        - 💬 Young's rule
        - ...
    - 💬 social welfare functions
        - 💬 scoring rules
        - ...
    - 💬 social preference functions
        - 💬 Kemeny's rule
        - ...