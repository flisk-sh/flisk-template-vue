# create-vue

**Stack:** a real `create-vue` app

**Notes:** scaffolder runs at build time; Vite `--host 0.0.0.0`

Flisk bring-your-own template. The container contract is in [docs/byo.md](https://github.com/flisk-sh/flisk/blob/main/docs/byo.md).

## Check it

Needs Docker. CI runs the same check on every pull request (`.github/workflows/verify.yml`): build, run with `PORT=4000`, expect HTTP 200 on `/`.

```bash
docker build -t template . && docker run --rm -e PORT=4000 -p 4000:4000 template
```

## Register it in a Flisk project

```bash
flisk resource vue-app --type bring-your-own --stack shop --dockerfile ./Dockerfile --yes
```

Use a resource name that is unique across Flisk projects sharing one Docker daemon.
