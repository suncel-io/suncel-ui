# Welcome!

A warm welcome! You've landed on our Contribute page and have taken the step to join our quest to make an amazing Blocks library for Suncel. We would like to thank all contributions, whether it is by finding issues in our code, highlighting features we're missing, or contributing to the codebase. If you've made it here, you'll be ready to join us in building features and fixing bugs in no time. We look forward to your participation!

We also encourage you to join our sprawling [Discord](https://discord.gg/cqTR6bbC6M) online, where you can discuss ideas, ask questions and get inspiration for what to build next.

We've created a [Code of Conduct](https://github.com/suncel-io/suncel-ui/blob/main/CODE_OF_CONDUCT.md) for contributing to the development of Suncel UI.

## Contributing Code

### General Prerequisites

1. Install Node.js `>=16` minimum, [latest LTS is recommended](https://nodejs.org/en/about/releases/)

   - Recommended: use [`nvm`](https://github.com/nvm-sh/nvm) for managing Node.js versions

### General Setup

To set up and build all the packages, follow these steps:

```bash
git clone https://github.com/suncel-io/suncel-ui
cd suncel-ui
npm i
```

### Tests

To test your changes locally, you will need to have a Suncel account and add the environment variable in the .env of the example project in the repo.
Install the dependencies of the example project `npm i` and link the suncel-ui package to the example project.

```bash
# suncel-ui folder
npm link
cd example
npm link @suncel/ui
npm run dev
```

Once it is you can build the package each time you have

```bash
# suncel-ui folder
npm run build
```

Or use the `npm start` to watch the changes

```bash
# suncel-ui folder
npm start
```

## Conventions

### Pull request message

We structure our messages like this:

```
<type>: <subject>
<BLANK LINE>
<body>
```

Example

```
feat: new awesome feature

Closes #111
```

List of types:

- feat: A new feature (ex: New Block)
- fix: A bug fix
- docs: Documentation only changes (ex: Readme)
- style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- refactor: A code change that neither fixes a bug nor adds a feature
- perf: A code change that improves performance
- test: Adding missing or correcting existing tests
- chore: Changes to the build process or auxiliary tools and libraries such as documentation generation

## Additional Resources

- [Suncel documentation](https://docs.suncel.io/)
