---
phase: 4
title: "Speakers & Schedule"
status: completed
priority: P1
dependencies: ["phase-01-setup-design-system"]
---

# Phase 4: Speakers & Schedule

## Overview
Xây dựng phân đoạn giới thiệu 8 Diễn giả uy tín (trong nước & quốc tế) và Lịch trình chi tiết 2 ngày diễn ra sự kiện (Thứ Bảy 10/10 và Chủ Nhật 11/10/2026) với 8 phiên hội thảo, số thứ tự nghệ thuật 01-07 và phần ghi chú tóm tắt nội dung từng phiên.

## Requirements
- **Functional**:
  - **Dữ liệu cấu trúc tĩnh (`src/data/speakers.ts` & `src/data/schedule.ts`)**:
    - **8 Diễn giả**:
      1. Jörg Mangold (`speaker-jorg.png`)
      2. TS. Bùi Trân Phượng (`speaker-phuong.jpg`)
      3. Paola Bortini (`speaker-paola.jpeg`)
      4. Peter Hofmann (`speaker-peter.jpg`)
      5. ThS. Nguyễn Hoàng Chiêu Anh (`speaker-chieu-anh.jpg`)
      6. ThS. Phạm Trần Kim Chi (`speaker-kim-chi.jpg`)
      7. ThS. Trần Thị Minh Trang (`speaker-minh-trang.jpg`)
      8. Đào Thị Ngọc Mai (`speaker-ngoc-mai.jpg`)
    - **Lịch trình 2 ngày**:
      - *Thứ Bảy 10/10/2026* (Khai mạc, 14:30 – 16:30): Jörg Mangold, Paola Bortini & Peter Hofmann - "Làm cha mẹ giữa căng thẳng, kỳ vọng và yêu thương"
      - *Chủ Nhật 11/10/2026* (7 phiên cả ngày):
        - Phiên 01 (08:30 – 10:00): TS. Bùi Trân Phượng - "Hiểu và thương"
        - Phiên 02 (10:30 – 12:00): ThS. Nguyễn Hoàng Chiêu Anh - "Con dậy thì, cha mẹ 'dậy sóng'"
        - Phiên 03 (12:30 – 13:30): Team MCP Vietnam - "Lắng nghe cơ thể với lòng trắc ẩn - Compassionate Body Scan"
        - Phiên 04 (14:00 – 15:30): ThS. Phạm Trần Kim Chi - "Bị 'kẹp' giữa cha mẹ và con cái - Làm sao để thoát ra?"
        - Phiên 05 (16:00 – 17:30): ThS. Trần Thị Minh Trang - "Cùng con vững chãi"
        - Phiên 06 (18:00 – 19:30): Paola Bortini, Peter Hofmann & Lucas, Simone - "Tỉnh thức và trắc ẩn trong nuôi dạy con - câu chuyện từ chính cuộc sống"
        - Phiên 07 (20:00 – 21:30): Team MCP Vietnam - "Mừng hành trình làm cha mẹ" (kèm biểu tượng ly cocktail)
  - **Component `Speakers.tsx`**:
    - Nền màu `peach`.
    - Tiêu đề: "Bạn sẽ được đồng hành bởi các diễn giả".
    - Lưới thẻ diễn giả tự co giãn (`grid [grid-template-columns:repeat(auto-fill,minmax(260px,1fr))]`).
    - Mỗi thẻ chứa: Ảnh chân dung hình tròn bo viền `border-2 border-terracotta/30`, đổ bóng mềm, Tên diễn giả (font-display, màu `terracotta`), Tiểu sử/chức danh chi tiết (text-sm, leading-relaxed).
  - **Component `Schedule.tsx`**:
    - Nền màu `cream`.
    - Badge: "Lịch trình dự kiến", H2: "Lịch trình hai ngày".
    - Bố cục danh sách theo dòng: Cột ngày giờ/thời gian, Cột tên diễn giả, Cột chủ đề & ghi chú tóm tắt, Cột số thứ tự lớn phong cách poster (`01` đến `07`) màu nhạt nghệ thuật.
- **Non-functional**:
  - Tối ưu hóa ảnh diễn giả với `<Image width={112} height={112} className="rounded-full object-cover object-top" />`.
  - Hiển thị linh hoạt trên mobile: số thứ tự lớn ẩn trên màn hình nhỏ để ưu tiên nội dung văn bản.

## Architecture
```
src/
├── data/
│   ├── speakers.ts       # Danh sách 8 đối tượng Speaker
│   └── schedule.ts       # Danh sách các Session theo ngày
├── components/
│   ├── Speakers.tsx      # Lưới hiển thị các thẻ diễn giả
│   └── Schedule.tsx      # Bảng timeline lịch trình 2 ngày
```

## Related Code Files
- Create: `src/data/speakers.ts`
- Create: `src/data/schedule.ts`
- Create: `src/components/Speakers.tsx`
- Create: `src/components/Schedule.tsx`
- Modify: `src/app/page.tsx`

## Implementation Steps
1. Khai báo TypeScript types `Speaker` và `ScheduleSession` trong `src/types/index.ts`.
2. Tạo file `src/data/speakers.ts` chứa đầy đủ thông tin của 8 diễn giả và đường dẫn ảnh tương ứng.
3. Tạo file `src/data/schedule.ts` chứa toàn bộ 8 phiên hội thảo, thời gian, người chia sẻ, tên chủ đề và đoạn giới thiệu chi tiết.
4. Xây dựng component `Speakers.tsx` render danh sách từ `speakers.ts`.
5. Xây dựng component `Schedule.tsx` render các hàng phiên hội thảo với typography Lora italic cho chủ đề và Be Vietnam Pro cho phần tóm tắt.
6. Tích hợp cả hai components vào `src/app/page.tsx`.

## Success Criteria
- [ ] Hiển thị đầy đủ và chính xác 8 diễn giả với ảnh tròn, tên và tiểu sử trọn vẹn.
- [ ] Lịch trình hiển thị trọn vẹn cả phiên khai mạc 10/10 và 7 phiên ngày 11/10 với thời gian chính xác.
- [ ] Các con số lớn 01-07 hiển thị đúng phong cách poster mờ nghệ thuật.

## Risk Assessment
- **Ảnh chân dung diễn giả bị méo tỷ lệ**:
  - *Giải pháp*: Sử dụng thuộc tính `object-cover object-top aspect-square` đảm bảo khuôn mặt luôn nằm ở vị trí trung tâm bức ảnh.
