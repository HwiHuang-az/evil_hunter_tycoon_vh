// Bảng hạng tùy chọn trang bị Khởi Nguyên, Hỗn Mang và Vực Thẳm.
// Mảng v trong mỗi dòng lần lượt ứng với các hạng [MAX, SS, S, A, B, C].
// Chỉ số Vực Thẳm được suy ra bằng cách cộng thêm một lần mức chênh lệch
// giữa Khởi Nguyên và Hỗn Mang.

export const equipTierHeaders = ['MAX', 'SS', 'S', 'A', 'B', 'C'];

// Màu nền của tiêu đề và ô dữ liệu theo từng hạng.
export const equipGradeColors = {
  MAX: {head: '#33b5d6', cell: '#e2f4fa'},
  SS: {head: '#e03a3a', cell: '#fbe4e4'},
  S: {head: '#ee8a1e', cell: '#fdefdd'},
  A: {head: '#9d4fce', cell: '#f2e6fa'},
  B: {head: '#3567bf', cell: '#e3ecf9'},
  C: {head: '#8a8a8a', cell: '#efefef'},
};

const primordialCommon = [
  {opts: 'Tỉ lệ chí mạng, Tốc đánh, Sức mạnh, Kinh nghiệm', v: [12, 11, 10, 9, 7, 5]},
  {opts: 'Giảm sát thương, Hút máu, Vàng, Nguyên liệu, Tốc chạy, Đói, Tâm trạng, Thể lực', v: [17, 15, 13, 11, 9, 7]},
  {opts: 'Công, Thủ, HP', v: [23, 21, 19, 17, 14, 11]},
  {opts: 'Boss, Quái nhân, Xác sống, Quỷ, Thú, Sát thương chí mạng', v: [35, 32, 29, 26, 23, 20]},
];
const chaosCommon = [
  {opts: 'Tỉ lệ chí mạng, Tốc đánh, Sức mạnh, Kinh nghiệm', v: [14, 13, 12, 11, 9, 7]},
  {opts: 'Giảm sát thương, Hút máu, Vàng, Nguyên liệu, Tốc chạy, Đói, Tâm trạng, Thể lực', v: [19, 17, 15, 13, 11, 9]},
  {opts: 'Công, Thủ, HP', v: [26, 24, 22, 20, 17, 14]},
  {opts: 'Boss, Quái nhân, Xác sống, Quỷ, Thú, Sát thương chí mạng', v: [40, 37, 34, 31, 28, 25]},
];
const abyssCommon = [
  {opts: 'Tỉ lệ chí mạng, Tốc đánh, Sức mạnh, Kinh nghiệm', v: [16, 15, 14, 13, 11, 9]},
  {opts: 'Giảm sát thương, Hút máu, Vàng, Nguyên liệu, Tốc chạy, Đói, Tâm trạng, Thể lực', v: [21, 19, 17, 15, 13, 11]},
  {opts: 'Công, Thủ, HP', v: [29, 27, 25, 23, 20, 17]},
  {opts: 'Boss, Quái nhân, Xác sống, Quỷ, Thú, Sát thương chí mạng', v: [45, 42, 39, 36, 33, 30]},
];

const primordialWeapon = [
  {opts: 'Đại Thiên Thần, Đại Ác Ma', v: [12, 11, 10, 9, 7, 5]},
  {opts: 'Né tránh, Choáng, Lá chắn, Nguyền rủa, Hồi phục (Đói, Tâm trạng, Thể lực)', v: [17, 15, 13, 11, 9, 7]},
  {opts: 'Sát thương cộng thêm', v: [23, 21, 19, 17, 14, 11]},
];
const chaosWeapon = [
  {opts: 'Đại Thiên Thần, Đại Ác Ma', v: [14, 13, 12, 11, 9, 7]},
  {opts: 'Né tránh, Choáng, Lá chắn, Nguyền rủa, Hồi phục (Đói, Tâm trạng, Thể lực)', v: [19, 17, 15, 13, 11, 9]},
  {opts: 'Sát thương cộng thêm', v: [26, 24, 22, 20, 17, 14]},
];
const abyssWeapon = [
  {opts: 'Đại Thiên Thần, Đại Ác Ma', v: [16, 15, 14, 13, 11, 9]},
  {opts: 'Né tránh, Choáng, Lá chắn, Nguyền rủa, Hồi phục (Đói, Tâm trạng, Thể lực)', v: [21, 19, 17, 15, 13, 11]},
  {opts: 'Sát thương cộng thêm', v: [29, 27, 25, 23, 20, 17]},
];

export const equipGrades = [
  {id: 'Khởi Nguyên', label: 'Khởi Nguyên', common: primordialCommon, weapon: primordialWeapon},
  {id: 'Hỗn Mang', label: 'Hỗn Mang', common: chaosCommon, weapon: chaosWeapon},
  {id: 'Vực Thẳm', label: 'Vực Thẳm', common: abyssCommon, weapon: abyssWeapon},
];
