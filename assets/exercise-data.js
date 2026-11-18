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
            audio: 'assets/doc/unit12-doc.mp3',
            listenSpeed: 0.8,
            passages: [
                { name: '(1) 미술관', img: 'assets/doc/u12_misulgwan.webp', start: 2.6, end: 16.75,
                  vi: 'Ở bảo tàng mỹ thuật phải giữ trật tự. Không được chạm tay vào tranh. Ngoài ra cũng không được chụp ảnh nên tuyệt đối đừng chụp. Được phép sử dụng điện thoại di động. Tuy nhiên, đừng nói chuyện to. Có thể vừa uống trà vừa nghỉ ngơi.',
                  segs: [
                    [2.75, 5.15, '미술관에서는 질서를 지켜야 합니다.'],
                    [5.2, 6.65, '그림에 손을 대면 안 돼요.'],
                    [6.8, 10.0, '그리고 사진도 찍으면 안 되니까 절대로 찍지 마세요.'],
                    [10.7, 12.4, '휴대전화는 사용해도 돼요.'],
                    [12.45, 14.3, '그렇지만 크게 이야기하지 마세요.'],
                    [14.72, 16.6, '차를 마시면서 쉬어도 좋아요.'] ] },
                { name: '(2) 병원', img: 'assets/doc/u12_byeongwon.webp', start: 20.6, end: 36.95,
                  vi: 'Anh Phùng, ngày mai anh sẽ đến bệnh viện nơi anh Min-jae nhập viện phải không? Nhất định phải tuân thủ giờ thăm bệnh của bệnh viện. Giờ thăm bệnh là từ 1 giờ đến 5 giờ chiều. Không được mang hoa vào phòng bệnh. Anh đi cẩn thận nhé.',
                  segs: [
                    [20.75, 21.3, '풍 씨,'],
                    [21.65, 24.38, '내일 민재 씨가 입원한 병원에 갈 거지요?'],
                    [25.4, 27.94, '병원 면회 시간을 꼭 지켜야 합니다.'],
                    [28.6, 31.88, '면회 시간은 오후 1시부터 5시까지예요.'],
                    [32.65, 35.02, '병실에 꽃은 가져가면 안 돼요.'],
                    [35.78, 36.82, '잘 다녀오세요.'] ] },
                { name: '(3) 연주회', img: 'assets/doc/u12_yeonjuhoe.webp', start: 40.55, end: 54.9,
                  vi: 'Cuối tuần trước tôi đã cùng bạn đi xem buổi hòa nhạc piano. Không được vừa nghe biểu diễn vừa ăn. Vì vậy chúng tôi ăn tối trước rồi mới vào hội trường. Vừa ngồi vào chỗ, tôi tắt điện thoại. Vì trong buổi hòa nhạc không được để phát ra tiếng động.',
                  segs: [
                    [40.7, 43.34, '지난 주말 친구와 피아노 연주회에 갔어요.'],
                    [43.72, 45.9, '연주를 들으면서 음식을 먹으면 안 돼요.'],
                    [46.44, 48.08, '그래서 먼저 저녁을 먹고'],
                    [48.36, 49.68, '연주회장에 들어갔어요.'],
                    [50.48, 52.54, '자리에 앉으면서 휴대전화를 껐어요.'],
                    [52.9, 54.85, '연주회 때 소리가 나면 안 되니까요.'] ] }
            ],
            // Bước 1: biểu hiện mới (p = đoạn có biểu hiện, t = [bắt đầu, kết thúc] câu chứa biểu hiện trong file nghe)
            vocab: [
                { ko: '질서를 지키다', hl: '질서를 지켜야', vi: 'giữ trật tự', ex: '미술관에서는 질서를 지켜야 합니다.', t: [2.75, 5.15] },
                { ko: '꼭 지키다', hl: '꼭 지켜야', vi: 'nhất định phải tuân thủ, giữ đúng', ex: '병원 면회 시간을 꼭 지켜야 합니다.', t: [25.4, 27.94] },
                { ko: '손을 대다', hl: '손을 대면', vi: 'chạm tay vào, sờ vào', ex: '그림에 손을 대면 안 돼요.', t: [5.2, 6.65] },
                { ko: '절대로 + V', hl: '절대로 찍지 마세요', vi: 'tuyệt đối (không) … — thường đi với câu phủ định', ex: '절대로 찍지 마세요.', t: [6.8, 10.0] },
                { ko: '크게 이야기하다', hl: '크게 이야기하지', vi: 'nói chuyện to, nói lớn tiếng', ex: '크게 이야기하지 마세요.', t: [12.45, 14.3] },
                { ko: '입원하다', hl: '입원한', vi: 'nhập viện', ex: '민재 씨가 입원한 병원에 갈 거지요?', t: [21.65, 24.38] },
                { ko: '병원 면회', hl: '병원 면회', vi: 'việc thăm người bệnh ở bệnh viện', ex: '병원 면회 시간을 꼭 지켜야 합니다.', t: [25.4, 27.94] },
                { ko: '면회 시간', hl: '면회 시간', vi: 'giờ thăm bệnh, giờ thăm nuôi', ex: '면회 시간은 오후 1시부터 5시까지예요.', t: [28.6, 31.88] },
                { ko: '병실', hl: '병실', vi: 'phòng bệnh', ex: '병실에 꽃은 가져가면 안 돼요.', t: [32.65, 35.02] },
                { ko: '가져가다', hl: '가져가면', vi: 'mang theo (đến nơi khác), mang đi', ex: '병실에 꽃은 가져가면 안 돼요.', t: [32.65, 35.02] },
                { ko: '잘 다녀오세요', hl: '잘 다녀오세요', vi: 'đi cẩn thận, đi vui vẻ (chào người sắp ra ngoài rồi sẽ quay về)', ex: '잘 다녀오세요.', t: [35.78, 36.82] },
                { ko: '연주회', hl: '연주회', vi: 'buổi hòa nhạc, buổi biểu diễn nhạc cụ', ex: '친구와 피아노 연주회에 갔어요.', t: [40.7, 43.34] },
                { ko: '연주를 듣다', hl: '연주를 들으면서', vi: 'nghe biểu diễn (nhạc cụ)', ex: '연주를 들으면서 음식을 먹으면 안 돼요.', t: [43.72, 45.9] },
                { ko: '들어가다', hl: '들어갔어요', vi: 'đi vào', ex: '연주회장에 들어갔어요.', t: [48.36, 49.68] },
                { ko: '휴대 전화를 끄다', hl: '휴대전화를 껐어요', vi: 'tắt điện thoại di động', ex: '자리에 앉으면서 휴대전화를 껐어요.', t: [50.48, 52.54] },
                { ko: '소리가 나다', hl: '소리가 나면', vi: 'phát ra tiếng, có tiếng động', ex: '연주회 때 소리가 나면 안 되니까요.', t: [52.9, 54.85] }
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
    ]
};
