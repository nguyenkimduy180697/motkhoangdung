---
title: "Clone & Triển khai Website Một Khoảng Dừng 2026 bằng Next.js"
description: "Kế hoạch chi tiết tái lập hoàn chỉnh landing page Một Khoảng Dừng 2026 (từ motkhoangdung.lovable.app) bằng Next.js App Router, Tailwind CSS, TypeScript, bảo toàn 100% nội dung & hình ảnh."
status: completed
priority: P1
branch: "main"
tags: [nextjs, landing-page, tailwindcss, typescript, responsive, seo]
blockedBy: []
blocks: []
created: "2026-10-10T08:57:53.589Z"
createdBy: "nkd:plan"
source: skill
---

# Kế Hoạch Triển Khai: Clone Website Một Khoảng Dừng 2026 bằng Next.js

## 1. Tổng Quan Dự Án
Xây dựng lại toàn diện website sự kiện **"Một Khoảng Dừng 2026 - Cha Mẹ vững chãi, Con Trẻ an lành"** từ nguồn gốc `motkhoangdung.lovable.app` sang nền tảng **Next.js (App Router) + TypeScript + Tailwind CSS**.

Mục tiêu chính:
1. **Bảo tồn 100% nội dung & hình ảnh**: Toàn bộ câu từ, 8 diễn giả, lịch trình chi tiết 2 ngày (10 & 11/10/2026), 6 quà tặng, 8 cảm nhận người tham gia, 8 thành viên ban tổ chức, danh sách đối tác và các liên kết đăng ký Luma (`https://luma.com/2partqi8`).
2. **Kiến trúc Next.js chuẩn mực**: Server Components theo mặc định cho SEO và hiệu năng tối đa, Client Components riêng biệt cho các tương tác động (Testimonials Carousel, Smooth Scroll, Reveal Animations).
3. **Design System đồng nhất**: Tái hiện chuẩn xác bảng màu nhận diện (`cream`, `peach`, `peachnum`, `teal`, `terracotta`, `ink`) và hệ typography (`Playfair Display`, `Be Vietnam Pro`, `Lora`) tối ưu hóa qua `next/font/google`.
4. **Trải nghiệm người dùng mượt mà & Responsive**: Hiển thị hoàn hảo trên Mobile, Tablet, Desktop; tối ưu SEO OpenGraph và hỗ trợ xuất bản Static Export (`output: 'export'`) linh hoạt cho Vercel / Cloudflare Pages / Static Hosting.

---

## 2. Thông Số Kỹ Thuật (Tech Stack & Architecture)
- **Framework**: Next.js 15/14 (App Router, React 19/18, TypeScript)
- **Styling**: Tailwind CSS với custom config (Colors, Font families, Blob shapes, Shadow tokens)
- **Fonts**: `next/font/google` nạp `Playfair Display`, `Be Vietnam Pro`, `Lora` (zero layout shift, preloaded local font variables)
- **Icons**: Lucide React + Font Awesome Icons (tích hợp trực tiếp hoặc SVG components)
- **Assets**: 34 tệp ảnh gốc chất lượng cao lưu tại `public/images/`, phục vụ qua `next/image`
- **Data Layer**: Tách biệt dữ liệu tĩnh (`src/data/`) cho speakers, schedule, gifts, testimonials, team, partners giúp code gọn gàng, dễ bảo trì.

---

## 3. Danh Sách Các Giai Đoạn (Phases)

| Phase | Name | Status |
|-------|------|--------|
| 1 | [Setup & Design System](./phase-01-setup-design-system.md) | Completed |
| 2 | [Header & Hero Section](./phase-02-header-hero-section.md) | Completed |
| 3 | [Pain Points & About Program](./phase-03-pain-points-about-program.md) | Completed |
| 4 | [Speakers & Schedule](./phase-04-speakers-schedule.md) | Completed |
| 5 | [Gifts & Testimonials](./phase-05-gifts-testimonials.md) | Completed |
| 6 | [Registration & Footer](./phase-06-registration-footer.md) | Completed |
| 7 | [Testing, Polish & Export](./phase-07-testing-polish.md) | Completed |

---

## 4. Dependencies & Trình Tự Thực Hiện
- **Phase 1** là nền móng bắt buộc trước khi code bất kỳ component nào.
- **Phase 2, 3, 4, 5, 6** có thể triển khai tuần tự theo cấu trúc trang từ trên xuống dưới, sử dụng layout và font đã cấu hình ở Phase 1.
- **Phase 7** thực hiện sau khi hoàn tất toàn bộ giao diện để rà soát lỗi, responsive, build và test deploy.
