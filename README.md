<div align="center">
  <a href="https://novu.co" target="_blank">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/2233092/213641039-220ac15f-f367-4d13-9eaf-56e79433b8c1.png">
    <img src="https://user-images.githubusercontent.com/2233092/213641043-3bbb3f21-3c53-4e67-afe5-755aeb222159.png" width="280" alt="Logo"/>
  </picture>
  </a>
</div>

<h1 align="center">The open-source notification infrastructure for developers</h1>

<div align="center">
The ultimate service for managing multi-channel notifications with a single API.
</div>

  <p align="center">
    <br />
    <a href="https://docs.novu.co" rel="dofollow"><strong>Explore the docs »</strong></a>
    <br />
 </p>

  <br/>
  
  <p align="center">  
    <a href="https://discord.novu.co">Join Our Discord</a>
    ·
    <a href="https://roadmap.novu.co">Roadmap</a>
    ·
    <a href="https://twitter.com/novuhq">Twitter</a>
    ·
    <a href="https://notifications.directory">Notifications Directory</a>
  </p>
  
  <p align="center">
  Available in: <a href="https://github.com/novuhq/novu/tree/next/packages/node">Node.js</a>
  · <a href="https://github.com/novuhq/novu-php">PHP</a>
  · <a href="https://github.com/novuhq/novu-laravel">Laravel</a>
  · <a href="https://github.com/novuhq/go-novu">Go</a>
  · <a href="https://github.com/novuhq/novu-ruby">Ruby</a>
  · <a href="https://github.com/novuhq/novu-kotlin">Kotlin</a>
  · <a href="https://github.com/novuhq/novu-python">Python</a>
  · <a href="https://github.com/novuhq/novu-java">Java</a>
  · <a href="https://github.com/novuhq/novu-dotnet">.NET</a>
  · <a href="https://github.com/novuhq/elixir">Elixir</a>
  · <a href="https://github.com/novuhq/rust">Rust</a>
  </p>

### 👩‍💻 Docs Contribution

First, install the [Mintlify CLI](https://www.npmjs.com/package/mintlify) locally. To install, use the following command

```
npm i -g mintlify
```

__Note__: Please install Node.js (version 18 or higher) before proceeding.

Run the following command at the root of the documentation (where mint.json is) to preview the documentation changes

```
mintlify dev
```

### 😎 Publishing Changes

All changes to the docs should be submitted against the `staging` branch. [Preview the documentation changes](https://novu-preview.mintlify.app/introduction).

PRs from `staging` to `main` will be deployed to production automatically after merge.

#### Troubleshooting

- Mintlify dev isn't running - Run `mintlify install` it'll re-install dependencies.
- Page loads as a 404 - Make sure you are running in a folder with `mint.json`
