# A real create-vue app: the scaffolder runs at build time, so this stays in step with it.
FROM node:26-alpine@sha256:6bd9ab43c0ec0190ca7b2d193906cb8b7edf6e7f4afa43ddeccd6452710bffb5
WORKDIR /work
RUN npm create vue@3.24.0 app -- --default
WORKDIR /work/app
RUN npm install
RUN chown -R node:node .
USER node
HEALTHCHECK --interval=10s --timeout=3s --start-period=10s --retries=3 CMD nc -z 127.0.0.1 ${PORT:-3000} || exit 1
# Vite must listen beyond loopback (--host) and on the port Flisk assigns.
CMD npx vite --host 0.0.0.0 --port ${PORT:-3000}
