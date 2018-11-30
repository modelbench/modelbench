<h1 align="center">ModelBench</h1>
<p align="center">
   <a href="https://modelbench.org">
   https://modelbench.org
   </a>
</p>
<a href="https://modelbench.org">
   <p align="center">
      <img width="200" src="https://modelbench.org/logo.png">
   </p>
</a>

A tool for reproducibly benchmarking machine learning models.

## Installation/Development

```
git clone https://github.com/gautomdas/modelbench
cd modelbench
npm install
npm run electron-dev
```

Make sure you have your python environment setup from the shell you are running Electron from. In my case, I have to run `conda activate` before running the app so that the models find their dependencies and run properly.

## Todos

- Test + build on Windows
- Distribute binaries
- Create CI/Release system
- Update website for releases
- Fix warnings
- Convert from mostly React local state to redux
- Build backend and analysis pages
