// Tỉ lệ thu thập và hiệu ứng buff của Di vật.
// Nguồn: trang hỗ trợ chính thức Evil Hunter Tycoon. Tất cả Di vật có tỉ lệ 1/30.

const attackValues = 'Tăng Công 1 / 2 / 3.5 / 5.5 / 8 / 11 / 14.5 / 18.5 / 23 / 28%';
const defenseValues = 'Tăng Thủ 2 / 4 / 7 / 11 / 16 / 22 / 29 / 37 / 46 / 56%';
const hpValues = 'Tăng HP 2 / 4 / 7 / 11 / 16 / 22 / 29 / 37 / 46 / 56%';
const damageValues = 'Tăng sát thương 1.5 / 3 / 5.25 / 8.25 / 12 / 16.5 / 21.75 / 27.75 / 34.5 / 42%';
const classDamageValues = 'Khuếch đại sát thương gây lên kẻ địch 0.5 / 1 / 1.75 / 2.75 / 4 / 5.5 / 7.25 / 9.25 / 11.5 / 14%';
const criticalValues = 'Tăng sát thương chí mạng 1.5 / 3 / 5.25 / 8.25 / 12 / 16.5 / 21.75 / 27.75 / 34.5 / 42%';

export const relics = [
  {name: 'Mặt Dây Ngọc Bích', effect: attackValues, prob: '1/30'},
  {name: 'Giáp Tay Hủy Diệt', effect: attackValues, prob: '1/30'},
  {name: 'Bùa Hộ Mệnh Chiến Thần', effect: attackValues, prob: '1/30'},
  {name: 'Giáp Vai Mặt Trời', effect: defenseValues, prob: '1/30'},
  {name: 'Găng Tay Hộ Vệ', effect: defenseValues, prob: '1/30'},
  {name: 'Nước Suối Biển Sâu', effect: hpValues, prob: '1/30'},
  {name: 'Thuốc Sinh Lực', effect: hpValues, prob: '1/30'},
  {name: 'Sương Rừng', effect: hpValues, prob: '1/30'},
  {name: 'Nhẫn Gai', effect: criticalValues, prob: '1/30'},
  {name: 'Dấu Ấn Săn Bắn', effect: criticalValues, prob: '1/30'},
  {name: 'Giấy Da Thấu Thị', effect: criticalValues, prob: '1/30'},
  {name: 'Khúc Cầu Hồn Xanh', effect: damageValues + ' lên Boss', prob: '1/30'},
  {name: 'Lông Vũ Hắc Ám', effect: damageValues + ' lên Boss', prob: '1/30'},
  {name: 'Thẻ Người Quan Sát', effect: damageValues + ' lên Boss', prob: '1/30'},
  {name: 'Nanh Bùa Chú', effect: damageValues + ' lên Quái nhân', prob: '1/30'},
  {name: 'Xiềng Xích Hắc Ám', effect: damageValues + ' lên Quái nhân', prob: '1/30'},
  {name: 'Sọ Oan Hồn', effect: damageValues + ' lên Quái nhân', prob: '1/30'},
  {name: 'Ngọc Huyết', effect: damageValues + ' lên Quỷ', prob: '1/30'},
  {name: 'Hồn Lửa Xanh', effect: damageValues + ' lên Quỷ', prob: '1/30'},
  {name: 'Bia Linh Hồn', effect: damageValues + ' lên Xác sống', prob: '1/30'},
  {name: 'Lông Vũ Thanh Tẩy', effect: damageValues + ' lên Xác sống', prob: '1/30'},
  {name: 'Đai Kịch Độc', effect: damageValues + ' lên Thú', prob: '1/30'},
  {name: 'Trứng Khởi Nguyên', effect: damageValues + ' lên Thú', prob: '1/30'},
  {name: 'Cán Cân Giàu Có', effect: 'Tăng lượng Vàng nhận được 1 / 2 / 3.5 / 5.5 / 8 / 11 / 14.5 / 18.5 / 23 / 28%', prob: '1/30'},
  {name: 'Đồng Hồ Cát Sung Túc', effect: 'Tăng lượng Vàng nhận được 1 / 2 / 3.5 / 5.5 / 8 / 11 / 14.5 / 18.5 / 23 / 28%', prob: '1/30'},
  {name: 'Đoản Kiếm Cuồng Loạn', effect: 'Berserker: ' + classDamageValues, prob: '1/30'},
  {name: 'Lưỡi Hái Thánh Quang', effect: 'Paladin: ' + classDamageValues, prob: '1/30'},
  {name: 'Kính Đơn Tập Trung', effect: 'Xạ thủ: ' + classDamageValues, prob: '1/30'},
  {name: 'San Hô Ma Lực', effect: 'Pháp sư: ' + classDamageValues, prob: '1/30'},
  {name: 'Mảnh Gương Bóng Tối', effect: 'Kỵ sĩ Bóng Đêm: ' + classDamageValues, prob: '1/30'},
];

// Số lượng Di vật cần dùng để nâng từng cấp.
export const relicLevelUp = [
  {step: 'Lv.1 → Lv.2', count: 10},
  {step: 'Lv.2 → Lv.3', count: 15},
  {step: 'Lv.3 → Lv.4', count: 20},
  {step: 'Lv.4 → Lv.5', count: 25},
  {step: 'Lv.5 → Lv.6', count: 30},
  {step: 'Lv.6 → Lv.7', count: 35},
  {step: 'Lv.7 → Lv.8', count: 40},
  {step: 'Lv.8 → Lv.9', count: 45},
  {step: 'Lv.9 → Lv.10', count: 50},
];
