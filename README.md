# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Steps to building the dist & trigger the Github workflow

### Updating the Electron Installer (.exe)
-   Make changes to the project
    Develop React/Electron application normally.
-   Update the version
    package.json>
        "version": "1.0.0" ---> "version": "1.0.1"
-   Update the workflow
    .github/workflows/build-electron.yml>
        files: |                                    ---->   files: |
          release/Media Player Setup 1.0.0.exe                release/Media Player Setup 1.0.1.exe

### Building the .exe in the release section(triggering the workflow)
-   Git checkin
        'git push origin master'
-   Create a Git Tag
        'git tag v1.0.1'
            This tells GitHub
                "Create a Release."
- Push the Tag
        'git push origin v1.0.1'
        this command will do
            * Install dependencies
            * Build React
            * Build Electron
            * Generate the installer
            * Create a GitHub Release
            * Upload the installer

            No manual upload required.

- Wait for GitHub Actions
    Open Github> Actions
        $ wait until see '✔ Build Electron App'
    
- Verify the Release

    