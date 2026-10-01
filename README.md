# nodejs-demo-app – CI/CD with GitHub Actions

A small Node.js (Express) web app with a fully automated CI/CD pipeline.

## What the pipeline does
Triggered on every **push to `main`** (`.github/workflows/main.yml`):

1. **test** job – checks out code, installs Node.js 20, runs `npm ci` and `npm test`
2. **build-and-push** job – runs only if tests pass; builds the Docker image and pushes it to DockerHub

```
push to main → test → docker build → docker push (DockerHub)
```

## Tools used
GitHub, GitHub Actions, Node.js, Docker, DockerHub

## Required GitHub Secrets
| Secret | Value |
|---|---|
| `DOCKERHUB_USERNAME` | Your DockerHub username |
| `DOCKERHUB_TOKEN` | DockerHub access token (Account Settings → Security) |

## Run locally
```bash
npm install
npm test
npm start            # http://localhost:3000
```

## Run with Docker
```bash
docker build -t nodejs-demo-app .
docker run -p 3000:3000 nodejs-demo-app
```

## Pull the deployed image
```bash
docker pull <your-dockerhub-username>/nodejs-demo-app:latest
```

## Screenshots
Add screenshots of the successful Actions run and the DockerHub repo here.
