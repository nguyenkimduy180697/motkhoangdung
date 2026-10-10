---
phase: 5
title: "Gifts & Testimonials"
status: completed
priority: P1
dependencies: ["phase-01-setup-design-system"]
---

# Phase 5: Gifts & Testimonials

## Overview
Xây dựng 2 phân đoạn tương tác hấp dẫn:
1. **Phân đoạn Quà tặng chương trình (Gifts)**: Hiển thị 6 phần quà độc quyền (Học bổng VUS, Voucher GUMAC, Học bổng Be One, Sách "Những vết thương lành?", Sách "Trắc ẩn với chính mình", Voucher khóa học + Sổ tay) trên nền màu `peachnum` kèm vòng tròn trang trí hình học.
2. **Phân đoạn Cảm nhận học viên (Testimonials Carousel)**: Carousel tương tác client-side mượt mà với 8 câu chuyện chân thật từ phụ huynh, hỗ trợ chuyển slide (Prev/Next), dãy chấm tròn chọn trực tiếp (Dots indicator), tự động trượt (Autoplay), và vuốt chạm (Touch/Swipe) trên di động.

## Requirements
- **Functional**:
  - **Component `Gifts.tsx`**:
    - Nền màu ấm `peachnum` (#E8C4A0), có 2 vòng tròn viền trang trí bán nguyệt ở góc.
    - Huy hiệu: "Dành tặng người tham dự". Tiêu đề: "Quà tặng từ chương trình".
    - Lưới 6 thẻ quà tặng (3 cột trên desktop, 2-3 cột trên tablet/mobile):
      1. Học bổng + Balo VUS (`gift-vus.png`)
      2. Voucher mua hàng tại GUMAC (`gift-gumac.png`)
      3. Học bổng Be One (`gift-beone.png`)
      4. Sách “Những vết thương lành?” (`gift-book-wounds.png`)
      5. Sách “Trắc ẩn với chính mình” (`gift-book-compassion.png`)
      6. Voucher khóa học + “Sổ tay Cha mẹ trắc ẩn” (`gift-course-handbook.png`)
    - Ảnh quà dạng tròn có viền ring nhẹ, tên quà đặt bên dưới với màu `terracotta-deep`.
  - **Component `Testimonials.tsx` (Client Component - `'use client'`)**:
    - Nền màu `peach`.
    - Tiêu đề: "Những người đã tham gia các hoạt động của Cha mẹ Trắc ẩn chia sẻ…".
    - 8 cảm nhận: Chị Ngọc Ánh, Chị Thanh Hà, Anh Minh Tuấn, Chị Lan Phương, Chị Thu Hương, Anh Văn Khoa, Chị Diễm My, Chị Bích Ngọc.
    - Thiết kế thẻ cảm nhận dạng quote nghệ thuật: dấu ngoặc kép lớn màu `peachnum/80`, lời tâm sự font-poster Lora truyền cảm, tên người chia sẻ font-display màu `teal`.
    - Bộ điều khiển tương tác:
      - Nút Prev và Next hình tròn nổi viền terracotta có hover translation.
      - Dãy 8 chấm tròn chuyển đổi nhanh với trạng thái active (màu terracotta đậm vs terracotta/30).
      - Hỗ trợ vuốt ngón tay (Touch events: `onTouchStart`, `onTouchMove`, `onTouchEnd`) trên thiết bị di động.
      - Autoplay tuần hoàn nhẹ nhàng (5 giây/lần), tự dừng khi người dùng tương tác hoặc di chuột qua.
- **Non-functional**:
  - Carousel chuyển động mượt mà bằng CSS transitions / transform (không giật lag).
  - Tối ưu SEO: toàn bộ 8 bài cảm nhận vẫn được đưa vào DOM để crawler có thể đọc được nội dung.

## Architecture
```
src/
├── data/
│   ├── gifts.ts             # Dữ liệu 6 phần quà
│   └── testimonials.ts      # Dữ liệu 8 cảm nhận học viên
├── components/
│   ├── Gifts.tsx            # Server Component hiển thị quà
│   └── Testimonials.tsx     # Client Component ('use client') quản lý carousel state
```

## Related Code Files
- Create: `src/data/gifts.ts`
- Create: `src/data/testimonials.ts`
- Create: `src/components/Gifts.tsx`
- Create: `src/components/Testimonials.tsx`
- Modify: `src/app/page.tsx`

## Implementation Steps
1. Khai báo TypeScript types `Gift` và `Testimonial`.
2. Tạo file `src/data/gifts.ts` và `src/data/testimonials.ts` lưu trữ đầy đủ nội dung nguyên bản.
3. Xây dựng component `Gifts.tsx` với bố cục lưới thẻ tròn, hiệu ứng hover nhẹ.
4. Xây dựng component `Testimonials.tsx` với React hooks (`useState`, `useEffect`, `useCallback`, `useRef`):
   - Quản lý `currentIndex` (0 đến 7).
   - Hàm `handlePrev`, `handleNext`, `goToIndex`.
   - Effect thiết lập `setInterval` chuyển slide tự động.
   - Thêm gesture handler cho cảm ứng swipe trên smartphone.
5. Kiểm thử các trạng thái chuyển slide và hiển thị chỉ mục dots tương ứng.

## Success Criteria
- [ ] 6 quà tặng hiển thị ảnh chuẩn, không bị méo, bo tròn thẩm mỹ.
- [ ] Carousel hoạt động mượt mà: bấm nút lùi/tiến đổi nội dung đúng, bấm vào dot nào chuyển tới người đó ngay lập tức.
- [ ] Vuốt trên màn hình điện thoại trượt slide chính xác.
- [ ] Đầy đủ 8 đoạn cảm nhận học viên không bị cắt bớt câu chữ.

## Risk Assessment
- **Lỗi hydration trong Next.js do tương tác client-side**:
  - *Giải pháp*: Đánh dấu component với `'use client'` và khởi tạo state chỉ mục an toàn, chỉ kích hoạt interval sau khi component đã mount trên client.
