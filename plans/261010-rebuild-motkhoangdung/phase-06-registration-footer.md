---
phase: 6
title: "Registration & Footer"
status: completed
priority: P1
dependencies: ["phase-01-setup-design-system"]
---

# Phase 6: Registration & Footer

## Overview
Xây dựng 2 phân đoạn cuối trang:
1. **Phân đoạn Đăng ký (Registration - `#dang-ky`)**: 2 gói tham dự (Trực tiếp: Miễn phí & Recording: Tùy tâm), khung thư mời cảm xúc "Hãy dành cho chính mình một khoảng dừng..." và nút CTA lớn.
2. **Phân đoạn Footer**: Thông tin giới thiệu dự án Cha Mẹ Trắc Ẩn (MCP), đội ngũ 8 thành viên Ban Tổ Chức (ảnh chân dung tròn), thông tin liên hệ (Email, Fanpage Facebook), danh sách 4 đối tác đồng hành và 2 đối tác truyền thông.

## Requirements
- **Functional**:
  - **Component `Registration.tsx`**:
    - ID neo: `id="dang-ky"`.
    - H2: "Tham dự hoàn toàn miễn phí" / "Chúng tôi muốn không gian này mở ra cho tất cả mọi người."
    - 2 thẻ lựa chọn bo góc lớn 28px (`rounded-[28px] bg-white p-8 text-center shadow-lg`):
      1. *Tham dự trực tiếp*: Icon quà tặng, giá `Miễn phí` (font-poster, text-terracotta, 5xl/6xl), mô tả: "Hai ngày trọn vẹn trên Zoom, dành cho cộng đồng."
      2. *Recording sau sự kiện*: Icon máy quay video, giá `Tùy tâm` (font-poster, text-terracotta, 5xl/6xl), mô tả: "Số tiền thu được để phục vụ vận hành các hoạt động cộng đồng không thu phí."
    - Khối thiệp mời `bg-peach rounded-[28px]`:
      - Tiêu đề: "Hãy dành cho chính mình một khoảng dừng."
      - 4 câu điệp từ: "Để chậm lại. / Để tự chăm sóc. / Để kết nối. / Để thêm vững chãi trên hành trình làm cha mẹ đầy ý nghĩa."
      - Thông điệp: "Chỉ cần hiện diện, như bạn đang là."
      - Nút CTA lớn: "Đăng ký ngay - miễn phí" (`px-12 py-5 text-lg btn-cta`) trỏ tới `https://luma.com/2partqi8`.
  - **Component `Footer.tsx`**:
    - Nền màu `teal` chữ trắng (`bg-teal text-white`).
    - Đoạn giới thiệu sứ mệnh dự án Cha Mẹ Trắc Ẩn (MCP).
    - Lưới 8 thành viên BTC (`team.ts`):
      1. Thy Nguyễn (`team-thy-nguyen.png`)
      2. Phượng Ngô (`team-phuong-ngo.png`)
      3. Juliet Phạm (`team-juliet-pham.jpg`)
      4. Trang Lê (`team-trang-le.jpg`)
      5. Anh Bùi (`team-anh-bui.png`)
      6. Hiền Trần (`team-hien-tran.jpg`)
      7. Hường Lê (`team-huong-le.jpg`)
      8. Virut Ngọc Mai (`team-virut-ngoc-mai.jpg`)
    - Khối thông tin liên hệ:
      - Email: `mcpgoesvietnam@gmail.com` (link `mailto:`)
      - Fanpage: `https://www.facebook.com/mcpgoesvietnam` kèm logo `logo-mcp.png`
    - Khối Đối tác đồng hành (4 logo nền trắng thẻ card):
      1. VUS (`partner-vus.png`)
      2. GUMAC (`partner-gumac.png`)
      3. Be One English (`partner-beone.png`)
      4. Mạng lưới Tròn Lành Việt Nam (`partner-tron-lanh.png`)
    - Khối Đối tác truyền thông (2 logo):
      1. Mindful Compassionate Parenting (`media-mcp.png`)
      2. Trắc Ẩn với Chính Mình (`media-trac-an-voi-chinh-minh.jpg`)
- **Non-functional**:
  - Các liên kết ngoài mở tab mới an toàn với `rel="noopener noreferrer"`.
  - Ảnh logo đối tác sử dụng `mix-blend-multiply` và kích thước tối ưu để nổi bật trên nền thẻ card.

## Architecture
```
src/
├── data/
│   ├── team.ts              # Dữ liệu 8 thành viên BTC
│   └── partners.ts          # Dữ liệu đối tác đồng hành & truyền thông
├── components/
│   ├── Registration.tsx     # Khối giá vé & thiệp mời đăng ký
│   └── Footer.tsx           # Giới thiệu MCP, 8 thành viên BTC, đối tác & footer
```

## Related Code Files
- Create: `src/data/team.ts`
- Create: `src/data/partners.ts`
- Create: `src/components/Registration.tsx`
- Create: `src/components/Footer.tsx`
- Modify: `src/app/page.tsx`

## Implementation Steps
1. Khai báo data `team.ts` chứa danh sách 8 thành viên BTC cùng đường dẫn ảnh đại diện.
2. Khai báo data `partners.ts` chứa 4 đối tác đồng hành và 2 đối tác truyền thông.
3. Viết component `Registration.tsx` tạo 2 card giá và banner kêu gọi cảm xúc.
4. Viết component `Footer.tsx` chia khối rõ ràng: Giới thiệu MCP -> Lưới 8 thành viên -> Email & Facebook -> Đối tác đồng hành -> Đối tác truyền thông.
5. Ghép nối vào `src/app/page.tsx` và kiểm tra neo liên kết `#dang-ky`.

## Success Criteria
- [ ] Bảng giá 2 gói hiển thị đúng icon quà tặng và máy quay video, giá Miễn phí / Tùy tâm nổi bật.
- [ ] Nút CTA cuộn hoặc liên kết mở Luma mượt mà.
- [ ] Đầy đủ 8 thành viên BTC với ảnh đại diện tròn và tên bên dưới.
- [ ] 6 logo đối tác hiển thị chuẩn nét, kích thước tương xứng, không bị nhòe vỡ.

## Risk Assessment
- **Logo đối tác nền trắng lẫn vào nền thẻ**:
  - *Giải pháp*: Áp dụng class `mix-blend-multiply` kết hợp padding và max-height hợp lý để logo hòa nhập tự nhiên trên thẻ trắng.
