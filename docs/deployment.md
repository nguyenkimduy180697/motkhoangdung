# Deployment Documentation: Một Khoảng Dừng 2026

## Platform
- **Hosting**: Cloudflare Workers / Assets
- **Production URL**: https://motkhoangdung.nguyenkimduy.io.vn
- **Worker Dev URL**: https://motkhoangdung-web.nguyenkimduy-a15.workers.dev
- **GitHub Repository**: https://github.com/nguyenkimduy180697/motkhoangdung

## Deploy Command
```bash
npm run deploy
```
*(Chạy `next build` xuất bản tĩnh sang `./dist`, sau đó kích hoạt `wrangler deploy` tải lên Cloudflare)*

## Environment Configuration
- Tự động nạp thông qua `resolve_env.py` từ `~/.claude/skills/.env`:
  - `CLOUDFLARE_API_TOKEN`
  - `CLOUDFLARE_ACCOUNT_ID`

## Custom Domain
- Cấu hình trong `wrangler.jsonc`:
```jsonc
"routes": [
  {
    "pattern": "motkhoangdung.nguyenkimduy.io.vn",
    "custom_domain": true
  }
]
```

## Rollback
Trong Cloudflare Dashboard:
1. Vào **Workers & Pages** -> Chọn service **motkhoangdung-web**.
2. Tab **Deployments** -> Chọn phiên bản trước đó và bấm **Rollback**.
