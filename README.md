# ec-seller-commissions-bo

## Node version
- 20.11.0

## Development

- Set environment variables

```bash
cp example.env .env.local
```

- Set up port forwards to back end services

```bash
kubectl port-forward services/ec-seller-commissions-service 9000:3000 -n marketplace
```


- Create local .npmrc file

Replace the content "<_authToken>" with your GitLab Personal Access Token.
Do not upload that information to the repository.


- Install dependencies
first you need to connect to the vpn

```bash
npm i
```

- Run dev server

```bash
npm run dev
```

- Set auth cookies on your browser

```js
document.cookie="X-TOKEN-CORS=<your-cookie>"
```

## Deploy

### Develop

- Checkout `develop`

```bash
git checkout develop
git pull origin develop
```

- Increase version number

```bash
npm version <mayor|minor|patch>
```

- Create dev tag

```bash
npm run tag:dev
```

This will trigger ci and auto deploy to dev env.

### Production

- Create prod tag

```bash
npm run tag:prd
```

```bash
kubectl apply -f deploy.prod.yaml --context <your-name>-production
```

