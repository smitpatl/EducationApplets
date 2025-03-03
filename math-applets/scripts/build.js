/**
 * Build Script for Math Applets
 * 
 * This script helps generate standalone HTML files for GitHub Pages by:
 * 1. Copying applet HTML files from the applets directory to the docs/applets directory
 * 2. Modifying the files to use CDN versions of libraries instead of local files
 * 3. Adding a back button to return to the main page
 */

const fs = require('fs');
const path = require('path');

// Paths
const appletsSrcDir = path.join(__dirname, '..', 'applets');
const docsAppletDir = path.join(__dirname, '..', 'docs', 'applets');

// Ensure the docs/applets directory exists
if (!fs.existsSync(docsAppletDir)) {
  fs.mkdirSync(docsAppletDir, { recursive: true });
}

// Process all applet directories
const appletDirs = fs.readdirSync(appletsSrcDir);

appletDirs.forEach(appletDir => {
  const srcDir = path.join(appletsSrcDir, appletDir);
  
  // Skip if not a directory
  if (!fs.statSync(srcDir).isDirectory()) {
    return;
  }
  
  const srcHtmlPath = path.join(srcDir, 'index.html');
  
  // Skip if no index.html file
  if (!fs.existsSync(srcHtmlPath)) {
    console.log(`Skipping ${appletDir} - no index.html found`);
    return;
  }
  
  // Read the source HTML file
  let htmlContent = fs.readFileSync(srcHtmlPath, 'utf8');
  
  // Replace local JSXGraph references with CDN versions
  htmlContent = htmlContent.replace(
    /<script src="..\/..\/lib\/jsxgraph\/jsxgraphcore.js"><\/script>/g,
    '<script src="https://cdn.jsdelivr.net/npm/jsxgraph@1.4.6/distrib/jsxgraphcore.js"></script>'
  );
  
  // Add a back button if it doesn't exist
  if (!htmlContent.includes('Back to All Applets')) {
    htmlContent = htmlContent.replace(
      /<body>/,
      '<body>\n  <a href="../index.html" style="display: inline-block; margin: 20px; padding: 8px 15px; background-color: #4a90e2; color: white; text-decoration: none; border-radius: 4px; font-weight: bold;">← Back to All Applets</a>'
    );
  }
  
  // Write the modified HTML to the docs/applets directory
  const destHtmlPath = path.join(docsAppletDir, `${appletDir}.html`);
  fs.writeFileSync(destHtmlPath, htmlContent);
  
  console.log(`Processed ${appletDir} -> ${destHtmlPath}`);
});

console.log('Build completed successfully!');
