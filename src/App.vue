<template>
  <!-- Modal -->
  <div v-if="isOpened" class="black-bg" @click="isOpened=false">
    <div class="white-bg">
      <h4>Công thức tính tốc đánh</h4>
      <p>Tốc đánh cuối =
        Tốc đánh vũ khí * (1 - chỉ số - tính cách - bí pháp - liên minh - trang bị thú cưng - trang bị) / (1 + Fury + Quicken)</p>
      <p>{{ final_speed }} =
        {{ weapon_speed }} * (1 - {{ stat }} - {{ personality }} - {{ secret / 100 }} - {{ union_speed / 100 }} - {{ pet_equipment / 100 }} -
        {{ equip_speed / 100 }}) / (1 + {{ fury - 1 }} + {{ quicken - 1 }})</p>
    </div>
  </div>

  <a href="/evil_hunter_tycoon_vh/"><img alt="Evil Hunter Tycoon Việt hóa" class="title_img" src="./assets/eht_title.png"></a>
  <div>
    <a class="hits" href="https://hits.sh/hwihuang-az.github.io/evil_hunter_tycoon_vh/">
      <img alt="Lượt truy cập" src="https://hits.sh/hwihuang-az.github.io/evil_hunter_tycoon_vh.svg?view=today-total"/>
    </a>
    <h2>Bộ công cụ Evil Hunter Tycoon Việt Nam</h2>
  </div>

  <!-- Tab Buttons -->
  <div class="tab-buttons">
    <button :class="{ active: activeTab === 'attack' }" @click="activeTab = 'attack'">Tốc đánh</button>
    <button :class="{ active: activeTab === 'move' }" @click="activeTab = 'move'">Tốc chạy</button>
    <button :class="{ active: activeTab === 'kills' }" @click="activeTab = 'kills'">Số quái hạ</button>
    <button :class="{ active: activeTab === 'rune' }" @click="activeTab = 'rune'">Thông tin Rune</button>
    <button :class="{ active: activeTab === 'dogam' }" @click="activeTab = 'dogam'">Bộ sưu tập / Tỉ lệ</button>
    <button :class="{ active: activeTab === 'pet' }" @click="activeTab = 'pet'">Trang bị thú cưỡi</button>
    <button :class="{ active: activeTab === 'formation' }" @click="activeTab = 'formation'">Xếp đội hình</button>
    <button :class="{ active: activeTab === 'league' }" @click="activeTab = 'league'">Giải Thách Đấu</button>
    <button :class="{ active: activeTab === 'equipGrade' }" @click="activeTab = 'equipGrade'">Hạng tùy chọn trang bị</button>
    <button :class="{ active: activeTab === 'relic' }" @click="activeTab = 'relic'">Di vật</button>
    <button :class="{ active: activeTab === 'unique' }" @click="activeTab = 'unique'">Trang bị Độc nhất</button>
  </div>

  <!-- Attack Speed Calculator -->
  <div v-show="activeTab === 'attack'">
    <div class="calc-scroll">
    <table class="attack-table">
      <thead>
      <th v-for="item in items" :key="item">
        {{ item }}
      </th>
      </thead>
      <tbody>
      <td>
        <select v-model.trim.number="job" @change="change_job">
          <option disabled value="">Chọn nghề</option>
          <option value="0">Berserker</option>
          <option value="1">Pháp sư</option>
          <option value="2">Xạ thủ</option>
          <option value="3">Paladin</option>
          <option value="4">Kỵ sĩ Bóng Đêm</option>
        </select>
      </td>
      <td v-show="job===''"></td>
      <td v-show="job===0">
        <select v-model.trim.number="weapon_speed" @change="weapon_speed_cal">
          <option disabled value="">Chọn</option>
          <option value="2">Cổ Đại,Nguyên Thủy</option>
          <option value="2.2">Colosseum,Boss Thế Giới</option>
        </select>
      </td>
      <td v-show="job===1 || job===4">
        <select v-model.trim.number="weapon_speed" @change="weapon_speed_cal">
          <option disabled value="">Chọn</option>
          <option value="2.2">Cổ Đại,Nguyên Thủy</option>
          <option value="2.3">Colosseum,Boss Thế Giới</option>
        </select>
      </td>
      <td v-show="job===2">
        <select v-model.trim.number="weapon_speed" @change="weapon_speed_cal">
          <option disabled value="">Chọn</option>
          <option value="1.8">Cổ Đại,Nguyên Thủy</option>
          <option value="2">Colosseum,Boss Thế Giới</option>
        </select>
      </td>
      <td v-show="job===3">
        <select v-model.trim.number="weapon_speed" @change="weapon_speed_cal">
          <option disabled value="">Chọn</option>
          <option value="2.4">Cổ Đại,Nguyên Thủy</option>
          <option value="2.5">Colosseum,Boss Thế Giới</option>
        </select>
      </td>
      <td>
        <select v-model.trim.number="stat" @change="weapon_speed_cal">
          <option disabled value="">Chọn</option>
          <option value="0">Xám</option>
          <option value="0.1">Xanh lam</option>
          <option value="0.2">Cam</option>
          <option value="0.3">Tím</option>
        </select>
      </td>
      <td>
        <select v-model.trim.number="personality" @change="weapon_speed_cal">
          <option disabled value="">Chọn</option>
          <option value="0">Không có hiệu ứng</option>
          <option value="-0.1">Chậm chạp</option>
          <option value="0.07">Tinh thần Anh hùng</option>
          <option value="0.1">Nhanh nhẹn</option>
        </select>
      </td>
      <td>
        <input v-model.trim.number="secret" max="10" min="0" onfocus="this.value=''" placeholder="Nhập(%)" step="0.1"
               type="number" @input="weapon_speed_cal">
      </td>
      <td>
        <input v-model.trim.number="union_speed" max="5" min="0" onfocus="this.value=''" placeholder="Nhập(%)" type="number"
               @input="weapon_speed_cal">
      </td>
      <td>
        <select v-model.trim.number="pet_equipment" @change="weapon_speed_cal">
          <option disabled value="">Chọn</option>
          <option value="0">Không có</option>
          <option value="6">B</option>
          <option value="9">A</option>
          <option value="12">S</option>
        </select>
      </td>
      <td>
        <select v-model.trim.number="quicken" @change="weapon_speed_cal">
          <option disabled value="">Chọn</option>
          <option value="1">Lv.0</option>
          <option value="1.1">Lv.1</option>
          <option value="1.2">Lv.2</option>
          <option value="1.3">Lv.3</option>
          <option value="1.4">Lv.4</option>
          <option value="1.5">Lv.5</option>
        </select>
      </td>
      <td>
        <select v-model.trim.number="fury" @change="weapon_speed_cal">
          <option disabled value="">Chọn</option>
          <option value="1">Lv.0</option>
          <option value="2.38">Lv.1</option>
          <option value="4">Lv.10</option>
          <option value="4.18">Lv.11</option>
          <option value="4.36">Lv.12</option>
          <option value="4.54">Lv.13</option>
        </select>
      </td>
      </tbody>
    </table>
    </div>
    <div class="equip">
      <span>Tốc đánh từ Rune và trang bị: </span>
      <input v-model.trim.number="equip_speed" max="100" min="0" placeholder="Nhập(%)" type="number"
             @input="final_speed_cal">
    </div>
    <div class="final">
      <span>Tốc đánh cuối: </span>
      <input v-model.trim.number="final_speed" max="3" min="0.25" placeholder="Nhập(%)" step="0.01" type="number"
             @input="weapon_speed_cal">
      <br>
      <button @click="isOpened=true">Xem công thức</button>
    </div>
    <ol>
      <h3>⭐ ️Ghi Chú</h3>
      <li>Chọn nghề của Thợ Săn.</li>
      <li>Chọn vũ khí, chỉ số, tính cách, Quicken và Fury; sau đó nhập Bí pháp và tốc đánh Liên Minh.</li>
      <li>Nếu trang bị Rune Fury Lv.1/2/3, hãy chọn Fury Lv.11/12/13 tương ứng.</li>
      <li>Dựa trên <span class="final_inline">tốc đánh cuối</span> mặc định 0,25, công cụ sẽ tính
        <span class="equip_inline">tốc đánh cần có từ Rune và trang bị</span>. Bạn cũng có thể sửa trực tiếp
        <span class="final_inline">tốc đánh cuối</span>.
      </li>
      <li>Khi sửa <span class="equip_inline">tốc đánh từ Rune và trang bị</span>, công cụ sẽ tính lại
        <span class="final_inline">tốc đánh cuối</span>.</li>
      <li>Kết quả không được làm tròn để giữ độ chính xác.</li>
      <li>Ví dụ: nếu kết quả cần 82,955% tốc đánh từ Rune và trang bị, bạn phải đạt ít nhất 83%.</li>
      <li>Ví dụ: tốc đánh thực là 0,255 có thể hiển thị 0,25 trong game, nhưng sát thương mỗi giây vẫn được tính theo 0,255.</li>
    </ol>
  </div>

  <!-- Movement Speed Calculator -->
  <div v-show="activeTab === 'move'">
    <table class="move-speed-table">
      <tbody>
      <tr>
        <td>Buff hạng Thợ Săn</td>
        <td>
          <select v-model.number="moveBuffs.hunterRank">
            <option value="0">Không có</option>
            <option value="10">H (Anh hùng)</option>
            <option value="20">L (Huyền thoại)</option>
            <option value="30">U (Tối thượng)</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>Công trình (0–50)</td>
        <td class="slider-cell">
          <input type="range" min="0" max="50" step="1" v-model.number="moveBuffs.building">
          <input type="number" min="0" max="50" v-model.number="moveBuffs.building" class="slider-input">
        </td>
      </tr>
      <tr>
        <td>Ngoại trang (trang phục)</td>
        <td>
          <select v-model.number="moveBuffs.clothes">
            <option value="0">Không áp dụng</option>
            <option value="40">Áp dụng</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>Ngoại trang (cánh)</td>
        <td>
          <select v-model.number="moveBuffs.wings">
            <option value="0">Không áp dụng</option>
            <option value="20">Áp dụng</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>Ấn chương</td>
        <td>
          <select v-model.number="moveBuffs.seal">
            <option value="0">Không áp dụng</option>
            <option value="20">Áp dụng</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>Thú cưỡi</td>
        <td>
          <select v-model.number="moveBuffs.riding">
            <option value="0">Không áp dụng</option>
            <option value="30">Áp dụng</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>Bí pháp (0–15)</td>
        <td class="slider-cell">
          <input type="range" min="0" max="15" step="1" v-model.number="moveBuffs.secret">
          <input type="number" min="0" max="15" v-model.number="moveBuffs.secret" class="slider-input">
        </td>
      </tr>
       <tr>
        <td>Rune</td>
        <td><input type="number" v-model.number="moveBuffs.rune" placeholder="Nhập" class="full-width-input"></td>
      </tr>
      <tr>
        <td>Tổng tốc chạy trang bị, gồm Thần Gió</td>
        <td><input type="number" v-model.number="moveBuffs.equipmentTotal" placeholder="Nhập" class="full-width-input"></td>
      </tr>
      <tr>
        <td>Trang bị thú cưỡi (móng sắt)</td>
        <td>
          <select v-model.number="moveBuffs.horseshoe">
            <option value="0">Không có</option>
            <option value="15">B</option>
            <option value="30">A</option>
            <option value="45">S</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>Tính cách</td>
        <td>
          <select v-model.number="moveBuffs.personality">
            <option value="0">Không có</option>
            <option value="10">Chạy nhanh</option>
            <option value="7">Tinh thần Anh hùng</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>Linh Hồn Băng Giá (Cung Băng Hà)</td>
        <td>
          <select v-model.number="moveBuffs.frozenSoul">
            <option value="0">Không áp dụng</option>
            <option value="80">Áp dụng</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>Đại Ác Ma (Vũ khí Nguyên Thủy, Khởi Nguyên, Hỗn Mang, Vực Thẳm)</td>
        <td>
          <select v-model.number="moveBuffs.greatDemon">
            <option value="0">Không áp dụng</option>
            <option value="200">Áp dụng</option>
          </select>
        </td>
      </tr>
      </tbody>
    </table>
    <div class="move-speed-results">
      <h3>Kết quả tính toán</h3>
      <div class="result-item">
        <span class="label">Tổng mức tăng tốc chạy:</span>
        <span class="value">{{ totalMoveSpeed }}</span>
      </div>
      <div class="result-item result-note">
        <span class="label">Khuếch đại Công của Thần Cuồng Phong (tối đa 30%)</span>
      </div>
      <div class="result-item result-note">
        <span class="label">Khuếch đại Công của Chân Thần Cuồng Phong (tối đa 40%)</span>
      </div>
    </div>

    <div class="requirement-table-container">
        <h4>Tốc chạy yêu cầu theo mức khuếch đại</h4>
        <table>
            <thead>
                <tr>
                    <th>Mức khuếch đại</th>
                    <th>Thần Cuồng Phong (30%)</th>
                    <th>Mức khuếch đại còn thiếu</th>
                    <th>Chân Thần Cuồng Phong (40%)</th>
                    <th>Mức khuếch đại còn thiếu</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="rate in requirementRates" :key="rate">
                    <td>{{ rate }}%</td>
                    <td>{{ requiredSpeed(30, rate) }}</td>
                    <td :class="{met: isMet(requiredSpeed(30, rate))}">{{ deficit(requiredSpeed(30, rate)) }} ({{ currentAmp(30, rate) }}%)</td>
                    <td>{{ requiredSpeed(40, rate) }}</td>
                    <td :class="{met: isMet(requiredSpeed(40, rate))}">{{ deficit(requiredSpeed(40, rate)) }} ({{ currentAmp(40, rate) }}%)</td>
                </tr>
            </tbody>
        </table>
    </div>
  </div>

  <!-- Kills per Hour Calculator -->
  <div v-show="activeTab === 'kills'">
    <div class="kills-calculator-container">
      <table>
        <thead>
          <tr>
            <th>Tháng</th>
            <th>Ngày</th>
            <th>Giờ</th>
            <th>Phút</th>
            <th>Số quái</th>
            <th>Quái/giờ</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(record, index) in killsRecords" :key="index">
            <td><input type="number" v-model.number="record.month" min="1" max="12" placeholder="Tháng"></td>
            <td><input type="number" v-model.number="record.day" min="1" max="31" placeholder="Ngày"></td>
            <td><input type="number" v-model.number="record.hour" min="0" max="23" placeholder="Giờ"></td>
            <td><input type="number" v-model.number="record.minute" min="0" max="59" placeholder="Phút"></td>
            <td><input type="number" v-model.number="record.kills" min="0" placeholder="Số quái"></td>
            <td><input type="text" :value="record.kph !== null ? record.kph : ''" readonly class="kpm-display-input"></td>
          </tr>
        </tbody>
      </table>
      <div class="kills-buttons">
        <button @click="fillCurrentTime">Điền giờ hiện tại</button>
        <button @click="addKillsRecord">Thêm dòng</button>
        <button @click="resetKillsRecords">Xóa toàn bộ bảng</button>
        <button @click="resetExcludingLastKillsRecord">Giữ bản ghi cuối và đặt lại</button>
      </div>
      <ol class="kills-guide">
        <h3>⭐ Hướng dẫn sử dụng</h3>
        <li>Ở dòng đầu tiên, nhập tháng, ngày, giờ, phút hiện tại và tổng số quái của Thị trưởng.</li>
        <li>Nút <b>Điền giờ hiện tại</b> sẽ điền thời gian vào dòng trống kế tiếp; nếu hết dòng trống, hệ thống tự thêm dòng mới.</li>
        <li>Sau một khoảng thời gian, nhập thời gian và tổng số quái mới ở dòng kế tiếp. Công cụ sẽ tính số quái hạ được mỗi giờ dựa trên chênh lệch giữa hai bản ghi.</li>
        <li>Dùng nút <b>Thêm dòng</b> khi muốn ghi thêm dữ liệu.</li>
        <li>Nút <b>Xóa toàn bộ bảng</b> sẽ xóa mọi bản ghi và đưa bảng về bốn dòng trống ban đầu.</li>
        <li>Nút <b>Giữ bản ghi cuối và đặt lại</b> sẽ giữ bản ghi hợp lệ gần nhất ở dòng đầu rồi xóa các dòng còn lại. Nếu bản ghi cuối chưa đủ dữ liệu, toàn bộ bảng sẽ được đặt lại.</li>
      </ol>
    </div>
  </div>

  <!-- Rune Drop Info -->
  <div v-show="activeTab === 'rune'">
    <div class="rune-container">
      <div class="rune-floor-finder">
        <span class="rune-finder-label">Tầng hiện tại</span>
        <input type="number" min="1" max="300" v-model.number="currentFloor" placeholder="Ví dụ: 235">
        <div class="rune-floor-result" v-if="currentFloorStages">
          <span v-for="s in currentFloorStages" :key="s.name" class="floor-chip" :style="s.style">
            {{ s.name }} · {{ s.text }}
          </span>
        </div>
        <div class="rune-floor-result rune-floor-empty" v-else>Nhập một tầng từ 1 đến 300 để đánh dấu vị trí tương ứng trong bảng.</div>
      </div>

      <h3>Tầng nhận Rune</h3>
      <p class="rune-note">Mỗi ô tương ứng một khoảng cấp. Màu càng đậm thì cấp càng cao.</p>

      <div v-for="block in [0, 1, 2]" :key="block" class="rune-block">
        <h4>{{ block * 100 + 1 }} ~ {{ block * 100 + 100 }} tầng</h4>
        <div class="rune-scroll">
          <table class="rune-matrix">
            <thead>
            <tr>
              <th class="rune-row-label">Loại Rune</th>
              <th v-for="h in blockHeaders(block)" :key="h.from">{{ h.from }}<br>~{{ h.to }}</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="row in runeRows" :key="row.name">
              <th class="rune-row-label">{{ row.name }}</th>
              <td v-for="cell in blockCells(row, block)" :key="cell.from"
                  :colspan="cell.span"
                  :class="{ 'rune-empty': cell.stage === null, 'rune-active': isActiveCell(cell) }"
                  :style="cell.stage === null ? null : bandStyle(row, cell.stage)">
                {{ cell.stage === null ? 'Chưa xuất hiện' : 'Cấp ' + cell.stage }}
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h3>Chỉ số tùy chọn của Rune</h3>
      <p class="rune-note">Đây là <b>giá trị tối đa</b> theo từng cấp. Các tùy chọn trong cùng một nhóm có giá trị như nhau.</p>
      <div class="rune-scroll">
        <table class="rune-option-table">
          <thead>
          <tr>
            <th class="rune-row-label">Nhóm \ Cấp</th>
            <th v-for="n in 15" :key="n">{{ n }}</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="g in runeOptionGroups" :key="g.label">
            <th class="rune-row-label">{{ g.label }} - Nhóm</th>
            <td v-for="(v, i) in g.values" :key="i">{{ v }}</td>
          </tr>
          </tbody>
        </table>
      </div>
      <div class="rune-group-list">
        <div v-for="g in runeOptionGroups" :key="g.label" class="rune-group-item">
          <div class="rune-group-head"><span class="rune-group-badge">{{ g.label }}</span>{{ g.title }} ({{ g.options.length }} loại)</div>
          <div class="rune-group-options">{{ g.options.join(', ') }}</div>
        </div>
      </div>

      <h3>Danh sách Rune kỹ năng</h3>
      <table class="rune-skill-table">
        <tbody>
        <tr v-for="t in skillRuneList" :key="t.tier">
          <th>{{ t.tier }}<br>({{ t.runes.length }} loại)</th>
          <td>{{ t.runes.join(', ') }}</td>
        </tr>
        </tbody>
      </table>

      <ol class="rune-guide">
        <h3>⭐ Ghi Chú</h3>
        <li>Tất cả Rune chỉ xuất hiện tại <b>Sân trước Thành Ma Vương</b>. Tầng càng cao thì cấp Rune xuất hiện càng cao.</li>
        <li>Các Rune kỹ năng cùng bậc xuất hiện ở cùng tầng, không phụ thuộc loại kỹ năng.</li>
        <li>Rune chỉ số tăng 1 cấp sau mỗi 10 tầng từ tầng 1–100 và đạt cấp 10 ở tầng 91–100. Tầng 101–200 giữ cấp 10; từ tầng 201, cứ 20 tầng tăng 1 cấp đến cấp 15.</li>
        <li>Riêng Rune kỹ năng bậc 3 tiếp tục ở cấp 3 tại tầng 201–210, sau đó tăng theo mỗi 20 tầng.</li>
        <li>Cấp 11–15 chưa có dữ liệu chính thức về chỉ số tối thiểu nên bảng chỉ hiển thị giá trị tối đa.</li>
        <li>Nhóm A tăng 1 điểm tối đa sau mỗi 2 cấp đến cấp 10; từ cấp 11, mỗi cấp tăng 1 điểm.</li>
        <li>Nguồn: cộng đồng chính thức Evil Hunter Tycoon (Bảng tùy chọn Rune / Tầng xuất hiện Rune kỹ năng / Thông tin Rune tầng 201–300)</li>
      </ol>
    </div>
  </div>

  <!-- Collection / Box Probability -->
  <div v-show="activeTab === 'dogam'">
    <div class="dogam-container">
      <h3>Ưu tiên mở rương</h3>
      <p class="rune-note">Đây là tổng tỉ lệ của các vật phẩm bạn chưa sở hữu. Giá trị càng cao thì cơ hội nhận được vật phẩm mới trong một lần mở càng lớn.</p>
      <table class="dogam-priority">
        <thead>
        <tr>
          <th>Rương</th>
          <th>Loại còn thiếu</th>
          <th>Tỉ lệ còn lại</th>
          <th>Số lần mở dự kiến/vật phẩm mới</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="b in boxStats" :key="b.id" :class="{ 'best-box': b.id === bestBoxId }">
          <td class="box-name">
            {{ b.label }}
            <span v-if="b.id === bestBoxId" class="best-badge">Đề xuất</span>
          </td>
          <td>{{ b.remainCount }} / {{ b.total }} loại</td>
          <td class="remain-rate">{{ b.remainRate }}%</td>
          <td>{{ b.expected === null ? 'Hoàn tất' : b.expected + ' lần' }}</td>
        </tr>
        </tbody>
      </table>

      <div class="dogam-sections">
        <button v-for="s in dogamSectionList" :key="s.id"
                :class="{ active: dogamSection === s.id }"
                @click="dogamSection = s.id">{{ s.label }}</button>
      </div>

      <div class="dogam-tools">
        <label class="dogam-filter">
          <input type="checkbox" v-model="dogamHideOwned"> Chỉ hiện vật phẩm chưa có
        </label>
        <span class="dogam-tool-buttons">
          <button @click="setSectionOwned(true)">Chọn tất cả</button>
          <button @click="setSectionOwned(false)">Bỏ chọn tất cả</button>
        </span>
      </div>

      <!-- Bộ sưu tập -->
      <table v-if="dogamSection === 'sets'" class="dogam-table dogam-set-table">
        <thead>
        <tr>
          <th>Phân loại</th>
          <th>Tên vật phẩm</th>
          <th>Nguồn</th>
          <th>Tỉ lệ</th>
          <th>Đã sở hữu</th>
        </tr>
        </thead>
        <tbody>
        <template v-for="g in visibleSetGroups" :key="g.no">
          <tr class="set-head">
            <td colspan="5">
              {{ g.no }}. {{ g.set }}
              <span class="set-progress" :class="{ done: g.ownedCount === g.total }">{{ g.ownedCount }}/{{ g.total }}</span>
            </td>
          </tr>
          <tr v-for="(it, i) in g.items" :key="i" :class="{ owned: isOwned(it.key) }">
            <td>{{ it.cat }}</td>
            <td class="item-name">{{ it.name }}</td>
            <td :class="{ 'src-box': isBoxSource(it.src) }">{{ it.src || '-' }}</td>
            <td>{{ it.rate === null ? '-' : it.rate + '%' }}</td>
            <td><input type="checkbox" :checked="isOwned(it.key)" @change="toggleOwned(it.key)"></td>
          </tr>
        </template>
        <tr v-if="!visibleSetGroups.length">
          <td colspan="5" class="dogam-empty">Không có vật phẩm để hiển thị.</td>
        </tr>
        </tbody>
      </table>

      <!-- Rương bí mật Thị trưởng -->
      <table v-else-if="dogamSection === 'Rương Bí Mật'" class="dogam-table dogam-chonbi-table">
        <thead>
        <tr>
          <th>Phân loại</th>
          <th>Tên vật phẩm</th>
          <th>Tỉ lệ</th>
          <th>Đã sở hữu</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(it, i) in visibleChonbiItems" :key="i" :class="{ owned: it.key && isOwned(it.key) }">
          <td>{{ it.cat }}</td>
          <td class="item-name">{{ it.name }}</td>
          <td>{{ it.rate }}%</td>
          <td>
            <input v-if="it.key" type="checkbox" :checked="isOwned(it.key)" @change="toggleOwned(it.key)">
            <span v-else class="not-collectible">Không sưu tầm</span>
          </td>
        </tr>
        <tr v-if="!visibleChonbiItems.length">
          <td colspan="4" class="dogam-empty">Không có vật phẩm để hiển thị.</td>
        </tr>
        </tbody>
      </table>

      <!-- Lấp Lánh Ngoại trang Rương A / B -->
      <table v-else class="dogam-table dogam-box-table">
        <thead>
        <tr>
          <th>Phân loại</th>
          <th>Tên vật phẩm</th>
          <th>Bộ sưu tậpHiệu ứng</th>
          <th>Tỉ lệ</th>
          <th>Đã sở hữu</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(it, i) in visibleBoxItems" :key="i" :class="{ owned: isOwned(it.key) }">
          <td>{{ it.cat }}</td>
          <td class="item-name">{{ it.name }}</td>
          <td class="item-eff">{{ it.eff || '-' }}</td>
          <td>{{ it.rate }}%</td>
          <td><input type="checkbox" :checked="isOwned(it.key)" @change="toggleOwned(it.key)"></td>
        </tr>
        <tr v-if="!visibleBoxItems.length">
          <td colspan="5" class="dogam-empty">Không có vật phẩm để hiển thị.</td>
        </tr>
        </tbody>
      </table>

      <ol class="dogam-guide">
        <h3>⭐ Hướng dẫn sử dụng</h3>
        <li>Lựa chọn của bạn được lưu trong trình duyệt và vẫn còn khi quay lại trang.</li>
        <li>Vật phẩm đánh dấu trong Hộp ngoại trang lấp lánh A/B hoặc Rương bí mật Thị trưởng sẽ tự đồng bộ với Bộ sưu tập và ngược lại.</li>
        <li>Nên mở rương có <b>tỉ lệ vật phẩm còn thiếu</b> cao nhất để tăng cơ hội nhận vật phẩm mới.</li>
        <li>Rương bí mật Thị trưởng chỉ ghi nhận ngoại trang vào Bộ sưu tập; tiền tệ và vật phẩm không thể sưu tầm không được tính.</li>
        <li>Vật phẩm nhận từ Sân trước Thành ma vương, đá quý hoặc răng hàm cần được đánh dấu thủ công.</li>
        <li>Khi dùng lần đầu, cách nhanh nhất là chọn tất cả rồi bỏ chọn những vật phẩm bạn chưa có.</li>
      </ol>
    </div>
  </div>

  <!-- Riding Pet Equipment -->
  <div v-show="activeTab === 'pet'">
    <div class="pet-container">
      <h3>Hướng dẫn trang bị thú cưỡi</h3>
      <p class="rune-note">Mô tả kỹ năng áp dụng và nghề áp dụng được hiển thị chung trong một ô.</p>

      <div v-for="set in petEquipSets" :key="set.name" class="pet-set">
        <div class="pet-set-head" :style="petColor(set, 78)">{{ set.name }}</div>
        <div v-for="item in set.items" :key="item.part" class="pet-item">
          <div class="pet-item-head">
            <span class="pet-part" :style="petColor(set, 88)">{{ item.part }}</span>
            <span class="pet-option">{{ item.option }}</span>
          </div>
          <div v-if="item.note" class="pet-detail">
            <p class="pet-note">{{ item.note }}</p>
            <div class="pet-chips">
              <span v-for="j in item.jobs" :key="j.job + j.skill" class="pet-job">
                <b>{{ j.job }}</b> · {{ j.skill }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <ol class="pet-guide">
        <h3>⭐ Ghi Chú</h3>
        <li>Mỗi bộ gồm ba phần: <b>Móng sắt · Yên ngựa · Dây cương</b>.</li>
        <li>Chỉ những tùy chọn có đối tượng áp dụng cụ thể mới hiển thị mô tả và nghề bên dưới.</li>
        <li>Nhãn màu xanh biểu thị <b>Nghề · Kỹ năng tương ứng</b>.</li>
      </ol>
    </div>
  </div>

  <!-- Formation Editor -->
  <div v-show="activeTab === 'formation'">
    <div class="formation-container">
      <div class="formation-form">
        <input v-model.trim="newUnit.name" type="text" maxlength="12" placeholder="Tên nhân vật" @keyup.enter="addUnit">
        <input v-model.trim="newUnit.job" type="text" list="formation-job-list" placeholder="Nghề" @keyup.enter="addUnit">
        <datalist id="formation-job-list">
          <option v-for="job in jobOptions" :key="job" :value="job"></option>
        </datalist>
        <select v-model="newUnit.side">
          <option value="mine">Phe Ta</option>
          <option value="enemy">Đối Thủ</option>
        </select>
        <button @click="addUnit">Thêm</button>
        <label class="formation-reset-job">
          <input type="checkbox" v-model="resetJobOnAdd"> Đặt lại nghề sau khi thêm
        </label>
      </div>
      <p v-if="formationMessage" class="formation-message">{{ formationMessage }}</p>

      <div v-for="side in boardOrder" :key="side" class="formation-side">
        <div class="formation-side-head">
          <span class="formation-side-name" :class="side">{{ side === 'mine' ? 'Phe Ta Đội Hình' : 'Đối Thủ Đội Hình' }}</span>
          <span class="formation-count">{{ unitCount(side) }} / {{ maxUnits }}</span>
          <button class="formation-share" @click="exportSide(side)">Xuất mã</button>
          <button class="formation-share" @click="openLoad(side)">Tải mã</button>
          <button class="formation-clear" @click="clearSide(side)">Xóa đội hình</button>
        </div>
        <div v-if="shareBox.side === side" class="formation-share-box">
          <textarea v-model="shareBox.text" class="formation-share-text" rows="2"
                    :placeholder="shareBox.mode === 'export' ? '' : 'Dán mã đội hình đã nhận'"
                    @focus="$event.target.select()"></textarea>
          <div class="formation-share-actions">
            <button v-if="shareBox.mode === 'export'" @click="copyShare">Sao chép</button>
            <button v-else @click="loadSide(side)">Tải</button>
            <button @click="shareBox.side = null">Đóng</button>
          </div>
          <p v-if="shareBox.message" class="formation-share-msg">{{ shareBox.message }}</p>
        </div>
        <div class="formation-presets">
          <div class="formation-preset-title">Mẫu Lưu</div>
          <div v-for="(preset, i) in formationPresets[side]" :key="i" class="formation-preset-row"
               :class="{ filled: !!preset.code }">
            <input v-model="preset.name" class="formation-preset-name" maxlength="16"
                   :placeholder="'Mẫu Lưu ' + (i + 1)" @change="savePresets">
            <button class="formation-preset-save" @click="savePreset(side, i)">Lưu</button>
            <button class="formation-preset-load" :disabled="!preset.code" @click="applyPreset(side, i)">Tải</button>
          </div>
          <p v-if="presetMessage.side === side" class="formation-share-msg">{{ presetMessage.text }}</p>
        </div>
        <div class="formation-board" :ref="el => setBoardRef(side, el)" :style="boardStyle">
          <div v-for="tile in tilesOf(side)" :key="tile.i"
               class="ftile" :class="{ occupied: !!tile.unit }" :style="tileStyle(tile)">
            <div class="ftile-bg"></div>
            <span v-if="!tile.unit" class="ftile-num">{{ tile.num }}</span>
            <div v-else class="funit" :class="{ dragging: isDragging(side, tile.i) }"
                 @pointerdown="startDrag(side, tile, $event)">
              <span class="funit-name">{{ tile.unit.name }}</span>
              <span class="funit-job" :style="{ color: jobColor(tile.unit.job) }">{{ tile.unit.job }}</span>
              <button class="funit-del" @pointerdown.stop @click.stop="removeUnit(side, tile.i)">×</button>
            </div>
          </div>
        </div>
      </div>

      <div v-if="drag" class="funit drag-ghost" :style="ghostStyle">
        <span class="funit-name">{{ drag.unit.name }}</span>
        <span class="funit-job" :style="{ color: jobColor(drag.unit.job) }">{{ drag.unit.job }}</span>
      </div>

      <ol class="formation-guide">
        <h3>⭐ Hướng dẫn sử dụng</h3>
        <li>Nhập tên và nghề, chọn <b>Phe Ta / Đối Thủ</b>, rồi thêm nhân vật; hệ thống sẽ điền vào ô trống đầu tiên.</li>
        <li>Nếu bỏ trống tên, hệ thống tự đặt lần lượt là <b>Đồng Minh 1, Đồng Minh 2</b> hoặc <b>Kẻ Địch 1, Kẻ Địch 2</b>.</li>
        <li>Mỗi phe bố trí được <b>tối đa {{ maxUnits }} người</b>. Bàn có 16 ô nhưng chỉ xếp được 10 người.</li>
        <li>Nếu tắt <b>Đặt lại nghề sau khi thêm</b>, nghề đã chọn sẽ được giữ lại khi thêm nhiều nhân vật liên tiếp.</li>
        <li>Có thể <b>kéo</b> nhân vật sang ô khác bằng chuột hoặc thao tác cảm ứng.</li>
        <li>Nếu thả vào ô đã có nhân vật, hai nhân vật sẽ <b>đổi vị trí</b>.</li>
        <li>Có thể kéo nhân vật qua lại giữa đội hình Phe Ta và Đối Thủ.</li>
        <li>Số ô giống trong game; <b>ô số 1 của hai bên đối diện nhau</b> ở hàng đầu.</li>
        <li>Đội hình được lưu trong trình duyệt và vẫn còn khi bạn quay lại.</li>
        <li>Dùng <b>Xuất mã</b> để chia sẻ đội hình; dán mã đã nhận rồi chọn <b>Tải</b> để khôi phục. Đội hình Phe Ta và Đối Thủ được xử lý riêng.</li>
        <li>Bạn có 5 <b>mẫu lưu</b> cho đội hình thường dùng. Nút <b>Lưu</b> ghi đội hình hiện tại vào ô đã chọn; tên mẫu do bạn nhập. Các mẫu cũng được lưu trong trình duyệt.</li>
      </ol>
    </div>
  </div>

  <!-- Challengers League -->
  <div v-show="activeTab === 'league'">
    <div class="league-container">
      <h3>Bảng phần thưởng điểm danh dự theo bậc</h3>

      <div class="league-finder">
        <span class="league-finder-label">Điểm xếp hạng của tôi</span>
        <input type="number" min="0" v-model.number="myRating" placeholder="Ví dụ: 2450">
        <div v-if="myTier" class="league-result">
          <span class="league-result-tier" :style="{ backgroundColor: leagueColor(myTier.group) }">{{ myTier.tier }}</span>
          <span class="league-result-honor">Điểm danh dự {{ myTier.honor }}</span>
        </div>
        <div v-else class="league-result league-result-empty">
          {{ myRating ? 'Dưới Đồng IV nên chưa đủ điều kiện nhận thưởng.' : 'Nhập điểm xếp hạng để xác định bậc hiện tại.' }}
        </div>
      </div>

      <table class="league-table">
        <thead>
        <tr>
          <th>Bậc</th>
          <th>Điểm xếp hạng (tối thiểu)</th>
          <th>Điểm danh dự</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="row in challengerTiers" :key="row.tier"
            :class="{ 'league-current': myTier && myTier.tier === row.tier }"
            :style="{ backgroundColor: leagueColor(row.group) }">
          <td class="league-tier">{{ row.tier }}</td>
          <td>{{ row.rating }}</td>
          <td class="league-honor">{{ row.honor }}</td>
        </tr>
        </tbody>
      </table>

      <table class="league-table reward-table">
        <colgroup>
          <col class="reward-col-name">
          <col class="reward-col-cond">
          <col class="reward-col-token">
          <col class="reward-col-gem">
        </colgroup>
        <thead>
        <tr><th colspan="4" class="reward-title ranking">Xếp hạng Phần thưởng</th></tr>
        <tr>
          <th class="reward-head ranking">Tên phần thưởng</th>
          <th class="reward-head ranking">Điều kiện thứ hạng</th>
          <th class="reward-head ranking">Số token Đấu Trường</th>
          <th class="reward-head ranking">Đá quý Số lượng</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="row in rankingRewards" :key="row.name">
          <td class="reward-name">{{ row.name }}</td>
          <td>{{ row.cond }}</td>
          <td class="reward-token">{{ row.token }}</td>
          <td class="reward-gem">{{ row.gem }}</td>
        </tr>
        </tbody>
      </table>

      <table class="league-table reward-table">
        <colgroup>
          <col class="reward-col-name">
          <col class="reward-col-cond">
          <col class="reward-col-token">
          <col class="reward-col-gem">
        </colgroup>
        <thead>
        <tr><th colspan="4" class="reward-title joining">Tham Gia Phần thưởng</th></tr>
        <tr>
          <th class="reward-head joining">Tên phần thưởng</th>
          <th class="reward-head joining">Điều kiện số lần tham gia</th>
          <th class="reward-head joining">Số token Đấu Trường</th>
          <th class="reward-head joining">Đá quý Số lượng</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="row in participationRewards" :key="row.name">
          <td class="reward-name">{{ row.name }}</td>
          <td>{{ row.cond }}</td>
          <td class="reward-token">{{ row.token }}</td>
          <td class="reward-gem">{{ row.gem }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- Equipment Option Grade -->
  <div v-show="activeTab === 'equipGrade'">
    <div class="equip-grade-container">
      <div class="equip-grade-tabs">
        <button v-for="g in equipGrades" :key="g.id"
                :class="{ active: equipGradeTier === g.id }"
                @click="equipGradeTier = g.id">{{ g.id }}</button>
      </div>

      <h3>{{ currentEquipGrade.label }} Bảng hạng tùy chọn trang bị</h3>

      <div class="rune-scroll">
        <table class="equip-grade-table">
          <thead>
          <tr>
            <th class="equip-opt-head">Tùy chọn chung của trang bị</th>
            <th v-for="h in equipTierHeaders" :key="h" :style="equipGradeHeadStyle(h)">{{ h }}</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(row, i) in currentEquipGrade.common" :key="i">
            <td class="equip-opt">{{ row.opts }}</td>
            <td v-for="(val, j) in row.v" :key="j" :style="equipGradeCellStyle(j)">{{ val }}</td>
          </tr>
          </tbody>
        </table>
      </div>

      <div class="rune-scroll">
        <table class="equip-grade-table">
          <thead>
          <tr>
            <th class="equip-opt-head weapon">Tùy chọn dành riêng cho vũ khí</th>
            <th v-for="h in equipTierHeaders" :key="h" :style="equipGradeHeadStyle(h)">{{ h }}</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(row, i) in currentEquipGrade.weapon" :key="i">
            <td class="equip-opt">{{ row.opts }}</td>
            <td v-for="(val, j) in row.v" :key="j" :style="equipGradeCellStyle(j)">{{ val }}</td>
          </tr>
          </tbody>
        </table>
      </div>

      <ol class="rune-guide">
        <h3>⭐ Ghi Chú</h3>
        <li>Các giá trị là <b>mức tùy chọn tối đa</b> có thể xuất hiện ở từng phẩm chất (MAX–C).</li>
        <li>Các tùy chọn trong cùng một hàng có giá trị giống nhau ở từng phẩm chất.</li>
      </ol>
    </div>
  </div>

  <!-- Relic -->
  <div v-show="activeTab === 'relic'">
    <div class="relic-container">
      <h3>Di vật Buff Hiệu ứng</h3>
      <p class="rune-note">Tỉ lệ thu thập của mọi Di vật là 1/30. Chỉ số buff được liệt kê theo cấp Di vật 1–10.</p>
      <div class="rune-scroll">
        <table class="relic-table">
          <thead>
          <tr>
            <th>Tên Di vật</th>
            <th>Buff Hiệu ứng (Lv.1 ~ Lv.10)</th>
            <th>Tỉ lệ</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="r in relics" :key="r.name">
            <td class="relic-name">{{ r.name }}</td>
            <td class="relic-effect">{{ r.effect }}</td>
            <td>{{ r.prob }}</td>
          </tr>
          </tbody>
        </table>
      </div>

      <h3>Số lượng cần để nâng cấp Di vật</h3>
      <p class="rune-note">Mỗi Di vật được kích hoạt khi nhận món đầu tiên; bảng thể hiện số lượng cần cho các lần nâng cấp sau.</p>
      <div class="rune-scroll">
        <table class="relic-levelup-table">
          <thead>
          <tr>
            <th v-for="l in relicLevelUp" :key="l.step">{{ l.step }}</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td v-for="l in relicLevelUp" :key="l.step">{{ l.count }} món</td>
          </tr>
          </tbody>
        </table>
      </div>

      <ol class="rune-guide">
        <h3>⭐ Ghi Chú</h3>
        <li>Di vật dư sau khi đạt cấp tối đa (Lv.10) có thể đổi trong mục <b>Đổi Di vật dư</b>, mỗi món nhận 5 token Di vật.</li>
        <li>Thông tin này được áp dụng từ phiên bản 1.376.</li>
      </ol>
    </div>
  </div>

  <!-- Unique -->
  <div v-show="activeTab === 'unique'">
    <div class="unique-container">
      <div class="unique-tabs">
        <button v-for="m in uniqueModes" :key="m"
                :class="{ active: uniqueMode === m }" @click="uniqueMode = m">{{ m }}</button>
      </div>

      <p class="rune-note">
        Rơi trong chế độ {{ uniqueMode }} từ cấp được ghi và tiếp tục rơi ở các cấp cao hơn.
        Tỉ lệ rơi tăng theo thứ tự: quái thường &lt; Boss &lt; Boss Thế Giới.
      </p>

      <div v-for="stage in stagesOf(uniqueMode)" :key="stage" class="unique-stage-group">
        <h4>{{ uniqueMode }} {{ stage }}</h4>
        <div class="rune-scroll">
          <table class="unique-table">
            <thead>
            <tr>
              <th>Tên trang bị</th>
              <th>Phân loại</th>
              <th>Tùy chọn riêng</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="u in uniquesOf(uniqueMode, stage)" :key="u.name">
              <td class="unique-name">{{ u.name }}</td>
              <td>{{ u.part }}</td>
              <td class="unique-option">{{ u.option || 'Chưa có thông tin tùy chọn' }}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h3>Thông tin chung về trang bị Độc nhất</h3>
      <ol class="rune-guide">
        <li>Trang bị Độc nhất có <b>tổng cộng 5 tùy chọn</b>. Ngoài tùy chọn riêng, các dòng còn lại là tùy chọn ngẫu nhiên.</li>
        <li>Có thể thay đổi tùy chọn riêng bằng <b>Phước Lành Thiên Thần</b> hoặc <b>Phước Lành Đại Thiên Thần</b>. Phước Lành Thiên Thần có tỉ lệ thành công 25% và mua bằng 1.000 điểm Chiến Thắng; Phước Lành Đại Thiên Thần là vật phẩm trả phí.</li>
        <li>Một số trang bị Độc nhất (Giáp Nhẹ Cuồng Phong, Mũ Juggernaut và Chân Giáp Nhẹ Cuồng Phong) có thêm một <b>tùy chọn cố định ở dòng đầu</b>, ngoài tùy chọn riêng.</li>
        <li>Trang bị Độc nhất không nhận các tùy chọn ngẫu nhiên dành riêng cho vũ khí.</li>
        <li>Trang bị Độc nhất ở Boost Vực Thẳm cao hơn Boost Hỗn Mang một bậc về cấp vật phẩm, chỉ số và phạm vi tùy chọn.</li>
      </ol>

      <h3>Thời điểm bổ sung độ khó</h3>
      <div class="rune-scroll">
        <table class="unique-timeline-table">
          <thead>
          <tr>
            <th>Độ khó</th>
            <th>Phiên bản</th>
            <th>Ngày bổ sung</th>
            <th>Ghi chú</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="t in uniqueTimeline" :key="t.stage">
            <td class="timeline-stage">{{ t.stage }}</td>
            <td>{{ t.version }}</td>
            <td>{{ t.date }}</td>
            <td class="timeline-note">{{ t.note || '-' }}</td>
          </tr>
          </tbody>
        </table>
      </div>
      <p class="rune-note">Ngày của v1.331 và v1.367 lấy theo thông báo trước; bản cập nhật thực tế được phát hành trong vài ngày sau đó.</p>
    </div>
  </div>

  <div class="maker">
    <div v-for="(credit, i) in currentCredits" :key="i">{{ credit.role }}) {{ credit.name }}</div>
  </div>
</template>

<script>
import { dogamSets, boxAItems, boxBItems, chonbiItems, boxes } from './dogamData';
import { petEquipSets } from './petEquipData';
import { challengerTiers, challengerGroups, rankingRewards, participationRewards } from './challengerData';
import { equipGrades, equipTierHeaders, equipGradeColors } from './equipGradeData';
import { relics, relicLevelUp } from './relicData';
import { uniques, uniqueModes, uniqueTimeline } from './uniqueData';

const BOX_SOURCES = ['Lấp LánhA', 'Lấp LánhB', 'Rương Bí Mật'];

const TILE_W = 84;
const TILE_H = 60;
const MAX_UNITS = 10;
const JOB_COLORS = {
  'Oppositor': '#5fd0e8',
  'Star Shooter': '#7ee07e',
  'Battle Commander': '#ff8fd0',
  'Death Bringer': '#b98cff',
  'Đại Tư Tế': '#ffe9a8',
  'Mana Lord': '#66d9c8',
};

export default {
  name: 'App',
    data() {
      return {
              // Common
              activeTab: 'attack', // Set 'attack' as the default active tab
              isOpened: false,
              tabCredits: {
                attack: [
                  { role: 'Phát triển', name: 'HwiHuang' },
                  { role: 'Phát triển', name: 'HwiHuang' },
                ],
                move: [{ role: 'Phát triển', name: 'HwiHuang' }],
                kills: [{ role: 'Phát triển', name: 'HwiHuang' }],
                rune: [{ role: 'Việt hóa', name: 'HwiHuang' }],
                dogam: [{ role: 'Việt hóa', name: 'HwiHuang' }],
                pet: [{ role: 'Việt hóa', name: 'HwiHuang' }],
                formation: [{ role: 'Việt hóa', name: 'HwiHuang' }],
                league: [{ role: 'Việt hóa', name: 'HwiHuang' }],
                equipGrade: [{ role: 'Việt hóa', name: 'HwiHuang' }],
                relic: [{ role: 'Việt hóa', name: 'HwiHuang' }],
                unique: [{ role: 'Việt hóa', name: 'HwiHuang' }],
              },
        // Attack Speed Calculator
        job: '',
        weapon_speed: '',
        stat: '',
        personality: '',
        secret: '',
        union_speed: '',
        quicken: '',
        fury: '',
        equip_speed: '',
        final_speed: '',
        pet_equipment: '',
        items: ['Nghề', 'Vũ khí', 'Chỉ số tốc đánh', 'Tính cách', 'Bí pháp', 'Tốc đánh Liên Minh', 'Trang bị thú cưng', 'Quicken', 'Fury'],
  
        // Movement Speed Calculator
        moveBuffs: {
          hunterRank: 0,
          building: 0,
          clothes: 40,
          wings: 0,
          seal: 20,
          riding: 30,
          secret: 0,
          rune: 0,
          equipmentTotal: 0,
          horseshoe: 0,
          personality: 0,
          frozenSoul: 0,
          greatDemon: 0,
        },
        requirementRates: [3, 4, 5, 6, 7, 8, 9, 10],
  
        // Kills per Hour Calculator
        killsRecords: [
          { month: null, day: null, hour: null, minute: null, kills: null, kph: null },
          { month: null, day: null, hour: null, minute: null, kills: null, kph: null },
          { month: null, day: null, hour: null, minute: null, kills: null, kph: null }, // Added
          { month: null, day: null, hour: null, minute: null, kills: null, kph: null }, // Added
        ],
        killsLocalStorageKey: 'killsPerHourRecords', // Key for localStorage

        // Rune Drop Info
        currentFloor: null,
        runeRows: [
          {
            name: 'Rune chỉ số',
            hue: 210,
            maxStage: 15,
            bands: [
              { stage: 1, from: 1, to: 10 },
              { stage: 2, from: 11, to: 20 },
              { stage: 3, from: 21, to: 30 },
              { stage: 4, from: 31, to: 40 },
              { stage: 5, from: 41, to: 50 },
              { stage: 6, from: 51, to: 60 },
              { stage: 7, from: 61, to: 70 },
              { stage: 8, from: 71, to: 80 },
              { stage: 9, from: 81, to: 90 },
              { stage: 10, from: 91, to: 200 },
              { stage: 11, from: 201, to: 220 },
              { stage: 12, from: 221, to: 240 },
              { stage: 13, from: 241, to: 260 },
              { stage: 14, from: 261, to: 280 },
              { stage: 15, from: 281, to: 300 },
            ],
          },
          {
            name: 'Rune kỹ năng bậc 1',
            hue: 145,
            maxStage: 3,
            bands: [
              { stage: 1, from: 101, to: 130 },
              { stage: 2, from: 131, to: 160 },
              { stage: 3, from: 161, to: 300 },
            ],
          },
          {
            name: 'Rune kỹ năng bậc 2',
            hue: 25,
            maxStage: 8,
            bands: [
              { stage: 1, from: 111, to: 140 },
              { stage: 2, from: 141, to: 170 },
              { stage: 3, from: 171, to: 200 },
              { stage: 4, from: 201, to: 220 },
              { stage: 5, from: 221, to: 240 },
              { stage: 6, from: 241, to: 260 },
              { stage: 7, from: 261, to: 280 },
              { stage: 8, from: 281, to: 300 },
            ],
          },
          {
            name: 'Rune kỹ năng bậc 3',
            hue: 285,
            maxStage: 8,
            bands: [
              { stage: 1, from: 121, to: 150 },
              { stage: 2, from: 151, to: 180 },
              { stage: 3, from: 181, to: 210 },
              { stage: 4, from: 211, to: 230 },
              { stage: 5, from: 231, to: 250 },
              { stage: 6, from: 251, to: 270 },
              { stage: 7, from: 271, to: 290 },
              { stage: 8, from: 291, to: 300 },
            ],
          },
        ],
        runeOptionGroups: [
          {
            label: 'A',
            title: 'Tốc đánh · Né tránh · Tỉ lệ chí mạng',
            options: ['Tốc đánh %', 'Né tránh %', 'Tỉ lệ chí mạng %'],
            values: [1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 7, 8, 9, 10, 11],
          },
          {
            label: 'B',
            title: 'Tốc chạy · Hút máu · Hồi phục',
            options: ['Tốc chạy %', 'Sát thương Hút máu %', 'Nhận Sát thương 25% Giảm Tỉ lệ %', 'Sát thương cộng thêm khi tấn công %', 'Khi Tấn Công 3% Tâm trạng Hồi phục Tỉ lệ %', 'Khi Tấn Công 1% Thể lực Hồi phục Tỉ lệ %', 'Khi Tấn Công 3% Đói Hồi phục Tỉ lệ %'],
            values: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
          },
          {
            label: 'C',
            title: 'Lượng tiêu hao · Kinh nghiệm',
            options: ['Tâm trạng Lượng tiêu hao %', 'Thể lực Lượng tiêu hao %', 'Đói Lượng tiêu hao %', 'Nhận Kinh nghiệm %'],
            values: [4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32],
          },
          {
            label: 'D',
            title: 'Công · Thủ · HP · Thu thập',
            options: ['Tất cả Công %', 'Tất cả Thủ %', 'HP %', 'Tỉ lệ nhận gấp đôi Vàng %', 'Nguyên Liệu Thêm Nhận Tỉ lệ %'],
            values: [6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34],
          },
          {
            label: 'E',
            title: 'Sát thương chủng tộc · Sát thương chí mạng',
            options: ['Sát thương Quái nhân %', 'Sát thương Quỷ %', 'Sát thương Xác sống %', 'Sát thương Boss %', 'Sát thương Thú %', 'Sát thương chí mạng %'],
            values: [10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38],
          },
        ],
        skillRuneList: [
          { tier: 'Rune kỹ năng bậc 1', runes: ['Fury', 'Holy Light', 'Multi Shot', 'Thunderbolt'] },
          { tier: 'Rune kỹ năng bậc 2', runes: ['Dual Weapon', 'Death Coil', 'Pulverize', 'Blessing', 'Silver Weapon', 'Dark Weapon', 'Rainfall', 'Sniping', 'Summon Phoenix', 'Blizzard', 'Stone Curse', 'Meteor'] },
          { tier: 'Rune kỹ năng bậc 3', runes: ['Battle Shout', 'Aura Blade', 'Lốc Xoáy', 'Defense Aura', 'Hands of God', 'Execution', 'Song of Peace', 'Poison Bomb', 'Mystic Arrow', 'Summon Familiar', 'Polymorph', 'Nightmare'] },
        ],

        // Collection / Box Probability
        dogamOwned: {},
        dogamSection: 'sets',
        dogamHideOwned: false,
        dogamLocalStorageKey: 'dogamOwnedItems',
        dogamSectionList: [
          { id: 'sets', label: 'Bộ sưu tập' },
          { id: 'Lấp LánhA', label: 'Lấp Lánh A' },
          { id: 'Lấp LánhB', label: 'Lấp Lánh B' },
          { id: 'Rương Bí Mật', label: 'Rương bí mật Thị trưởng' },
        ],

        // Riding Pet Equipment
        petEquipSets,

        // Challengers League
        challengerTiers,
        rankingRewards,
        participationRewards,
        myRating: null,

        // Equipment Option Grade
        equipGrades,
        equipTierHeaders,
        equipGradeTier: 'Khởi Nguyên',

        // Relic / Unique
        relics,
        relicLevelUp,
        uniques,
        uniqueModes,
        uniqueTimeline,
        uniqueMode: 'Hỗn Mang Boost',

        // Formation Editor
        formation: { mine: new Array(16).fill(null), enemy: new Array(16).fill(null) },
        newUnit: { name: '', job: '', side: 'mine' },
        formationMessage: '',
        drag: null,
        boardRefs: {},
        boardOrder: ['enemy', 'mine'],
        formationLocalStorageKey: 'formationLayout',
        shareBox: { side: null, mode: 'export', text: '', message: '' },
        formationPresets: {
          mine: Array.from({ length: 5 }, () => ({ name: '', code: '' })),
          enemy: Array.from({ length: 5 }, () => ({ name: '', code: '' })),
        },
        presetMessage: { side: null, text: '' },
        presetLocalStorageKey: 'formationPresets',
        resetJobOnAdd: true,
        maxUnits: MAX_UNITS,
        jobOptions: [
          'Battle Commander', 'Sword Emperor', 'Oppositor', 'Mana Lord', 'Đại Tư Tế',
          'Holy Knight', 'Star Shooter', 'Dead Eye', 'Overlord', 'Death Bringer',
        ],
      };
    },
    computed: {
    totalMoveSpeed() {
      // Ensure all values are numbers before summing
      return Object.values(this.moveBuffs).reduce((sum, value) => sum + (Number(value) || 0), 0);
    },
    currentFloorStages() {
      const floor = Number(this.currentFloor);
      if (!floor || floor < 1 || floor > 300) return null;
      const columnStart = Math.floor((floor - 1) / 10) * 10 + 1;
      return this.runeRows.map(row => {
        const stage = this.stageAtColumn(row, columnStart);
        return {
          name: row.name,
          text: stage === null ? 'Chưa xuất hiện' : stage + 'Cấp',
          style: stage === null ? {} : this.bandStyle(row, stage),
        };
      });
    },
    boxStats() {
      return boxes.map(box => {
        const remain = box.items.filter(item => !this.dogamOwned[item.key]);
        const remainRate = remain.reduce((sum, item) => sum + (item.rate || 0), 0);
        return {
          id: box.id,
          label: box.label,
          total: box.items.length,
          remainCount: remain.length,
          remainRate: Math.round(remainRate * 1000) / 1000,
          expected: remainRate > 0 ? Math.ceil(100 / remainRate) : null,
        };
      });
    },
    bestBoxId() {
      const best = this.boxStats.reduce(
        (acc, b) => (b.remainRate > acc.remainRate ? b : acc),
        { remainRate: 0, id: null }
      );
      return best.remainRate > 0 ? best.id : null;
    },
    visibleSetGroups() {
      const groups = [];
      let current = null;
      dogamSets.forEach(item => {
        if (!current || current.no !== item.no) {
          current = { no: item.no, set: item.set, items: [], ownedCount: 0, total: 0 };
          groups.push(current);
        }
        current.total += 1;
        if (this.dogamOwned[item.key]) current.ownedCount += 1;
        if (!this.dogamHideOwned || !this.dogamOwned[item.key]) current.items.push(item);
      });
      return groups.filter(g => g.items.length > 0);
    },
    visibleBoxItems() {
      const items = this.dogamSection === 'Lấp LánhA' ? boxAItems : boxBItems;
      return this.dogamHideOwned ? items.filter(i => !this.dogamOwned[i.key]) : items;
    },
    visibleChonbiItems() {
      if (!this.dogamHideOwned) return chonbiItems;
      return chonbiItems.filter(i => !i.key || !this.dogamOwned[i.key]);
    },
    currentCredits() {
      return this.tabCredits[this.activeTab] || [];
    },
    myTier() {
      const rating = Number(this.myRating);
      if (!rating) return null;
      return challengerTiers.find(row => rating >= row.rating) || null;
    },
    currentEquipGrade() {
      return equipGrades.find(g => g.id === this.equipGradeTier) || equipGrades[0];
    },
    stagesOf() {
      return mode => {
        const seen = [];
        uniques.forEach(u => {
          if (u.mode === mode && seen.indexOf(u.stage) === -1) seen.push(u.stage);
        });
        return seen;
      };
    },
    uniquesOf() {
      return (mode, stage) => uniques.filter(u => u.mode === mode && u.stage === stage);
    },
    equipGradeHeadStyle() {
      return h => {
        const c = equipGradeColors[h];
        return c ? { backgroundColor: c.head, color: '#fff' } : {};
      };
    },
    equipGradeCellStyle() {
      return j => {
        const c = equipGradeColors[equipTierHeaders[j]];
        return c ? { backgroundColor: c.cell } : {};
      };
    },
    boardStyle() {
      return { width: TILE_W * 4 + 'px', height: TILE_H * 4 + 'px' };
    },
    ghostStyle() {
      return { left: this.drag.x + 'px', top: this.drag.y + 'px', width: TILE_W - 6 + 'px' };
    },
  },
  mounted() {
    this.loadKillsRecords();
    this.loadDogamOwned();
    this.loadFormation();
    this.loadPresets();
  },
  watch: {
    killsRecords: {
      handler() {
        this.saveKillsRecords();
        this.calculateKPHs(); // Recalculate KPMs on any change to records
      },
      deep: true
    },
    // Watch for changes in activeTab to calculate KPM only when the kills tab is active
    activeTab(newTab) {
      if (newTab === 'kills') {
        this.calculateKPHs();
      }
    },
  },
  methods: {
    // Challengers League Methods
    leagueColor(group) {
      return challengerGroups[group] || '#ffffff';
    },

    // Formation Editor Methods
    setBoardRef(side, el) {
      this.boardRefs[side] = el;
    },
    tilesOf(side) {
      const slots = this.formation[side];
      const tiles = [];
      for (let i = 0; i < 16; i++) {
        const r = Math.floor(i / 4);
        const c = i % 4;
        tiles.push({
          i, r, c,
          num: side === 'mine' ? i + 1 : 16 - i,
          x: (c - r) * (TILE_W / 2) + TILE_W * 1.5,
          y: (c + r) * (TILE_H / 2),
          unit: slots[i],
        });
      }
      return tiles;
    },
    tileStyle(tile) {
      return {
        left: tile.x + 'px',
        top: tile.y + 'px',
        width: TILE_W + 'px',
        height: TILE_H + 'px',
      };
    },
    jobColor(job) {
      if (JOB_COLORS[job]) return JOB_COLORS[job];
      let hash = 0;
      for (let i = 0; i < job.length; i++) {
        hash = (hash * 31 + job.charCodeAt(i)) % 360;
      }
      return `hsl(${hash}, 70%, 68%)`;
    },
    unitCount(side) {
      return this.formation[side].filter(Boolean).length;
    },
    sideLabel(side) {
      return side === 'mine' ? 'Phe Ta' : 'Đối Thủ';
    },
    autoName(side) {
      const prefix = side === 'mine' ? 'Đồng Minh' : 'Kẻ Địch';
      const used = new Set(this.formation[side].filter(Boolean).map(u => u.name));
      let n = 1;
      while (used.has(prefix + n)) n += 1;
      return prefix + n;
    },
    addUnit() {
      const side = this.newUnit.side;
      const job = this.newUnit.job;
      const name = this.newUnit.name || this.autoName(side);
      if (!this.newUnit.name && !job) {
        this.formationMessage = 'Hãy nhập ít nhất tên hoặc nghề.';
        return;
      }
      if (this.unitCount(side) >= MAX_UNITS) {
        this.formationMessage = this.sideLabel(side) + ' chỉ được bố trí tối đa ' + MAX_UNITS + ' người.';
        return;
      }
      const empty = this.formation[side].indexOf(null);
      if (empty === -1) {
        this.formationMessage = this.sideLabel(side) + ' không còn ô trống.';
        return;
      }
      this.formation[side][empty] = { name, job: job || 'Chưa xác định' };
      this.newUnit.name = '';
      if (this.resetJobOnAdd) this.newUnit.job = '';
      this.formationMessage = '';
      this.saveFormation();
    },
    removeUnit(side, index) {
      this.formation[side][index] = null;
      this.saveFormation();
    },
    clearSide(side) {
      this.formation[side] = new Array(16).fill(null);
      this.saveFormation();
    },
    encodeSide(side) {
      const parts = [];
      this.formation[side].forEach((unit, i) => {
        if (unit) parts.push([i, unit.name, unit.job].join('|'));
      });
      const body = parts.join(';');
      const b64 = btoa(String.fromCharCode(...new TextEncoder().encode(body)));
      return 'EHT1:' + b64;
    },
    decodeSide(code) {
      const trimmed = (code || '').trim();
      if (trimmed.indexOf('EHT1:') !== 0) {
        throw new Error('Mã đội hình không đúng định dạng.');
      }
      const bin = atob(trimmed.slice(5));
      const bytes = Uint8Array.from(bin, ch => ch.charCodeAt(0));
      const body = new TextDecoder().decode(bytes);
      const slots = new Array(16).fill(null);
      if (body) {
        body.split(';').forEach(part => {
          const [idx, name, job] = part.split('|');
          const i = Number(idx);
          if (Number.isInteger(i) && i >= 0 && i < 16 && name) {
            slots[i] = { name, job: job || 'Chưa xác định' };
          }
        });
      }
      return slots;
    },
    exportSide(side) {
      this.shareBox = { side, mode: 'export', text: this.encodeSide(side), message: '' };
    },
    openLoad(side) {
      this.shareBox = { side, mode: 'load', text: '', message: '' };
    },
    copyShare() {
      const text = this.shareBox.text;
      const done = () => { this.shareBox.message = 'Đã sao chép.'; };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done).catch(() => {
          this.shareBox.message = 'Sao chép thất bại. Hãy chọn và sao chép thủ công.';
        });
      } else {
        this.shareBox.message = 'Hãy chọn văn bản và sao chép thủ công.';
      }
    },
    applyCode(side, code) {
      let slots;
      try {
        slots = this.decodeSide(code);
      } catch (e) {
        return e.message || 'Không thể đọc mã đội hình.';
      }
      if (slots.filter(Boolean).length > MAX_UNITS) {
        return 'Mỗi phe chỉ tải được tối đa ' + MAX_UNITS + ' người.';
      }
      this.formation[side] = slots;
      this.saveFormation();
      return null;
    },
    loadSide(side) {
      const err = this.applyCode(side, this.shareBox.text);
      if (err) {
        this.shareBox.message = err;
        return;
      }
      this.shareBox.side = null;
    },
    savePreset(side, index) {
      this.formationPresets[side][index].code = this.encodeSide(side);
      this.savePresets();
      this.setPresetMessage(side, (index + 1) + ' đã lưu đội hình hiện tại.');
    },
    applyPreset(side, index) {
      const preset = this.formationPresets[side][index];
      if (!preset.code) return;
      const err = this.applyCode(side, preset.code);
      const label = preset.name || (index + 1) + ' - Mẫu lưu';
      this.setPresetMessage(side, err || label + ' đã được tải.');
    },
    setPresetMessage(side, text) {
      this.presetMessage = { side, text };
    },
    savePresets() {
      localStorage.setItem(this.presetLocalStorageKey, JSON.stringify(this.formationPresets));
    },
    loadPresets() {
      const saved = localStorage.getItem(this.presetLocalStorageKey);
      if (!saved) return;
      try {
        const parsed = JSON.parse(saved);
        ['mine', 'enemy'].forEach(side => {
          const slots = Array.from({ length: 5 }, () => ({ name: '', code: '' }));
          if (parsed && Array.isArray(parsed[side])) {
            parsed[side].slice(0, 5).forEach((p, i) => {
              if (p) slots[i] = { name: p.name || '', code: p.code || '' };
            });
          }
          this.formationPresets[side] = slots;
        });
      } catch (e) {
        // Giữ các mẫu mặc định nếu dữ liệu đã lưu bị lỗi.
      }
    },
    isDragging(side, index) {
      return !!this.drag && this.drag.side === side && this.drag.index === index;
    },
    startDrag(side, tile, event) {
      if (!tile.unit) return;
      event.preventDefault();
      this.drag = { side, index: tile.i, unit: tile.unit, x: event.clientX, y: event.clientY };
      window.addEventListener('pointermove', this.onDragMove);
      window.addEventListener('pointerup', this.onDragEnd);
      window.addEventListener('pointercancel', this.onDragEnd);
    },
    onDragMove(event) {
      if (!this.drag) return;
      this.drag.x = event.clientX;
      this.drag.y = event.clientY;
    },
    onDragEnd(event) {
      window.removeEventListener('pointermove', this.onDragMove);
      window.removeEventListener('pointerup', this.onDragEnd);
      window.removeEventListener('pointercancel', this.onDragEnd);
      if (!this.drag) return;
      const target = this.hitTest(event.clientX, event.clientY);
      if (target) this.moveUnit(this.drag.side, this.drag.index, target.side, target.index);
      this.drag = null;
    },
    hitTest(clientX, clientY) {
      for (const side of this.boardOrder) {
        const el = this.boardRefs[side];
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (clientX < rect.left || clientX > rect.right) continue;
        if (clientY < rect.top || clientY > rect.bottom) continue;
        const px = clientX - rect.left - TILE_W * 2;
        const py = clientY - rect.top - TILE_H / 2;
        const a = px / (TILE_W / 2);
        const b = py / (TILE_H / 2);
        const c = Math.round((a + b) / 2);
        const r = Math.round((b - a) / 2);
        if (r < 0 || r > 3 || c < 0 || c > 3) return null;
        return { side, index: r * 4 + c };
      }
      return null;
    },
    moveUnit(fromSide, fromIndex, toSide, toIndex) {
      if (fromSide === toSide && fromIndex === toIndex) return;
      const moving = this.formation[fromSide][fromIndex];
      const displaced = this.formation[toSide][toIndex];
      if (fromSide !== toSide && !displaced && this.unitCount(toSide) >= MAX_UNITS) {
        this.formationMessage = this.sideLabel(toSide) + ' chỉ được bố trí tối đa ' + MAX_UNITS + ' người.';
        return;
      }
      this.formationMessage = '';
      this.formation[toSide][toIndex] = moving;
      this.formation[fromSide][fromIndex] = displaced;
      this.saveFormation();
    },
    saveFormation() {
      localStorage.setItem(this.formationLocalStorageKey, JSON.stringify(this.formation));
    },
    loadFormation() {
      const saved = localStorage.getItem(this.formationLocalStorageKey);
      if (!saved) return;
      try {
        const parsed = JSON.parse(saved);
        ['mine', 'enemy'].forEach(side => {
          const slots = new Array(16).fill(null);
          if (parsed && Array.isArray(parsed[side])) {
            parsed[side].slice(0, 16).forEach((unit, i) => {
              if (unit && unit.name) slots[i] = { name: unit.name, job: unit.job || 'Chưa xác định' };
            });
          }
          this.formation[side] = slots;
        });
      } catch (e) {
        this.formation = { mine: new Array(16).fill(null), enemy: new Array(16).fill(null) };
      }
    },

    // Riding Pet Equipment Methods
    petColor(set, lightness) {
      return { backgroundColor: `hsl(${set.hue}, 75%, ${lightness}%)` };
    },

    // Collection / Box Probability Methods
    isOwned(key) {
      return !!this.dogamOwned[key];
    },
    isBoxSource(src) {
      return BOX_SOURCES.indexOf(src) !== -1;
    },
    toggleOwned(key) {
      if (this.dogamOwned[key]) {
        delete this.dogamOwned[key];
      } else {
        this.dogamOwned[key] = true;
      }
      this.saveDogamOwned();
    },
    setSectionOwned(value) {
      let keys;
      if (this.dogamSection === 'sets') {
        keys = dogamSets.map(i => i.key);
      } else if (this.dogamSection === 'Rương Bí Mật') {
        keys = chonbiItems.filter(i => i.key).map(i => i.key);
      } else {
        keys = (this.dogamSection === 'Lấp LánhA' ? boxAItems : boxBItems).map(i => i.key);
      }
      keys.forEach(key => {
        if (value) {
          this.dogamOwned[key] = true;
        } else {
          delete this.dogamOwned[key];
        }
      });
      this.saveDogamOwned();
    },
    saveDogamOwned() {
      localStorage.setItem(this.dogamLocalStorageKey, JSON.stringify(this.dogamOwned));
    },
    loadDogamOwned() {
      const saved = localStorage.getItem(this.dogamLocalStorageKey);
      if (saved) {
        try {
          this.dogamOwned = JSON.parse(saved) || {};
        } catch (e) {
          this.dogamOwned = {};
        }
      }
    },

    // Rune Drop Info Methods
    blockHeaders(block) {
      return Array.from({ length: 10 }, (_, i) => {
        const from = block * 100 + i * 10 + 1;
        return { from, to: from + 9 };
      });
    },
    stageAtColumn(row, columnStart) {
      const band = row.bands.find(b => columnStart >= b.from && columnStart + 9 <= b.to);
      return band ? band.stage : null;
    },
    blockCells(row, block) {
      const cells = [];
      for (let i = 0; i < 10; i++) {
        const from = block * 100 + i * 10 + 1;
        const stage = this.stageAtColumn(row, from);
        const last = cells[cells.length - 1];
        if (last && last.stage === stage) {
          last.span += 1;
        } else {
          cells.push({ stage, span: 1, from });
        }
      }
      return cells;
    },
    bandStyle(row, stage) {
      const ratio = row.maxStage > 1 ? (stage - 1) / (row.maxStage - 1) : 0;
      const lightness = 92 - ratio * 37;
      return {
        backgroundColor: `hsl(${row.hue}, 62%, ${lightness}%)`,
        color: lightness < 68 ? '#fff' : '#2c3e50',
      };
    },
    isActiveCell(cell) {
      const floor = Number(this.currentFloor);
      if (!floor) return false;
      return floor >= cell.from && floor <= cell.from + cell.span * 10 - 1;
    },

    // Kills Calculator Methods
    addKillsRecord() {
      this.killsRecords.push({ month: null, day: null, hour: null, minute: null, kills: null, kph: null });
    },
    fillCurrentTime() {
      let targetRecord = this.killsRecords.find(record =>
        [record.month, record.day, record.hour, record.minute].every(value => value === null || value === '')
      );

      if (!targetRecord) {
        this.addKillsRecord();
        targetRecord = this.killsRecords[this.killsRecords.length - 1];
      }

      const now = new Date();
      targetRecord.month = now.getMonth() + 1;
      targetRecord.day = now.getDate();
      targetRecord.hour = now.getHours();
      targetRecord.minute = now.getMinutes();
    },
    resetKillsRecords() {
      this.killsRecords = [
        { month: null, day: null, hour: null, minute: null, kills: null, kph: null },
        { month: null, day: null, hour: null, minute: null, kills: null, kph: null },
        { month: null, day: null, hour: null, minute: null, kills: null, kph: null },
        { month: null, day: null, hour: null, minute: null, kills: null, kph: null },
      ];
    },
    resetExcludingLastKillsRecord() {
      if (this.killsRecords.length > 0) {
        const lastRecordCandidate = this.killsRecords[this.killsRecords.length - 1];
        const isLastRecordComplete = [
          lastRecordCandidate.month,
          lastRecordCandidate.day,
          lastRecordCandidate.hour,
          lastRecordCandidate.minute,
          lastRecordCandidate.kills
        ].every(val => typeof val === 'number' && val !== null);

        if (isLastRecordComplete) {
          const lastRecord = { ...lastRecordCandidate }; // Deep copy
          lastRecord.kph = null; // Clear kph for the moved record
          this.killsRecords = [
            lastRecord,
            { month: null, day: null, hour: null, minute: null, kills: null, kph: null },
            { month: null, day: null, hour: null, minute: null, kills: null, kph: null }, // Ensure 4 initial rows
            { month: null, day: null, hour: null, minute: null, kills: null, kph: null },
          ];
        } else {
          this.resetKillsRecords(); // If last record is incomplete, reset all
        }
      } else {
        this.resetKillsRecords(); // If no records, just reset to empty state
      }
    },
    saveKillsRecords() {
      localStorage.setItem(this.killsLocalStorageKey, JSON.stringify(this.killsRecords));
    },
    loadKillsRecords() {
      const savedRecords = localStorage.getItem(this.killsLocalStorageKey);
      if (savedRecords) {
        this.killsRecords = JSON.parse(savedRecords);
      }
      // Ensure there are at least four records if loaded from empty or less than four
      if (this.killsRecords.length < 4) {
        while (this.killsRecords.length < 4) {
          this.killsRecords.push({ month: null, day: null, hour: null, minute: null, kills: null, kpm: null });
        }
      }
      this.calculateKPHs(); // Recalculate KPMs after loading
    },
    calculateKPHs() {
      for (let i = 0; i < this.killsRecords.length; i++) {
        if (i === 0) {
          this.killsRecords[i].kph = null; // First record has no previous record for comparison
          continue;
        }

        const currentRecord = this.killsRecords[i];
        const prevRecord = this.killsRecords[i - 1];

        // Ensure all necessary fields are numbers and not null
        const isValid = [
          currentRecord.month, currentRecord.day, currentRecord.hour, currentRecord.minute, currentRecord.kills,
          prevRecord.month, prevRecord.day, prevRecord.hour, prevRecord.minute, prevRecord.kills
        ].every(val => typeof val === 'number' && val !== null);

        if (isValid) {
          const currentTime = new Date(2000, currentRecord.month - 1, currentRecord.day, currentRecord.hour, currentRecord.minute);
          const prevTime = new Date(2000, prevRecord.month - 1, prevRecord.day, prevRecord.hour, prevRecord.minute);

          const timeDiffMinutes = (currentTime.getTime() - prevTime.getTime()) / (1000 * 60);
          const killDiff = currentRecord.kills - prevRecord.kills;

          if (timeDiffMinutes > 0) {
            currentRecord.kph = Math.round((killDiff / timeDiffMinutes) * 60); // Calculate kills per hour and round to nearest integer
          } else {
            currentRecord.kph = 0; // No time difference, or invalid time
          }
        } else {
          currentRecord.kph = null;
        }
      }
    },
    requiredSpeed(maxAmp, rate) {
        if (rate === 0) return 'N/A';
        return Math.ceil(maxAmp / (rate / 100));
    },
    currentAmp(maxAmp, rate) {
        const amp = Math.min(this.totalMoveSpeed * (rate / 100), maxAmp);
        return Math.round(amp * 10) / 10;
    },
    deficit(required) {
        if (required === 'N/A') return 'N/A';
        const diff = required - this.totalMoveSpeed;
        return diff > 0 ? diff : 'Đã đủ';
    },
    isMet(required) {
        if (required === 'N/A') return false;
        return this.totalMoveSpeed >= required;
    },
    change_job: function () {
      this.job_init(this.job);
    },
    job_init: function (job) {
      if (job === 0) {
        this.job = 0;
        this.weapon_speed = 2;
        this.quicken = 1;
        this.fury = 4;
        this.final_speed = 0.25;
        this.pet_equipment = 0;
        this.weapon_speed_cal();
      } else if (job === 1 || job === 4) {
        this.job = job;
        this.weapon_speed = 2.2;
        this.quicken = 1.5;
        this.fury = 1;
        this.final_speed = 0.25;
        this.pet_equipment = 0;
        this.weapon_speed_cal();
      } else if (job === 2) {
        this.job = 2;
        this.weapon_speed = 1.8;
        this.quicken = 1.5;
        this.fury = 1;
        this.final_speed = 0.25;
        this.pet_equipment = 0;
        this.weapon_speed_cal();
      } else if (job === 3) {
        this.job = 3;
        this.weapon_speed = 2.4;
        this.quicken = 1.5;
        this.fury = 1;
        this.final_speed = 0.25;
        this.pet_equipment = 0;
        this.weapon_speed_cal();
      }
    },
    weapon_speed_cal: function () {
      let equip_speed
          = (1.0 - this.stat - this.personality - this.secret / 100 - this.union_speed / 100 - this.pet_equipment / 100
          - this.final_speed / this.weapon_speed * (1.0 + this.fury - 1.0 + this.quicken - 1.0)) * 100
      if (equip_speed < 0) {
        this.equip_speed = 0;
      } else {
        this.equip_speed = equip_speed.toFixed(3);
      }
    },
    final_speed_cal: function () {
      let final_speed =
          this.weapon_speed
          * (1.0 - this.stat - this.personality - this.secret / 100 - this.union_speed / 100 - this.equip_speed / 100 - this.pet_equipment / 100)
          / (1.0 + this.fury - 1.0 + this.quicken - 1.0)
      if (final_speed < 0.25) {
        this.final_speed = 0.250
      } else {
        this.final_speed = final_speed.toFixed(3);
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

table {
  display: table;
  table-layout: fixed;
  width: 100%;
  text-align: center;
  border: 1px solid #2c3e50;
  border-collapse: collapse;
}

body {
  margin: 0 auto;
}

th {
  background: lightgrey;
}

th, td {
  display: table-cell;
  border: 1px solid #2c3e50;
  padding: 5px;
}

td > select, td > input {
  text-align: center;
  width: 100%;
  border: none;
  box-sizing: border-box;
}

/* Bảng tính tốc đánh có 9 cột; màn hình hẹp cho phép cuộn ngang. */
.calc-scroll {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.attack-table {
  min-width: 540px;
}

.attack-table th {
  word-break: keep-all;
  font-size: 13px;
  padding: 5px 2px;
}

input {
  width: 80px;
  text-align: center;
}

.equip, .final {
  margin: 30px;
}

.final, .final > input {
  color: darkred;
  font-size: 20px;
  font-weight: 900;
}

.equip, .equip > input {
  color: darkblue;
  font-size: 20px;
  font-weight: 900;
}

.black-bg {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
  z-index: 10;
}

.white-bg {
  width: calc(100% - 40px - 40px);
  position: absolute;
  top: 30%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}

button {
  font-size: 15px;
  padding: 10px 15px;
  border: 1px solid #ccc;
  background-color: #f0f0f0;
  cursor: pointer;
}

.tab-buttons {
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
}

.tab-buttons button {
  flex: 1 1 40%;
  max-width: 250px;
}

.tab-buttons button.active {
  background-color: #2c3e50;
  color: white;
  border-bottom: 2px solid #2c3e50;
}

ol {
  text-align: left;
  margin-top: 20px;
}

h3, h4 {
  margin-top: 20px;
  margin-bottom: 10px;
}

.final_inline {
  font-weight: 700;
  color: darkred;
}

.equip_inline {
  font-weight: 700;
  color: darkblue;
}

.title_img {
  width: 100%;
}

.hits {
  float: right;
}

.maker {
  box-sizing: border-box;
  width: 100%;
  padding: 5px;
  border-top: solid 1px;
  font-weight: 700;
  font-size: 13px;
  text-align: right;
  margin-top: 30px;
}

/* Move Speed Calculator Styles */
.move-speed-table {
  margin-top: 20px;
}

.move-speed-table td:first-child {
  width: 50%;
  text-align: left;
  padding-left: 15px;
  font-weight: bold;
}

.slider-cell {
    display: flex;
    align-items: center;
    gap: 10px;
}

.slider-cell input[type="range"] {
    flex-grow: 1;
}

.slider-cell .slider-input {
    width: 60px;
}

.full-width-input {
    width: 100%;
}

.move-speed-results {
  margin-top: 30px;
  padding: 20px;
  border: 2px solid #2c3e50;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.move-speed-results h3 {
  margin-top: 0;
  text-align: center;
}

.move-speed-results .result-item {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  font-size: 18px;
}

.move-speed-results .result-item .label {
  font-weight: bold;
}

.move-speed-results .result-item .value {
  color: darkblue;
  font-weight: bold;
}

.move-speed-results .result-item.result-note {
  justify-content: flex-start;
  padding: 4px 0;
  font-size: 15px;
  color: #555;
}

.requirement-table-container {
    margin-top: 30px;
}
.requirement-table-container td.met {
    color: green;
    font-weight: bold;
}


@media (min-width: 600px) {
  body {
    width: 600px;
  }

  .black-bg {
    box-sizing: border-box;
    width: 600px;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    padding: 20px;
  }

  .white-bg {
    width: calc(600px - 40px - 40px);
    position: absolute;
    top: 30%;
    background: white;
    border-radius: 8px;
    padding: 20px;
  }
}

/* Kills Calculator Styles */
.kills-calculator-container {
  margin-top: 20px;
}

.kills-calculator-container table {
  width: 100%;
}

.kills-calculator-container table input {
  width: 100%;
  padding: 5px;
  box-sizing: border-box;
}

.kills-calculator-container table th,
.kills-calculator-container table td {
  padding: 5px;
}

.kills-buttons {
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
  gap: 10px; /* Add gap between buttons */
}

.kills-buttons button {
  flex-grow: 1; /* Allow buttons to grow and fill space */
  max-width: none; /* Remove max-width constraint for these buttons */
}

.kills-calculator-container table input.kpm-display-input {
  background-color: #f0f0f0; /* Light grey background */
  color: #555; /* Slightly darker text color */
  font-weight: bold;
}

/* Rune Drop Info Styles */
.rune-container {
  margin-top: 20px;
}

.rune-floor-finder {
  padding: 15px;
  border: 2px solid #2c3e50;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.rune-finder-label {
  font-weight: bold;
  font-size: 18px;
  margin-right: 10px;
}

.rune-floor-result {
  margin-top: 12px;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  justify-content: center;
}

.rune-floor-result .floor-chip {
  padding: 5px 12px;
  border-radius: 14px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  font-size: 13px;
  font-weight: bold;
}

.rune-floor-empty {
  color: #888;
  font-size: 13px;
}

.rune-note {
  font-size: 13px;
  color: #666;
  margin: 0 0 10px;
  text-align: left;
}

.rune-block {
  margin-bottom: 20px;
}

.rune-block h4 {
  text-align: left;
  margin-bottom: 6px;
}

/* Dùng box-shadow để giữ đường viền cho ô cố định khi border-collapse được bật. */
.rune-scroll {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.rune-matrix, .rune-option-table {
  table-layout: auto;
  width: max-content;
  min-width: 100%;
  font-size: 12px;
  white-space: nowrap;
}

.rune-matrix th, .rune-matrix td,
.rune-option-table th, .rune-option-table td {
  padding: 6px 5px;
}

.rune-matrix thead th, .rune-option-table thead th {
  font-weight: normal;
  line-height: 1.3;
}

.rune-matrix td, .rune-option-table td {
  font-weight: bold;
}

.rune-row-label {
  position: sticky;
  left: 0;
  z-index: 1;
  background: lightgrey;
  font-weight: bold;
  text-align: left;
  box-shadow: 1px 0 0 #2c3e50;
}

.rune-matrix td.rune-empty {
  background-color: #eeeeee;
  color: #aaaaaa;
  font-weight: normal;
}

.rune-matrix td.rune-active {
  outline: 3px solid #d40000;
  outline-offset: -3px;
}

.rune-group-list {
  margin-top: 12px;
  text-align: left;
}

.rune-group-item {
  padding: 8px 0;
  border-bottom: 1px solid #e0e0e0;
}

.rune-group-head {
  font-weight: bold;
  font-size: 14px;
}

.rune-group-badge {
  display: inline-block;
  width: 20px;
  height: 20px;
  line-height: 20px;
  margin-right: 8px;
  border-radius: 50%;
  background-color: #2c3e50;
  color: white;
  text-align: center;
  font-size: 12px;
}

.rune-group-options {
  font-size: 13px;
  color: #555;
  margin-top: 3px;
  padding-left: 28px;
}

.rune-skill-table th {
  width: 90px;
  font-size: 13px;
}

.rune-skill-table td {
  text-align: left;
  font-size: 13px;
  line-height: 1.6;
}

.rune-guide li {
  margin-bottom: 5px;
}

/* Collection / Box Probability Styles */
.dogam-container {
  margin-top: 20px;
}

.dogam-priority {
  font-size: 13px;
}

.dogam-priority .box-name {
  text-align: left;
  font-weight: bold;
}

.dogam-priority .remain-rate {
  font-weight: bold;
  color: darkblue;
}

.dogam-priority tr.best-box {
  background-color: #fff4d6;
}

.dogam-priority tr.best-box .remain-rate {
  color: darkred;
}

.best-badge {
  display: inline-block;
  margin-left: 5px;
  padding: 1px 6px;
  border-radius: 9px;
  background-color: #d40000;
  color: white;
  font-size: 11px;
}

.dogam-sections {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

.dogam-sections button {
  flex: 1 1 20%;
  font-size: 13px;
  padding: 8px 5px;
}

.dogam-sections button.active {
  background-color: #2c3e50;
  color: white;
}

.dogam-tools {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;
  margin: 10px 0;
}

.dogam-filter {
  font-size: 13px;
  font-weight: bold;
  cursor: pointer;
}

.dogam-filter input {
  width: auto;
  margin-right: 4px;
  vertical-align: middle;
}

.dogam-tool-buttons button {
  font-size: 12px;
  padding: 6px 10px;
  margin-left: 5px;
}

.dogam-table {
  font-size: 12px;
}

.dogam-table th, .dogam-table td {
  padding: 5px 4px;
  word-break: break-word;
}

.dogam-table .item-name {
  text-align: left;
  font-weight: bold;
}

.dogam-table .item-eff {
  font-size: 11px;
  color: #555;
}

.dogam-table input[type="checkbox"] {
  width: 18px;
  height: 18px;
}

.dogam-table tr.owned {
  background-color: #f2f7f2;
  color: #999;
}

.dogam-table tr.owned .item-name {
  font-weight: normal;
}

.dogam-table .src-box {
  color: darkblue;
  font-weight: bold;
}

.dogam-table .not-collectible {
  font-size: 11px;
  color: #aaa;
}

.dogam-table .dogam-empty {
  padding: 20px;
  color: #888;
}

.dogam-set-table .set-head td {
  background-color: #e8eaed;
  text-align: left;
  font-weight: bold;
  font-size: 13px;
}

.set-progress {
  float: right;
  font-size: 12px;
  color: #d40000;
}

.set-progress.done {
  color: green;
}

.dogam-set-table th:nth-child(1), .dogam-set-table td:nth-child(1) { width: 16%; }
.dogam-set-table th:nth-child(3), .dogam-set-table td:nth-child(3) { width: 22%; }
.dogam-set-table th:nth-child(4), .dogam-set-table td:nth-child(4) { width: 15%; }
.dogam-set-table th:nth-child(5), .dogam-set-table td:nth-child(5) { width: 13%; }

.dogam-box-table th:nth-child(1), .dogam-box-table td:nth-child(1) { width: 14%; }
.dogam-box-table th:nth-child(3), .dogam-box-table td:nth-child(3) { width: 24%; }
.dogam-box-table th:nth-child(4), .dogam-box-table td:nth-child(4) { width: 13%; }
.dogam-box-table th:nth-child(5), .dogam-box-table td:nth-child(5) { width: 13%; }

.dogam-chonbi-table th:nth-child(1), .dogam-chonbi-table td:nth-child(1) { width: 20%; }
.dogam-chonbi-table th:nth-child(3), .dogam-chonbi-table td:nth-child(3) { width: 15%; }
.dogam-chonbi-table th:nth-child(4), .dogam-chonbi-table td:nth-child(4) { width: 15%; }

.dogam-guide li {
  margin-bottom: 5px;
}

/* Riding Pet Equipment Styles */
.pet-container {
  margin-top: 20px;
}

.pet-set {
  border: 1px solid #2c3e50;
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 14px;
}

.pet-set-head {
  padding: 8px 10px;
  font-weight: bold;
  font-size: 15px;
  text-align: left;
  border-bottom: 1px solid #2c3e50;
}

.pet-item {
  border-bottom: 1px solid #dcdcdc;
  padding: 8px 10px;
  text-align: left;
}

.pet-item:last-child {
  border-bottom: none;
}

.pet-item-head {
  display: flex;
  align-items: baseline;
  gap: 8px;
}

.pet-part {
  flex: 0 0 auto;
  padding: 2px 8px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  font-size: 12px;
  font-weight: bold;
}

.pet-option {
  font-size: 13px;
  font-weight: bold;
  line-height: 1.4;
}

.pet-detail {
  margin-top: 8px;
  padding: 8px;
  border-radius: 4px;
  background-color: #f7f7f7;
}

.pet-note {
  margin: 0 0 6px;
  font-size: 12px;
  color: #555;
  line-height: 1.5;
}

.pet-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}

.pet-job {
  padding: 3px 8px;
  border-radius: 10px;
  font-size: 11px;
  line-height: 1.4;
  background-color: #dbe7f5;
  color: #1c3d63;
}

.pet-guide li {
  margin-bottom: 5px;
}

/* Formation Editor Styles */
.formation-container {
  margin-top: 20px;
}

.formation-form {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  align-items: center;
  justify-content: center;
}

.formation-form input[type="text"] {
  flex: 1 1 100px;
  min-width: 0;
  padding: 7px 8px;
  box-sizing: border-box;
}

.formation-form select {
  padding: 7px 4px;
}

.formation-form button {
  padding: 7px 14px;
}

.formation-reset-job {
  flex: 1 1 100%;
  font-size: 13px;
  font-weight: bold;
  cursor: pointer;
}

.formation-reset-job input {
  width: auto;
  margin-right: 4px;
  vertical-align: middle;
}

.formation-message {
  margin: 8px 0 0;
  font-size: 13px;
  color: darkred;
  font-weight: bold;
}

.formation-side {
  margin-top: 16px;
}

.formation-side-head {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 4px;
}

.formation-side-name {
  font-weight: bold;
  font-size: 15px;
}

.formation-side-name.mine {
  color: #1a6ec4;
}

.formation-side-name.enemy {
  color: #c43a1a;
}

.formation-count {
  flex: 1 1 auto;
  text-align: left;
  font-size: 13px;
  color: #666;
}

.formation-clear, .formation-share {
  font-size: 12px;
  padding: 4px 10px;
}

.formation-share-box {
  margin: 6px 0 2px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 6px;
  background-color: #f7f7f7;
}

.formation-share-text {
  width: 100%;
  box-sizing: border-box;
  font-size: 12px;
  font-family: monospace;
  resize: vertical;
  word-break: break-all;
}

.formation-share-actions {
  margin-top: 6px;
  display: flex;
  gap: 6px;
}

.formation-share-actions button {
  font-size: 12px;
  padding: 4px 12px;
}

.formation-share-msg {
  margin: 6px 0 0;
  font-size: 12px;
  color: #1a6ec4;
  font-weight: bold;
}

.formation-presets {
  margin: 8px 0;
}

.formation-preset-title {
  font-size: 13px;
  font-weight: bold;
  text-align: left;
  margin-bottom: 4px;
}

.formation-preset-row {
  display: flex;
  gap: 5px;
  margin-bottom: 4px;
}

.formation-preset-name {
  flex: 1 1 auto;
  min-width: 0;
  padding: 5px 7px;
  box-sizing: border-box;
  font-size: 12px;
}

.formation-preset-row.filled .formation-preset-name {
  background-color: #eef5ff;
}

.formation-preset-save, .formation-preset-load {
  flex: 0 0 auto;
  font-size: 12px;
  padding: 5px 10px;
}

.formation-preset-load:disabled {
  color: #aaa;
  cursor: not-allowed;
}

.formation-board {
  position: relative;
  margin: 0 auto;
  background-color: #0b1712;
  border-radius: 6px;
}

.ftile {
  position: absolute;
}

.ftile-bg {
  position: absolute;
  inset: 0;
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  background-color: #3d4f47;
}

.ftile-bg::after {
  content: '';
  position: absolute;
  inset: 2px;
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  background-color: #0b1712;
}

.ftile.occupied .ftile-bg {
  background-color: #c3d64b;
}

.ftile-num {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 17px;
  font-weight: bold;
  color: #4f635a;
}

.funit {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 78px;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.25;
  cursor: grab;
  touch-action: none;
  user-select: none;
}

.funit.dragging {
  opacity: 0.25;
}

.funit-name {
  max-width: 100%;
  font-size: 10px;
  font-weight: bold;
  color: #ffffff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.funit-job {
  max-width: 100%;
  font-size: 10px;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.funit-del {
  position: absolute;
  right: 2px;
  top: -8px;
  width: 17px;
  height: 17px;
  padding: 0;
  border-radius: 50%;
  border: 1px solid #7c1d1d;
  background-color: #d03535;
  color: white;
  font-size: 12px;
  line-height: 1;
  cursor: pointer;
}

.drag-ghost {
  position: fixed;
  z-index: 20;
  pointer-events: none;
  padding: 3px 0;
  border-radius: 4px;
  background-color: rgba(11, 23, 18, 0.9);
  outline: 2px solid #c3d64b;
}

.formation-guide li {
  margin-bottom: 5px;
}

/* Challengers League Styles */
.league-container {
  margin-top: 20px;
}

.league-finder {
  padding: 15px;
  margin-bottom: 15px;
  border: 2px solid #2c3e50;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.league-finder-label {
  font-weight: bold;
  font-size: 18px;
  margin-right: 10px;
}

.league-result {
  margin-top: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.league-result-tier {
  padding: 4px 14px;
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  font-weight: bold;
  font-size: 14px;
}

.league-result-honor {
  font-weight: bold;
  font-size: 16px;
  color: darkred;
}

.league-result-empty {
  color: #888;
  font-size: 13px;
}

.league-table {
  font-size: 13px;
}

.league-table th {
  padding: 8px 4px;
}

.league-table td {
  padding: 7px 4px;
}

.league-table .league-tier {
  font-weight: bold;
}

.league-table .league-honor {
  font-weight: bold;
  color: #1a3d8f;
}

.league-table tr.league-current {
  outline: 3px solid #d40000;
  outline-offset: -3px;
}

/* Equipment Option Grade Styles */
.equip-grade-container {
  margin-top: 20px;
}

.equip-grade-tabs {
  display: flex;
  gap: 6px;
  justify-content: center;
  margin-bottom: 10px;
}

.equip-grade-tabs button {
  flex: 1 1 30%;
  max-width: 150px;
  font-size: 14px;
}

.equip-grade-tabs button.active {
  background-color: #2c3e50;
  color: white;
}

.equip-grade-table {
  table-layout: auto;
  width: 100%;
  font-size: 12px;
  word-break: keep-all;
  margin-bottom: 14px;
}

.equip-grade-table th, .equip-grade-table td {
  padding: 6px 8px;
}

.equip-grade-table .equip-opt-head {
  background-color: #d9d9d9;
}

.equip-grade-table .equip-opt-head.weapon {
  background-color: #c9c9c9;
}

.equip-grade-table .equip-opt {
  text-align: left;
  font-weight: bold;
  white-space: normal;
  min-width: 150px;
}

.equip-grade-table tbody td {
  font-weight: bold;
}

/* Relic Styles */
.relic-container {
  margin-top: 20px;
}

.relic-table {
  table-layout: auto;
  width: 100%;
  font-size: 12px;
  word-break: keep-all;
}

.relic-table th, .relic-table td {
  padding: 6px 8px;
}

.relic-table .relic-name {
  font-weight: bold;
  white-space: nowrap;
}

.relic-table .relic-effect {
  text-align: left;
}

.relic-levelup-table {
  table-layout: auto;
  width: 100%;
  font-size: 11px;
  word-break: keep-all;
}

.relic-levelup-table th, .relic-levelup-table td {
  padding: 6px 6px;
}

.relic-levelup-table td {
  font-weight: bold;
}

/* Unique Styles */
.unique-container {
  margin-top: 20px;
}

.unique-tabs {
  display: flex;
  gap: 6px;
  justify-content: center;
  margin-bottom: 10px;
}

.unique-tabs button {
  flex: 1 1 40%;
  max-width: 200px;
  font-size: 14px;
}

.unique-tabs button.active {
  background-color: #2c3e50;
  color: white;
}

.unique-stage-group {
  margin-bottom: 18px;
}

.unique-stage-group h4 {
  text-align: left;
  margin-bottom: 6px;
}

.unique-table {
  table-layout: auto;
  width: 100%;
  font-size: 12px;
  word-break: keep-all;
}

.unique-table th, .unique-table td {
  padding: 6px 8px;
}

.unique-table .unique-name {
  font-weight: bold;
}

.unique-table td:nth-child(2) {
  white-space: nowrap;
}

.unique-table .unique-option {
  text-align: left;
}

.unique-timeline-table {
  table-layout: auto;
  width: 100%;
  font-size: 12px;
  word-break: keep-all;
}

.unique-timeline-table th, .unique-timeline-table td {
  padding: 6px 8px;
}

.unique-timeline-table .timeline-stage {
  font-weight: bold;
  text-align: left;
}

.unique-timeline-table .timeline-note {
  text-align: left;
  white-space: normal;
}

.reward-table {
  margin-top: 25px;
  font-size: 12px;
}

.reward-title {
  color: white;
  font-size: 14px;
  padding: 8px 4px;
}

.reward-title.ranking {
  background-color: #c9905c;
}

.reward-title.joining {
  background-color: #4f9a2a;
}

.reward-head {
  font-weight: bold;
}

.reward-head.ranking {
  background-color: #ff9900;
}

.reward-head.joining {
  background-color: #9ccc5e;
}

.reward-table .reward-name {
  font-weight: bold;
}

.reward-table .reward-token {
  color: #b35c00;
  font-weight: bold;
}

.reward-table .reward-gem {
  color: #1a3d8f;
  font-weight: bold;
}

.reward-col-name { width: 23%; }
.reward-col-cond { width: 31%; }
.reward-col-token { width: 23%; }
.reward-col-gem { width: 23%; }
</style>
