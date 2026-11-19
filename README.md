# create-vue

**Stack:** a real `create-vue` app

**Notes:** scaffolder runs at build time; Vite `--host 0.0.0.0`

Flisk bring-your-own template. The container contract is in [docs/byo.md](https://github.com/flisk-sh/flisk/blob/main/docs/byo.md).

## Check it

Needs Docker. CI runs the same check on every pull request (`.github/workflows/verify.yml`): build, run with `PORT=4000`, expect HTTP 200 on `/`.

```bash
docker build -t template . && docker run --rm -e PORT=4000 -p 4000:4000 template
```

The Dockerfile pins the scaffolder in `npm create vue@3.24.0`. To bump it, check the current release with `npm view create-vue version`,
update that one version, then run the build above. CI rejects any `@latest` in the Dockerfile.

## Use it in a Flisk project

This repo already includes a [`service.json`](service.json) that registers the resource as `vue-app`, so Flisk picks it up automatically when this folder is inside a Flisk project.

```bash
# from the folder that contains this template
flisk up
```

To add a second copy of this template in the same Flisk project, register it under a different resource name:

```bash
flisk resource vue-app-copy --type bring-your-own --stack shop --dockerfile ./Dockerfile --yes
```

Use a resource name that is unique across Flisk projects sharing one Docker daemon.

After `flisk up`, open the URL printed by `flisk status` (for a web UI like this template it is the host-root URL, not `/api/vue-app`).
