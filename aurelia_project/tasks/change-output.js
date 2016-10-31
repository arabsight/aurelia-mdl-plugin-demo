'use strict';

const fs = require('fs');
const rimraf = require('rimraf');
import gulp from 'gulp';
import { CLIOptions } from 'aurelia-cli';
import project from '../aurelia.json';

const output = project.platform.output;
const dir = CLIOptions.hasFlag('dir')
    ? CLIOptions.getFlagValue('dir')
    : 'bundles';

export default function changeOutput(done) {
    changeBundlesOutput()
        .then(saveConfig)
        .then(updateIndexFile)
        .then(clean)
        .then(done)
        .catch(error => console.log(error));
}

function changeBundlesOutput() {
    return new Promise((resolve, reject) => {
        project.platform.output = dir;
        project.build.targets.forEach(target => target.output = dir);
        resolve();
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

function updateIndexFile() {
    return new Promise((resolve, reject) => {
        let index = project.platform.index;

        fs.readFile(index, 'utf8', (err, data) => {
            if (err) reject(err);

            let mainBundleName = project.build.loader.configTarget;
            let r = new RegExp(`src="(\\w+)\/${mainBundleName}"`);
            data = data.replace(r, (match, $1) => match.replace($1, dir));

            fs.writeFile(index, data, err => {
                if (err) reject(err);
                resolve();
            });
        });
    });
}

function clean() {
    if (!CLIOptions.hasFlag('clean')) return;

    return new Promise((resolve, reject) => {
        rimraf(output, err => {
            if (err) console.log(err);
            resolve();
        });
    });
}
