---
phase: 2
title: "Header & Hero Section"
status: completed
priority: P1
dependencies: ["phase-01-setup-design-system"]
---

# Phase 2: Header & Hero Section

## Overview
Xây dựng thành phần Header (4 logo đối tác/tổ chức) và Hero Section chính của sự kiện với tiêu đề "MỘT KHOẢNG DỪNG 2026", thông điệp "Cha Mẹ vững chãi – Con Trẻ an lành", 3 thẻ huy hiệu thông tin (Thời gian, Zoom, Miễn phí), nút CTA đăng ký giữ chỗ và hình ảnh minh họa brochure lồng ghép trong khung hình organic blob trang trí.

## Requirements
- **Functional**:
  - **Header component (`src/components/Header.tsx`)**:
    - Hiển thị 4 logo: Logo Một Khoảng Dừng (`logo-mkd.png`), Logo Cha Mẹ Trắc Ẩn (`logo-mcp.png`), Logo Lean In VietNam (`lean-in-vietnam.png`), Logo PiSEL (`pisel.png`).
    - Căn giữa, khoảng cách cân đối, co giãn linh hoạt trên mobile và desktop (`h-10` đến `h-20`).
  - **Hero Section (`src/components/Hero.tsx`)**:
    - Tagline trên cùng: `Chuỗi hội thảo trực tuyến không thu phí - dành cho cha mẹ & người chăm sóc trẻ` (chữ in hoa, tracking rộng, màu `teal`).
    - Tiêu đề chính H1: `MỘT KHOẢNG DỪNG 2026` (font-display, màu `terracotta`, cỡ chữ lớn `clamp(2rem, 7vw, 3.75rem)`).
    - Phụ đề cảm xúc: `Cha Mẹ vững chãi – Con Trẻ an lành` (font-poster, italic, màu `teal`).
    - 3 Badges hình viên thuốc viền terracotta:
      1. `10 & 11/10/2026` (kèm icon lịch)
      2. `Zoom` (kèm icon laptop)
      3. `Miễn phí` (kèm icon hộp quà)
    - Nút CTA nổi bật: `Đăng ký giữ chỗ ngay` trỏ tới `https://luma.com/2partqi8` với hiệu ứng hover và bóng đổ ấm áp.
    - Hình ảnh minh họa: `brochure.png` đặt trên lớp nền gradient blob đa sắc thái (`peach`/`peachnum`).
- **Non-functional**:
  - LCP tối ưu: ảnh brochure và logo chính được ưu tiên tải (`priority` prop của `next/image`).
  - Layout 2 cột trên Desktop (Text bên trái, Ảnh bên phải), 1 cột cân đối trên Mobile.

## Architecture
```
Hero Component (Server Component)
├── Left Column: Content
│   ├── Subtitle / Tagline (text-teal tracking-[0.2em])
│   ├── H1 Title (font-display text-terracotta)
│   ├── Motto (font-poster italic text-teal)
│   ├── Badges (Date, Platform, Free)
│   └── CTA Link Button (btn-cta)
└── Right Column: Visual
    ├── Organic Blob Background (border-radius: blob-shape)
    └── Next.js Image (brochure.png with priority)
```

## Related Code Files
- Create: `src/components/Header.tsx`
- Create: `src/components/Hero.tsx`
- Modify: `src/app/page.tsx`

## Implementation Steps
1. Xây dựng component `src/components/Header.tsx` sử dụng `<Image />` cho 4 logo từ `public/images/`.
2. Tạo component `src/components/Hero.tsx` với đầy đủ cấu trúc văn bản, kiểu chữ, khoảng cách và badge.
3. Tạo style cho khung viền gradient blob: `rounded-[45%_55%_70%_30%/45%_45%_60%_55%]`.
4. Gắn liên kết ngoài `https://luma.com/2partqi8` với `target="_blank"` và `rel="noopener noreferrer"`.
5. Đưa `Header` và `Hero` vào `src/app/page.tsx`, kiểm tra giao diện trên cả màn hình điện thoại (375px) và máy tính (1280px).

## Success Criteria
- [ ] Header hiển thị đầy đủ 4 logo rõ nét, cân đối.
- [ ] Hero hiển thị đúng font Playfair Display cho H1 và Lora italic cho câu slogan.
- [ ] 3 badges và nút CTA hiển thị chuẩn màu terracotta, nhấp nút CTA chuyển hướng chính xác đến trang Luma.
- [ ] Ảnh brochure hiển thị ăn khớp với hình nền blob phía sau.

## Risk Assessment
- **Ảnh brochure bị vỡ layout trên mobile**:
  - *Giải pháp*: Sử dụng class `w-full max-w-md lg:max-w-lg h-auto mx-auto` để tự động thu phóng theo kích thước khung nhìn.
