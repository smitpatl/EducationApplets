# Math Applets Repository

This repository contains a collection of interactive mathematics applets designed for educational purposes. Each applet is self-contained and can be used offline without external dependencies.

## Repository Structure

```
math-applets/
├── README.md                 # Main repo documentation
├── lib/                      # Shared libraries
│   └── jsxgraph/             # JSXGraph library files
│       ├── jsxgraph.css
│       └── jsxgraphcore.js
├── applets/                  # All applets go here
│   ├── box-height/           # Box height challenge applet
│   │   ├── README.md         # Documentation for this specific applet
│   │   ├── index.html        # Standalone HTML for offline use
│   │   └── assets/           # Any applet-specific assets
│   ├── future-applet1/
│   ├── future-applet2/
│   └── ...
├── docs/                     # GitHub Pages site
│   ├── index.html            # Landing page with links to all applets
│   └── applets/              # Generated standalone HTML files for GitHub Pages
└── scripts/                  # Utility scripts (if needed)
    └── build.js              # For bundling dependencies into standalone HTML
```

## Implementation Strategy

### Standalone HTML Files

Each applet is designed as a self-contained HTML file that:
- Embeds all necessary JavaScript and CSS directly in the file
- Includes the JSXGraph library directly using `<style>` and `<script>` tags
- Works offline without external dependencies

### GitHub Pages Deployment

- The repository uses GitHub Pages to host a live demo of all applets
- This satisfies the "Git Page with source code" requirement
- GitHub automatically provides version control

### Documentation

Each applet includes:
- Main README explaining the project
- Individual README for each applet explaining its purpose, math concepts, and usage

## Available Applets

### Box Height Challenge

An interactive applet that guides students through solving a problem about finding the height of a box with a given volume and dimensions.

- **Problem**: Find the height of a box with volume 80 cm³, length 10 cm, and width 4 cm
- **Learning Objectives**: Apply volume formulas, practice algebraic manipulation, understand dimensional analysis
- **Features**: Interactive 3D visualization, step-by-step solution, verification tools

## Usage

1. **Offline Use**: 
   - Download any applet's standalone HTML file
   - Open it in any modern web browser
   - No internet connection required

2. **Online Demo**:
   - Visit the GitHub Pages site to access all applets online
   - Each applet can be used directly in the browser

## Development

To add a new applet to the repository:

1. Create a new directory under `applets/`
2. Add your HTML, CSS, and JavaScript code
3. Create a README.md file documenting the applet
4. Use the shared libraries in `lib/` as needed
5. Run the build script (if applicable) to generate the standalone HTML file

## License

This project is licensed under the MIT License - see the LICENSE file for details.
