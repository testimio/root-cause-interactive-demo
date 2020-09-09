# Testim Root Cause Demo

Testim Root Cause is an open source tool for troubleshooting 🔎 Puppeteer and Playwright tests.

<img src="./readmeImages/stackTraceTab.png" width="400px">
<img src="./readmeImages/screenshotTab.png" width="400px">

To quickly run the demo:  
[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/testimio/root-cause-interactive-demo)

(If you are already in GitPod, follow the terminal)

## What's inside

In the demo, we have E2E tests for the popular [TodoMVC](http://todomvc.com/) project, written with jest and puppeteer.

We run them against a local copy of the React variant of TodoMVC.

## Running the demo

You may [run the demo in GitPod](https://gitpod.io/#https://github.com/testimio/root-cause-interactive-demo) (online, in-browser dev environment),  
Or locally by cloning the repo and following the guide:

cd into `with-jest-puppeteer` directory

```sh
cd with-jest-puppeteer
```

Install dependencies

```sh
npm install
```

Run the tests

```sh
npx jest
```

List results

```sh
npx root-cause ls
```

Pick one of the results to open Root Cause Viewer

```sh
npx root-cause show
```

To learn more about root cause, visit our homepage: [https://help.testim.io/docs/testim-overview](https://help.testim.io/docs/testim-overview)
