---
phase: 7
title: "Testing, Polish & Export"
status: completed
priority: P2
dependencies: ["phase-02-header-hero-section", "phase-03-pain-points-about-program", "phase-04-speakers-schedule", "phase-05-gifts-testimonials", "phase-06-registration-footer"]
---

# Phase 7: Testing, Polish & Export

## Overview
Giai đoạn nghiệm thu, tối ưu hóa toàn diện và chuẩn bị triển khai: kiểm tra tính responsive trên đa kích thước màn hình (Mobile 375px/414px, Tablet 768px, Desktop 1024px/1440px), cấu hình đầy đủ siêu dữ liệu SEO (Metadata, OpenGraph image, Twitter card, Canonical URL, Favicon), thêm hiệu ứng cuộn mượt mà / animation xuất hiện dịu mắt, thực hiện kiểm thử bản build sản xuất (`next build`) và cấu hình static export sẵn sàng deploy.

## Requirements
- **Functional**:
  - **SEO Metadata đầy đủ (`src/app/layout.tsx`)**:
    - Title: `Một Khoảng Dừng 2026 - Cha Mẹ vững chãi, Con Trẻ an lành`
    - Description: `Chuỗi hội thảo trực tuyến miễn phí cho cha mẹ & người chăm sóc trẻ, 10 & 11/10/2026 trên Zoom. Một khoảng dừng để chậm lại, tự chăm sóc và kết nối.`
    - OpenGraph: og:title, og:description, og:url, og:type (`website`), og:image (`/images/og-speakers.jpg`), og:locale (`vi_VN`).
    - Twitter Card: `summary_large_image`, title, description, image.
    - Favicon: `/images/logo-mkd.png` hoặc icon chuẩn.
  - **Hiệu ứng Scroll Animation (Reveal on Scroll)**:
    - Component hoặc hook hiệu ứng nhẹ nhàng (sử dụng IntersectionObserver API hoặc CSS animations tinh tế) giúp các phần tử dần xuất hiện tự nhiên khi cuộn trang, không làm chậm CPU.
  - **Kiểm thử Responsive 100%**:
    - Header: 4 logo tự xuống dòng hoặc co tỷ lệ cân đối, không tràn chiều ngang (overflow-x hidden).
    - Hero: cân bằng khoảng cách giữa chữ và hình ảnh brochure.
    - Schedule: các cột ngày giờ và tóm tắt chủ đề ngắt dòng đẹp mắt.
    - Testimonials: carousel hoạt động trơn tru cả chuột và ngón tay cảm ứng.
  - **Build & Deploy Readiness**:
    - Chạy `npm run build` thành công, không phát sinh bất kỳ warning hay lỗi TypeScript nào.
    - Cấu hình `output: 'export'` trong `next.config.ts` để sinh thư mục tĩnh `out/` khi cần triển khai trên các nền tảng static hosting như Cloudflare Pages, GitHub Pages hoặc Vercel.
- **Non-functional**:
  - Điểm Google Lighthouse: Performance >= 90, Accessibility >= 95, Best Practices >= 95, SEO = 100.
  - Không có broken image links hay 404 assets.

## Architecture
```
SEO & Performance Stack
├── Next.js Metadata API (generateMetadata / static metadata in layout.tsx)
├── Client Scroll Reveal (useIntersectionObserver or light CSS animation)
├── Responsive Media Queries (Tailwind breakpoints: sm, md, lg, xl)
└── Production Build Pipeline (next build -> out/ static export)
```

## Related Code Files
- Modify: `src/app/layout.tsx` (thêm metadata, OpenGraph, viewport)
- Create: `src/components/ScrollReveal.tsx` (hiệu ứng xuất hiện khi cuộn trang)
- Modify: `next.config.ts` (cấu hình images unoptimized nếu dùng static export)
- Modify: `package.json` (bổ sung scripts test, build, lint)

## Implementation Steps
1. Khai báo `metadata` chuẩn chỉnh trong `src/app/layout.tsx` theo chuẩn Next.js App Router Metadata API.
2. Thêm component `ScrollReveal.tsx` hoặc class CSS `.reveal` kết hợp IntersectionObserver để mang lại trải nghiệm chuyển động mềm mại như website mẫu.
3. Rà soát toàn bộ trang trên các kích thước màn hình bằng Developer Tools: 375px (iPhone SE/Mini), 390px (iPhone 14/15), 768px (iPad), 1024px, 1440px.
4. Kiểm tra toàn bộ 34 ảnh: đảm bảo mọi thẻ ảnh đều có `alt` text có nghĩa phục vụ Accessibility và SEO.
5. Kiểm tra tất cả các link: nút CTA hero, nút CTA audience, nút CTA registration trỏ đúng về `https://luma.com/2partqi8`; link email mở email client; link Facebook mở đúng fanpage Cha Mẹ Trắc Ẩn.
6. Chạy lệnh kiểm tra cú pháp và build: `npm run build`.

## Success Criteria
- [ ] `npm run build` hoàn tất không lỗi, tạo bundle sản xuất tối ưu.
- [ ] Chia sẻ link trên Facebook / Zalo / Telegram hiển thị đúng banner `og-speakers.jpg`, tiêu đề và mô tả tiếng Việt có dấu chuẩn chỉnh.
- [ ] Trang web không bị lỗi tràn ngang trên bất kỳ thiết bị di động nào (`no horizontal scrollbar`).
- [ ] Tất cả các tương tác (Testimonials carousel, CTA click, link liên hệ) hoạt động hoàn hảo 100%.

## Risk Assessment
- **Lỗi Next.js Image Optimization khi dùng Static Export (`output: 'export'`)**:
  - *Giải pháp*: Trong `next.config.ts`, thêm `images: { unoptimized: true }` nếu triển khai dưới dạng static export, hoặc giữ nguyên cấu hình mặc định nếu triển khai trên server Node.js / Vercel.
