# Contributing

This repository is one Flisk bring-your-own template: a Dockerfile that runs an upstream scaffolder and starts its dev server on `PORT`. It is not an upstream release.

- Run the build locally with `docker build -t template .` and check the health path from `service.json`.
- Keep `service.json`, `README.md` and the `Dockerfile` in agreement (port, health path, check command).
- Sign off every commit (`git commit -s`) under the [Developer Certificate of Origin](https://developercertificate.org/).
- Pin base images by digest. Keep the scaffolder call non-interactive.
- Contribute to Flisk itself in [flisk-sh/flisk](https://github.com/flisk-sh/flisk).
