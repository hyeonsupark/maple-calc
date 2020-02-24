export interface Map {
  group: string;
  name: string;
  count: number;
  mobs: {
    exp: number;
    level: number;
  }[];
}

export interface MapView {
  group: string;
  name: string;
  count: number;
  mobs: { exp: number; level: number }[];
  countPerHour: number;
  expPerHour: number;
  mesoPerHour: number;
  burning: number;
  backgroundColor: string;
}

export const backgroundColors: Record<string, string> = {
  여로: '#f2f2f2',
  리버스: '#d9d9d9',
  츄츄: '#ffe699',
  얌얌: '#f8cbad',
  레헬른: '#ff99ff',
  아르카나: '#e2efda',
  모라스: '#ddebf7',
  에스페라: '#bdd7ee',
  문브릿지: '#bfbfbf',
  미궁: '#a9d08e',
  리멘: '#9bc2e6',
};

export const maps: Map[] = [
  {
    group: '여로',
    name: '풍화된 분노의 땅',
    count: 22,
    mobs: [{ exp: 101389, level: 201 }],
  },
  {
    group: '여로',
    name: '풍화된 슬픔의 땅',
    count: 23,
    mobs: [{ exp: 104101, level: 202 }],
  },
  {
    group: '여로',
    name: '화염의 영토',
    count: 26,
    mobs: [{ exp: 112662, level: 205 }],
  },
  {
    group: '여로',
    name: '숨겨진 호숫가',
    count: 35,
    mobs: [{ exp: 217564, level: 209 }],
  },
  {
    group: '여로',
    name: '숨겨진 화염지대',
    count: 26,
    mobs: [{ exp: 217564, level: 209 }],
  },
  {
    group: '여로',
    name: '숨겨진 동굴',
    count: 29,
    mobs: [{ exp: 217564, level: 209 }],
  },
  {
    group: '리버스',
    name: '지하선로 1',
    count: 19,
    mobs: [{ exp: 112662, level: 205 }],
  },
  {
    group: '리버스',
    name: '지하선로 2',
    count: 19,
    mobs: [{ exp: 112662, level: 205 }],
  },
  {
    group: '리버스',
    name: '지하선로 3',
    count: 19,
    mobs: [{ exp: 112662, level: 205 }],
  },
  {
    group: '리버스',
    name: '지하선로 4',
    count: 19,
    mobs: [{ exp: 112662, level: 205 }],
  },
  {
    group: '리버스',
    name: '지하선로 5',
    count: 19,
    mobs: [{ exp: 112662, level: 205 }],
  },
  {
    group: '리버스',
    name: '지하선로 6',
    count: 19,
    mobs: [{ exp: 112662, level: 205 }],
  },
  {
    group: '리버스',
    name: '연구열차 1',
    count: 20,
    mobs: [{ exp: 115470, level: 206 }],
  },
  {
    group: '리버스',
    name: '연구열차 2',
    count: 20,
    mobs: [{ exp: 115470, level: 206 }],
  },
  {
    group: '리버스',
    name: '연구열차 3',
    count: 20,
    mobs: [{ exp: 115470, level: 206 }],
  },
  {
    group: '리버스',
    name: '숨겨진 연구열차',
    count: 21,
    mobs: [{ exp: 248003, level: 210 }],
  },
  {
    group: '리버스',
    name: '지하열차 1',
    count: 20,
    mobs: [{ exp: 118598, level: 207 }],
  },
  {
    group: '리버스',
    name: '지하열차 2',
    count: 20,
    mobs: [
      { exp: 118598, level: 207 },
      { exp: 121453, level: 208 },
    ],
  },
  {
    group: '리버스',
    name: '지하열차 3',
    count: 20,
    mobs: [{ exp: 121453, level: 208 }],
  },
  {
    group: '리버스',
    name: '숨겨진 지하열차',
    count: 21,
    mobs: [
      { exp: 253673, level: 211 },
      { exp: 260047, level: 212 },
    ],
  },
  {
    group: '리버스',
    name: '지상열차 1',
    count: 20,
    mobs: [{ exp: 118598, level: 207 }],
  },
  {
    group: '리버스',
    name: '지상열차 2',
    count: 20,
    mobs: [
      { exp: 118598, level: 207 },
      { exp: 121453, level: 208 },
    ],
  },
  {
    group: '리버스',
    name: '지상열차 3',
    count: 20,
    mobs: [{ exp: 121453, level: 208 }],
  },
  {
    group: '리버스',
    name: '숨겨진 M타워',
    count: 31,
    mobs: [{ exp: 265808, level: 213 }],
  },
  {
    group: '츄츄',
    name: '몽땅 동굴숲 1',
    count: 22,
    mobs: [{ exp: 260047, level: 212 }],
  },
  {
    group: '츄츄',
    name: '츄릅포레스트 깊은 곳',
    count: 21,
    mobs: [{ exp: 265808, level: 213 }],
  },
  {
    group: '츄츄',
    name: '격류지대 1',
    count: 28,
    mobs: [{ exp: 277832, level: 215 }],
  },
  {
    group: '츄츄',
    name: '격류지대 2',
    count: 24,
    mobs: [{ exp: 278138, level: 215 }],
  },
  {
    group: '츄츄',
    name: '격류지대 3',
    count: 28,
    mobs: [
      { exp: 278138, level: 215 },
      { exp: 284043, level: 216 },
    ],
  },
  {
    group: '츄츄',
    name: '폭포아래',
    count: 24,
    mobs: [{ exp: 284043, level: 216 }],
  },
  {
    group: '츄츄',
    name: '고래산 초입',
    count: 19,
    mobs: [{ exp: 290679, level: 217 }],
  },
  {
    group: '츄츄',
    name: '고래산 중턱 1',
    count: 19,
    mobs: [{ exp: 297037, level: 218 }],
  },
  {
    group: '츄츄',
    name: '고래산 중턱 2',
    count: 19,
    mobs: [{ exp: 296653, level: 219 }],
  },
  {
    group: '츄츄',
    name: '고래산 정상',
    count: 19,
    mobs: [{ exp: 303394, level: 219 }],
  },
  {
    group: '츄츄',
    name: '거대한 꼬리',
    count: 20,
    mobs: [{ exp: 303394, level: 219 }],
  },
  {
    group: '얌얌',
    name: '머쉬버드 숲 1',
    count: 21,
    mobs: [{ exp: 278138, level: 215 }],
  },
  {
    group: '얌얌',
    name: '머쉬버드 숲 2',
    count: 21,
    mobs: [
      { exp: 278138, level: 215 },
      { exp: 284043, level: 216 },
    ],
  },
  {
    group: '얌얌',
    name: '머쉬버드 숲 3',
    count: 22,
    mobs: [{ exp: 284043, level: 216 }],
  },
  {
    group: '얌얌',
    name: '머쉬버드 숲 4',
    count: 21,
    mobs: [{ exp: 278138, level: 215 }],
  },
  {
    group: '얌얌',
    name: '머쉬버드 숲 5',
    count: 21,
    mobs: [
      { exp: 278138, level: 215 },
      { exp: 284043, level: 216 },
    ],
  },
  {
    group: '얌얌',
    name: '머쉬버드 숲 6',
    count: 21,
    mobs: [{ exp: 284043, level: 216 }],
  },
  {
    group: '얌얌',
    name: '숨겨진 머쉬버드 숲',
    count: 24,
    mobs: [{ exp: 309470, level: 220 }],
  },
  {
    group: '얌얌',
    name: '일리야드 들판 1',
    count: 21,
    mobs: [{ exp: 290679, level: 217 }],
  },
  {
    group: '얌얌',
    name: '일리야드 들판 2',
    count: 21,
    mobs: [
      { exp: 290679, level: 217 },
      { exp: 296653, level: 218 },
    ],
  },
  {
    group: '얌얌',
    name: '일리야드 들판 3',
    count: 21,
    mobs: [{ exp: 296653, level: 218 }],
  },
  {
    group: '얌얌',
    name: '숨겨진 일리야드 들판',
    count: 24,
    mobs: [{ exp: 309470, level: 220 }],
  },
  {
    group: '얌얌',
    name: '일리야드 들판 4',
    count: 21,
    mobs: [{ exp: 290679, level: 217 }],
  },
  {
    group: '얌얌',
    name: '일리야드 들판 5',
    count: 21,
    mobs: [
      { exp: 290679, level: 217 },
      { exp: 296653, level: 218 },
    ],
  },
  {
    group: '얌얌',
    name: '일리야드 들판 6',
    count: 21,
    mobs: [{ exp: 296653, level: 218 }],
  },
  {
    group: '얌얌',
    name: '펑고스 숲 1',
    count: 22,
    mobs: [{ exp: 303394, level: 219 }],
  },
  {
    group: '얌얌',
    name: '펑고스 숲 2',
    count: 22,
    mobs: [{ exp: 303394, level: 219 }],
  },
  {
    group: '얌얌',
    name: '펑고스 숲 3',
    count: 22,
    mobs: [{ exp: 303394, level: 219 }],
  },
  {
    group: '얌얌',
    name: '펑고스 숲 4',
    count: 22,
    mobs: [{ exp: 303394, level: 219 }],
  },
  {
    group: '얌얌',
    name: '펑고스 숲 5',
    count: 22,
    mobs: [{ exp: 303394, level: 219 }],
  },
  {
    group: '얌얌',
    name: '펑고스 숲 6',
    count: 22,
    mobs: [{ exp: 303394, level: 219 }],
  },
  {
    group: '얌얌',
    name: '숨겨진 펑고스 숲',
    count: 22,
    mobs: [{ exp: 309470, level: 220 }],
  },
  {
    group: '레헬른',
    name: '무법자들의 거리 1',
    count: 27,
    mobs: [{ exp: 309470, level: 220 }],
  },
  {
    group: '레헬른',
    name: '무법자들의 거리 2',
    count: 27,
    mobs: [
      { exp: 309470, level: 220 },
      { exp: 316316, level: 221 },
    ],
  },
  {
    group: '레헬른',
    name: '무법자들의 거리 3',
    count: 29,
    mobs: [{ exp: 316316, level: 221 }],
  },
  {
    group: '레헬른',
    name: '닭이 뛰노는 곳 2',
    count: 22,
    mobs: [{ exp: 322473, level: 222 }],
  },
  {
    group: '레헬른',
    name: '본색을 드러내는 곳 1',
    count: 30,
    mobs: [{ exp: 329417, level: 223 }],
  },
  {
    group: '레헬른',
    name: '본색을 드러내는 곳 2',
    count: 21,
    mobs: [{ exp: 335675, level: 224 }],
  },
  {
    group: '레헬른',
    name: '본색을 드러내는 곳 3',
    count: 21,
    mobs: [
      { exp: 329417, level: 223 },
      { exp: 335675, level: 224 },
    ],
  },
  {
    group: '레헬른',
    name: '춤추는 구두 점령지 1',
    count: 28,
    mobs: [{ exp: 335675, level: 224 }],
  },
  {
    group: '레헬른',
    name: '춤추는 구두 점령지 2',
    count: 21,
    mobs: [{ exp: 342720, level: 225 }],
  },
  {
    group: '레헬른',
    name: '악몽의 시계탑 1층',
    count: 26,
    mobs: [{ exp: 349836, level: 226 }],
  },
  {
    group: '레헬른',
    name: '악몽의 시계탑 5층',
    count: 27,
    mobs: [
      { exp: 356216, level: 227 },
      { exp: 363430, level: 228 },
    ],
  },
  {
    group: '아르카나',
    name: '동굴 아랫길',
    count: 20,
    mobs: [{ exp: 446505, level: 237 }],
  },
  {
    group: '아르카나',
    name: '동굴 아랫길 깊은곳 1',
    count: 22,
    mobs: [{ exp: 454588, level: 238 }],
  },
  {
    group: '아르카나',
    name: '동굴 아랫길 깊은곳 2',
    count: 23,
    mobs: [{ exp: 462670, level: 239 }],
  },
  {
    group: '아르카나',
    name: '동굴 아랫길 깊디 깊은곳',
    count: 18,
    mobs: [
      { exp: 454588, level: 238 },
      { exp: 462670, level: 239 },
    ],
  },
  {
    group: '아르카나',
    name: '동굴 윗길',
    count: 29,
    mobs: [{ exp: 446505, level: 237 }],
  },
  {
    group: '아르카나',
    name: '동굴 윗길 깊은곳 1',
    count: 32,
    mobs: [
      { exp: 446505, level: 237 },
      { exp: 454564, level: 238 },
    ],
  },
  {
    group: '아르카나',
    name: '동굴 윗길 깊은곳 2',
    count: 28,
    mobs: [{ exp: 454564, level: 238 }],
  },
  {
    group: '아르카나',
    name: '동굴 윗길 깊디 깊은곳',
    count: 26,
    mobs: [
      { exp: 454564, level: 238 },
      { exp: 462670, level: 239 },
    ],
  },
  {
    group: '아르카나',
    name: '다섯 갈래 동굴',
    count: 21,
    mobs: [
      { exp: 454564, level: 238 },
      { exp: 462670, level: 239 },
    ],
  },
  {
    group: '아르카나',
    name: '다섯 갈래 동굴 윗길',
    count: 22,
    mobs: [
      { exp: 462670, level: 239 },
      { exp: 470825, level: 240 },
    ],
  },
  {
    group: '모라스',
    name: '형님들 구역 2',
    count: 30,
    mobs: [{ exp: 454564, level: 238 }],
  },
  {
    group: '모라스',
    name: '그림자가 춤추는 곳 4',
    count: 33,
    mobs: [{ exp: 470825, level: 240 }],
  },
  {
    group: '모라스',
    name: '폐쇄 구역',
    count: 31,
    mobs: [{ exp: 485624, level: 241 }],
  },
  {
    group: '모라스',
    name: '그날의 트뤼에페 2',
    count: 27,
    mobs: [
      { exp: 494006, level: 242 },
      { exp: 501461, level: 243 },
    ],
  },
  {
    group: '모라스',
    name: '그날의 트뤼에페 3',
    count: 35,
    mobs: [
      { exp: 501461, level: 243 },
      { exp: 509964, level: 244 },
    ],
  },
  {
    group: '모라스',
    name: '그날의 트뤼에페 4',
    count: 32,
    mobs: [
      { exp: 509964, level: 244 },
      { exp: 518511, level: 245 },
    ],
  },
  {
    group: '에스페라',
    name: '거울빛에 물든 바다 2',
    count: 23,
    mobs: [{ exp: 509964, level: 244 }],
  },
  {
    group: '에스페라',
    name: '거울빛에 물든 바다 3',
    count: 21,
    mobs: [
      { exp: 509964, level: 244 },
      { exp: 518511, level: 245 },
    ],
  },
  {
    group: '에스페라',
    name: '거울빛에 물든 바다 4',
    count: 23,
    mobs: [{ exp: 518511, level: 245 }],
  },
  {
    group: '에스페라',
    name: '거울빛에 물든 바다 5',
    count: 23,
    mobs: [{ exp: 527106, level: 246 }],
  },
  {
    group: '에스페라',
    name: '거울빛에 물든 바다 6',
    count: 24,
    mobs: [
      { exp: 527106, level: 246 },
      { exp: 535749, level: 247 },
    ],
  },
  {
    group: '에스페라',
    name: '거울빛에 물든 바다 7',
    count: 26,
    mobs: [{ exp: 535749, level: 247 }],
  },
  {
    group: '에스페라',
    name: '거울빛에 비친 빛의 신전 2',
    count: 38,
    mobs: [{ exp: 544459, level: 248 }],
  },
  {
    group: '에스페라',
    name: '거울빛에 비친 빛의 신전 3',
    count: 39,
    mobs: [
      { exp: 544459, level: 248 },
      { exp: 553217, level: 249 },
    ],
  },
  {
    group: '에스페라',
    name: '거울빛에 비친 빛의 신전 4',
    count: 38,
    mobs: [{ exp: 553217, level: 249 }],
  },
  {
    group: '문브릿지',
    name: '사상의 경계 2',
    count: 26,
    mobs: [{ exp: 594040, level: 251 }],
  },
  {
    group: '문브릿지',
    name: '사상의 경계 5',
    count: 35,
    mobs: [{ exp: 594040, level: 251 }],
  },
  {
    group: '문브릿지',
    name: '미지의 안개 2',
    count: 35,
    mobs: [{ exp: 612643, level: 253 }],
  },
  {
    group: '문브릿지',
    name: '공허의 파도 3',
    count: 26,
    mobs: [{ exp: 622041, level: 254 }],
  },
  {
    group: '문브릿지',
    name: '공허의 파도 4',
    count: 30,
    mobs: [{ exp: 622041, level: 254 }],
  },
  {
    group: '문브릿지',
    name: '공허의 파도 5',
    count: 29,
    mobs: [{ exp: 622041, level: 254 }],
  },
  {
    group: '문브릿지',
    name: '공허의 파도 6',
    count: 30,
    mobs: [{ exp: 622041, level: 254 }],
  },
  {
    group: '미궁',
    name: '고통의 미궁 내부 1',
    count: 27,
    mobs: [{ exp: 631458, level: 255 }],
  },
  {
    group: '미궁',
    name: '고통의 미궁 내부 2',
    count: 28,
    mobs: [{ exp: 631458, level: 255 }],
  },
  {
    group: '미궁',
    name: '고통의 미궁 내부 3',
    count: 29,
    mobs: [{ exp: 631458, level: 255 }],
  },
  {
    group: '미궁',
    name: '고통의 미궁 내부 4',
    count: 23,
    mobs: [{ exp: 640971, level: 256 }],
  },
  {
    group: '미궁',
    name: '고통의 미궁 내부 5',
    count: 28,
    mobs: [{ exp: 640971, level: 256 }],
  },
  {
    group: '미궁',
    name: '고통의 미궁 내부 6',
    count: 27,
    mobs: [{ exp: 640971, level: 256 }],
  },
  {
    group: '미궁',
    name: '고통의 미궁 중심부 1',
    count: 27,
    mobs: [{ exp: 650504, level: 257 }],
  },
  {
    group: '미궁',
    name: '고통의 미궁 중심부 2',
    count: 29,
    mobs: [{ exp: 650504, level: 257 }],
  },
  {
    group: '미궁',
    name: '고통의 미궁 중심부 3',
    count: 33,
    mobs: [{ exp: 650504, level: 257 }],
  },
  {
    group: '미궁',
    name: '고통의 미궁 중심부 4',
    count: 36,
    mobs: [{ exp: 661261, level: 258 }],
  },
  {
    group: '미궁',
    name: '고통의 미궁 중심부 5',
    count: 31,
    mobs: [{ exp: 661261, level: 258 }],
  },
  {
    group: '미궁',
    name: '고통의 미궁 중심부 6',
    count: 32,
    mobs: [{ exp: 661261, level: 258 }],
  },
  {
    group: '미궁',
    name: '고통의 미궁 중심부 7',
    count: 30,
    mobs: [{ exp: 661261, level: 258 }],
  },
  {
    group: '미궁',
    name: '고통의 미궁 최심부 1',
    count: 28,
    mobs: [{ exp: 670940, level: 259 }],
  },
  {
    group: '미궁',
    name: '고통의 미궁 최심부 2',
    count: 29,
    mobs: [{ exp: 670293, level: 259 }],
  },
  {
    group: '미궁',
    name: '고통의 미궁 최심부 3',
    count: 31,
    mobs: [{ exp: 670940, level: 259 }],
  },
  {
    group: '미궁',
    name: '고통의 미궁 최심부 4',
    count: 30,
    mobs: [{ exp: 670940, level: 259 }],
  },
  {
    group: '미궁',
    name: '고통의 미궁 최심부 5',
    count: 26,
    mobs: [{ exp: 670940, level: 259 }],
  },
  {
    group: '미궁',
    name: '고통의 미궁 최심부 6',
    count: 28,
    mobs: [{ exp: 670940, level: 259 }],
  },
  {
    group: '리멘',
    name: '세계의 눈물 하단 1',
    count: 23,
    mobs: [{ exp: 680638, level: 260 }],
  },
  {
    group: '리멘',
    name: '세계의 눈물 하단 2',
    count: 29,
    mobs: [
      { exp: 680638, level: 260 },
      { exp: 690432, level: 261 },
    ],
  },
  {
    group: '리멘',
    name: '세계의 눈물 하단 3',
    count: 24,
    mobs: [{ exp: 690432, level: 261 }],
  },
  {
    group: '리멘',
    name: '세계의 눈물 중단 1',
    count: 27,
    mobs: [{ exp: 690432, level: 261 }],
  },
  {
    group: '리멘',
    name: '세계의 눈물 중단 2',
    count: 24,
    mobs: [
      { exp: 690432, level: 261 },
      { exp: 700242, level: 262 },
    ],
  },
  {
    group: '리멘',
    name: '세계의 눈물 중단 3',
    count: 22,
    mobs: [{ exp: 700242, level: 262 }],
  },
  {
    group: '리멘',
    name: '세계가 끝나는 곳 1-4',
    count: 23,
    mobs: [{ exp: 700242, level: 263 }],
  },
  {
    group: '리멘',
    name: '세계가 끝나는 곳 1-5',
    count: 22,
    mobs: [{ exp: 705182, level: 263 }],
  },
  {
    group: '리멘',
    name: '세계가 끝나는 곳 1-6',
    count: 25,
    mobs: [{ exp: 710121, level: 263 }],
  },
  {
    group: '리멘',
    name: '세계가 끝나는 곳 2-3',
    count: 19,
    mobs: [{ exp: 710121, level: 263 }],
  },
  {
    group: '리멘',
    name: '세계가 끝나는 곳 2-4',
    count: 26,
    mobs: [{ exp: 715684, level: 263 }],
  },
  {
    group: '리멘',
    name: '세계가 끝나는 곳 2-5',
    count: 21,
    mobs: [{ exp: 721247, level: 263 }],
  },
];
