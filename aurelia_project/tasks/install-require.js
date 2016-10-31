const fs = require('fs');
const npm = require('npm');
const rimraf = require('rimraf');
import gulp from 'gulp';
import project from '../aurelia.json';

const output = project.platform.output;

export default function installRequire(done) {
    let packages = ['requirejs', 'github:requirejs/text'];

    install(packages)
        .then(getMainBundle)
        .then(setDependencies)
        .then(saveConfig)
        .then(done)
        .catch(error => console.log(error));
}

function install(packages) {
    return new Promise((resolve, reject) => {
        npm.load({ 'save': true }, err => {
            if (err) reject(err);
            npm.commands.install(packages, (err, data) => {
                if (err) reject(err);
                resolve(data);
            });
        });
    });
}

function getMainBundle() {
    let mainBundleName = project.build.loader.configTarget;
    let bundleIndex = project.build.bundles.findIndex(b => b.name === mainBundleName);
    if (bundleIndex === -1) {
        throw Error('main bundle not found');
    }
    return project.build.bundles[bundleIndex];
}

function setDependencies(bundle) {
    let requireIndex = bundle.prepend.indexOf(`${output}/require.js`);
    if (requireIndex > -1) {
        bundle.prepend[requireIndex] = 'node_modules/requirejs/require.js';
    }

    let textIndex = bundle.dependencies.findIndex(d => d.name === 'text');
    if (textIndex > -1) {
        bundle.dependencies[textIndex].path = '../node_modules/text/text';
    }

    return new Promise((resolve, reject) => {
        rimraf(output, err => {
            if (err) console.log(err);
            resolve();
        });
    });
}

function saveConfig() {
    return new Promise((resolve, reject) => {
        fs.writeFile('aurelia_project/aurelia.json', JSON.stringify(project, null, 4), err => {
            if (err) reject(err);
            resolve();
        });
    });
}
