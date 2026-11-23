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
    ],
    12: [
        {
            id: 'U12-DOC',
            key: 'reading',
            label: 'Đọc',
            title: 'Quy tắc ở nơi công cộng',
            // flow 'staged': làm theo 4 bước — 1 Biểu hiện mới + quiz → 2 Nghe 1 lần (0.8x) → 3 Đọc & trả lời → 4 Luyện đọc, thu âm
            flow: 'staged',
            audio: 'assets/doc/unit12-doc.m4a',
            listenSpeed: 0.8,
            passages: [
                { name: '(1) 미술관', img: 'assets/doc/u12_misulgwan.webp', start: 1.90, end: 16.05,
                  vi: 'Ở bảo tàng mỹ thuật phải giữ trật tự. Không được chạm tay vào tranh. Ngoài ra cũng không được chụp ảnh nên tuyệt đối đừng chụp. Được phép sử dụng điện thoại di động. Tuy nhiên, đừng nói chuyện to. Có thể vừa uống trà vừa nghỉ ngơi.',
                  segs: [
                    [2.05, 4.45, '미술관에서는 질서를 지켜야 합니다.'],
                    [4.50, 5.95, '그림에 손을 대면 안 돼요.'],
                    [6.10, 9.30, '그리고 사진도 찍으면 안 되니까 절대로 찍지 마세요.'],
                    [10.00, 11.70, '휴대전화는 사용해도 돼요.'],
                    [11.75, 13.60, '그렇지만 크게 이야기하지 마세요.'],
                    [14.02, 15.90, '차를 마시면서 쉬어도 좋아요.'] ] },
                { name: '(2) 병원', img: 'assets/doc/u12_byeongwon.webp', start: 19.90, end: 36.25,
                  vi: 'Anh Phùng, ngày mai anh sẽ đến bệnh viện nơi anh Min-jae nhập viện phải không? Nhất định phải tuân thủ giờ thăm bệnh của bệnh viện. Giờ thăm bệnh là từ 1 giờ đến 5 giờ chiều. Không được mang hoa vào phòng bệnh. Anh đi cẩn thận nhé.',
                  segs: [
                    [20.05, 20.60, '풍 씨,'],
                    [20.95, 23.68, '내일 민재 씨가 입원한 병원에 갈 거지요?'],
                    [24.70, 27.24, '병원 면회 시간을 꼭 지켜야 합니다.'],
                    [27.90, 31.18, '면회 시간은 오후 1시부터 5시까지예요.'],
                    [31.95, 34.32, '병실에 꽃은 가져가면 안 돼요.'],
                    [35.08, 36.12, '잘 다녀오세요.'] ] },
                { name: '(3) 연주회', img: 'assets/doc/u12_yeonjuhoe.webp', start: 39.85, end: 54.20,
                  vi: 'Cuối tuần trước tôi đã cùng bạn đi xem buổi hòa nhạc piano. Không được vừa nghe biểu diễn vừa ăn. Vì vậy chúng tôi ăn tối trước rồi mới vào hội trường. Vừa ngồi vào chỗ, tôi tắt điện thoại. Vì trong buổi hòa nhạc không được để phát ra tiếng động.',
                  segs: [
                    [40.00, 42.64, '지난 주말 친구와 피아노 연주회에 갔어요.'],
                    [43.02, 45.20, '연주를 들으면서 음식을 먹으면 안 돼요.'],
                    [45.74, 47.38, '그래서 먼저 저녁을 먹고'],
                    [47.66, 48.98, '연주회장에 들어갔어요.'],
                    [49.78, 51.84, '자리에 앉으면서 휴대전화를 껐어요.'],
                    [52.20, 54.15, '연주회 때 소리가 나면 안 되니까요.'] ] }
            ],
            // Bước 1: biểu hiện mới (p = đoạn có biểu hiện, t = [bắt đầu, kết thúc] câu chứa biểu hiện trong file nghe)
            vocab: [ // fill.opts[0] = đáp án đúng (trộn khi hiện); cat = nhóm chủ đề cho dạng 'chọn từ khác nhóm'
                                { ko: '질서를 지키다', hl: '질서를 지켜야', vi: 'giữ trật tự', ex: '미술관에서는 질서를 지켜야 합니다.', t: [2.05, 4.45], img: 'assets/doc/u12v/01.webp', exVi: 'Ở bảo tàng mỹ thuật phải giữ trật tự.', cat: 'mus',
                  fill: { q: '미술관에서는 ___ 합니다. 조용히 그림을 봐야 해요.', opts: ['질서를 지켜야', '소리가 나야', '입원해야', '연주를 들어야'] } },
                                { ko: '꼭 지키다', hl: '꼭 지켜야', vi: 'nhất định phải tuân thủ, giữ đúng', ex: '병원 면회 시간을 꼭 지켜야 합니다.', t: [24.70, 27.24], img: 'assets/doc/u12v/02.webp', exVi: 'Nhất định phải tuân thủ giờ thăm bệnh của bệnh viện.',
                  fill: { q: '면회 시간은 오후 1시부터예요. 시간을 ___ 해요.', opts: ['꼭 지켜야', '크게 이야기해야', '손을 대야', '소리가 나야'] } },
                                { ko: '손을 대다', hl: '손을 대면', vi: 'chạm tay vào, sờ vào', ex: '그림에 손을 대면 안 돼요.', t: [4.50, 5.95], img: 'assets/doc/u12v/03.webp', exVi: 'Không được chạm tay vào tranh.', cat: 'mus',
                  fill: { q: '그림에 ___ 안 돼요. 눈으로만 보세요.', opts: ['손을 대면', '들어가면', '입원하면', '연주를 들으면'] } },
                                { ko: '절대로 + V', hl: '절대로 찍지 마세요', vi: 'tuyệt đối (không) … — thường đi với câu phủ định', ex: '절대로 찍지 마세요.', t: [6.10, 9.30], img: 'assets/doc/u12v/04.webp', exVi: 'Tuyệt đối đừng chụp.', cat: 'mus',
                  fill: { q: '미술관에서 사진은 ___ 찍지 마세요.', opts: ['절대로', '꼭', '크게', '잘'] } },
                                { ko: '크게 이야기하다', hl: '크게 이야기하지', vi: 'nói chuyện to, nói lớn tiếng', ex: '크게 이야기하지 마세요.', t: [11.75, 13.60], img: 'assets/doc/u12v/05.webp', exVi: 'Đừng nói chuyện to.', cat: 'mus',
                  fill: { q: '미술관에서는 조용히 해야 해요. ___ 마세요.', opts: ['크게 이야기하지', '질서를 지키지', '휴대 전화를 끄지', '잘 다녀오지'] } },
                                { ko: '입원하다', hl: '입원한', vi: 'nhập viện', ex: '민재 씨가 입원한 병원에 갈 거지요?', t: [20.95, 23.68], img: 'assets/doc/u12v/06.webp', exVi: 'Bạn sẽ đến bệnh viện nơi Minjae đang nằm viện, phải không?', cat: 'hos',
                  fill: { q: '민재 씨가 다리를 다쳐서 병원에 ___.', opts: ['입원했어요', '연주했어요', '질서를 지켰어요', '소리가 났어요'] } },
                                { ko: '병원 면회', hl: '병원 면회', vi: 'việc thăm người bệnh ở bệnh viện', ex: '병원 면회 시간을 꼭 지켜야 합니다.', t: [24.70, 27.24], img: 'assets/doc/u12v/07.webp', exVi: 'Nhất định phải tuân thủ giờ thăm bệnh của bệnh viện.', cat: 'hos',
                  fill: { q: '민재 씨가 입원했어요. 그래서 주말에 ___를 가요.', opts: ['병원 면회', '연주회', '병실', '질서'] } },
                                { ko: '면회 시간', hl: '면회 시간', vi: 'giờ thăm bệnh, giờ thăm nuôi', ex: '면회 시간은 오후 1시부터 5시까지예요.', t: [27.90, 31.18], img: 'assets/doc/u12v/08.webp', exVi: 'Giờ thăm bệnh là từ 1 giờ đến 5 giờ chiều.', cat: 'hos',
                  fill: { q: '___은 오후 1시부터 5시까지예요. 그 시간에만 들어갈 수 있어요.', opts: ['면회 시간', '병실', '연주회', '휴대 전화'] } },
                                { ko: '병실', hl: '병실', vi: 'phòng bệnh', ex: '병실에 꽃은 가져가면 안 돼요.', t: [31.95, 34.32], img: 'assets/doc/u12v/09.webp', exVi: 'Không được mang hoa vào phòng bệnh.', cat: 'hos',
                  fill: { q: '민재 씨는 3층 ___에 있어요. 침대가 두 개 있어요.', opts: ['병실', '연주회', '면회 시간', '질서'] } },
                                { ko: '가져가다', hl: '가져가면', vi: 'mang theo (đến nơi khác), mang đi', ex: '병실에 꽃은 가져가면 안 돼요.', t: [31.95, 34.32], img: 'assets/doc/u12v/10.webp', exVi: 'Không được mang hoa vào phòng bệnh.',
                  fill: { q: '병실에 꽃은 ___ 안 돼요.', opts: ['가져가면', '들어가면', '손을 대면', '소리가 나면'] } },
                                { ko: '잘 다녀오세요', hl: '잘 다녀오세요', vi: 'đi cẩn thận, đi vui vẻ (chào người sắp ra ngoài rồi sẽ quay về)', ex: '잘 다녀오세요.', t: [35.08, 36.12], img: 'assets/doc/u12v/11.webp', exVi: 'Chúc bạn đi vui vẻ.',
                  fill: { q: 'A: 다녀오겠습니다.  B: 네, ___.', opts: ['잘 다녀오세요', '절대로 찍지 마세요', '크게 이야기하세요', '입원하세요'] } },
                                { ko: '연주회', hl: '연주회', vi: 'buổi hòa nhạc, buổi biểu diễn nhạc cụ', ex: '친구와 피아노 연주회에 갔어요.', t: [40.00, 42.64], img: 'assets/doc/u12v/12.webp', exVi: 'Tôi đã đi xem buổi hòa nhạc piano với bạn.', cat: 'con',
                  fill: { q: '지난 주말에 친구와 피아노 ___에 갔어요.', opts: ['연주회', '병실', '면회 시간', '질서'] } },
                                { ko: '연주를 듣다', hl: '연주를 들으면서', vi: 'nghe biểu diễn (nhạc cụ)', ex: '연주를 들으면서 음식을 먹으면 안 돼요.', t: [43.02, 45.20], img: 'assets/doc/u12v/13.webp', exVi: 'Không được vừa nghe biểu diễn vừa ăn.', cat: 'con',
                  fill: { q: '연주회에서는 조용히 ___ 해요.', opts: ['연주를 들어야', '크게 이야기해야', '손을 대야', '소리가 나야'] } },
                                { ko: '들어가다', hl: '들어갔어요', vi: 'đi vào', ex: '연주회장에 들어갔어요.', t: [47.66, 48.98], img: 'assets/doc/u12v/14.webp', exVi: 'Tôi đã đi vào phòng hòa nhạc.',
                  fill: { q: '연주회가 시작되기 전에 연주회장에 ___.', opts: ['들어갔어요', '입원했어요', '가져갔어요', '소리가 났어요'] } },
                                { ko: '휴대 전화를 끄다', hl: '휴대전화를 껐어요', vi: 'tắt điện thoại di động', ex: '자리에 앉으면서 휴대전화를 껐어요.', t: [49.78, 51.84], img: 'assets/doc/u12v/15.webp', exVi: 'Vừa ngồi vào chỗ, tôi vừa tắt điện thoại.', cat: 'con',
                  fill: { q: '연주회 때는 ___. 소리가 나면 안 되니까요.', opts: ['휴대 전화를 꺼요', '휴대 전화를 켜요', '크게 이야기해요', '소리가 나요'] } },
                                { ko: '소리가 나다', hl: '소리가 나면', vi: 'phát ra tiếng, có tiếng động', ex: '연주회 때 소리가 나면 안 되니까요.', t: [52.20, 54.15], img: 'assets/doc/u12v/16.webp', exVi: 'Vì trong buổi hòa nhạc không được phát ra tiếng động.', cat: 'con',
                  fill: { q: '연주회 때 휴대 전화에서 ___ 안 돼요.', opts: ['소리가 나면', '손을 대면', '입원하면', '들어가면'] } }
            ],
            glossary: {
                '미술관': 'bảo tàng mỹ thuật', '질서를 지켜야': 'phải giữ trật tự', '그림': 'bức tranh', '손을 대면 안 돼요': 'không được chạm tay vào',
                '그리고': 'và, ngoài ra', '사진': 'ảnh', '찍으면 안 되니까': 'vì không được chụp nên', '절대로': 'tuyệt đối', '찍지 마세요': 'đừng chụp',
                '휴대전화': 'điện thoại di động', '사용해도 돼요': 'được phép sử dụng', '그렇지만': 'tuy nhiên', '크게 이야기하지 마세요': 'đừng nói to',
                '차': 'trà', '마시면서': 'vừa uống … vừa', '쉬어도 좋아요': 'nghỉ ngơi cũng được',
                '내일': 'ngày mai', '입원한': '(đã) nhập viện', '병원': 'bệnh viện', '갈 거지요?': 'sẽ đi phải không?', '면회 시간': 'giờ thăm bệnh',
                '꼭': 'nhất định', '지켜야 합니다': 'phải tuân thủ', '오후': 'buổi chiều', '1시부터 5시까지': 'từ 1 giờ đến 5 giờ',
                '병실': 'phòng bệnh', '꽃': 'hoa', '가져가면 안 돼요': 'không được mang theo', '잘 다녀오세요': 'đi cẩn thận nhé',
                '지난 주말': 'cuối tuần trước', '친구와': 'với bạn', '피아노': 'piano', '연주회': 'buổi hòa nhạc', '갔어요': 'đã đi',
                '연주를 들으면서': 'vừa nghe biểu diễn', '음식': 'đồ ăn', '먹으면 안 돼요': 'không được ăn', '그래서': 'vì vậy', '먼저': 'trước',
                '저녁': 'bữa tối', '먹고': 'ăn … rồi', '연주회장': 'nhà hát, hội trường hòa nhạc', '들어갔어요': 'đã đi vào', '자리': 'chỗ ngồi',
                '앉으면서': 'vừa ngồi xuống', '껐어요': 'đã tắt', '소리가 나면 안 되니까요': 'vì không được phát ra tiếng'
            },
            // Bước 2: sau khi nghe, mỗi đoạn 1 câu hỏi nghe hiểu (p = đoạn). Luyện tập, không tính vào điểm bài.
            listenQ: [   // Bước 2: hết mỗi đoạn audio tự dừng, hiện 1 câu hỏi (hỏi tiếng Hàn, đáp tiếng Việt); đúng mới nghe tiếp
                { p: 0, q: '미술관에서 무엇을 하면 안 돼요?', opts: ['Uống trà', 'Chạm tay vào tranh', 'Dùng điện thoại', 'Ngồi nghỉ'], ans: 1 },
                { p: 1, q: '민재 씨는 지금 어디에 있어요?', opts: ['Ở bệnh viện', 'Ở bảo tàng mỹ thuật', 'Ở nhà', 'Ở trường học'], ans: 0 },
                { p: 2, q: '지난 주말에 친구와 어디에 갔어요?', opts: ['Bệnh viện', 'Nhà hàng', 'Bảo tàng mỹ thuật', 'Buổi hòa nhạc piano'], ans: 3 }
            ],
            // ox: true = câu Đúng/Sai trong sách (p = đoạn số mấy). Các câu còn lại: câu hỏi bổ sung.
            mcq: [
                { ox: true, p: 0, q: '미술관에서 사진을 찍어도 됩니다.', why: '사진도 찍으면 안 되니까 절대로 찍지 마세요.', opts: ['O · Đúng', 'X · Sai'], ans: 1 },
                { ox: true, p: 0, q: '미술관에서 이야기를 하고 차를 마셔도 됩니다.', why: '크게 이야기하지 마세요. / 차를 마시면서 쉬어도 좋아요. (Được nói chuyện, chỉ không nói to)', opts: ['O · Đúng', 'X · Sai'], ans: 0 },
                { ox: true, p: 1, q: '병실에 꽃이나 주스를 가져가도 됩니다.', why: '병실에 꽃은 가져가면 안 돼요.', opts: ['O · Đúng', 'X · Sai'], ans: 1 },
                { ox: true, p: 1, q: '면회는 오전이나 오후에 가도 돼요.', why: '면회 시간은 오후 1시부터 5시까지예요.', opts: ['O · Đúng', 'X · Sai'], ans: 1 },
                { ox: true, p: 2, q: '저녁을 먹으면서 연주를 들었어요.', why: '그래서 먼저 저녁을 먹고 연주회장에 들어갔어요.', opts: ['O · Đúng', 'X · Sai'], ans: 1 },
                { ox: true, p: 2, q: '연주회 때 소리가 나면 안 되니까 휴대전화를 껐어요.', why: '자리에 앉으면서 휴대전화를 껐어요. 연주회 때 소리가 나면 안 되니까요.', opts: ['O · Đúng', 'X · Sai'], ans: 0 },
                { q: 'Ở bảo tàng mỹ thuật (미술관), hành động nào ĐƯỢC PHÉP làm?', opts: ['그림에 손을 대요.', '사진을 찍어요.', '휴대전화를 사용해요.', '친구와 크게 이야기해요.'], ans: 2, why: '휴대전화는 사용해도 돼요.' },
                { q: 'Chọn từ phù hợp để điền vào chỗ trống.', sub: '민재 씨가 아파서 병원에 __________. 그래서 풍 씨가 내일 면회를 가요.', opts: ['입원했어요', '들어갔어요', '가져갔어요', '연주했어요'], ans: 0, why: '민재 씨가 입원한 병원 — 입원하다: nhập viện.' },
                { q: 'Theo bài đọc, 풍 có thể đến thăm 민재 vào lúc mấy giờ?', opts: ['오전 10시', '낮 12시', '오후 3시', '저녁 7시'], ans: 2, why: '면회 시간은 오후 1시부터 5시까지예요.' },
                { q: 'Chọn thứ tự việc người viết đã làm vào cuối tuần trước.', opts: ['연주회장에 들어갔어요 → 저녁을 먹었어요 → 휴대전화를 껐어요', '저녁을 먹었어요 → 연주회장에 들어갔어요 → 휴대전화를 껐어요', '휴대전화를 껐어요 → 저녁을 먹었어요 → 연주회장에 들어갔어요', '연주를 들었어요 → 저녁을 먹었어요 → 휴대전화를 껐어요'], ans: 1, why: '먼저 저녁을 먹고 연주회장에 들어갔어요. 자리에 앉으면서 휴대전화를 껐어요.' },
                { q: 'Chọn từ phù hợp để điền vào chỗ trống.', sub: '미술관에서는 사진을 찍으면 안 돼요. __________ 찍지 마세요.', opts: ['절대로', '먼저', '크게', '같이'], ans: 0, why: '절대로 + câu phủ định (-지 마세요): tuyệt đối đừng …' }
            ],
            essay: []
        }
    ],
    13: [
        {
            id: 'U13-NGHE',
            key: 'listening',
            label: 'Nghe',
            title: 'Hiền và Minjae nói về TP. Hồ Chí Minh',
            // Bài nghe dùng chung dạng 4 bước với bài đọc: 1 Từ mới + quiz → 2 Nghe từng câu, chọn nghĩa
            // → 3 Nghe cả bài, trả lời câu hỏi (chưa hiện lời thoại cho tới khi nộp) → 4 Nói lại cả bài: thu âm từng câu, khi nộp gộp 6 câu thành 1 file
            flow: 'staged',
            audio: 'assets/doc/unit13-nghe.mp3',   // file 120.mp3 (track 53, bài 3.2). 0–4s là câu đề bài "듣고 질문에 답하십시오"
            audioStart: 5.40,                      // bước 2 bắt đầu phát từ câu 1 (bỏ câu đề bài)
            listenSpeed: 0.8,                      // bước 2 nghe từng câu
            ctxSpeed: 0.85,                        // bước 1 nghe câu ví dụ (file nghe)
            ctxExact: true,                        // câu ví dụ trùng y file nghe -> phát file nghe; khác -> giọng AI đọc đúng câu ví dụ
            hideScript: true,
            s2Replay: true,                        // bước 2: chọn sai -> nghe lại câu đó rồi chọn lại
            s4Mode: 'all',                         // bước 4: thu âm đủ 6 câu (có nghĩa tiếng Việt), nộp = gộp 6 câu thành 1 file
            stageNames: ['Từ mới', 'Nghe từng câu', 'Nghe hiểu', 'Luyện nói'],
            s2Ask: 'Nghe từng câu và chọn nghĩa đúng.',
            s3Ask: 'Nghe cả bài hội thoại và chọn đáp án đúng.',
            s4Ask: 'Nghe mẫu từng câu và thu âm. Thu âm đủ 6 câu trước khi nộp bài.',
            passages: [
                { name: 'Câu 1 · 히엔', start: 5.55, end: 9.45,
                  vi: 'Anh Minjae đã từng đến TP. Hồ Chí Minh chưa?',
                  segs: [ [5.68, 9.30, '민재 씨는 호치민에 가 봤어요?'] ] },
                { name: 'Câu 2 · 민재', start: 10.10, end: 16.75,
                  vi: 'Vâng, năm ngoái tôi đã đi công tác TP. Hồ Chí Minh khoảng một tuần. Đó là một thành phố rất thú vị.',
                  segs: [ [10.24, 14.24, '네, 작년에 일주일쯤 호치민으로 출장을 갔어요.'], [14.24, 16.62, '아주 재미있는 도시였어요.'] ] },
                { name: 'Câu 3 · 히엔', start: 17.60, end: 26.00,
                  vi: 'Vậy à? Hồi nhỏ tôi đã sống ở TP. Hồ Chí Minh 10 năm.',
                  segs: [ [17.72, 18.64, '그래요?'], [20.00, 25.86, '저는 어렸을 때 10년 동안 호치민에 살았어요.'] ] },
                { name: 'Câu 4 · 민재', start: 26.75, end: 38.85,
                  vi: 'Tận 10 năm á? Tôi cũng muốn thử sống ở đó. TP. Hồ Chí Minh là một thành phố đẹp, có tính lịch sử, nơi có thể thấy cả hiện tại lẫn quá khứ của Việt Nam.',
                  segs: [ [26.86, 27.82, '10년이나요?'], [29.28, 31.56, '저도 거기에서 살아 보고 싶어요.'],
                          [32.42, 38.72, '호치민은 베트남의 현재와 과거를 모두 볼 수 있는 역사적이고 아름다운 도시예요.'] ] },
                { name: 'Câu 5 · 히엔', start: 39.70, end: 53.50,
                  vi: 'Anh Minjae thích TP. Hồ Chí Minh như vậy nên tôi cũng vui. Lần sau có dịp thì đi du lịch theo đoàn chắc cũng hay.',
                  segs: [ [39.84, 46.40, '민재 씨가 이렇게 호치민을 좋아하시니까 저도 기분이 좋네요.'], [47.54, 53.36, '다음에 기회가 되면 단체 여행을 가도 좋을 것 같아요.'] ] },
                { name: 'Câu 6 · 민재', start: 54.00, end: 58.70,
                  vi: 'Vâng, nếu chị Hiền hướng dẫn thì chắc sẽ vui hơn.',
                  segs: [ [54.12, 58.46, '네, 히엔 씨가 안내해 주시면 더 재밌을 것 같아요.'] ] }
            ],
            // Bước 1: từ mới (t = [bắt đầu, kết thúc] câu chứa từ trong file nghe). fill.opts[0] = đáp án đúng (trộn khi hiện)
            vocab: [
                { ko: '출장을 가다', hl: '출장을 갔어요', vi: 'đi công tác', ex: '작년에 일주일쯤 호치민으로 출장을 갔어요.', t: [10.24, 14.24], exVi: 'Năm ngoái tôi đã đi công tác TP. Hồ Chí Minh khoảng một tuần.',
                  fill: { q: '회사 일로 다음 주에 부산에 ___.', opts: ['출장을 가요', '살아 봐요', '안내해요', '기회가 돼요'] } },
                { ko: '어렸을 때', hl: '어렸을 때', vi: 'khi còn nhỏ, hồi nhỏ', ex: '저는 어렸을 때 10년 동안 호치민에 살았어요.', t: [20.00, 25.86], exVi: 'Hồi nhỏ tôi đã sống ở TP. Hồ Chí Minh 10 năm.',
                  fill: { q: '저는 ___ 시골에서 살았어요. 지금은 서울에 살아요.', opts: ['어렸을 때', '다음에', '기회가 되면', '안내하면'] } },
                { ko: '살아 보다', hl: '살아 보고', vi: 'thử sống (ở một nơi nào đó)', ex: '저도 거기에서 살아 보고 싶어요.', t: [29.28, 31.56], exVi: 'Tôi cũng muốn thử sống ở đó.',
                  fill: { q: '제주도는 정말 아름다워요. 저도 제주도에서 한번 ___ 싶어요.', opts: ['살아 보고', '출장을 가고', '안내하고', '기분이 좋고'] } },
                { ko: '현재와 과거', hl: '현재와 과거', vi: 'hiện tại và quá khứ', ex: '베트남의 현재와 과거를 모두 볼 수 있는 도시예요.', t: [32.42, 38.72], exVi: 'Là thành phố có thể thấy cả hiện tại lẫn quá khứ của Việt Nam.',
                  fill: { q: '이 도시에서는 옛날 건물과 새 건물, 즉 ___를 모두 볼 수 있어요.', opts: ['현재와 과거', '단체 여행', '출장', '기회'] } },
                { ko: '역사적이다', hl: '역사적이고', vi: 'mang tính lịch sử, có giá trị lịch sử', ex: '역사적이고 아름다운 도시예요.', t: [32.42, 38.72], exVi: 'Là một thành phố đẹp và có tính lịch sử.',
                  fill: { q: '경주에는 오래된 절과 왕릉이 많아요. 아주 ___ 도시예요.', opts: ['역사적인', '어렸을 때', '출장을 가는', '안내하는'] } },
                { ko: '기회가 되다', hl: '기회가 되면', vi: 'có dịp, có cơ hội', ex: '다음에 기회가 되면 단체 여행을 가도 좋을 것 같아요.', t: [47.54, 53.36], exVi: 'Lần sau có dịp thì đi du lịch theo đoàn chắc cũng hay.',
                  fill: { q: '지금은 바빠서 못 가요. 다음에 ___ 같이 가요.', opts: ['기회가 되면', '출장을 가면', '어렸을 때', '현재와 과거'] } },
                { ko: '단체 여행', hl: '단체 여행', vi: 'du lịch theo đoàn', ex: '다음에 기회가 되면 단체 여행을 가도 좋을 것 같아요.', t: [47.54, 53.36], exVi: 'Lần sau có dịp thì đi du lịch theo đoàn chắc cũng hay.',
                  fill: { q: '반 친구 20명이 함께 ___을 갔어요.', opts: ['단체 여행', '출장', '현재', '기회'] } },
                { ko: '안내하다', hl: '안내해', vi: 'hướng dẫn, dẫn đường', ex: '히엔 씨가 안내해 주시면 더 재밌을 것 같아요.', t: [54.12, 58.46], exVi: 'Nếu chị Hiền hướng dẫn thì chắc sẽ vui hơn.',
                  fill: { q: '호치민에 오면 제가 맛집을 ___ 드릴게요.', opts: ['안내해', '출장을 가', '살아 봐', '기회가 돼'] } }
            ],
            glossary: {
                '호치민': 'TP. Hồ Chí Minh', '가 봤어요?': 'đã từng đến chưa?', '작년에': 'năm ngoái', '일주일쯤': 'khoảng một tuần',
                '출장을 갔어요': 'đã đi công tác', '재미있는': 'thú vị', '도시': 'thành phố', '그래요?': 'vậy à?',
                '어렸을 때': 'hồi nhỏ', '10년 동안': 'trong 10 năm', '살았어요': 'đã sống', '10년이나요?': 'tận 10 năm á?',
                '거기에서': 'ở đó', '살아 보고 싶어요': 'muốn thử sống', '베트남': 'Việt Nam', '현재와 과거': 'hiện tại và quá khứ',
                '모두': 'tất cả, cả', '볼 수 있는': 'có thể thấy', '역사적이고': 'có tính lịch sử và', '아름다운': 'đẹp',
                '이렇게': 'như thế này', '좋아하시니까': 'vì (anh) thích', '기분이 좋네요': 'thấy vui quá', '다음에': 'lần sau',
                '기회가 되면': 'nếu có dịp', '단체 여행': 'du lịch theo đoàn', '좋을 것 같아요': 'chắc là hay', '안내해 주시면': 'nếu (chị) hướng dẫn cho',
                '더': 'hơn', '재밌을 것 같아요': 'chắc sẽ vui'
            },
            // Bước 1 (quiz điền chỗ trống): từ ngoài bài trong câu hỏi -> rê chuột / chạm để xem nghĩa
            quizGloss: {
                '회사 일로': 'vì việc công ty', '다음 주': 'tuần sau', '부산': 'Busan', '시골': 'nông thôn, quê',
                '서울': 'Seoul', '제주도': 'đảo Jeju', '정말': 'thật sự', '아름다워요': 'đẹp', '한번': 'thử một lần',
                '도시': 'thành phố', '옛날 건물': 'tòa nhà ngày xưa', '새 건물': 'tòa nhà mới', '즉': 'tức là', '모두': 'tất cả, cả',
                '볼 수 있어요': 'có thể thấy', '경주': 'Gyeongju (cố đô của Hàn Quốc)', '오래된': 'lâu đời, cũ', '절': 'chùa',
                '왕릉': 'lăng mộ vua', '많아요': 'nhiều', '바빠서': 'vì bận', '못 가요': 'không đi được', '같이': 'cùng nhau',
                '반 친구': 'bạn cùng lớp', '함께': 'cùng nhau', '호치민': 'TP. Hồ Chí Minh', '맛집': 'quán ăn ngon',
                '드릴게요': '(tôi) sẽ … cho (kính ngữ)', '지금은': 'bây giờ thì', '살아요': 'sống'
            },
            // Bước 2: hết mỗi câu audio tự dừng, hiện câu hỏi chọn nghĩa; đúng mới nghe tiếp. Luyện tập, không tính điểm bài.
            // 4 đáp án đều gần giống nhau, chỉ khác 1 chi tiết (thời gian, con số, việc làm, ai làm…) -> phải nghe chắc mới chọn đúng
            listenQ: [
                { p: 0, q: 'Câu vừa nghe có nghĩa là gì?', opts: [
                    'Anh Minjae có muốn đến TP. Hồ Chí Minh không?',
                    'Anh Minjae đã từng đến TP. Hồ Chí Minh chưa?',
                    'Anh Minjae đã từng sống ở TP. Hồ Chí Minh chưa?',
                    'Anh Minjae sắp đến TP. Hồ Chí Minh phải không?'], ans: 1 },
                { p: 1, q: 'Câu vừa nghe có nghĩa là gì?', opts: [
                    'Vâng, năm ngoái tôi đi du lịch TP. Hồ Chí Minh khoảng một tuần. Thành phố rất thú vị.',
                    'Vâng, năm ngoái tôi đi công tác TP. Hồ Chí Minh khoảng một tháng. Thành phố rất thú vị.',
                    'Vâng, tuần trước tôi đi công tác TP. Hồ Chí Minh. Thành phố rất thú vị.',
                    'Vâng, năm ngoái tôi đi công tác TP. Hồ Chí Minh khoảng một tuần. Thành phố rất thú vị.'], ans: 3 },
                { p: 2, q: 'Câu vừa nghe có nghĩa là gì?', opts: [
                    'Vậy à? Hồi nhỏ tôi đã sống ở TP. Hồ Chí Minh 10 năm.',
                    'Vậy à? Hồi nhỏ tôi đã sống ở TP. Hồ Chí Minh 1 năm.',
                    'Vậy à? Hồi nhỏ tôi đã đến TP. Hồ Chí Minh 10 lần.',
                    'Vậy à? Tôi đang sống ở TP. Hồ Chí Minh được 10 năm rồi.'], ans: 0 },
                { p: 3, q: 'Câu vừa nghe có nghĩa là gì?', opts: [
                    'Chỉ 10 năm thôi à? Tôi cũng muốn thử sống ở đó. TP. Hồ Chí Minh đẹp, có tính lịch sử, thấy được cả hiện tại lẫn quá khứ của Việt Nam.',
                    'Tận 10 năm á? Tôi cũng muốn đến đó du lịch thêm lần nữa. TP. Hồ Chí Minh đẹp, có tính lịch sử, thấy được cả hiện tại lẫn quá khứ của Việt Nam.',
                    'Tận 10 năm á? Tôi cũng muốn thử sống ở đó. TP. Hồ Chí Minh đẹp, có tính lịch sử, thấy được cả hiện tại lẫn quá khứ của Việt Nam.',
                    'Tận 10 năm á? Tôi cũng muốn thử sống ở đó. TP. Hồ Chí Minh hiện đại, chỉ thấy được hiện tại của Việt Nam.'], ans: 2 },
                { p: 4, q: 'Câu vừa nghe có nghĩa là gì?', opts: [
                    'Anh Minjae thích TP. Hồ Chí Minh như vậy nên tôi cũng vui. Lần sau có dịp thì đi du lịch một mình chắc cũng hay.',
                    'Anh Minjae thích TP. Hồ Chí Minh như vậy nên tôi cũng vui. Lần sau có dịp thì đi du lịch theo đoàn chắc cũng hay.',
                    'Anh Minjae thích TP. Hồ Chí Minh như vậy nên tôi cũng vui. Lần sau có dịp thì cùng đi công tác chắc cũng hay.',
                    'Anh Minjae không thích TP. Hồ Chí Minh nên tôi hơi buồn. Lần sau có dịp thì đi du lịch theo đoàn chắc cũng hay.'], ans: 1 },
                { p: 5, q: 'Câu vừa nghe có nghĩa là gì?', opts: [
                    'Vâng, nếu tôi hướng dẫn chị Hiền thì chắc sẽ vui hơn.',
                    'Vâng, nếu chị Hiền hướng dẫn thì chắc sẽ tiện hơn.',
                    'Vâng, nếu chị Hiền hướng dẫn thì chắc sẽ vui hơn.',
                    'Vâng, nếu chị Hiền đi cùng thì chắc sẽ vui hơn.'], ans: 2 }
            ],
            // Bước 3: 2 câu đầu là câu hỏi trong sách, 3 câu sau là câu hỏi bổ sung
            mcq: [
                { q: '민재 씨가 호치민을 좋아하는 이유가 아닌 것은?', sub: 'Lý do nào KHÔNG phải là lý do Minjae thích TP. Hồ Chí Minh?',
                  opts: ['호치민에서 산 적이 있기 때문에', '역사적인 도시이고 아름답기 때문에', '현재와 과거를 모두 볼 수 있기 때문에'], ans: 0,
                  why: '호치민에서 10년 동안 산 사람은 히엔 씨예요. 민재 씨는 출장으로 일주일쯤 갔어요.' },
                { q: '들은 내용과 맞는 것은?', sub: 'Chọn câu đúng với nội dung bài nghe.',
                  opts: ['민재 씨는 호치민에서 살고 싶어 합니다.', '히엔 씨의 가족은 호치민에 살고 있습니다.', '민재 씨는 다음에 단체 여행을 가면 호치민을 안내할 것입니다.'], ans: 0,
                  why: '저도 거기에서 살아 보고 싶어요. (Người hướng dẫn là Hiền, không phải Minjae.)' },
                { q: '민재 씨는 언제, 왜 호치민에 갔어요?', opts: ['어렸을 때 가족과 같이 갔어요.', '작년에 출장으로 갔어요.', '작년에 단체 여행으로 갔어요.', '올해 출장으로 갈 거예요.'], ans: 1,
                  why: '네, 작년에 일주일쯤 호치민으로 출장을 갔어요.' },
                { q: '히엔 씨는 호치민에서 얼마 동안 살았어요?', opts: ['일주일쯤', '1년', '10년', '아직 안 살았어요'], ans: 2,
                  why: '저는 어렸을 때 10년 동안 호치민에 살았어요.' },
                { q: '다음에 기회가 되면 두 사람은 무엇을 할 것 같아요?', opts: ['같이 출장을 갈 것 같아요.', '호치민에서 같이 살 것 같아요.', '서울을 구경할 것 같아요.', '단체 여행을 갈 것 같아요.'], ans: 3,
                  why: '다음에 기회가 되면 단체 여행을 가도 좋을 것 같아요.' }
            ],
            essay: []
        }
    ]
};
