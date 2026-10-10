# Deployment

## Platform: Cloudflare Workers (Static Assets)
## URL: https://motkhoangdung.nguyenkimduy.io.vn
## Fallback / Workers Dev URL: https://motkhoangdung-web.nguyenkimduy-a15.workers.dev
## Deploy Command: npm run deploy (or `node scripts/build.mjs && wrangler deploy`)

## Configuration
- Worker Name: `motkhoangdung-web`
- Custom Domain: `motkhoangdung.nguyenkimduy.io.vn` (Zone: `nguyenkimduy.io.vn`)
- Asset Directory: `./dist`
- Config File: `wrangler.jsonc`

## Environment Variables
- `CLOUDFLARE_API_TOKEN`: Cloudflare API token with Workers Scripts / Assets Edit permission
- `CLOUDFLARE_ACCOUNT_ID`: `079d9902179021e1b7e9eec4dc419bcb`

## CI/CD Pipeline
- Jenkins URL: https://jenkins.nguyenkimduy.io.vn
- Job: `motkhoangdung-web`
- Target: Cloudflare Workers

## Rollback
```bash
wrangler rollback [deployment-id]
```
To view deployment history:
```bash
wrangler deployments list
```
