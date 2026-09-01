// Điểm danh dự và phần thưởng theo bậc của Giải Thách Đấu.
// rating là điểm xếp hạng tối thiểu để đạt bậc tương ứng.

export const challengerGroups = {
  'Cao Thủ': '#f3d275',
  'Kim Cương': '#c5d9f1',
  'Bạch Kim': '#d9ead3',
  'Vàng': '#fce3b0',
  'Bạc': '#dcdcdc',
  'Đồng': '#d9a404',
};

export const challengerTiers = [
  {group: 'Cao Thủ', tier: 'Cao Thủ 1', rating: 3600, honor: 700},
  {group: 'Cao Thủ', tier: 'Cao Thủ 2', rating: 3500, honor: 650},
  {group: 'Cao Thủ', tier: 'Cao Thủ 3', rating: 3400, honor: 600},
  {group: 'Cao Thủ', tier: 'Cao Thủ 4', rating: 3300, honor: 550},
  {group: 'Kim Cương', tier: 'Kim Cương 1', rating: 3200, honor: 500},
  {group: 'Kim Cương', tier: 'Kim Cương 2', rating: 3100, honor: 475},
  {group: 'Kim Cương', tier: 'Kim Cương 3', rating: 3000, honor: 450},
  {group: 'Kim Cương', tier: 'Kim Cương 4', rating: 2900, honor: 425},
  {group: 'Bạch Kim', tier: 'Bạch Kim 1', rating: 2800, honor: 400},
  {group: 'Bạch Kim', tier: 'Bạch Kim 2', rating: 2700, honor: 375},
  {group: 'Bạch Kim', tier: 'Bạch Kim 3', rating: 2600, honor: 350},
  {group: 'Bạch Kim', tier: 'Bạch Kim 4', rating: 2500, honor: 325},
  {group: 'Vàng', tier: 'Vàng 1', rating: 2400, honor: 300},
  {group: 'Vàng', tier: 'Vàng 2', rating: 2300, honor: 275},
  {group: 'Vàng', tier: 'Vàng 3', rating: 2200, honor: 250},
  {group: 'Vàng', tier: 'Vàng 4', rating: 2100, honor: 225},
  {group: 'Bạc', tier: 'Bạc 1', rating: 2000, honor: 200},
  {group: 'Bạc', tier: 'Bạc 2', rating: 1900, honor: 175},
  {group: 'Bạc', tier: 'Bạc 3', rating: 1800, honor: 150},
  {group: 'Bạc', tier: 'Bạc 4', rating: 1700, honor: 125},
  {group: 'Đồng', tier: 'Đồng 1', rating: 1600, honor: 100},
  {group: 'Đồng', tier: 'Đồng 2', rating: 1500, honor: 75},
  {group: 'Đồng', tier: 'Đồng 3', rating: 1400, honor: 50},
  {group: 'Đồng', tier: 'Đồng 4', rating: 1300, honor: 25},
];

export const rankingRewards = [
  {name: 'Phần thưởng hạng 1', cond: 'Hạng 1–3', token: 250, gem: 500},
  {name: 'Phần thưởng hạng 2', cond: 'Hạng 4–10', token: 200, gem: 400},
  {name: 'Phần thưởng hạng 3', cond: 'Hạng 11–20', token: 150, gem: 300},
  {name: 'Phần thưởng hạng 4', cond: 'Hạng 21–50', token: 125, gem: 250},
  {name: 'Phần thưởng hạng 5', cond: 'Hạng 51–100', token: 100, gem: 200},
  {name: 'Phần thưởng hạng 6', cond: 'Hạng 101–200', token: 70, gem: 140},
  {name: 'Phần thưởng hạng 7', cond: 'Hạng 201–300', token: 60, gem: 120},
  {name: 'Phần thưởng hạng 8', cond: 'Hạng 301–400', token: 50, gem: 100},
  {name: 'Phần thưởng hạng 9', cond: 'Hạng 401–500', token: 40, gem: 80},
  {name: 'Phần thưởng hạng 10', cond: 'Hạng 501–750', token: 30, gem: 60},
  {name: 'Phần thưởng hạng 11', cond: 'Hạng 751–1.000', token: 20, gem: 40},
  {name: 'Phần thưởng hạng 12', cond: 'Hạng 1.001–10.000', token: 10, gem: 20},
];

export const participationRewards = [
  {name: 'Thưởng tham gia 50 lần', cond: 'Tham gia từ 50 lần', token: 50, gem: 200},
  {name: 'Thưởng tham gia 35 lần', cond: 'Tham gia từ 35 lần', token: 20, gem: 100},
  {name: 'Thưởng tham gia 20 lần', cond: 'Tham gia từ 20 lần', token: 10, gem: 0},
];
