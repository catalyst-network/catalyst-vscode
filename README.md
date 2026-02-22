This VS Code extension provides templates for developing smart contracts in Solidity.

It was developed during the Future of Blockchain hackathon that was run between the Universities of Cambridge, Oxford, London or Berlin.

## Acknowledgment
Sprytech
Ethereum Studio
Remix IDE

## Features
This extension adds a "Catalyst" view in the Activity Bar that lets you create a new project from a template (Hello World / Coins / Empty Project).

## Installation

- From the VS Code Marketplace: search for **Catalyst** (publisher: `anujpalimkar`)
- From a `.vsix` file:
  - VS Code → Extensions → `...` → **Install from VSIX...**

## Requirements
- Recommended: install a Solidity extension such as `juanblanco.solidity` for syntax highlighting and compilation.
- Works on Windows, macOS, and Linux (projects are created in a user-selected folder).

## Extension Settings
This extension adds an icon in the Activity Bar for navigating templates. Use "View Details" to see a short description of each template.

## Usage

- Open the **Catalyst** view from the Activity Bar
- Right-click a template and choose **Create Project**
- Enter a project name and choose the destination folder
- The new project folder opens automatically

The generated project contains:
- `app/` (front-end boilerplate)
- `contract/` (Solidity contract)
- `readme.md`

Note: the template contract file is created as `contract/contract.sol` and will be renamed to `contract/<projectName>.sol`.

## Known Issues

- Creating multiple projects at once is prevented; wait for the notification to finish before starting another.

## Development / Testing

- Install dependencies:
  - `npm install`
- Build:
  - `npm run compile`
- Run the extension in VS Code:
  - Press `F5` (Extension Development Host)
  - In the new window, open the **Catalyst** Activity Bar view
  - Right-click a template and choose **Create Project**
  - Enter a project name and choose the destination folder
  - The new folder will open automatically

## Release Notes
This is the second version of the template extension. Updates will come along based on user feedback.
The extension dependency on `gpm` is removed.

V 0.3
