---
phase: 3
title: "Pain Points & About Program"
status: completed
priority: P1
dependencies: ["phase-01-setup-design-system"]
---

# Phase 3: Pain Points & About Program

## Overview
Xây dựng 3 phân đoạn nội dung tiếp nối:
1. **Phân đoạn Thấu cảm / Nỗi niềm cha mẹ (Pain Points)**: Bảng so sánh 4 trạng thái giữa "Điều mình mong muốn" vs "Nhưng thực tế là", kèm trích dẫn đồng hành.
2. **Phân đoạn Giới thiệu chương trình (About Program)**: 3 trụ cột giá trị cốt lõi, 2 thẻ tương phản ("Không phải là..." vs "Mà là tâm huyết..."), và thông điệp triết lý điểm tựa.
3. **Phân đoạn Đối tượng phù hợp (Target Audience)**: Danh sách 4 nhóm đối tượng tham dự và lời mời gọi chân thành kèm nút CTA đăng ký.

## Requirements
- **Functional**:
  - **Component `PainPoints.tsx`**:
    - Tiêu đề H2: "Làm cha mẹ giữa những bộn bề của cuộc sống, có khi nào bạn nhận ra..."
    - Bảng so sánh bo góc tròn lớn (`rounded-3xl bg-white shadow-xl`):
      - Cột 1: "Điều mình mong muốn" (màu `teal`)
      - Cột 2: "Nhưng thực tế là" (màu `ink/70`)
      - 4 hàng nội dung:
        1. Bình tĩnh, dịu dàng với con | Dễ nổi cáu hơn mình muốn
        2. Thực sự có mặt cùng con | Ngồi cạnh nhau mà tâm trí ở nơi khác
        3. Hiểu con và kết nối sâu hơn | Cảm thấy xa cách, không biết bắt đầu từ đâu
        4. Nghỉ ngơi và chăm sóc bản thân | Luôn cảm thấy chưa làm đủ, chưa đủ tốt
    - Blockquote cảm xúc (font-poster, italic, màu `terracotta`): "Làm cha mẹ vốn là một hành trình đầy ý nghĩa nhưng cũng không ít thử thách. Và bạn không đơn độc trên hành trình này."
  - **Component `AboutProgram.tsx`**:
    - Nền màu `peach`.
    - Tiêu đề H2: "Chuỗi hội thảo 'Một Khoảng Dừng'".
    - 3 trụ cột ngang (Laptop icon - Hội thảo online miễn phí, Calendar icon - Diễn ra hàng năm bởi MCP, Heart icon - Tạo không gian tạm dừng & hiện diện).
    - 2 thẻ so sánh đối xứng:
      - Thẻ trắng `bg-cream`: "Không phải là..." (4 gạch đầu dòng dấu `×`)
      - Thẻ xanh đậm `bg-teal text-white`: "Mà là tâm huyết..." (4 gạch đầu dòng dấu `✓` tô đậm thông điệp)
    - 2 câu slogan cốt lõi:
      - "Khi cha mẹ có một khoảng dừng, con trẻ sẽ có thêm một điểm tựa."
      - "Khi cha mẹ vững chãi, con trẻ sẽ an lành."
  - **Component `TargetAudience.tsx`**:
    - Nền màu `cream`.
    - H2: "“Một Khoảng Dừng” dành cho bạn nếu..."
    - Khung trắng 4 mục với icon hoa `✿` màu terracotta.
    - Lời nhắn nhủ và nút CTA: "Đăng ký ngay - miễn phí".
- **Non-functional**:
  - Layout responsive tốt, bảng so sánh tự động căn chỉnh và co giãn hợp lý trên màn hình điện thoại.

## Architecture
```
src/components/
├── PainPoints.tsx       # Bảng so sánh 2 cột & blockquote cảm xúc
├── AboutProgram.tsx     # 3 trụ cột, 2 khối so sánh Không phải là / Mà là & triết lý
└── TargetAudience.tsx   # Đối tượng phù hợp & CTA
```

## Related Code Files
- Create: `src/components/PainPoints.tsx`
- Create: `src/components/AboutProgram.tsx`
- Create: `src/components/TargetAudience.tsx`
- Modify: `src/app/page.tsx`

## Implementation Steps
1. Soạn thảo dữ liệu tĩnh cho các bảng so sánh và danh sách đặc điểm.
2. Tạo component `PainPoints.tsx` với bảng 2 cột (`grid grid-cols-2`), đường viền chia ngăn `border-ink/10`.
3. Tạo component `AboutProgram.tsx` với 3 vòng tròn icon trên nền `peach`, lưới 2 cột thẻ tương phản (1 thẻ nền sáng, 1 thẻ nền màu `teal` chữ trắng).
4. Tạo component `TargetAudience.tsx` với danh sách hoa văn và nút bấm điều hướng tới Luma.
5. Ghép nối cả 3 components vào `src/app/page.tsx` và rà soát từng dòng chữ so với bản gốc.

## Success Criteria
- [ ] 100% nội dung chữ của 3 phân đoạn trùng khớp chính xác từng từ ngữ trên website gốc.
- [ ] Bảng so sánh không bị tràn màn hình trên mobile (320px - 375px).
- [ ] Khối thẻ `bg-teal` giữ nguyên hiệu ứng màu chữ trắng tương phản tốt, dễ đọc.

## Risk Assessment
- **Bảng so sánh 2 cột bị chật chữ trên mobile**:
  - *Giải pháp*: Thiết lập padding `px-3 py-4 sm:px-5 sm:py-5` và kích thước chữ `text-sm sm:text-base` để văn bản hiển thị gọn gàng.
