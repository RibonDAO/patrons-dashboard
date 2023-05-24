<!---
The main structure of this README was taken from:
https://github.com/open-sauced/open-sauced#readme
-->


<div align="center">
  <br>
  <img alt="Ribon Logo" src="https://user-images.githubusercontent.com/24739860/190657474-1cb9457a-144e-4376-967c-e26d0c0b802c.png" width="300px">
  <h1>Ribon Frontend Template</h1>
  <strong>A React boilerplate containing everything we used to build the Ribon DApp</strong>
  <br>
  <a class="btn btn-primary ml-2" href="https://github.com/RibonDAO/frontend_template/generate" >Use this template in your project</a>
</div>
<br>
<p align="center">
  <img src="https://img.shields.io/github/languages/code-size/RibonDAO/frontend_template" alt="GitHub code size in bytes">
  <img src="https://img.shields.io/github/commit-activity/w/RibonDAO/frontend_template" alt="GitHub commit activity">
  <a href="https://github.com/RibonDAO/interface/issues">
    <img src="https://img.shields.io/github/issues/RibonDAO/frontend_template" alt="GitHub issues">
  </a>
  <a href="https://discord.gg/DBcwmDrkpy">
    <img src="https://img.shields.io/discord/341989911450091522.svg?label=&logo=discord&logoColor=ffffff&color=7389D8&labelColor=6A7EC2" alt="Discord">
  </a>
  <a href="https://twitter.com/RibonDAO">
    <img src="https://img.shields.io/twitter/follow/RibonDAO?label=Follow&style=social" alt="Twitter">
  </a>
</p>

With the growth of our application, we started to create several frontend repositories.
Every time this happened we had to redo the entire project setup from scratch. 
With this template, we have everything needed to start a project focused on web3.


![image](https://user-images.githubusercontent.com/24739860/191996585-c72e1918-2acf-4d46-a2d6-8d0402a4b014.png)


## 📖 Prerequisites

In order to run the project from a local environment we need `node>=16`, `npm>=8` installed on our development machines. We also recommend `yarn>=1.22` to manage dependencies but is optional. The following steps are using the yarn CLI.

**NOTE:** You may will need the .env file with some environment variables. You can get it by accessing our [Discord Server](https://discord.gg/DBcwmDrkpy) and requesting it on the #Development channel

## 🖥️ Local development

To clone the repo:

```shell
git clone git@github.com:ribondao/frontend_template.git
```

To install the application:

```shell
yarn install
```

Copy the .env.example to a .env file

```shell
cp .env.example .env
```

To start a local copy of the app on port `3000`:

```shell
yarn start
```

### 🧪 Test

For running the test suite, use the following command. Since the tests run in watch mode by default, some users may encounter errors about too many files being open. In this case, it may be beneficial to [install watchman](https://facebook.github.io/watchman/docs/install.html).

```shell
yarn test
```

You can request a coverage report by running the following command:

```shell
yarn testCoverage
```

### 🎨 Code linting

To check the code quality, use the following command:

```shell
yarn lint
```

To check the styles quality, use the following command:

```shell
yarn lint:css
```

### 🚀 Production deployment

A production deployment is a complete build of the project, including the build of the static assets.

```shell
yarn build
```

### 📙 Storybook

Storybook is being leveraged to mock out visual React components. You can start the Storybook Server on http://localhost:6006 by running the following command:

```shell
yarn storybook
```

![storybook-example-screenshot](https://user-images.githubusercontent.com/24739860/175363555-461e4c27-a994-470e-982b-f4c482b6e121.png)

## 🤝 Contributing

We encourage you to contribute! Please check out the [Contributing guide](https://ribondao.github.io/docs/) for guidelines about how to proceed.

## 💝 Community

Got Questions? Join the conversation in our [Discord](https://discord.gg/DBcwmDrkpy).  
Find RibonDAO updates in our [Twitter](https://www.twitter.com/RibonDAO).
