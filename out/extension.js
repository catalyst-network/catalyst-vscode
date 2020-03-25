'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const fs = require("fs");
//F:\downloads\vscode-extension-samples-master\vscode-extension-samples-master\tree-view-sample\src\extension.ts
//import { DepNodeProvider, Dependency } from './nodeDependencies';
//F:\downloads\vscode-extension-samples-master\vscode-extension-samples-master\tree-view-sample\media\dep.png
/*export function activate(context: vscode.ExtensionContext) {

    // Samples of `window.registerTreeDataProvider`
    const nodeDependenciesProvider = new DepNodeProvider(vscode.workspace.rootPath);
    vscode.window.registerTreeDataProvider('nodeDependencies', nodeDependenciesProvider);
    vscode.commands.registerCommand('nodeDependencies.refreshEntry', () => nodeDependenciesProvider.refresh());
    vscode.commands.registerCommand('extension.openPackageOnNpm', moduleName => vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(`https://www.npmjs.com/package/${moduleName}`)));
    vscode.commands.registerCommand('nodeDependencies.addEntry', (node: Dependency) => vscode.window.showInformationMessage(`Successfully called add entry.${node.label}`));
    vscode.commands.registerCommand('nodeDependencies.editEntry', (node: Dependency) => vscode.window.showInformationMessage(`Successfully called edit entry on ${node.label}.`));
    vscode.commands.registerCommand('nodeDependencies.deleteEntry', (node: Dependency) => vscode.window.showInformationMessage(`Successfully called delete entry on ${node.label}.`));
}*/
function activate(context) {
    vscode.window.registerTreeDataProvider('templates', new TreeDataProvider());
    vscode.commands.registerCommand('nodeDependencies.addTemplate1', (node) => __awaiter(this, void 0, void 0, function* () {
        if (node.label == "Hello World") {
            const choice = yield vscode.window.showInputBox({ placeHolder: 'Enter a name for your Project' });
            if (choice == "") {
                vscode.window.showErrorMessage("Please Enter name for your project");
            }
            else {
                let projdir = "/" + choice;
                if (fs.existsSync(projdir)) {
                    fs.open(projdir + "/app/app.html", "w+", (err, fd) => { });
                    fs.open(projdir + "/app/app.css", "w+", (err, fd) => { });
                    fs.open(projdir + "/app/app.js", "w+", (err, fd) => { });
                    fs.open(projdir + "/contract/" + choice + ".sol", "w+", (err, fd) => { });
                    fs.open(projdir + "/readme.md", "w+", (err, fd) => { });
                    fs.copyFile("/Catalyst Templates/Hello World/helloworld.sol", projdir + "/contract/" + choice + ".sol", (err) => { });
                    fs.copyFile("/Catalyst Templates/Hello World/app.html", projdir + "/app/app.html", (err) => { });
                    fs.copyFile("/Catalyst Templates/Hello World/app.js", projdir + "/app/app.js", (err) => { });
                    fs.copyFile("/Catalyst Templates/Hello World/app.css", projdir + "/app/app.css", (err) => { });
                    fs.copyFile("/Catalyst Templates/Hello World/readme.md", projdir + "/readme.md", (err) => { });
                }
                else {
                    fs.mkdirSync(projdir);
                    fs.mkdirSync(projdir + "/app");
                    fs.mkdirSync(projdir + "/contract");
                    fs.open(projdir + "/app/app.html", "w+", (err, fd) => { });
                    fs.open(projdir + "/app/app.css", "w+", (err, fd) => { });
                    fs.open(projdir + "/app/app.js", "w+", (err, fd) => { });
                    fs.open(projdir + "/contract/" + choice + ".sol", "w+", (err, fd) => { });
                    fs.open(projdir + "/readme.md", "w+", (err, fd) => { });
                    fs.copyFile("/Catalyst Templates/Hello World/helloworld.sol", projdir + "/contract/" + choice + ".sol", (err) => { });
                    fs.copyFile("/Catalyst Templates/Hello World/app.html", projdir + "/app/app.html", (err) => { });
                    fs.copyFile("/Catalyst Templates/Hello World/app.js", projdir + "/app/app.js", (err) => { });
                    fs.copyFile("/Catalyst Templates/Hello World/app.css", projdir + "/app/app.css", (err) => { });
                    fs.copyFile("/Catalyst Templates/Hello World/readme.md", projdir + "/readme.md", (err) => { });
                }
                vscode.workspace.updateWorkspaceFolders(0, undefined, { uri: vscode.Uri.file(projdir) });
                vscode.window.showInformationMessage("Project has been created. Kindly navigate to Visual Studio Code Explorer");
            }
            //vscode.window.showErrorMessage(vscode.workspace.asRelativePath(vscode.Uri.file('winetemplate.code-workspace')));
            //vscode.commands.executeCommand('vscode.openFolder',vscode.Uri.file(vscode.workspace.name.toString()));
        }
        else if (node.label == "Empty Project") {
            const choice = yield vscode.window.showInputBox({ placeHolder: 'Enter a name for your Project' });
            if (choice == "") {
                vscode.window.showErrorMessage("Please Enter name for your project");
            }
            else {
                let projdir = "/" + choice;
                if (fs.existsSync(projdir)) {
                    fs.open(projdir + "/app/app.html", "w+", (err, fd) => { });
                    fs.open(projdir + "/app/app.css", "w+", (err, fd) => { });
                    fs.open(projdir + "/app/app.js", "w+", (err, fd) => { });
                    fs.open(projdir + "/contract/" + choice + ".sol", "w+", (err, fd) => { });
                    fs.open(projdir + "/readme.md", "w+", (err, fd) => { });
                    fs.open(projdir + "/contract/" + choice + ".sol", "w+", (err, fd) => { });
                    fs.copyFile("/Catalyst Templates/Storage/storage.sol", projdir + "/contract/" + choice + ".sol", (err) => { });
                    fs.copyFile("/Catalyst Templates/Storage/app.html", projdir + "/app/app.html", (err) => { });
                    fs.copyFile("/Catalyst Templates/Storage/app.js", projdir + "/app/app.js", (err) => { });
                    fs.copyFile("/Catalyst Templates/Storage/app.css", projdir + "/app/app.css", (err) => { });
                    fs.copyFile("/Catalyst Templates/Storage/readme.md", projdir + "/readme.md", (err) => { });
                }
                else {
                    fs.mkdirSync(projdir);
                    fs.mkdirSync(projdir + "/app");
                    fs.mkdirSync(projdir + "/contract");
                    fs.open(projdir + "/app/app.html", "w+", (err, fd) => { });
                    fs.open(projdir + "/app/app.css", "w+", (err, fd) => { });
                    fs.open(projdir + "/app/app.js", "w+", (err, fd) => { });
                    fs.open(projdir + "/contract/" + choice + ".sol", "w+", (err, fd) => { });
                    fs.open(projdir + "/readme.md", "w+", (err, fd) => { });
                    fs.open(projdir + "/contract/" + choice + ".sol", "w+", (err, fd) => { });
                    fs.copyFile("/Catalyst Templates/Storage/storage.sol", projdir + "/contract/" + choice + ".sol", (err) => { });
                    fs.copyFile("/Catalyst Templates/Storage/app.html", projdir + "/app/app.html", (err) => { });
                    fs.copyFile("/Catalyst Templates/Storage/app.js", projdir + "/app/app.js", (err) => { });
                    fs.copyFile("/Catalyst Templates/Storage/app.css", projdir + "/app/app.css", (err) => { });
                    fs.copyFile("/Catalyst Templates/Storage/readme.md", projdir + "/readme.md", (err) => { });
                }
                vscode.workspace.updateWorkspaceFolders(0, undefined, { uri: vscode.Uri.file(projdir) });
                vscode.window.showInformationMessage("Project has been created. Kindly navigate to Visual Studio Code Explorer");
            }
            //vscode.window.showErrorMessage(vscode.workspace.asRelativePath(vscode.Uri.file('winetemplate.code-workspace')));
            //vscode.commands.executeCommand('vscode.openFolder',vscode.Uri.file(vscode.workspace.name.toString()));
        }
        else {
            const choice = yield vscode.window.showInputBox({ placeHolder: 'Enter a name for your Project' });
            if (choice == "") {
                vscode.window.showErrorMessage("Please Enter name for your project");
            }
            else {
                let projdir = "/" + choice;
                if (fs.existsSync(projdir)) {
                    fs.open(projdir + "/app/app.html", "w+", (err, fd) => { });
                    fs.open(projdir + "/app/app.css", "w+", (err, fd) => { });
                    fs.open(projdir + "/app/app.js", "w+", (err, fd) => { });
                    fs.open(projdir + "/contract/" + choice + ".sol", "w+", (err, fd) => { });
                    fs.open(projdir + "/readme.md", "w+", (err, fd) => { });
                    fs.open(projdir + "/contract/" + choice + ".sol", "w+", (err, fd) => { });
                    fs.copyFile("/Catalyst Templates/Coins/coins.sol", projdir + "/contract/" + choice + ".sol", (err) => { });
                    fs.copyFile("/Catalyst Templates/Coins/app.html", projdir + "/app/app.html", (err) => { });
                    fs.copyFile("/Catalyst Templates/Coins/app.js", projdir + "/app/app.js", (err) => { });
                    fs.copyFile("/Catalyst Templates/Coins/app.css", projdir + "/app/app.css", (err) => { });
                    fs.copyFile("/Catalyst Templates/Coins/readme.md", projdir + "/readme.md", (err) => { });
                }
                else {
                    fs.mkdirSync(projdir);
                    fs.mkdirSync(projdir + "/app");
                    fs.mkdirSync(projdir + "/contract");
                    fs.open(projdir + "/app/app.html", "w+", (err, fd) => { });
                    fs.open(projdir + "/app/app.css", "w+", (err, fd) => { });
                    fs.open(projdir + "/app/app.js", "w+", (err, fd) => { });
                    fs.open(projdir + "/contract/" + choice + ".sol", "w+", (err, fd) => { });
                    fs.open(projdir + "/readme.md", "w+", (err, fd) => { });
                    fs.open(projdir + "/contract/" + choice + ".sol", "w+", (err, fd) => { });
                    fs.copyFile("/Catalyst Templates/Coins/coins.sol", projdir + "/contract/" + choice + ".sol", (err) => { });
                    fs.copyFile("/Catalyst Templates/Coins/app.html", projdir + "/app/app.html", (err) => { });
                    fs.copyFile("/Catalyst Templates/Coins/app.js", projdir + "/app/app.js", (err) => { });
                    fs.copyFile("/Catalyst Templates/Coins/app.css", projdir + "/app/app.css", (err) => { });
                    fs.copyFile("/Catalyst Templates/Coins/readme.md", projdir + "/readme.md", (err) => { });
                }
                vscode.workspace.updateWorkspaceFolders(0, undefined, { uri: vscode.Uri.file(projdir) });
                vscode.window.showInformationMessage("Project has been created. Kindly navigate to Visual Studio Code Explorer");
            }
        }
        //vscode.window.showInformationMessage(node.label);
        //vscode.commands.executeCommand('vscode.openFolder',vscode.Uri.file('C:/Users/Anuj Palimkar/Desktop/pharmanet'));
    }));
    vscode.commands.registerCommand('nodeDependencies.viewDetails', (node) => __awaiter(this, void 0, void 0, function* () {
        let panel = vscode.window.createWebviewPanel('nodeDependencies', 'Description of templates', vscode.ViewColumn.One, {});
        panel.webview.html = getWebViewContent();
    }));
}
exports.activate = activate;
function deactivate() {
}
exports.deactivate = deactivate;
function getWebViewContent() {
    return `<!DOCTYPE html>
  <html lang="en">
  <head>
  <title>View Details</title>
  </head>
  <body>
  <h1> Hello world</h1>
  <p>
  A Hello World style starter project. Deploys a smart contract with a message, and renders it in the front-end. You can change the message using the interact panel!
  </p>
  <br>
  <h1>Coins</h1>
  <p>
  A starter dapp that defines a basic token you can create and send to others.
  </p>
  <br>
  <h1>Empty Project</h1>
  <p>
  An empty boilerplate which can help you to get started quickly.
  </p>
  <br>
  <h1>Steps</h1>
  <ol>
  <li>Click on 'create project' next to template title</li>
  <li>Give name to your project</li>
  <li>Navigate to Explorer to view your newly created workspace</li>
  </ol>
  </body>
  </html>`;
}
class TreeDataProvider {
    constructor() {
        this.data = [new TreeItem('Hello World'), new TreeItem('Coins'), new TreeItem('Empty Project')];
        let rootfold = "/Catalyst Templates";
        if (!fs.existsSync(rootfold)) {
            fs.mkdirSync(rootfold);
        }
        let path1 = "/Catalyst Templates/Hello World";
        if (fs.existsSync(path1)) {
            fs.openSync(path1 + "/helloworld.sol", "w+");
            fs.open(path1 + "/helloworld.sol", "w+", (err, fd) => {
                let buf = Buffer.from('// Specifies that the source code is for a version\n // of Solidity greater than 0.6.11\npragma solidity ^0.6.1;\n// A contract is a collection of functions and data (its state)\n// that resides at a specific address on the Ethereum blockchain.\ncontract HelloWorld {\n  // The keyword "public" makes variables accessible from outside a contract\n// and creates a function that other contracts or SDKs can call to access the value\n string public message;\n// A special function only run during the creation of the contract\nconstructor(string memory initMessage) public {\n    // Takes a string value and stores the value in the memory data storage area,\n  // setting `message` to that value\n  message = initMessage;\n}\n// A publicly accessible function that takes a string as a parameter\n// and updates `message`\nfunction update(string memory newMessage) public {\n   message = newMessage;\n }\n}'), pos = 0, offset = 0, len = buf.length;
                fs.write(fd, buf, offset, len, pos, (err, bytes, buff) => { });
            });
            fs.openSync(path1 + "/app.html", "w+");
            fs.open(path1 + "/app.html", "w+", (err, fd) => {
                let buf = Buffer.from('<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<script type="text/javascript" src="https://unpkg.com/jquery@3.3.1/dist/jquery.js"></script>\n<script type="text/javascript" src="https://unpkg.com/web3@0.20.5/dist/web3.min.js"></script>\n<!-- The generated javascript and app.js will be substituted in below -->\n<!-- JAVASCRIPT -->\n<!-- The app.css contents will be substituted in below -->\n<!-- STYLE -->\n</head>\n<body>\n<!-- Displays message passed via JavaScript -->\n<h1 class="text message">Message:&nbsp;<span id="message"></span></h1>\n<!-- Displays blocknumber passed via JavaScript -->\n<h2 class="text blocknumber">Block number:&nbsp;<span id="blocknumber"></span></h2>\n<h2 class="text error">There was an error communicating with the contract.</h2>\n</body>\n</html>'), pos = 0, offset = 0, len = buf.length;
                fs.write(fd, buf, offset, len, pos, (err, bytes, buff) => { });
            });
            fs.openSync(path1 + "/app.js", "w+");
            fs.open(path1 + "/app.js", "w+", (err, fd) => {
                let buf = Buffer.from('// The object "Contracts" is injected here, which contains all data for all contracts, keyed on contract name:\n// Contracts["HelloWorld"] = {\n//  abi: [],\n//  address: "0x..",\n//  endpoint: "http://...."\n// } \n// Create an instance of the smart contract, passing it as a property,\n// which allows web3js to interact with it.\nfunction HelloWorld(Contract) {\nthis.web3 = null;\nthis.instance = null;\nthis.Contract = Contract;\n} \n// Initialize the `HelloWorld` object and create an instance of the web3js library,\nHelloWorld.prototype.init = function () {\n// The initialization function defines the interface for the contract using\n// the web3js contract object and then defines the address of the instance\n// of the contract for the `HelloWorld` object. \n// Create a new Web3 instance using either the Metamask provider\n// or an independent provider created as the endpoint configured for the contract.\nthis.web3 = new Web3(\n(window.web3 && window.web3.currentProvider) ||\nnew Web3.providers.HttpProvider(this.Contract.endpoint)); \n// Create the contract interface using the ABI provided in the configuration.\nvar contract_interface = this.web3.eth.contract(this.Contract.abi); \n// Create the contract instance for the specific address provided in the configuration.\nthis.instance = this.Contract.address ? contract_interface.at(this.Contract.address) :  { message: () => {} };\n}; \n// Gets the message value passed to the instance of the contract.\n// With the IDE, you pass this value from the Configure option under the\n// contract file.\nHelloWorld.prototype.getMessage = function (cb) {\nthis.instance.message(function (error, result) {\ncb(error, result);\n});\n}; \n// Gets the block number by using the web3js `getBlockNumber` function to return\n// the value of the latest block in the configured endpoint.\nHelloWorld.prototype.getBlockNumber = function (cb) {\nthis.web3.eth.getBlockNumber(function (error, result) {\ncb(error, result);\n});\n}; \n// Calls the functions `getMessage` and `getBlockNumber` defined above, then\n// sets the DOM element texts to the values they return or displays an error message\nHelloWorld.prototype.update = function () {\nvar that = this;\nthis.getMessage(function (error, result) {\nif (error) {\n$(".error").show();\nreturn;\n}\n$("#message").text(result); \nthat.getBlockNumber(function (error, result) {\nif (error) {\n$(".error").show();\nreturn;\n}\n$("#blocknumber").text(result);\nsetTimeout(function () { that.update() }, 1000);\n});\n});\n} \n// JavaScript boilerplate to create the instance of the `HelloWorld` object\n// defined above, and show the HTML elements on the page:\nHelloWorld.prototype.main = function () {\n$(".blocknumber").show();\n$(".message").show();\nthis.update();\n} \nHelloWorld.prototype.onReady = function () {\nthis.init();\nthis.main();\n}; \nif(typeof(Contracts) === "undefined") var Contracts={ HelloWorld: { abi: [] }};\nvar helloWorld = new HelloWorld(Contracts["HelloWorld"]); \n$(document).ready(function () {\nhelloWorld.onReady();\n})'), pos = 0, offset = 0, len = buf.length;
                fs.write(fd, buf, offset, len, pos, (err, bytes, buff) => { });
            });
            fs.openSync(path1 + "/app.css", "w+");
            fs.open(path1 + "/app.css", "w+", (err, fd) => {
                let buf = Buffer.from('body {\nbackground-color: #725BA4;\ncolor: #FCE8DF;\nfont-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;\ntext-align: center;\n}\n.text {\ndisplay: none;\n}\n.error {\ncolor: red;\n}'), pos = 0, offset = 0, len = buf.length;
                fs.write(fd, buf, offset, len, pos, (err, bytes, buff) => { });
            });
            fs.openSync(path1 + "/readme.md", "w+");
            fs.open(path1 + "/readme.md", "w+", (err, fd) => {
                let buf = Buffer.from('Hello World template\nThis template is a "Hello World" example that teaches you how to: \nProvide arguments to a contract constructor using the Configure contract modal.\nStore state in a contract and to update it.\nFetch your newly created contract information from the blockchain and render it to a front end.'), pos = 0, offset = 0, len = buf.length;
                fs.write(fd, buf, offset, len, pos, (err, bytes, buff) => { });
            });
        }
        else {
            fs.mkdirSync(path1);
            fs.open(path1 + "/helloworld.sol", "w+", (err, fd) => {
                let buf = Buffer.from('// Specifies that the source code is for a version\n // of Solidity greater than 0.6.11\npragma solidity ^0.6.1;\n// A contract is a collection of functions and data (its state)\n// that resides at a specific address on the Ethereum blockchain.\ncontract HelloWorld {\n  // The keyword "public" makes variables accessible from outside a contract\n// and creates a function that other contracts or SDKs can call to access the value\n string public message;\n// A special function only run during the creation of the contract\nconstructor(string memory initMessage) public {\n    // Takes a string value and stores the value in the memory data storage area,\n  // setting `message` to that value\n  message = initMessage;\n}\n// A publicly accessible function that takes a string as a parameter\n// and updates `message`\nfunction update(string memory newMessage) public {\n   message = newMessage;\n }\n}'), pos = 0, offset = 0, len = buf.length;
                fs.write(fd, buf, offset, len, pos, (err, bytes, buff) => { });
            });
            fs.openSync(path1 + "/app.html", "w+");
            fs.open(path1 + "/app.html", "w+", (err, fd) => {
                let buf = Buffer.from('<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<script type="text/javascript" src="https://unpkg.com/jquery@3.3.1/dist/jquery.js"></script>\n<script type="text/javascript" src="https://unpkg.com/web3@0.20.5/dist/web3.min.js"></script>\n<!-- The generated javascript and app.js will be substituted in below -->\n<!-- JAVASCRIPT -->\n<!-- The app.css contents will be substituted in below -->\n<!-- STYLE -->\n</head>\n<body>\n<!-- Displays message passed via JavaScript -->\n<h1 class="text message">Message:&nbsp;<span id="message"></span></h1>\n<!-- Displays blocknumber passed via JavaScript -->\n<h2 class="text blocknumber">Block number:&nbsp;<span id="blocknumber"></span></h2>\n<h2 class="text error">There was an error communicating with the contract.</h2>\n</body>\n</html>'), pos = 0, offset = 0, len = buf.length;
                fs.write(fd, buf, offset, len, pos, (err, bytes, buff) => { });
            });
            fs.openSync(path1 + "/app.js", "w+");
            fs.open(path1 + "/app.js", "w+", (err, fd) => {
                let buf = Buffer.from('// The object "Contracts" is injected here, which contains all data for all contracts, keyed on contract name:\n// Contracts["HelloWorld"] = {\n//  abi: [],\n//  address: "0x..",\n//  endpoint: "http://...."\n// } \n// Create an instance of the smart contract, passing it as a property,\n// which allows web3js to interact with it.\nfunction HelloWorld(Contract) {\nthis.web3 = null;\nthis.instance = null;\nthis.Contract = Contract;\n} \n// Initialize the `HelloWorld` object and create an instance of the web3js library,\nHelloWorld.prototype.init = function () {\n// The initialization function defines the interface for the contract using\n// the web3js contract object and then defines the address of the instance\n// of the contract for the `HelloWorld` object. \n// Create a new Web3 instance using either the Metamask provider\n// or an independent provider created as the endpoint configured for the contract.\nthis.web3 = new Web3(\n(window.web3 && window.web3.currentProvider) ||\nnew Web3.providers.HttpProvider(this.Contract.endpoint)); \n// Create the contract interface using the ABI provided in the configuration.\nvar contract_interface = this.web3.eth.contract(this.Contract.abi); \n// Create the contract instance for the specific address provided in the configuration.\nthis.instance = this.Contract.address ? contract_interface.at(this.Contract.address) :  { message: () => {} };\n}; \n// Gets the message value passed to the instance of the contract.\n// With the IDE, you pass this value from the Configure option under the\n// contract file.\nHelloWorld.prototype.getMessage = function (cb) {\nthis.instance.message(function (error, result) {\ncb(error, result);\n});\n}; \n// Gets the block number by using the web3js `getBlockNumber` function to return\n// the value of the latest block in the configured endpoint.\nHelloWorld.prototype.getBlockNumber = function (cb) {\nthis.web3.eth.getBlockNumber(function (error, result) {\ncb(error, result);\n});\n}; \n// Calls the functions `getMessage` and `getBlockNumber` defined above, then\n// sets the DOM element texts to the values they return or displays an error message\nHelloWorld.prototype.update = function () {\nvar that = this;\nthis.getMessage(function (error, result) {\nif (error) {\n$(".error").show();\nreturn;\n}\n$("#message").text(result); \nthat.getBlockNumber(function (error, result) {\nif (error) {\n$(".error").show();\nreturn;\n}\n$("#blocknumber").text(result);\nsetTimeout(function () { that.update() }, 1000);\n});\n});\n} \n// JavaScript boilerplate to create the instance of the `HelloWorld` object\n// defined above, and show the HTML elements on the page:\nHelloWorld.prototype.main = function () {\n$(".blocknumber").show();\n$(".message").show();\nthis.update();\n} \nHelloWorld.prototype.onReady = function () {\nthis.init();\nthis.main();\n}; \nif(typeof(Contracts) === "undefined") var Contracts={ HelloWorld: { abi: [] }};\nvar helloWorld = new HelloWorld(Contracts["HelloWorld"]); \n$(document).ready(function () {\nhelloWorld.onReady();\n})'), pos = 0, offset = 0, len = buf.length;
                fs.write(fd, buf, offset, len, pos, (err, bytes, buff) => { });
            });
            fs.openSync(path1 + "/app.css", "w+");
            fs.open(path1 + "/app.css", "w+", (err, fd) => {
                let buf = Buffer.from('body {\nbackground-color: #725BA4;\ncolor: #FCE8DF;\nfont-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;\ntext-align: center;\n}\n.text {\ndisplay: none;\n}\n.error {\ncolor: red;\n}'), pos = 0, offset = 0, len = buf.length;
                fs.write(fd, buf, offset, len, pos, (err, bytes, buff) => { });
            });
            fs.openSync(path1 + "/readme.md", "w+");
            fs.open(path1 + "/readme.md", "w+", (err, fd) => {
                let buf = Buffer.from('Hello World template\nThis template is a "Hello World" example that teaches you how to: \nProvide arguments to a contract constructor using the Configure contract modal.\nStore state in a contract and to update it.\nFetch your newly created contract information from the blockchain and render it to a front end.'), pos = 0, offset = 0, len = buf.length;
                fs.write(fd, buf, offset, len, pos, (err, bytes, buff) => { });
            });
        }
        let path2 = "/Catalyst Templates/Coins";
        if (fs.existsSync(path2)) {
            fs.openSync(path2 + "/coins.sol", "w+");
            fs.open(path2 + "/coins.sol", "w+", (err, fd) => {
                let buf = Buffer.from('// Specifies that the source code is for a version\n // of Solidity greater than 0.5.0\n pragma solidity >=0.5.0 <0.7.0;\n // A contract is a collection of functions and data (its state)\n // that resides at a specific address on the Ethereum blockchain.\n contract Coin {\n // The keyword "public" makes variables accessible from outside a contract\n // and creates a function that other contracts or SDKs can call to access the value\n // An address stores addresses of contracts or external (user) accounts\n address public minter;\n // A mapping lets you create complex custom data types.\n // This mapping assigns an unsigned integer to an address\n // and is also a public variable.\n mapping (address => uint) public balances;\n // Events allow Ethereum clients to react to specific\n // contract changes you declare.\n // This defines the event and it is sent later\n event Sent(address from, address to, uint amount);\n // A special function only run during the creation of the contract\n constructor() public {\n // Uses the special msg global variable to store the\n // address of the contract creator\n minter = msg.sender;\n }\n // Sends an amount of newly created coins to an address\n function mint(address receiver, uint amount) public {\n // require statements define conditions that must pass\n // before state is changed.\n // If it fails (equals false), an exception is triggered\n // and reverts all modifications to state from the current call\n // Can only be called by the contract creator\n require(msg.sender == minter);\n // Ensures a maximum amount of tokens\n require(amount < 1e60);\n balances[receiver] += amount;\n }\n // Sends an amount of existing coins\n // from any caller to an address\n function send(address receiver, uint amount) public {\n // The sender must have enough coins to send\n require(amount <= balances[msg.sender], "Insufficient balance.");\n // Adjust balances\n balances[msg.sender] -= amount;\n balances[receiver] += amount;\n // Emit event defined earlier\n emit Sent(msg.sender, receiver, amount);\n }\n }'), pos = 0, offset = 0, len = buf.length;
                fs.write(fd, buf, offset, len, pos, (err, bytes, buff) => { });
            });
            fs.openSync(path2 + "/app.html", "w+");
            fs.open(path2 + "/app.html", "w+", (err, fd) => {
                let buf = Buffer.from('<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<script type="text/javascript" src="https://unpkg.com/jquery@3.3.1/dist/jquery.js"></script>\n<script type="text/javascript" src="https://unpkg.com/web3@0.20.5/dist/web3.min.js"></script>\n<!-- The generated javascript and app.js will be substituted in below -->\n<!-- JAVASCRIPT -->\n<!-- The app.css contents will be substituted in below -->\n<!-- STYLE -->\n</head>\n<body>\n<!-- Form fields for creating new coins -->\n<div id="create" class="tabcontent">\n<h2>Create new coins</h2>\n<div class="input-group">\n<h3>Address</h3>\n<input type="text" id="create-address" placeholder="Enter address..." />\n</div>\n<div class="input-group">\n<h3>Amount</h3>\n<input type="number" id="create-amount" placeholder="Enter amount..." />\n</div>\n<div class="input-group">\n<button class="btn" id="button-create">Send</button>\n</div>\n</div>\n<!-- Form fields for checking wallet balances -->\n<div id="balances" class="tabcontent">\n<h2>Check balance of wallet</h2>\n<div class="input-group">\n<h3>Address</h3>\n<input type="text" id="balance-address" placeholder="Enter address..." />\n</div>\n<div class="input-group">\n<button class="btn" id="button-check">Check balance</button>\n</div>\n</div>\n<h1 class="text message">Balance:&nbsp;<span id="message"></span></h1>\n</body>\n</html>'), pos = 0, offset = 0, len = buf.length;
                fs.write(fd, buf, offset, len, pos, (err, bytes, buff) => { });
            });
            fs.openSync(path2 + "/app.js", "w+");
            fs.open(path2 + "/app.js", "w+", (err, fd) => {
                let buf = Buffer.from('// The object Contracts will be injected here, which contains all data for all contracts, keyed on contract name:\n// Contracts[HelloWorld] = {\n//  abi: [],\n//  address: "0x..",\n//  endpoint: "http://...."\n// } \n// Create an instance of the smart contract, passing it as a property,\n// which allows web3js to interact with it.\nfunction Coin(Contract) {\nthis.web3 = null;\nthis.instance = null;\nthis.Contract = Contract;\n} \n// Initialize the `Coin` object and create an instance of the web3js library,\nCoin.prototype.init = function() {\n// The initialization function defines the interface for the contract using\n// the web3js contract object and then defines the address of the instance\n// of the contract for the `Coin` object. \n// Create a new Web3 instance using either the Metamask provider\n// or an independent provider created as the endpoint configured for the contract.\nthis.web3 = new Web3(\n(window.web3 && window.web3.currentProvider) ||\nnew Web3.providers.HttpProvider(this.Contract.endpoint)); \n// Create the contract interface using the ABI provided in the configuration.\nvar contract_interface = this.web3.eth.contract(this.Contract.abi); \n// Create the contract instance for the specific address provided in the configuration.\nthis.instance = contract_interface.at(this.Contract.address);\n};  \n// Function triggered by "Check Balance" button\n// to display account balance\nCoin.prototype.showAddressBalance = function(hash, cb) {\nvar that = this; \n// Get input values, the address to check balance of\nvar address = $("#balance-address").val(); \n// Validate address using utility function\nif(!isValidAddress(address)) {\nconsole.log("Invalid address");\nreturn;\n} \n// Check the balance from the address passed and output the value\nthis.getBalance(address, function(error, balance) {\nif(error) {\nconsole.log(error)\n}\nelse {\nconsole.log(balance.toNumber());\n$("#message").text(balance.toNumber());\n}\n})\n} \n// Get balance of Tokens found by address from contract\nCoin.prototype.getBalance = function(address, cb) {\nthis.instance.balances(address, function(error, result) {\ncb(error, result);\n})\n} \n// Send Tokens to another address when the "send" button is clicked\nCoin.prototype.createTokens = function() {\nvar that = this; \n// Get input values for address and amount\nvar address = $("#create-address").val();\nvar amount = $("#create-amount").val();\nconsole.log(amount); \n// Validate address using utility function\nif(!isValidAddress(address)) {\nconsole.log("Invalid address");\nreturn;\n} \n// Validate amount using utility function\nif(!isValidAmount(amount)) {\nconsole.log("Invalid amount");\nreturn;\n} \n// Transfer amount to other address\n// Use the public mint function from the smart contract\nthis.instance.mint(address, amount, { from: window.web3.eth.accounts[0], gas: 100000, gasPrice: 100000, gasLimit: 100000 },\n// If theres an error, log it\nfunction(error, txHash) {\nif(error) {\nconsole.log(error);\n}\n// If success then wait for confirmation of transaction\n// with utility function and clear form values while waiting\nelse {\nthat.waitForReceipt(txHash, function(receipt) {\nif(receipt.status) {\n$("#create-address").val("");\n$("#create-amount").val("");\n}\nelse {\nconsole.log("error");\n}\n});\n}\n}\n)\n} \n// Waits for receipt of transaction\nCoin.prototype.waitForReceipt = function(hash, cb) {\nvar that = this; \n// Checks for transaction receipt using web3 library method\nthis.web3.eth.getTransactionReceipt(hash, function(err, receipt) {\nif (err) {\nerror(err);\n}\nif (receipt !== null) {\n// Transaction went through\nif (cb) {\ncb(receipt);\n}\n} else {\n// Try again in 2 second\nwindow.setTimeout(function() {\nthat.waitForReceipt(hash, cb);\n}, 2000);\n}\n});\n} \n// Check if it has the basic requirements of an address\nfunction isValidAddress(address) {\nreturn /^(0x)?[0-9a-f]{40}$/i.test(address);\n} \n// Basic validation of amount. Bigger than 0 and typeof number\nfunction isValidAmount(amount) {\nreturn amount > 0 && typeof Number(amount) == number;\n} \n// Bind functions to the buttons defined in app.html\nCoin.prototype.bindButtons = function() {\nvar that = this; \n$(document).on("click", "#button-create", function() {\nthat.createTokens();\n}); \n$(document).on("click", "#button-check", function() {\nthat.showAddressBalance();\n});\n} \n// Create the instance of the `Coin` object\nCoin.prototype.onReady = function() {\nthis.bindButtons();\nthis.init();\n}; \nif(typeof(Contracts) === "undefined") var Contracts={ Coin: { abi: [] }};\nvar coin = new Coin(Contracts[Coin]); \n$(document).ready(function() {\ncoin.onReady();\n});'), pos = 0, offset = 0, len = buf.length;
                fs.write(fd, buf, offset, len, pos, (err, bytes, buff) => { });
            });
            fs.openSync(path2 + "/app.css", "w+");
            fs.open(path2 + "/app.css", "w+", (err, fd) => {
                let buf = Buffer.from('body {\nbackground-color: #725BA4;\ncolor: #FCE8DF;\nfont-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;\ntext-align: center;\n}'), pos = 0, offset = 0, len = buf.length;
                fs.write(fd, buf, offset, len, pos, (err, bytes, buff) => { });
            });
            fs.openSync(path2 + "/readme.md", "w+");
            fs.open(path2 + "/readme.md", "w+", (err, fd) => {
                let buf = Buffer.from('Creating a subcurrency\nThis project is an example application that teaches you how to: \nWrite a smart contract and web app that conforms to a token standard.\nDifferent variable types in Solidity.\nCreate, update and get variables in a smart contract.\nEmit events that clients can subscribe to.\nProvide arguments to a contract constructor using the Configure contract modal.'), pos = 0, offset = 0, len = buf.length;
                fs.write(fd, buf, offset, len, pos, (err, bytes, buff) => { });
            });
        }
        else {
            fs.mkdirSync(path2);
            fs.open(path2 + "/coins.sol", "w+", (err, fd) => {
                let buf = Buffer.from('// Specifies that the source code is for a version\n // of Solidity greater than 0.5.0\n pragma solidity >=0.5.0 <0.7.0;\n // A contract is a collection of functions and data (its state)\n // that resides at a specific address on the Ethereum blockchain.\n contract Coin {\n // The keyword "public" makes variables accessible from outside a contract\n // and creates a function that other contracts or SDKs can call to access the value\n // An address stores addresses of contracts or external (user) accounts\n address public minter;\n // A mapping lets you create complex custom data types.\n // This mapping assigns an unsigned integer to an address\n // and is also a public variable.\n mapping (address => uint) public balances;\n // Events allow Ethereum clients to react to specific\n // contract changes you declare.\n // This defines the event and it is sent later\n event Sent(address from, address to, uint amount);\n // A special function only run during the creation of the contract\n constructor() public {\n // Uses the special msg global variable to store the\n // address of the contract creator\n minter = msg.sender;\n }\n // Sends an amount of newly created coins to an address\n function mint(address receiver, uint amount) public {\n // require statements define conditions that must pass\n // before state is changed.\n // If it fails (equals false), an exception is triggered\n // and reverts all modifications to state from the current call\n // Can only be called by the contract creator\n require(msg.sender == minter);\n // Ensures a maximum amount of tokens\n require(amount < 1e60);\n balances[receiver] += amount;\n }\n // Sends an amount of existing coins\n // from any caller to an address\n function send(address receiver, uint amount) public {\n // The sender must have enough coins to send\n require(amount <= balances[msg.sender], "Insufficient balance.");\n // Adjust balances\n balances[msg.sender] -= amount;\n balances[receiver] += amount;\n // Emit event defined earlier\n emit Sent(msg.sender, receiver, amount);\n }\n }'), pos = 0, offset = 0, len = buf.length;
                fs.write(fd, buf, offset, len, pos, (err, bytes, buff) => { });
            });
            fs.openSync(path2 + "/app.html", "w+");
            fs.open(path2 + "/app.html", "w+", (err, fd) => {
                let buf = Buffer.from('<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<script type="text/javascript" src="https://unpkg.com/jquery@3.3.1/dist/jquery.js"></script>\n<script type="text/javascript" src="https://unpkg.com/web3@0.20.5/dist/web3.min.js"></script>\n<!-- The generated javascript and app.js will be substituted in below -->\n<!-- JAVASCRIPT -->\n<!-- The app.css contents will be substituted in below -->\n<!-- STYLE -->\n</head>\n<body>\n<!-- Form fields for creating new coins -->\n<div id="create" class="tabcontent">\n<h2>Create new coins</h2>\n<div class="input-group">\n<h3>Address</h3>\n<input type="text" id="create-address" placeholder="Enter address..." />\n</div>\n<div class="input-group">\n<h3>Amount</h3>\n<input type="number" id="create-amount" placeholder="Enter amount..." />\n</div>\n<div class="input-group">\n<button class="btn" id="button-create">Send</button>\n</div>\n</div>\n<!-- Form fields for checking wallet balances -->\n<div id="balances" class="tabcontent">\n<h2>Check balance of wallet</h2>\n<div class="input-group">\n<h3>Address</h3>\n<input type="text" id="balance-address" placeholder="Enter address..." />\n</div>\n<div class="input-group">\n<button class="btn" id="button-check">Check balance</button>\n</div>\n</div>\n<h1 class="text message">Balance:&nbsp;<span id="message"></span></h1>\n</body>\n</html>'), pos = 0, offset = 0, len = buf.length;
                fs.write(fd, buf, offset, len, pos, (err, bytes, buff) => { });
            });
            fs.openSync(path2 + "/app.js", "w+");
            fs.open(path2 + "/app.js", "w+", (err, fd) => {
                let buf = Buffer.from('// The object Contracts will be injected here, which contains all data for all contracts, keyed on contract name:\n// Contracts[HelloWorld] = {\n//  abi: [],\n//  address: "0x..",\n//  endpoint: "http://...."\n// } \n// Create an instance of the smart contract, passing it as a property,\n// which allows web3js to interact with it.\nfunction Coin(Contract) {\nthis.web3 = null;\nthis.instance = null;\nthis.Contract = Contract;\n} \n// Initialize the `Coin` object and create an instance of the web3js library,\nCoin.prototype.init = function() {\n// The initialization function defines the interface for the contract using\n// the web3js contract object and then defines the address of the instance\n// of the contract for the `Coin` object. \n// Create a new Web3 instance using either the Metamask provider\n// or an independent provider created as the endpoint configured for the contract.\nthis.web3 = new Web3(\n(window.web3 && window.web3.currentProvider) ||\nnew Web3.providers.HttpProvider(this.Contract.endpoint)); \n// Create the contract interface using the ABI provided in the configuration.\nvar contract_interface = this.web3.eth.contract(this.Contract.abi); \n// Create the contract instance for the specific address provided in the configuration.\nthis.instance = contract_interface.at(this.Contract.address);\n};  \n// Function triggered by "Check Balance" button\n// to display account balance\nCoin.prototype.showAddressBalance = function(hash, cb) {\nvar that = this; \n// Get input values, the address to check balance of\nvar address = $("#balance-address").val(); \n// Validate address using utility function\nif(!isValidAddress(address)) {\nconsole.log("Invalid address");\nreturn;\n} \n// Check the balance from the address passed and output the value\nthis.getBalance(address, function(error, balance) {\nif(error) {\nconsole.log(error)\n}\nelse {\nconsole.log(balance.toNumber());\n$("#message").text(balance.toNumber());\n}\n})\n} \n// Get balance of Tokens found by address from contract\nCoin.prototype.getBalance = function(address, cb) {\nthis.instance.balances(address, function(error, result) {\ncb(error, result);\n})\n} \n// Send Tokens to another address when the "send" button is clicked\nCoin.prototype.createTokens = function() {\nvar that = this; \n// Get input values for address and amount\nvar address = $("#create-address").val();\nvar amount = $("#create-amount").val();\nconsole.log(amount); \n// Validate address using utility function\nif(!isValidAddress(address)) {\nconsole.log("Invalid address");\nreturn;\n} \n// Validate amount using utility function\nif(!isValidAmount(amount)) {\nconsole.log("Invalid amount");\nreturn;\n} \n// Transfer amount to other address\n// Use the public mint function from the smart contract\nthis.instance.mint(address, amount, { from: window.web3.eth.accounts[0], gas: 100000, gasPrice: 100000, gasLimit: 100000 },\n// If theres an error, log it\nfunction(error, txHash) {\nif(error) {\nconsole.log(error);\n}\n// If success then wait for confirmation of transaction\n// with utility function and clear form values while waiting\nelse {\nthat.waitForReceipt(txHash, function(receipt) {\nif(receipt.status) {\n$("#create-address").val("");\n$("#create-amount").val("");\n}\nelse {\nconsole.log("error");\n}\n});\n}\n}\n)\n} \n// Waits for receipt of transaction\nCoin.prototype.waitForReceipt = function(hash, cb) {\nvar that = this; \n// Checks for transaction receipt using web3 library method\nthis.web3.eth.getTransactionReceipt(hash, function(err, receipt) {\nif (err) {\nerror(err);\n}\nif (receipt !== null) {\n// Transaction went through\nif (cb) {\ncb(receipt);\n}\n} else {\n// Try again in 2 second\nwindow.setTimeout(function() {\nthat.waitForReceipt(hash, cb);\n}, 2000);\n}\n});\n} \n// Check if it has the basic requirements of an address\nfunction isValidAddress(address) {\nreturn /^(0x)?[0-9a-f]{40}$/i.test(address);\n} \n// Basic validation of amount. Bigger than 0 and typeof number\nfunction isValidAmount(amount) {\nreturn amount > 0 && typeof Number(amount) == number;\n} \n// Bind functions to the buttons defined in app.html\nCoin.prototype.bindButtons = function() {\nvar that = this; \n$(document).on("click", "#button-create", function() {\nthat.createTokens();\n}); \n$(document).on("click", "#button-check", function() {\nthat.showAddressBalance();\n});\n} \n// Create the instance of the `Coin` object\nCoin.prototype.onReady = function() {\nthis.bindButtons();\nthis.init();\n}; \nif(typeof(Contracts) === "undefined") var Contracts={ Coin: { abi: [] }};\nvar coin = new Coin(Contracts[Coin]); \n$(document).ready(function() {\ncoin.onReady();\n});'), pos = 0, offset = 0, len = buf.length;
                fs.write(fd, buf, offset, len, pos, (err, bytes, buff) => { });
            });
            fs.openSync(path2 + "/app.css", "w+");
            fs.open(path2 + "/app.css", "w+", (err, fd) => {
                let buf = Buffer.from('body {\nbackground-color: #725BA4;\ncolor: #FCE8DF;\nfont-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;\ntext-align: center;\n}'), pos = 0, offset = 0, len = buf.length;
                fs.write(fd, buf, offset, len, pos, (err, bytes, buff) => { });
            });
            fs.openSync(path2 + "/readme.md", "w+");
            fs.open(path2 + "/readme.md", "w+", (err, fd) => {
                let buf = Buffer.from('Creating a subcurrency\nThis project is an example application that teaches you how to: \nWrite a smart contract and web app that conforms to a token standard.\nDifferent variable types in Solidity.\nCreate, update and get variables in a smart contract.\nEmit events that clients can subscribe to.\nProvide arguments to a contract constructor using the Configure contract modal.'), pos = 0, offset = 0, len = buf.length;
                fs.write(fd, buf, offset, len, pos, (err, bytes, buff) => { });
            });
        }
        let path3 = "/Catalyst Templates/Storage";
        if (fs.existsSync(path3)) {
            fs.openSync(path3 + "/storage.sol", "w+");
            fs.open(path3 + "/storage.sol", "w+", (err, fd) => {
                let buf = Buffer.from('pragma solidity ^0.5.10;\ncontract MyContract {\nconstructor() public {\n}\n}'), pos = 0, offset = 0, len = buf.length;
                fs.write(fd, buf, offset, len, pos, (err, bytes, buff) => { });
            });
            fs.openSync(path3 + "/app.html", "w+");
            fs.open(path3 + "/app.html", "w+", (err, fd) => {
                let buf = Buffer.from('<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<script type="text/javascript" src="https://unpkg.com/jquery@3.3.1/dist/jquery.js"></script>\n<script type="text/javascript" src="https://unpkg.com/web3@0.20.5/dist/web3.min.js"></script>\n<!-- The generated javascript and app.js will be substituted in below -->\n<!-- JAVASCRIPT --> \n<!-- The app.css contents will be substituted in below -->\n<!-- STYLE -->\n</head>\n<body>\n<h1><span id="message"></span></h1>\n</body>\n</html>'), pos = 0, offset = 0, len = buf.length;
                fs.write(fd, buf, offset, len, pos, (err, bytes, buff) => { });
            });
            fs.openSync(path3 + "/app.js", "w+");
            fs.open(path3 + "/app.js", "w+", (err, fd) => {
                let buf = Buffer.from('// The object "Contracts" will be injected here, which contains all data for all contracts, keyed on contract name:\n// Contracts["MyContract"] = {\n//  abi: [],\n//  address: "0x..",\n//  endpoint: "http://...."\n// } \nfunction Empty(Contract) {\nthis.web3 = null;\nthis.instance = null;\nthis.Contract = Contract;\n} \nEmpty.prototype.onReady = function() {\nthis.init(function () {\n$("#message").append("DApp loaded successfully.");\n});\n} \nEmpty.prototype.init = function(cb) {\n// We create a new Web3 instance using either the Metamask provider\n// or an independent provider created towards the endpoint configured for the contract.\nthis.web3 = new Web3(\n(window.web3 && window.web3.currentProvider) ||\nnew Web3.providers.HttpProvider(this.Contract.endpoint)); \n// Create the contract interface using the ABI provided in the configuration.\nvar contract_interface = this.web3.eth.contract(this.Contract.abi); \n// Create the contract instance for the specific address provided in the configuration.\nthis.instance = contract_interface.at(this.Contract.address); \ncb();\n} \nif(typeof(Contracts) === "undefined") var Contracts={ MyContract: { abi: [] }};\nvar empty = new Empty(Contracts["MyContract"]); \n$(document).ready(function() {\nempty.onReady();\n})'), pos = 0, offset = 0, len = buf.length;
                fs.write(fd, buf, offset, len, pos, (err, bytes, buff) => { });
            });
            fs.openSync(path3 + "/app.css", "w+");
            fs.open(path3 + "/app.css", "w+", (err, fd) => {
                let buf = Buffer.from('body {\nbackground-color: #725BA4;\ncolor: #FCE8DF;\nfont-family: Calibri, sans-serif;\ntext-align: center;\n}'), pos = 0, offset = 0, len = buf.length;
                fs.write(fd, buf, offset, len, pos, (err, bytes, buff) => { });
            });
            fs.openSync(path3 + "/readme.md", "w+");
            fs.open(path3 + "/readme.md", "w+", (err, fd) => {
                let buf = Buffer.from('Empty dapp project\nThis is a bare bones dapp project containing a smart contract and boilerplate app files to get started, or to create a template to use with Studio. \nThe smart contract\nFind the smart contract file in contracts/MyContract.sol'), pos = 0, offset = 0, len = buf.length;
                fs.write(fd, buf, offset, len, pos, (err, bytes, buff) => { });
            });
        }
        else {
            fs.mkdirSync(path3);
            fs.open(path3 + "/storage.sol", "w+", (err, fd) => {
                let buf = Buffer.from('pragma solidity ^0.5.10;\ncontract MyContract {\nconstructor() public {\n}\n}'), pos = 0, offset = 0, len = buf.length;
                fs.write(fd, buf, offset, len, pos, (err, bytes, buff) => { });
            });
            fs.open(path3 + "/app.html", "w+", (err, fd) => {
                let buf = Buffer.from('<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<script type="text/javascript" src="https://unpkg.com/jquery@3.3.1/dist/jquery.js"></script>\n<script type="text/javascript" src="https://unpkg.com/web3@0.20.5/dist/web3.min.js"></script>\n<!-- The generated javascript and app.js will be substituted in below -->\n<!-- JAVASCRIPT --> \n<!-- The app.css contents will be substituted in below -->\n<!-- STYLE -->\n</head>\n<body>\n<h1><span id="message"></span></h1>\n</body>\n</html>'), pos = 0, offset = 0, len = buf.length;
                fs.write(fd, buf, offset, len, pos, (err, bytes, buff) => { });
            });
            fs.openSync(path3 + "/app.js", "w+");
            fs.open(path3 + "/app.js", "w+", (err, fd) => {
                let buf = Buffer.from('// The object "Contracts" will be injected here, which contains all data for all contracts, keyed on contract name:\n// Contracts["MyContract"] = {\n//  abi: [],\n//  address: "0x..",\n//  endpoint: "http://...."\n// } \nfunction Empty(Contract) {\nthis.web3 = null;\nthis.instance = null;\nthis.Contract = Contract;\n} \nEmpty.prototype.onReady = function() {\nthis.init(function () {\n$("#message").append("DApp loaded successfully.");\n});\n} \nEmpty.prototype.init = function(cb) {\n// We create a new Web3 instance using either the Metamask provider\n// or an independent provider created towards the endpoint configured for the contract.\nthis.web3 = new Web3(\n(window.web3 && window.web3.currentProvider) ||\nnew Web3.providers.HttpProvider(this.Contract.endpoint)); \n// Create the contract interface using the ABI provided in the configuration.\nvar contract_interface = this.web3.eth.contract(this.Contract.abi); \n// Create the contract instance for the specific address provided in the configuration.\nthis.instance = contract_interface.at(this.Contract.address); \ncb();\n} \nif(typeof(Contracts) === "undefined") var Contracts={ MyContract: { abi: [] }};\nvar empty = new Empty(Contracts["MyContract"]); \n$(document).ready(function() {\nempty.onReady();\n})'), pos = 0, offset = 0, len = buf.length;
                fs.write(fd, buf, offset, len, pos, (err, bytes, buff) => { });
            });
            fs.openSync(path3 + "/app.css", "w+");
            fs.open(path3 + "/app.css", "w+", (err, fd) => {
                let buf = Buffer.from('body {\nbackground-color: #725BA4;\ncolor: #FCE8DF;\nfont-family: Calibri, sans-serif;\ntext-align: center;\n}'), pos = 0, offset = 0, len = buf.length;
                fs.write(fd, buf, offset, len, pos, (err, bytes, buff) => { });
            });
            fs.openSync(path3 + "/readme.md", "w+");
            fs.open(path3 + "/readme.md", "w+", (err, fd) => {
                let buf = Buffer.from('Empty dapp project\nThis is a bare bones dapp project containing a smart contract and boilerplate app files to get started, or to create a template to use with Studio. \nThe smart contract\nFind the smart contract file in contracts/MyContract.sol'), pos = 0, offset = 0, len = buf.length;
                fs.write(fd, buf, offset, len, pos, (err, bytes, buff) => { });
            });
        }
    }
    getTreeItem(element) {
        return element;
    }
    getChildren(element) {
        if (element === undefined) {
            return this.data;
        }
        return element.children;
    }
}
class TreeItem extends vscode.TreeItem {
    constructor(label, children) {
        super(label, children === undefined ? vscode.TreeItemCollapsibleState.None :
            vscode.TreeItemCollapsibleState.Expanded);
        this.children = children;
    }
}
//# sourceMappingURL=extension.js.map