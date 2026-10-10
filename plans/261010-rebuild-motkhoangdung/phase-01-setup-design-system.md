---
phase: 1
title: "Setup & Design System"
status: completed
priority: P1
dependencies: []
---

# Phase 1: Setup & Design System

## Overview
Khởi tạo cấu trúc dự án Next.js (App Router, TypeScript), thiết lập Tailwind CSS với đầy đủ bảng màu và token nhận diện thương hiệu, tích hợp Google Fonts (`Playfair Display`, `Be Vietnam Pro`, `Lora`) qua `next/font`, và tổ chức 34 tài nguyên hình ảnh vào thư mục `public/images/`.

## Requirements
- **Functional**:
  - Khởi tạo Next.js mới với App Router, TypeScript, ESLint, Tailwind CSS.
  - Cấu hình font chữ Google với hỗ trợ tiếng Việt đầy đủ (`subsets: ['vietnamese', 'latin']`), gán biến CSS (`--font-playfair`, `--font-be-vietnam`, `--font-lora`).
  - Cấu hình bảng màu chuẩn xác trong Tailwind:
    - `cream`: `#FDF6EF` (nền chính)
    - `peach`: `#F5D9C0` (nền ấm phụ)
    - `peachnum`: `#E8C4A0` (nền quà tặng & số lớn)
    - `teal`: `#3B7D73` (màu chính cho tiêu đề, thẻ tối màu, footer)
    - `teal-dark`: `#2D6159`
    - `terracotta`: `#B85C38` (màu nhấn CTA, ngày tháng, highlight)
    - `terracotta-deep`: `#9A4A2C`
    - `ink`: `#4A3F35` (màu chữ nội dung)
  - Di chuyển toàn bộ 34 file ảnh từ `./images/` sang `./public/images/`.
- **Non-functional**:
  - Không gây Layout Shift (CLS = 0) nhờ `next/font/google`.
  - Khởi động dev server mượt mà, cấu hình TypeScript nghiêm ngặt (`strict: true`).

## Architecture
```
motkhoangdung/
├── public/
│   └── images/               # 34 assets từ website gốc (brochure, speakers, team, logos, gifts...)
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Nạp font CSS variables, thẻ meta cơ bản, body background #FDF6EF
│   │   ├── page.tsx          # Trang chủ chính
│   │   └── globals.css       # Tailwind base, utilities, font class shortcuts (.font-display, etc.)
│   ├── components/           # Thư mục chứa các React components
│   ├── data/                 # Thư mục chứa mock/static data
│   └── types/                # TypeScript interface definitions
├── tailwind.config.ts        # Custom colors, fonts, blob borderRadius
├── tsconfig.json
└── package.json
```

## Related Code Files
- Create: `package.json`, `tsconfig.json`, `tailwind.config.ts`, `postcss.config.mjs`, `next.config.ts`
- Create: `src/app/layout.tsx`, `src/app/page.tsx`, `src/app/globals.css`
- Create: `src/types/index.ts`
- Modify: `public/images/*` (đồng bộ từ `./images/`)

## Implementation Steps
1. Khởi tạo dự án Next.js hoặc cài đặt các dependencies cần thiết (`next`, `react`, `react-dom`, `typescript`, `@types/react`, `@types/node`, `tailwindcss`, `postcss`, `autoprefixer`, `lucide-react`).
2. Đồng bộ toàn bộ 34 tệp hình ảnh vào `public/images/`.
3. Cấu hình `tailwind.config.ts` với colors (`cream`, `peach`, `peachnum`, `teal`, `teal-dark`, `terracotta`, `terracotta-deep`, `ink`), font families (`display`, `body`, `poster`), và blob shape.
4. Cài đặt `src/app/layout.tsx` với 3 font từ `next/font/google`: `Playfair_Display`, `Be_Vietnam_Pro`, `Lora`.
5. Tạo `src/app/globals.css` chứa các class tái sử dụng: `.btn-cta`, `.font-display`, `.font-body`, `.font-poster`.
6. Chạy `npm run dev` để kiểm tra nền tảng hiển thị đúng font và màu sắc.

## Success Criteria
- [ ] Next.js App Router khởi động thành công không lỗi TypeScript hay Tailwind.
- [ ] Font chữ tiếng Việt hiển thị sắc nét, không bị lỗi font khi gõ ký tự có dấu.
- [ ] Thư mục `public/images/` chứa đủ 34 tệp ảnh, truy cập được qua URL `/images/{name}`.

## Risk Assessment
- **Lỗi hiển thị font tiếng Việt**: Font Lora hoặc Playfair Display có thể thiếu glyph tiếng Việt nếu không khai báo `subsets: ['vietnamese', 'latin']`.
  - *Giải pháp*: Chỉ định rõ ràng subset tiếng Việt trong cấu hình `next/font/google`.
