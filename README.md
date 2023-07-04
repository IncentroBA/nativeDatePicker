## NativeDatePicker

A native date picker. This package works with **React Native >= 0.57**.

## Features

Input date (`DateTime`) and optionally also set a Minimum Date (`DateTime`) and maximum date (`DateTime`).

3 different modes (`enumeration`): Time, Date, DateTime

text color (`string`).

Display as modal or inlined (`boolean`).

## Usage

This widget requires manual linking of project files. From this point the project can not be used with the default
Mendix Make it Native and you will need a custom make it native build.

### Install pods

`cd ios && pod install`

### Rebuild the project

`npx react-native run-android`

`npx react-native run-ios`

If you're having troubles after following these steps, there might be a linking issue.

## Development and contribution

1. Install NPM package dependencies by using: `npm install`. If you use NPM v7.x.x, which can be checked by executing
   `npm -v`, execute: `npm install --legacy-peer-deps`.
1. Run `npm start` to watch for code changes. On every change:
    - the widget will be bundled;
    - the bundle will be included in a `dist` folder in the root directory of the project;
    - the bundle will be included in the `deployment` and `widgets` folder of the Mendix test project.
