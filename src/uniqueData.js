// Thông tin trang bị Độc nhất, tổng hợp từ ghi chú cập nhật v1.317–v1.367.
// Trang bị có thể rơi ở bậc đầu tiên được ghi trong bảng và mọi bậc cao hơn.
// Tỉ lệ rơi tăng theo thứ tự: quái thường < Boss Hỗn Mang/Vực Thẳm < Boss Thế Giới.

export const uniqueModes = ['Hỗn Mang Boost', 'Vực Thẳm Boost'];

export const uniqueTimeline = [
  {stage: 'Hỗn Mang Boost 1–10', version: 'v1.317', date: '2024-02-06', note: 'Ra mắt trang bị Độc nhất'},
  {stage: 'Hỗn Mang Boost 11–20', version: 'v1.322', date: '2024-03-27', note: ''},
  {stage: 'Hỗn Mang Boost 21–30', version: 'v1.331', date: '2024-07-30', note: ''},
  {stage: 'Vực Thẳm Boost 1–10', version: 'v1.352', date: '2025-06-25', note: 'Bổ sung trang bị Độc nhất Vực Thẳm'},
  {stage: 'Vực Thẳm Boost 11–20', version: 'v1.356', date: '2025-09-29', note: ''},
  {stage: 'Vực Thẳm Boost 21–30', version: 'v1.367', date: '2026-02-09', note: ''},
];

// Số tùy chọn ngẫu nhiên = 5 trừ số tùy chọn riêng của trang bị.
export const uniques = [
  // Hỗn Mang Boost 1–10
  {name: 'Giáp Ngực Người Khổng Lồ Băng Giá', part: 'Áo giáp', mode: 'Hỗn Mang Boost', stage: '1–10',
    option: 'Khi bị đánh, có 10–25% tỉ lệ tung Sóng Băng Giá'},
  {name: 'Áo Giáp Khổ Hạnh', part: 'Áo giáp', mode: 'Hỗn Mang Boost', stage: '1–10',
    option: 'Khi bị đánh, hồi 1–5% Tâm trạng, Thể lực và Độ đói'},
  {name: 'Nắm Đấm Máu', part: 'Găng tay', mode: 'Hỗn Mang Boost', stage: '1–10',
    option: 'Luôn kích hoạt Cuồng Nộ Đẫm Máu cấp 1–3'},
  {name: 'Găng Tay Hecate', part: 'Găng tay', mode: 'Hỗn Mang Boost', stage: '1–10',
    option: 'Khi tấn công, có 10–25% tỉ lệ tung Chuỗi Nguyền Rủa'},
  {name: 'Giáp Nhẹ Cuồng Phong', part: 'Giáp nhẹ', mode: 'Hỗn Mang Boost', stage: '1–10',
    option: 'Khuếch đại Công bằng 3–10% mức tăng tốc chạy (tối đa 30%); tăng 15–30% tốc chạy. Dòng đầu là chỉ số cố định'},
  {name: 'Giáp Nhẹ Bất Khuất', part: 'Giáp nhẹ', mode: 'Hỗn Mang Boost', stage: '1–10',
    option: 'Khi bị hiệu ứng khống chế, giảm 30–50% sát thương nhận vào trong 6 giây'},
  {name: 'Mũ Phù Thủy Bí Ngô', part: 'Mũ giáp', mode: 'Hỗn Mang Boost', stage: '1–10',
    option: 'Khi tấn công, có 10–20% tỉ lệ tung Biến Hóa Bí Ngô'},
  {name: 'Mũ Juggernaut', part: 'Mũ giáp', mode: 'Hỗn Mang Boost', stage: '1–10',
    option: 'Thợ Săn có tính cách Liều Lĩnh được tăng 30% tốc chạy và tổng Công, đồng thời tăng 20–30% HP. Dòng đầu là chỉ số cố định'},
  {name: 'Thắt Lưng Lôi Long', part: 'Thắt lưng', mode: 'Hỗn Mang Boost', stage: '1–10',
    option: 'Luôn kích hoạt Cơn Thịnh Nộ Lôi Long cấp 1–3'},
  {name: 'Thắt Lưng Nhà Giả Kim', part: 'Thắt lưng', mode: 'Hỗn Mang Boost', stage: '1–10',
    option: 'Khi dùng thuốc, có 25–50% tỉ lệ không tiêu hao vật phẩm'},

  // Hỗn Mang Boost 11–20
  {name: 'Dây Chuyền Hades', part: 'Dây chuyền', mode: 'Hỗn Mang Boost', stage: '11–20',
    option: 'Luôn kích hoạt Vua Địa Ngục cấp 1–3'},
  {name: 'Dây Chuyền Đội Trưởng Cận Vệ', part: 'Dây chuyền', mode: 'Hỗn Mang Boost', stage: '11–20',
    option: 'Luôn kích hoạt Đặc Quyền Đội Trưởng Cận Vệ'},
  {name: 'Nhẫn Lốc Xoáy', part: 'Nhẫn', mode: 'Hỗn Mang Boost', stage: '11–20',
    option: 'Tăng 2–4 giây thời gian duy trì kỹ năng Lốc Xoáy'},
  {name: 'Nhẫn Trinity', part: 'Nhẫn', mode: 'Hỗn Mang Boost', stage: '11–20',
    option: 'Luôn kích hoạt Tam Vị Nhất Thể cấp 1–3'},

  // Hỗn Mang Boost 21–30
  {name: 'Mũ Minh Triết', part: 'Mũ giáp', mode: 'Hỗn Mang Boost', stage: '21–30',
    option: 'Tăng 1–3 cấp kỹ năng nghề bậc 2 và bậc 3'},
  {name: 'Thắt Lưng Sylph', part: 'Thắt lưng', mode: 'Hỗn Mang Boost', stage: '21–30',
    option: 'Khi tấn công, có 20% tỉ lệ tung Phước Lành Sylph cấp 1–3'},

  // Vực Thẳm Boost 1–10
  {name: 'Giáp Ngực Người Khổng Lồ Băng Giá Chân', part: 'Áo giáp', mode: 'Vực Thẳm Boost', stage: '1–10',
    option: 'Khi bị đánh, có 10–25% tỉ lệ tung Sóng Băng Giá Cường Hóa'},
  {name: 'Áo Giáp Hấp Thụ', part: 'Áo giáp', mode: 'Vực Thẳm Boost', stage: '1–10',
    option: 'Khi nhận lá chắn hấp thụ sát thương, giảm 15–30% sát thương nhận vào trong 6 giây'},
  {name: 'Nắm Đấm Máu Chân', part: 'Găng tay', mode: 'Vực Thẳm Boost', stage: '1–10',
    option: 'Luôn kích hoạt Cuồng Nộ Đẫm Máu Cường Hóa cấp 1–3'},
  {name: 'Bàn Tay Midas', part: 'Găng tay', mode: 'Vực Thẳm Boost', stage: '1–10',
    option: 'Tăng 35–50% lượng Vàng Thợ Săn nhận được'},
  {name: 'Giáp Nhẹ Cuồng Phong Chân', part: 'Giáp nhẹ', mode: 'Vực Thẳm Boost', stage: '1–10',
    option: 'Khuếch đại Công bằng 3–10% mức tăng tốc chạy (tối đa 40%); tăng 17–32% tốc chạy. Dòng đầu là chỉ số cố định'},
  {name: 'Ủng Ma Cà Rồng', part: 'Giáp nhẹ', mode: 'Vực Thẳm Boost', stage: '1–10',
    option: 'Cho phép tung Bùng Nổ Máu cấp 1–3'},

  // Vực Thẳm Boost 11–20
  {name: 'Dây Chuyền Hades Chân', part: 'Dây chuyền', mode: 'Vực Thẳm Boost', stage: '11–20',
    option: 'Luôn kích hoạt Vua Địa Ngục Cường Hóa cấp 1–3'},
  {name: 'Dây Chuyền Long Hộ', part: 'Dây chuyền', mode: 'Vực Thẳm Boost', stage: '11–20',
    option: 'Luôn kích hoạt Long Hộ cấp 1–3'},
  {name: 'Nhẫn Lốc Xoáy Chân', part: 'Nhẫn', mode: 'Vực Thẳm Boost', stage: '11–20',
    option: 'Tăng 4–6 giây thời gian duy trì kỹ năng Lốc Xoáy'},
  {name: 'Nhẫn Hy Sinh Hộ Vệ', part: 'Nhẫn', mode: 'Vực Thẳm Boost', stage: '11–20',
    option: 'Cho phép tung Hào Quang Hy Sinh cấp 1–3'},

  // Vực Thẳm Boost 21–30
  {name: 'Mũ Minh Triết Chân', part: 'Mũ giáp', mode: 'Vực Thẳm Boost', stage: '21–30',
    option: 'Tăng 3–5 cấp kỹ năng nghề bậc 2 và bậc 3'},
  {name: 'Vương Miện Chúa Tể Rồng', part: 'Mũ giáp', mode: 'Vực Thẳm Boost', stage: '21–30',
    option: 'Luôn kích hoạt Hơi Thở Cổ Đại cấp 1–3'},
  {name: 'Thắt Lưng Lôi Long Chân', part: 'Thắt lưng', mode: 'Vực Thẳm Boost', stage: '21–30',
    option: 'Luôn kích hoạt Cơn Thịnh Nộ Lôi Long Cường Hóa cấp 1–3'},
  {name: 'Thắt Lưng Lu', part: 'Thắt lưng', mode: 'Vực Thẳm Boost', stage: '21–30',
    option: 'Khi bị đánh, có 10–25% tỉ lệ gây Bùng Nổ Ánh Sáng'},
];

export const uniqueRandomOptions = [
  'Giảm 9–19% tiêu hao Tâm trạng', 'Giảm 9–19% tiêu hao Thể lực', 'Giảm 9–19% tiêu hao Độ đói',
  'Tăng 14–26% tổng Công', 'Tăng 14–26% tổng Thủ', 'Tăng 14–26% HP',
  'Tăng 7–14% Sức mạnh', 'Tăng 7–14% tốc đánh', 'Tăng 7–14% tỉ lệ chí mạng',
  'Tăng 9–19% tốc chạy', 'Tăng 7–14% kinh nghiệm nhận được',
  'Hút máu bằng 9–19% sát thương gây ra', 'Có 9–19% tỉ lệ giảm 25% sát thương nhận vào',
  'Khi hạ kẻ địch, có 9–19% tỉ lệ nhận gấp đôi Vàng', 'Có 9–19% tỉ lệ nhận thêm nguyên liệu',
  'Tăng 25–40% sát thương lên Boss', 'Tăng 25–40% sát thương lên Quái nhân',
  'Tăng 25–40% sát thương lên Quỷ', 'Tăng 25–40% sát thương lên Xác sống',
  'Tăng 25–40% sát thương lên Thú', 'Tăng 25–40% sát thương chí mạng',
];
