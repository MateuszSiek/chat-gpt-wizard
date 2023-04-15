/*
Major version:
This version should be bumped when you introduce breaking changes to your extension,
such as significant updates in the functionality or the removal of features.
Bumping the major version signals to users that they might need to update their configurations
or make changes to their setup when upgrading to this version.
Incrementing the major version resets the minor and patch versions to zero.

Minor version:
Bump the minor version when you add new features or functionality that don't break backward compatibility.
These updates should be enhancements that don't require users to change their configurations or usage significantly.
Incrementing the minor version resets the patch version to zero.

Patch version:
Increment the patch version when you make bug fixes, security patches,
or minor improvements that maintain backward compatibility.
Patch updates should not introduce new features or change the existing functionality in a way that would
require users to adjust their configurations or usage.
 */

import fs from 'fs-extra';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const packageJsonPath = path.join(__dirname, 'package.json');
const packageJson = await fs.readJson(packageJsonPath);

const [major, minor, patch] = packageJson.version.split('.').map(Number);

const bumpType = process.argv[2];

if (!['major', 'minor', 'patch'].includes(bumpType)) {
    console.error('Invalid bump type. Must be "major", "minor", or "patch".');
    process.exit(1);
}

const newVersion = {
    major: major + (bumpType === 'major' ? 1 : 0),
    minor: minor + (bumpType === 'minor' ? 1 : 0),
    patch: patch + (bumpType === 'patch' ? 1 : 0),
};

if (bumpType !== 'patch') {
    newVersion.patch = 0;
}

if (bumpType === 'major') {
    newVersion.minor = 0;
}

const newVersionString = `${newVersion.major}.${newVersion.minor}.${newVersion.patch}`;

packageJson.version = newVersionString;
await fs.writeJson(packageJsonPath, packageJson, {spaces: 2});

console.log(`Bumped version to: ${newVersionString}`);
