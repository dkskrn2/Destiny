# Design System - 명리학 플랫폼

## Product Context
- **What this is:** 무료 사주 풀이, 오늘 운세, 연애/궁합, 직업/이직, 재물/사업, VOD 클래스, 상담 예약, 커뮤니티를 연결하는 명리학 기반 웹 앱입니다.
- **Who it's for:** 명리학을 재미로만 소비하지 않고, 현재 고민을 해석하고 다음 행동을 정리하려는 20-40대 사용자입니다. 특히 직업, 관계, 재물 의사결정을 앞둔 사용자에게 맞춥니다.
- **Space/industry:** 운세, 사주, 점성술, 자기이해 앱, 상담 예약 플랫폼.
- **Project type:** 앱형 웹 서비스와 콘텐츠 커뮤니티가 결합된 B2C 플랫폼입니다.
- **Memorable thing:** 명리학을 감으로 찍는 운세가 아니라, 내 선택을 구조적으로 이해하는 도구로 느끼게 해야 합니다.

## Research Notes
- **The Pattern:** 자기이해와 관계 연결을 핵심 메시지로 잡고, 개인화된 인사이트와 커뮤니티 연결을 전면에 둡니다. 참고: https://www.thepattern.com/
- **Sanctuary:** 일일 콘텐츠, 전문가 상담, 쉬운 설명을 묶어 "앱 안의 상담 경험"으로 포지셔닝합니다. 참고: https://shop.sanctuaryworld.co/pages/our-app
- **Luckieverse / 점신 기반 B2B:** 국내 운세 서비스는 개인 맞춤 운세 콘텐츠, 높은 조회량, 리워드/광고 결합, 재방문율 상승을 강조합니다. 참고: https://luckieverse.com/
- **Design opportunity:** 국내 운세 서비스는 콘텐츠 양과 접근성을 강조하고, 해외 점성술 앱은 자기이해와 관계 언어를 강조합니다. 이 서비스는 "정통 명리학의 구조"와 "앱형 개인화 루프"를 같이 가져가야 차별화됩니다.

## Aesthetic Direction
- **Direction:** Scholarly Mysticism. 학당, 천문 관측, 야간 산수, 상담실의 언어를 섞은 다크 에디토리얼 앱.
- **Decoration level:** Intentional. 별, 궤도, 오행, 원형 도식은 쓰되 장식이 아니라 정보 구조를 돕는 배경으로만 사용합니다.
- **Mood:** 조용하지만 얕지 않아야 합니다. 첫인상은 신비롭고, 5초 뒤에는 "이건 꽤 체계적이네"라고 느껴야 합니다.
- **Avoid:** 보라색 그라디언트 버튼만 반복하는 SaaS 느낌, 과도한 카드 밀도, 모든 카드가 같은 둥근 반경을 가진 평균적인 AI UI.

## Safe Choices
- **Dark app shell:** 운세/명리 카테고리에서 야간, 별, 달의 시각 언어는 사용자가 즉시 이해합니다.
- **Korean serif display:** 명리학의 권위와 차분함을 전달합니다. 한국어에서는 산세리프만 쓰면 상담/학습 서비스의 깊이가 약해집니다.
- **Horizontal chips on mobile:** 커뮤니티 필터, 운세 카테고리, 시간 입력은 모바일에서 1줄 스와이프가 가장 빠릅니다.

## Risks
- **Gold as primary action, purple as atmosphere:** 현재 UI는 보라색이 너무 많은 액션을 담당합니다. 주요 결제/상담/수강 CTA는 달빛 금색으로 분리하면 수익 행동이 더 선명해집니다. 비용은 기존 보라색 브랜드 감각이 조금 줄어드는 것입니다.
- **Editorial result pages:** 결과 화면은 일반 앱 카드보다 잡지형 스크롤 구성이 더 오래 읽힙니다. 비용은 개발 시 반응형 타이포그래피 관리가 더 필요하다는 점입니다.
- **Trust tags in community:** "100대기업 소속", "사업가", "IT/기획" 같은 작성자 태그를 노출합니다. 잘 쓰면 신뢰와 소속감이 생기고, 과하면 허세처럼 보입니다. 그래서 태그는 2-3개까지만 씁니다.

## Typography
- **Display/Hero:** Noto Serif KR, 500/700. 큰 제목, 결과 스토리, 강의 상세 제목에 사용합니다.
- **Body:** Pretendard, 400/500/600. 본문, 카드, 폼, 네비게이션의 기본 글꼴입니다.
- **UI/Labels:** Pretendard, 600/700. 칩, 탭, 버튼, 상태 라벨에 사용합니다.
- **Data/Tables:** Pretendard with `font-variant-numeric: tabular-nums`. 운세 점수, 조회수, 댓글 수, 시간 슬롯에 사용합니다.
- **Code:** Geist Mono or IBM Plex Mono. 개발자용 내부 화면이 생길 때만 사용합니다.
- **Loading:** Google Fonts currently loads Pretendard and Noto Serif KR. Production should self-host WOFF2 if performance work starts.
- **Scale:**
  - Meta: 0.78-0.9rem
  - Body: 1rem
  - Card title: 1.125rem
  - Section title: clamp(1.65rem, 2.2vw, 2.3rem)
  - Display: clamp(2.7rem, 4.6vw, 4.8rem)
  - Story display: clamp(3.2rem, 6vw, 6rem) for result pages only

## Color
- **Approach:** Balanced. Dark neutrals do most of the work. Accent colors map to product meaning.
- **Ink 950:** `#070711`, page background.
- **Ink 900:** `#0B0A12`, frame background.
- **Panel 850:** `#13131D`, main cards.
- **Panel 800:** `#181724`, elevated cards.
- **Line:** `rgba(255, 255, 255, 0.12)`.
- **Text:** `#F5F2FF`.
- **Muted Text:** `rgba(245, 242, 255, 0.70)`.
- **Primary / Moon Gold:** `#E6BC7A`, 상담 예약, 수강, 결제, 강한 CTA.
- **Secondary / Insight Blue:** `#7F9CFF`, 결과 점수, 데이터, 오늘 운세.
- **Aura Violet:** `#9D72FF`, active nav, community, brand aura. Do not use as every primary button.
- **Love Pink:** `#FF83C1`, 연애/궁합.
- **Wealth Amber:** `#E6AD62`, 재물/사업.
- **Success:** `#71D6A5`.
- **Warning:** `#E6BC7A`.
- **Error:** `#FF6B8B`.
- **Info:** `#7F9CFF`.
- **Dark mode strategy:** This product is dark-first. Light mode should be a separate reading mode later, not a simple color inversion.

## Spacing
- **Base unit:** 4px, exposed as an 8px-facing scale in CSS.
- **Density:** Comfortable on marketing and detail pages, compact only inside phone mockups and score widgets.
- **Scale:** 2xs 2px, xs 4px, sm 8px, md 16px, lg 24px, xl 32px, 2xl 48px, 3xl 72px.
- **Rules:**
  - Section top/bottom desktop: 48-72px.
  - Card internal padding desktop: 20-32px.
  - Mobile outer padding: 18-20px.
  - Filters and chips: 8-12px gaps.

## Layout
- **Approach:** Hybrid. App screens use grid discipline. Result, course, and community pages use editorial hierarchy.
- **Desktop grid:** Max frame width 1500px. Use 12-column thinking even when CSS is custom grid.
- **Core patterns:**
  - Home: hero, horizontal quick entry, community/VOD/content boards.
  - App pages: left explanation, right phone-like input preview.
  - Result page: step-by-step scroll narrative.
  - Community: feed plus right rail on desktop, stacked feed on mobile.
  - Course detail: large editorial hero plus curriculum cards.
- **Breakpoints:**
  - 1280px: reduce multi-column density.
  - 1080px: split layouts stack.
  - 860px: mobile shell, horizontal chips, cards become one column.
- **Border radius:** Frame 28px, panel 22px, card 16px, chip 999px.
- **Shadow:** Use soft depth only on major containers. Avoid every card glowing.

## Components
- **Primary CTA:** Gold for revenue actions and course starts. Violet only for brand/community actions.
- **Secondary CTA:** Transparent or low-fill border button.
- **Quick card:** Icon, title, 1-line value proposition, arrow. Keep one row on desktop, horizontal scroll if more than 4 items.
- **Score widget:** Circular or bar-based, with short microcopy. Never show score without a next action.
- **Community post row:** Tags first, title second, comment/view stats right or below on mobile.
- **Author proof:** Small identity tags, not fake testimonials. Use "100대기업 소속", "사업가", "IT/기획" carefully.
- **Course thumbnail:** Use consistent template: symbol, orbit lines, dark gradient, level tag. Do not mix random stock images.

## Motion
- **Approach:** Intentional.
- **Duration:** Micro 80-120ms, short 160-220ms, medium 280-420ms.
- **Easing:** `cubic-bezier(.2,.8,.2,1)` for entrance and hover. Standard ease-out for simple fades.
- **Use motion for:**
  - Section reveal on scroll.
  - Score ring fill.
  - Time-slot selection.
  - Horizontal chip active state.
- **Avoid motion for:** Long reading sections, result text paragraphs, core form fields.

## Accessibility
- Text contrast must stay high on dark panels.
- Tags and chips need visible focus states.
- Do not communicate 운세 score only by color. Always include a number or label.
- Mobile horizontal scroll areas need enough visible overflow hint.
- All CTA links should remain actual anchors during publishing stage.

## Implementation Notes
- Existing CSS already defines `--purple`, `--gold`, `--blue`, `--pink`, spacing tokens, and radius tokens in `assets/css/styles.css`.
- Next visual refactor should promote `--gold` to revenue CTA and reduce purple to brand/aura states.
- `assets/css/app-pages.css` now carries page-specific systems for app pages, result pages, course pages, and community pages. If it keeps growing, split by domain:
  - `app-pages.css`
  - `result.css`
  - `community.css`
  - `course.css`

## Decisions Log
| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-04-30 | Initial design system created | Created from current HTML/CSS, implemented pages, and category research across astrology, 운세, 상담, and community products. |
| 2026-04-30 | Dark-first Scholarly Mysticism direction | Keeps the mystical category signal while raising trust through structure, typography, and restrained components. |
| 2026-04-30 | Gold as future primary revenue CTA | 상담 예약 and course starts need stronger hierarchy than the current all-purple action pattern. |
