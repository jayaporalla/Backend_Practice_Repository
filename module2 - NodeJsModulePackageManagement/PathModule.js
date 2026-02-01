import path from 'path';

// absolute path of directory only in commonJs
// console.log(__dirname);
// absolute path of file only in commonJS
// console.log(__filename);

console.log(path.join("Jayasri", "Images"));

console.log(path.resolve("PathModule.js"));

const filePath = "c:/Program Files/GFG Pratice Folder/Backend_Practice_Repository/module2 - NodeJsModulePackageManagement";
console.log(path.dirname(filePath));

console.log(path.resolve("folder1", "folder2", "folder3"));

console.log(path.resolve("/folder1", "folder2", "folder3"));

console.log(path.resolve("folder1", "//folder2", "folder3"));

console.log(path.resolve("folder1", "folder2", "//folder3"));

console.log(path.parse("c:/Program Files/GFG Pratice Folder/Backend_Practice_Repository/module2 - NodeJsModulePackageManagement/PathModule.js"));

console.log(path.format({
  root: 'c:/',
  dir: 'c:/Program Files/GFG Pratice Folder/Backend_Practice_Repository/module2 - NodeJsModulePackageManagement',
  base: 'PathModule.js',
  ext: '.js',
  name: 'PathModule'
}));