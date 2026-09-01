// Hướng dẫn các tùy chọn đặc biệt của trang bị thú cưỡi.
// Mỗi tùy chọn có mô tả hiệu ứng và danh sách nghề/kỹ năng được áp dụng.

export const petEquipSets = [
  {
    name: 'Biệt Đội Xung Kích Thép',
    hue: 197,
    items: [
      {part: 'Móng sắt', option: 'Giảm 10% sát thương nhận vào khi không bị khống chế'},
      {part: 'Yên ngựa', option: 'Khuếch đại 30% Thủ khi không bị khống chế'},
      {part: 'Dây cương', option: 'Khuếch đại 10% Công khi không bị khống chế'},
    ],
  },
  {
    name: 'Thợ Săn Hèn Hạ',
    hue: 285,
    items: [
      {part: 'Móng sắt', option: 'Tăng 10% sát thương gây lên kẻ địch đang bị làm chậm'},
      {part: 'Yên ngựa', option: 'Giảm 15% sát thương nhận từ kẻ địch đang bị làm chậm'},
      {part: 'Dây cương', option: 'Đòn đánh thường có 25% tỉ lệ giảm 50% tốc đánh của kẻ địch trong 3 giây'},
    ],
  },
  {
    name: 'Lời Nguyền Sa Ngã',
    hue: 8,
    items: [
      {
        part: 'Móng sắt',
        option: 'Khuếch đại 30% hiệu ứng giảm Công của kẻ địch',
        note: 'Áp dụng cho các nghề sử dụng kỹ năng hoặc đặc tính làm giảm Công của kẻ địch.',
        jobs: [
          {job: 'Chúa Tể Bóng Tối', skill: 'Biến Hình'},
          {job: 'Đặc tính Thợ Săn', skill: 'Nguyền Rủa'},
          {job: 'Xạ Thủ Tinh Tú', skill: 'Ngôi Sao Suy Nhược'},
        ],
      },
      {
        part: 'Yên ngựa',
        option: 'Tăng 10% sát thương của các đòn đánh có hiệu ứng bỏ qua Phòng thủ',
        note: 'Áp dụng cho các nghề có đòn đánh bỏ qua Phòng thủ. Aura Blade, Hands of God, Execution và Mystic Arrow chỉ nhận hiệu ứng khi đòn đánh bỏ qua cả Phòng thủ lẫn sức mạnh.',
        jobs: [
          {job: 'Kiếm Thánh', skill: 'Aura Blade'},
          {job: 'Thẩm Phán', skill: 'Hands of God'},
          {job: 'Trinh Sát', skill: 'Bom Độc'},
          {job: 'Chiến Binh', skill: 'Nghiền Nát'},
          {job: 'Kẻ Hủy Diệt', skill: 'Lốc Xoáy'},
          {job: 'Hành Quyết Giả', skill: 'Hành Quyết'},
          {job: 'Cung Thủ Bí Thuật', skill: 'Mũi Tên Huyền Bí'},
        ],
      },
      {
        part: 'Dây cương',
        option: 'Khuếch đại 20% hiệu ứng tăng sát thương kẻ địch phải nhận',
        note: 'Áp dụng cho các nghề có kỹ năng khiến kẻ địch phải nhận thêm sát thương.',
        jobs: [
          {job: 'Hiệp Sĩ Bóng Tối', skill: 'Vũ Khí Bóng Tối'},
          {job: 'Cung Thủ Triệu Hồi', skill: 'Triệu Hồi Phượng Hoàng'},
          {job: 'Sứ Giả Tử Thần', skill: 'Misteltein'},
        ],
      },
    ],
  },
  {
    name: 'Liên Kết Thần Thánh',
    hue: 52,
    items: [
      {
        part: 'Móng sắt',
        option: 'Khuếch đại 30% hiệu ứng của kỹ năng hồi phục và tạo lá chắn',
        note: 'Áp dụng cho các nghề sử dụng kỹ năng hồi phục hoặc tạo lá chắn.',
        jobs: [
          {job: 'Kẻ Diệt Quỷ', skill: 'Cuộn Xoáy Tử Thần'},
          {job: 'Thập Tự Quân', skill: 'Ban Phước'},
          {job: 'Nhạc Công', skill: 'Khúc Ca Hòa Bình'},
          {job: 'Đối Nghịch Giả', skill: 'Khiên Băng'},
          {job: 'Kiếm Đế', skill: 'Giáp Tử Thần'},
          {job: 'Đại Tư Tế', skill: 'Ân Huệ Ánh Sáng'},
          {job: 'Đại Tư Tế', skill: 'Ánh Sáng Sự Sống'},
        ],
      },
      {part: 'Yên ngựa', option: 'Khuếch đại 20% Thủ cho đồng minh ở gần'},
      {part: 'Dây cương', option: 'Khuếch đại 10% Công cho đồng minh ở gần'},
    ],
  },
];
