'use strict';

import * as vscode from 'vscode';
import * as path from 'path';
type TemplateId = 'hello-world' | 'coins' | 'empty-project';

const TEMPLATES: Array<{ id: TemplateId; label: string }> = [
  { id: 'hello-world', label: 'Hello World' },
  { id: 'coins', label: 'Coins' },
  { id: 'empty-project', label: 'Empty Project' },
];

let isCreatingProject = false;

export function activate(context: vscode.ExtensionContext) {
  const treeDataProvider = new TemplatesTreeDataProvider();
  context.subscriptions.push(vscode.window.registerTreeDataProvider('templates', treeDataProvider));

  context.subscriptions.push(
    vscode.commands.registerCommand('nodeDependencies.addTemplate1', async (node: TemplateTreeItem) => {
      if (isCreatingProject) {
        vscode.window.showWarningMessage('A project is already being created. Please wait.');
        return;
      }

      const templateId = node?.templateId;
      if (!templateId) {
        vscode.window.showErrorMessage('No template selected.');
        return;
      }

      isCreatingProject = true;
      try {
        await createProjectFromTemplate({ context, templateId });
      } finally {
        isCreatingProject = false;
      }
    }),
  );

  context.subscriptions.push(
    vscode.commands.registerCommand('nodeDependencies.viewDetails', async () => {
      const panel = vscode.window.createWebviewPanel(
        'catalystTemplates',
        'Catalyst Templates',
        vscode.ViewColumn.One,
        { enableScripts: false },
      );
      panel.webview.html = getWebViewContent();
    }),
  );
}

export function deactivate() {}

async function createProjectFromTemplate(opts: { context: vscode.ExtensionContext; templateId: TemplateId }) {
  const { context, templateId } = opts;

  const projectName = await vscode.window.showInputBox({
    placeHolder: 'Enter a name for your project (folder name)',
    validateInput: validateProjectName,
    ignoreFocusOut: true,
  });
  if (!projectName) return;

  const destination = await vscode.window.showOpenDialog({
    canSelectFiles: false,
    canSelectFolders: true,
    canSelectMany: false,
    openLabel: 'Create project here',
  });
  if (!destination || destination.length === 0) return;

  const destinationRoot = destination[0];
  const projectUri = vscode.Uri.file(path.join(destinationRoot.fsPath, projectName));

  if (await uriExists(projectUri)) {
    vscode.window.showErrorMessage(`Folder already exists: ${projectUri.fsPath}`);
    return;
  }

  const templateSource = vscode.Uri.file(path.join(context.extensionPath, 'templates', templateId));
  if (!(await uriExists(templateSource))) {
    vscode.window.showErrorMessage(`Template not found in extension: ${templateId}`);
    return;
  }

  await vscode.window.withProgress(
    { location: vscode.ProgressLocation.Notification, title: `Creating ${projectName}…`, cancellable: false },
    async (progress) => {
      progress.report({ message: 'Copying template files…' });
      await copyDirectory(templateSource, projectUri);

      const contractDir = vscode.Uri.file(path.join(projectUri.fsPath, 'contract'));
      const fromContract = vscode.Uri.file(path.join(contractDir.fsPath, 'contract.sol'));
      const toContract = vscode.Uri.file(path.join(contractDir.fsPath, `${projectName}.sol`));
      if (await uriExists(fromContract)) {
        await vscode.workspace.fs.rename(fromContract, toContract, { overwrite: false });
      }
    },
  );

  await vscode.commands.executeCommand('vscode.openFolder', projectUri, false);
  vscode.window.showInformationMessage(`Created project "${projectName}".`);
}

function validateProjectName(value: string): string | null {
  const trimmed = value.trim();
  if (!trimmed) return 'Project name is required.';
  if (trimmed.length > 64) return 'Please use a shorter name (≤ 64 characters).';
  if (trimmed === '.' || trimmed === '..') return 'Invalid project name.';
  if (/[\\/]/.test(trimmed)) return 'Project name must not contain path separators (/ or \\).';
  if (trimmed.includes('..')) return 'Project name must not contain "..".';
  if (!/^[a-zA-Z0-9._ -]+$/.test(trimmed)) return 'Use letters, numbers, spaces, and . _ - only.';
  return null;
}

async function uriExists(uri: vscode.Uri): Promise<boolean> {
  try {
    await vscode.workspace.fs.stat(uri);
    return true;
  } catch {
    return false;
  }
}

async function copyDirectory(from: vscode.Uri, to: vscode.Uri): Promise<void> {
  await vscode.workspace.fs.createDirectory(to);
  const entries = await vscode.workspace.fs.readDirectory(from);
  await Promise.all(
    entries.map(async ([name, type]) => {
      const src = vscode.Uri.file(path.join(from.fsPath, name));
      const dst = vscode.Uri.file(path.join(to.fsPath, name));
      if (type === vscode.FileType.Directory) {
        await copyDirectory(src, dst);
        return;
      }
      await vscode.workspace.fs.copy(src, dst, { overwrite: false });
    }),
  );
}

function getWebViewContent() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Catalyst Templates</title>
</head>
<body>
  <h1>Hello World</h1>
  <p>
    A “Hello World” starter project. Deploys a contract with a message and renders it in a front-end.
  </p>
  <h1>Coins</h1>
  <p>A starter dapp that defines a basic token you can create and send to others.</p>
  <h1>Empty Project</h1>
  <p>An empty boilerplate containing a contract and app files to get started quickly.</p>
  <h1>Steps</h1>
  <ol>
    <li>Open the Catalyst view in the Activity Bar</li>
    <li>Select a template, then click “Create Project”</li>
    <li>Enter the project name and choose the destination folder</li>
  </ol>
</body>
</html>`;
}

class TemplatesTreeDataProvider implements vscode.TreeDataProvider<TemplateTreeItem> {
  private readonly _onDidChangeTreeData = new vscode.EventEmitter<TemplateTreeItem | undefined>();
  readonly onDidChangeTreeData = this._onDidChangeTreeData.event;

  getTreeItem(element: TemplateTreeItem): vscode.TreeItem | Thenable<vscode.TreeItem> {
    return element;
  }

  getChildren(element?: TemplateTreeItem | undefined): vscode.ProviderResult<TemplateTreeItem[]> {
    if (element) return [];
    return TEMPLATES.map((t) => new TemplateTreeItem(t.label, t.id));
  }
}

class TemplateTreeItem extends vscode.TreeItem {
  constructor(
    label: string,
    readonly templateId: TemplateId,
  ) {
    super(label, vscode.TreeItemCollapsibleState.None);
    this.contextValue = 'templateItem';
  }
}