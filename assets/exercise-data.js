// =====================================================================
// 📝 KHO BÀI TẬP THTH2 — DÙNG CHUNG cho index.html (học viên làm bài)
//    và teacher.html (giáo viên xem bài làm + chấm).
// ⚠️ Sửa / thêm bài ở ĐÂY rồi tăng số ?v= trong 2 file html để máy tải bản mới.
//    Mỗi bài cần: id (mã bài dùng trong tab BaiTap), key, label (dạng bài), title,
//    mcq [{ q, sub?, opts, ans }], essay [{ q, hint?, fields, check, answer }].
// =====================================================================
window.EXERCISE_DATA = {
    11: [
        {
            id: 'U11-DOC',                       // mã bài — dùng trong tab "BaiTap" của Google Sheet
            key: 'reading',
            label: 'Đọc',
            title: 'Kế hoạch du lịch của 3 người',
            audio: 'assets/doc/unit11-doc.mp3', // file nghe bài đọc (đọc cả 3 đoạn)
            passages: [
                // segs: [bắt đầu, kết thúc (giây trong file nghe), câu/vế] -> chữ chạy highlight theo audio
                { name: '남', start: 0, segs: [
                    [0, 2.4, '저는 이번 방학에 배낭여행을 할 겁니다.'],
                    [3.15, 6.0, '그래서 지난 1년 동안 열심히 아르바이트를 했습니다.'],
                    [7.0, 8.8, '배낭여행은 한국으로 갈 겁니다.'],
                    [9.6, 11.2, '먼저 서울을 구경하고,'], [11.65, 13.35, '경주와 부산에도 갈 겁니다.'],
                    [14.35, 17.0, '경주에서는 불국사에서 사진을 많이 찍고,'], [17.6, 19.45, '부산에서는 유람선을 탈 겁니다.'],
                    [20.55, 24.75, '내년에는 더 열심히 아르바이트를 해서 유럽으로 배낭여행을 갈 겁니다.'] ] },
                { name: '박수빈', start: 25.9, segs: [
                    [26.0, 28.85, '저는 다음 연휴에 후에에 갈 겁니다.'],
                    [29.4, 33.7, '다낭도 좋지만, 후에는 다낭보다 사람들이 많지 않습니다.'],
                    [34.45, 38.0, '후에는 하노이에서 비행기로 1시간 정도 걸립니다.'],
                    [39.05, 43.1, '첫째 날에는 옛 왕궁을 보고, 호텔에서 쉴 겁니다.'],
                    [44.05, 47.8, '둘째 날에는 시내를 구경하고 시장에도 갈 겁니다.'],
                    [48.85, 53.6, '마지막 날에는 바다에 가서 물놀이도 하고 생선 요리를 먹을 겁니다.'] ] },
                { name: '풍', start: 54.5, segs: [
                    [54.66, 56.64, '저는 5년 후에 결혼할 겁니다.'],
                    [57.04, 59.18, '신혼여행은 싱가포르로 갈 겁니다.'],
                    [59.64, 61.6, '싱가포르에서 낮에는 쇼핑을 하고'], [61.94, 63.78, '밤에는 센토사 섬에 갈 겁니다.'],
                    [64.2, 65.6, '섬에서 쇼를 볼 겁니다.'],
                    [66.1, 68.9, '아내와 맛있는 음식을 먹고 맥주도 마실 겁니다.'],
                    [69.34, 70.74, '사진도 많이 찍을 겁니다.'] ] }
            ],
            // Từ vựng / biểu hiện cần lưu ý (img: hình minh hoạ cho danh từ chỉ sự vật)
            notes: [
                { ko: '아르바이트를 하다', vi: 'làm thêm, làm việc bán thời gian', ex: '지난 1년 동안 열심히 아르바이트를 했습니다.' },
                { ko: '유람선', vi: 'du thuyền, tàu du lịch', ex: '부산에서는 유람선을 탈 겁니다.', img: 'assets/doc/u11_yuramseon.svg' },
                { ko: '먼저 / 첫째 / 둘째 / 마지막', vi: 'trước tiên / thứ nhất / thứ hai / cuối cùng (kể trình tự)', ex: '첫째 날에는 … 둘째 날에는 … 마지막 날에는 …' },
                { ko: '물놀이', vi: 'vui chơi dưới nước, tắm biển', ex: '바다에 가서 물놀이도 하고 …' },
                { ko: '낮 – 밤', vi: 'ban ngày – ban đêm', ex: '낮에는 쇼핑을 하고 밤에는 센토사 섬에 갈 겁니다.' },
                { ko: '섬', vi: 'đảo, hòn đảo', ex: '센토사 섬에 갈 겁니다.', img: 'assets/doc/u11_seom.svg' },
                { ko: '쇼', vi: 'show, buổi biểu diễn', ex: '섬에서 쇼를 볼 겁니다.' },
                { ko: '맥주', vi: 'bia', ex: '맥주도 마실 겁니다.', img: 'assets/doc/u11_maekju.svg' }
            ],
            // Rê chuột / chạm vào từ trong bài đọc để xem nghĩa (khớp cụm dài nhất trước)
            glossary: {
                '이번': 'lần này', '방학': 'kỳ nghỉ (của học sinh, sinh viên)', '배낭여행': 'du lịch ba lô, du lịch bụi',
                '할 겁니다': 'sẽ làm', '그래서': 'vì vậy', '지난 1년 동안': 'suốt 1 năm qua', '열심히': 'chăm chỉ',
                '아르바이트': 'việc làm thêm', '했습니다': 'đã làm', '한국': 'Hàn Quốc', '갈 겁니다': 'sẽ đi',
                '먼저': 'trước tiên', '서울': 'Seoul', '구경하고': 'ngắm cảnh, tham quan … rồi', '경주': 'Gyeongju (cố đô của Hàn Quốc)',
                '부산': 'Busan', '불국사': 'chùa Bulguksa', '사진': 'ảnh, bức ảnh', '많이': 'nhiều', '찍고': 'chụp … rồi', '찍을 겁니다': 'sẽ chụp',
                '유람선': 'du thuyền', '탈 겁니다': 'sẽ đi (phương tiện)', '내년': 'năm sau', '더': 'hơn, thêm', '해서': 'làm … rồi / nên',
                '유럽': 'châu Âu', '다음': 'tới, sau', '연휴': 'kỳ nghỉ dài (nhiều ngày nghỉ liền nhau)', '후에': 'Huế',
                '다낭': 'Đà Nẵng', '좋지만': 'tốt nhưng', '다낭보다': 'so với Đà Nẵng', '사람들': 'mọi người, người ta',
                '많지 않습니다': 'không nhiều', '하노이': 'Hà Nội', '비행기로': 'bằng máy bay', '1시간 정도': 'khoảng 1 tiếng',
                '걸립니다': 'mất (thời gian)', '첫째 날': 'ngày thứ nhất', '옛 왕궁': 'hoàng cung xưa (Đại Nội)', '보고': 'xem … rồi',
                '호텔': 'khách sạn', '쉴 겁니다': 'sẽ nghỉ ngơi', '둘째 날': 'ngày thứ hai', '시내': 'nội thành, trung tâm thành phố',
                '시장': 'chợ', '마지막 날': 'ngày cuối cùng', '바다': 'biển',
                '가서': 'đi đến … rồi', '물놀이': 'vui chơi dưới nước', '생선 요리': 'món cá', '먹을 겁니다': 'sẽ ăn',
                '5년 후에': 'sau 5 năm nữa', '결혼할 겁니다': 'sẽ kết hôn', '신혼여행': 'tuần trăng mật', '싱가포르': 'Singapore',
                '낮': 'ban ngày', '쇼핑': 'mua sắm', '밤': 'ban đêm', '센토사 섬': 'đảo Sentosa', '섬': 'đảo', '쇼': 'show, buổi biểu diễn',
                '볼 겁니다': 'sẽ xem', '아내': 'vợ', '맛있는 음식': 'món ăn ngon', '먹고': 'ăn … rồi', '맥주': 'bia', '마실 겁니다': 'sẽ uống'
            },
            mcq: [
                { q: 'Chọn từ vựng đúng để điền vào chỗ trống.', sub: '남 씨는 지난 1년 동안 돈을 모아서 이번 방학에 한국으로 __________을/를 갈 겁니다.', opts: ['가족 여행', '신혼여행', '배낭여행', '국내 여행'], ans: 2 },
                { q: 'Chọn câu đúng với kế hoạch của 풍 씨.', sub: '풍 씨의 계획에 대한 설명으로 맞는 것을 고르십시오.', opts: ['풍 씨는 지금 싱가포르에 가고 있습니다.', '풍 씨는 5년 후에 싱가포르로 신혼여행을 갈 겁니다.', '풍 씨는 싱가포르에 가 본 적이 있습니다.', '풍 씨는 낮에 센토사 섬에서 쇼를 볼 겁니다.'], ans: 1 },
                { q: 'Dựa vào bài đọc, lý do nào có thể giải thích việc 수빈 씨 chọn Huế thay vì Đà Nẵng?', opts: ['후에는 다낭보다 관광지가 더 많기 때문입니다.', '후에는 다낭보다 사람이 적기 때문입니다.', '후에는 하노이에서 기차로 1시간 정도 걸리기 때문입니다.', '후에는 다낭보다 호텔이 더 좋기 때문입니다.'], ans: 1 },
                { q: 'Điền cụm từ phù hợp với ngữ pháp -거나.', sub: '수빈 씨는 마지막 날에 바다에 가서 __________ 생선 요리를 먹을 겁니다.', opts: ['물놀이를 하거나', '물놀이를 하고 있고', '물놀이를 한 적이 있거나', '물놀이를 하지 않거나'], ans: 0 },
                { q: 'Nam dự định làm gì tại 경주?', opts: ['유람선을 탈 겁니다.', '불국사에서 사진을 찍을 겁니다.', '시장에서 쇼핑을 할 겁니다.', '호텔에서 쉴 겁니다.'], ans: 1 },
                { q: 'Chọn câu có ngữ pháp và nội dung phù hợp nhất với bài đọc.', opts: ['남 씨는 서울을 구경하고 경주와 부산에도 갈 겁니다.', '남 씨는 서울을 구경하거나 경주와 부산에도 갈 겁니다.', '남 씨는 서울을 구경하고 있거나 경주에 갔습니다.', '남 씨는 서울을 구경한 적이 없거나 부산에 갑니다.'], ans: 0 },
                { q: 'Chọn nội dung đúng với lịch trình du lịch của 남 씨.', sub: '남 씨의 여행 일정에 맞는 것을 고르십시오.', opts: ['서울을 구경하기 전에 부산에 먼저 갈 겁니다.', '부산에서 유람선을 탈 겁니다.', '경주에서는 유람선을 타고 사진을 찍을 겁니다.', '이번 방학에 유럽으로 배낭여행을 갈 겁니다.'], ans: 1 },
                { q: 'Điền từ vựng phù hợp vào chỗ trống.', sub: '수빈 씨는 첫째 날에 옛 왕궁을 구경한 후에 __________에서 쉴 겁니다.', opts: ['여행사', '관광지', '호텔', '콘도'], ans: 2 },
                { q: 'Chọn câu có nội dung đúng với bài đọc.', opts: ['후에는 다낭보다 사람이 더 많습니다.', '풍 씨는 싱가포르에서 낮에 쇼핑을 할 겁니다.', '남 씨는 작년에 유럽으로 배낭여행을 다녀왔습니다.', '풍 씨는 5년 후에 결혼한 적이 있습니다.'], ans: 1 },
                { q: 'Dựa vào bài đọc, có thể hiểu như thế nào về kế hoạch du lịch của 남 씨?', opts: ['남 씨는 한국 여행을 다녀온 후에 여행을 안 할 겁니다.', '남 씨는 한국 여행을 먼저 하고, 나중에 유럽 여행도 할 계획입니다.', '남 씨는 유럽 여행을 위해 한국에서 아르바이트를 할 겁니다.', '남 씨는 한국과 유럽을 같은 해에 여행할 겁니다.'], ans: 1 }
            ],
            essay: [
                { q: '남 씨는 부산에서 무엇을 할 겁니까?', hint: 'Gợi ý: Trả lời bằng câu hoàn chỉnh với cấu trúc -(으)ㄹ 겁니다.', fields: [''], check: [['유람선', '타|탈|탑']], answer: '부산에서 유람선을 탈 겁니다.' },
                { q: '풍 dự định làm gì ở Singapore vào ban ngày và ban đêm?', fields: ['Ban ngày (낮)', 'Ban đêm (밤)'], check: [['쇼핑'], ['센토사|쇼(?!핑)']], answer: '낮: 쇼핑을 할 겁니다.<br>밤: 센토사 섬에 갈 겁니다. / 섬에서 쇼를 볼 겁니다.<br><i style="color:var(--sub-text);font-size:12px;">Phần buổi tối chấp nhận cả hai cách trả lời vì đều đúng với bài đọc.</i>' }
            ]
        }
    ]
};
