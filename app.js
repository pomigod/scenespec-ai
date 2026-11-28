const I18N = {
  en: {
    page_title: "CutGate AI — Check AI Video Drafts Before HD Render",
    nav_engine: "How it works",
    nav_bench: "Benchmarks",
    nav_plans: "Pricing",
    nav_founder: "Contact",
    nav_cta: "Start Beta",
    hero_eyebrow: "Multi-Cloud AI Video QA & Mastering · Google Cloud & AWS",
    hero_title: "Catch broken AI video drafts at 480p before paying for HD renders.",
    hero_sub:
      "Works with Veo, Kling, Seedance, and Runway. CutGate AI checks frame freezes, prop glitches, and audio sync automatically — so only clean takes move to 1080p.",
    hero_cta_1: "Select Plan & Start Beta",
    hero_cta_2: "See 3-Step Flow",
    fl1_tag: "Input",
    fl1_t: "480p Draft Clips",
    fl1_d: "Generate fast drafts from Veo, Kling, Seedance, or Runway with your reference sheet.",
    fl2_tag: "QA Gate",
    fl2_t: "Auto Glitch Check",
    fl2_d: "VFR frame-timing + Gemini 4x4 grid checks block frozen holds or prop drift before HD spend.",
    fl3_tag: "Output",
    fl3_t: "Clean 1080p Master",
    fl3_d: "Passed clips get CAS 0.18 sharpening, -15.5 LUFS audio leveling, and frame-tight sync.",
    stat1_v: "480p Draft Gate",
    stat1_l: "Screen out broken clips before paying for 720p / 1080p",
    stat2_v: "4 Video Engines",
    stat2_l: "Model-agnostic support for Veo, Kling, Seedance & Runway",
    stat3_v: "-15.5 LUFS Master",
    stat3_l: "Broadcast-leveled audio and sub-50ms A/V sync",
    eng_kicker: "How it works",
    eng_title: "Three gates from rough draft to final 1080p",
    eng_desc: "Every clip passes automated visual and audio checks before moving to final export.",
    t1_a: "Style Lock",
    c1_t: "Lock Look & Props Upfront",
    c1_p: "Attach one verified 720p reference clip and prop sheet so scenes stay consistent.",
    c1_b1: "Keeps character and prop scale steady",
    c1_b2: "Matches color tone across every cut",
    c1_m: "Video-Reference Anchor",
    t2_a: "Multimodal Vision",
    c2_t: "Block Broken 480p Drafts",
    c2_p: "Audits VFR frame timestamps and 4x4 peak-cut grids via Vertex AI Gemini and AWS Bedrock before HD rendering.",
    c2_b1: "Catches frozen holds via pts_time cadence",
    c2_b2: "Flags teleporting or warped props",
    c2_m: "Zero wasted HD render credits",
    t3_a: "Mastering",
    c3_t: "Sharpen & Level Audio",
    c3_p: "Applies AMD CAS A/B sharpening per clip and balances cut audio for clean delivery.",
    c3_b1: "Optimal 0.18 CAS (+8.88% Tenengrad clarity)",
    c3_b2: "-15.5 LUFS loudness & SHA-256 segment cache",
    c3_m: "Delivery-ready 1080p MP4",
    demo_kicker: "Interactive MVP Preview",
    demo_title: "Test how CutGate AI gates a 480p draft",
    demo_tab_fail: "Sample A · Broken Draft",
    demo_tab_pass: "Sample B · Clean Draft",
    demo_run_btn: "Run Gate Scan",
    demo_scanning: "SCANNING...",
    demo_scanning_msg: "Running VFR pts_time cadence & Gemini 4x4 continuity audit...",
    demo_st1: "1. VFR pts_time",
    demo_st2: "2. Gemini 4x4 Grid",
    demo_st3: "3. CAS + Audio Gate",
    demo_m1_lbl: "Source 480p Clip",
    demo_m2_lbl: "VFR Frame Timing",
    demo_m3_lbl: "Gemini 4x4 Prop Audit",
    demo_m4_lbl: "Pipeline Output",
    bench_kicker: "Benchmarks",
    bench_title: "Measured results at a glance",
    bench_sub: "Recorded across our multi-clip test pipeline, sorted from highest reliability to fine-tuned precision.",
    g1_lbl: "VFR Frame Audit Coverage",
    g1_hint: "Inspects every pts_time frame for frozen holds",
    g4_lbl: "Cut Continuity Coverage",
    g4_hint: "Every cut verified via 4x4 grid against reference props",
    g2_lbl: "Edge Clarity Gain (CAS 0.18)",
    g2_hint: "Tenengrad sharpness gain without flat-area noise spikes",
    g3_lbl: "Average A/V Sync Offset",
    g3_hint: "Well below the 50 ms broadcast perception limit",
    cas_title: "Sharpening Strength Comparison (AMD CAS)",
    cas_note: "Click any bar to inspect sharpness vs. flat-area noise tradeoff",
    svg_yaxis: "Edge Clarity Gain (%)",
    svg_badge: "Recommended: 0.18",
    svg_x0: "Off (0.0)",
    svg_x1: "Light (0.14)",
    svg_x2: "Balanced (0.18)",
    svg_x3: "Strong (0.22)",
    svg_x4: "Max (0.24)",
    svg_xaxis: "Sharpening Strength",
    bench_footnote:
      "Methodology: Measured across internal 480p→1080p multi-clip test runs using FFmpeg VFR pts_time timestamps, Tenengrad edge sharpness, and EBU R128 loudness logs.",
    plans_kicker: "Early-Access Beta Pricing",
    plans_title: "Simple plans for creators and video teams",
    plans_sub:
      "Multi-cloud orchestration on Google Cloud and AWS GPU workers. Early-beta rates are discounted ~70–80% off standard post-beta pricing.",
    bill_monthly: "Monthly",
    bill_annual: "Annual (-20%)",
    per_mo: "/mo",
    per_yr: "/yr",
    p_free_badge: "Free Trial",
    p1_save: "No card required · Always free tier",
    p1_for: "For trying out draft screening",
    p1_1: "20 draft continuity checks / mo",
    p1_2: "3 adaptive 1080p masters",
    p1_3: "Reference clip & prop check",
    p_cta_free: "Start Free",
    p2_for: "For active AI video creators & studios",
    p2_1: "300 draft-to-HD checks / mo",
    p2_2: "CAS 0.18 sharpening & -15.5 LUFS audio",
    p2_3: "SHA-256 segment cache & QA summary",
    p_cta_pro: "Join Pro Beta",
    p3_for: "For automated B2B & studio pipelines",
    p3_1: "REST & webhook QA integration",
    p3_2: "Custom continuity rulesets",
    p3_3: "Signed X-Ray QA audit logs",
    p_cta_api: "Request API",
    founder_kicker: "Company & Early Access",
    founder_title: "Start screening drafts with CutGate AI",
    team_name: "CutGate AI",
    team_role: "Founded Oct 2025 by Jin Hwang (CEO) · South Korea",
    about_b1: "Model-agnostic: works with Veo, Kling, Seedance, and Runway",
    about_b2: "Saves render budget by catching broken clips at 480p",
    about_b3: "Delivers sharp, loudness-leveled 1080p masters via Web & API",
    team_meta: "Pre-Seed B2B & Creator SaaS · Private Beta · Multi-Cloud",
    contact_title: "Get in touch",
    contact_sub: "Copy our team email or request private beta access below.",
    copy_btn: "Copy",
    copied_btn: "Copied ✓",
    email_placeholder: "you@company.com",
    wl_btn: "Request Access",
    wl_done_prefix: "Request saved for",
    wl_mailto: "Send directly via email →",
    footer_gh: "CutGate AI on GitHub",
    footer_privacy: "Privacy Policy",
    footer_terms: "Terms of Service",
    co_kicker: "Private Beta Request",
    co_title: "Select Your CutGate AI Plan",
    co_due_note: "Private Beta · $0 billed online",
    co_free_note: "Free Tier · No billing required",
    co_lbl_email: "Work Email",
    co_lbl_team: "Studio / Company Name",
    co_team_placeholder: "Optional",
    co_lbl_engine: "Primary Video Engine",
    co_eng_all: "Multi-Model (All)",
    co_lbl_billing: "Preferred Billing Setup",
    co_bill_opt1: "Invoice after beta onboarding",
    co_bill_opt2: "Payment link after beta approval",
    co_security_note:
      "CutGate AI is in Private Beta and does not process online card payments on this static page. Submitting prepares your request to send directly to hwangjin@cutgateai.com.",
    co_submit: "Prepare Beta Request",
    co_rec_badge: "REQUEST READY · SEND VIA EMAIL",
    co_rec_plan: "Plan & Cycle",
    co_rec_email: "Workspace Email",
    co_rec_team: "Team & Engine",
    co_rec_bill: "Billing Preference",
    co_copy_rec: "Copy Summary",
    co_send_mail: "Send Activation Email →",
    co_edit_btn: "Change Plan",
    privacy_body:
      "Effective Nov 2026. CutGate AI (cutgateai.com, South Korea) collects only the work email you submit for private beta onboarding and support correspondence. We use zero third-party ad trackers or cross-site profiling cookies, and never sell or share data with advertisers. Media drafts processed during QA are handled solely via our Google Cloud and AWS infrastructure and purged per workspace retention settings. Contact contact@cutgateai.com or hwangjin@cutgateai.com for access or deletion.",
    terms_body:
      "Effective Nov 2026. CutGate AI is an independent B2B and creator SaaS platform (founded Oct 2025, South Korea) offered in Private Beta for generative video QA, continuity verification, and mastering. Workspace owners retain 100% ownership and IP rights over all uploaded reference clips, 480p drafts, QA logs, and 1080p masters. Prohibited uses include unlawful content, unauthorized redistribution, or violation of upstream cloud Acceptable Use Policies. Contact contact@cutgateai.com.",
    close_btn: "Close"
  },
  ko: {
    page_title: "CutGate AI — HD 렌더링 전 480p AI 영상 초안 자동 검수",
    nav_engine: "작동 방식",
    nav_bench: "벤치마크",
    nav_plans: "요금제",
    nav_founder: "문의",
    nav_cta: "베타 시작",
    hero_eyebrow: "멀티클라우드 AI 영상 QA · 마스터링 · Google Cloud & AWS 기반",
    hero_title: "HD 렌더링 비용을 쓰기 전에, 480p 초안에서 오류를 먼저 잡아내세요.",
    hero_sub:
      "Veo, Kling, Seedance, Runway와 모두 호환됩니다. CutGate AI가 화면 정지, 소품 이탈, 오디오 싱크 밀림을 자동 검수해 정상 컷만 1080p로 넘깁니다.",
    hero_cta_1: "플랜 선택 및 베타 시작",
    hero_cta_2: "3단계 흐름 보기",
    fl1_tag: "입력",
    fl1_t: "480p 초안 클립",
    fl1_d: "기준 시트를 연결해 Veo·Kling·Seedance·Runway 초안을 빠르게 생성합니다.",
    fl2_tag: "QA 게이트",
    fl2_t: "자동 오류 차단",
    fl2_d: "VFR 프레임 타이밍 + Gemini 4x4 그리드 검사로 정지·소품 오류를 HD 렌더링 전에 걸러냅니다.",
    fl3_tag: "출력",
    fl3_t: "깔끔한 1080p 마스터",
    fl3_d: "통과한 클립만 CAS 0.18 선명도 보정, -15.5 LUFS 음량 평준화, 프레임 단위 싱크를 맞춰 출력합니다.",
    stat1_v: "480p 사전 차단",
    stat1_l: "720p·1080p 과금 전에 불량 클립을 먼저 제외",
    stat2_v: "4대 영상 모델 지원",
    stat2_l: "Veo · Kling · Seedance · Runway 통합 호환",
    stat3_v: "-15.5 LUFS 마스터",
    stat3_l: "방송 표준 음량 평준화 및 50ms 미만 A/V 싱크",
    eng_kicker: "작동 방식",
    eng_title: "초안부터 1080p 납품까지, 3단계 자동 검수",
    eng_desc: "모든 클립은 최종 출력 전에 화면·음향 자동 검수 게이트를 거칩니다.",
    t1_a: "기준 고정",
    c1_t: "스타일 · 소품 기준 고정",
    c1_p: "검증된 720p 기준 영상과 소품 시트를 연결해 장면 톤을 일정하게 유지합니다.",
    c1_b1: "캐릭터·소품 비율 흔들림 방지",
    c1_b2: "컷이 바뀌어도 색감과 질감 통일",
    c1_m: "Video-Reference 앵커 고정",
    t2_a: "멀티모달 비전",
    c2_t: "480p 불량 초안 차단",
    c2_p: "Vertex AI Gemini와 AWS Bedrock 멀티모달로 VFR 프레임 간격과 4x4 피크 컷 그리드를 검사해 HD 낭비를 막습니다.",
    c2_b1: "pts_time 케이던스로 정지 프레임 탐지",
    c2_b2: "소품 순간이동·물리 붕괴 즉시 차단",
    c2_m: "불필요한 HD 렌더링 비용 절감",
    t3_a: "마스터링",
    c3_t: "화질 보정 · 오디오 정리",
    c3_p: "클립별 AMD CAS A/B 샤프닝과 음향 밸런스를 맞춰 바로 납품 가능한 파일로 출력합니다.",
    c3_b1: "최적 강도 CAS 0.18 (선명도 +8.88%)",
    c3_b2: "-15.5 LUFS 음량 평준화 · SHA-256 캐시",
    c3_m: "바로 납품 가능한 1080p MP4",
    demo_kicker: "MVP 인터랙티브 미리보기",
    demo_title: "CutGate AI가 480p 초안을 검수하는 과정을 직접 확인하세요",
    demo_tab_fail: "샘플 A · 불량 초안",
    demo_tab_pass: "샘플 B · 정상 초안",
    demo_run_btn: "게이트 스캔 실행",
    demo_scanning: "스캔 중...",
    demo_scanning_msg: "VFR pts_time 케이던스 및 Gemini 4x4 연속성 검수를 실행 중입니다...",
    demo_st1: "1. VFR pts_time",
    demo_st2: "2. Gemini 4x4 그리드",
    demo_st3: "3. CAS · 오디오 게이트",
    demo_m1_lbl: "입력 480p 클립",
    demo_m2_lbl: "VFR 프레임 타이밍",
    demo_m3_lbl: "Gemini 4x4 소품 검수",
    demo_m4_lbl: "파이프라인 출력",
    bench_kicker: "벤치마크",
    bench_title: "한눈에 보는 실측 성능 지표",
    bench_sub: "멀티클립 테스트 파이프라인에서 측정한 결과를 핵심 지표 순으로 정리했습니다.",
    g1_lbl: "VFR 프레임 전수 검사율",
    g1_hint: "모든 pts_time 프레임의 정지·누락 여부를 빠짐없이 검출",
    g4_lbl: "컷 연속성 검수 커버리지",
    g4_hint: "모든 컷을 4x4 그리드로 기준 소품 시트와 대조 검증",
    g2_lbl: "윤곽 선명도 개선폭 (CAS 0.18)",
    g2_hint: "배경 노이즈 증가 없이 Tenengrad 윤곽 선명도 향상",
    g3_lbl: "평균 오디오·영상 싱크 오차",
    g3_hint: "사람이 인지하는 50 ms 기준보다 훨씬 낮은 오차",
    cas_title: "샤프닝 강도별 비교 (AMD CAS)",
    cas_note: "막대를 클릭하면 선명도 개선과 배경 노이즈 수치를 바로 비교할 수 있습니다",
    svg_yaxis: "선명도 개선폭 (%)",
    svg_badge: "권장 강도: 0.18",
    svg_x0: "꺼짐 (0.0)",
    svg_x1: "약함 (0.14)",
    svg_x2: "최적 (0.18)",
    svg_x3: "강함 (0.22)",
    svg_x4: "최대 (0.24)",
    svg_xaxis: "샤프닝 강도",
    bench_footnote:
      "측정 기준: 내부 480p→1080p 멀티클립 테스트 구간에서 FFmpeg VFR pts_time 타임스탬프, Tenengrad 윤곽 선명도, EBU R128 음량 로그로 실측했습니다.",
    plans_kicker: "얼리 액세스 베타 요금제",
    plans_title: "크리에이터와 영상 팀을 위한 심플한 요금제",
    plans_sub:
      "Google Cloud와 AWS GPU 워커 멀티클라우드 기반으로 운영됩니다. 정식 출시 전 베타 기간에는 정상가 대비 약 70–80% 할인된 얼리버드 요금이 적용됩니다.",
    bill_monthly: "월간 결제",
    bill_annual: "연간 (-20%)",
    per_mo: "/월",
    per_yr: "/년",
    p_free_badge: "무료 체험",
    p1_save: "카드 등록 불필요 · 상시 무료 티어",
    p1_for: "초안 검수 기능 체험용",
    p1_1: "월 20회 초안 연속성 검수",
    p1_2: "월 3회 1080p 마스터링",
    p1_3: "기준 클립 · 소품 일치 확인",
    p_cta_free: "무료 시작",
    p2_for: "정기 제작 AI 영상 크리에이터·스튜디오용",
    p2_1: "월 300회 초안-HD 승격 검수",
    p2_2: "CAS 0.18 보정 · -15.5 LUFS 음량",
    p2_3: "SHA-256 세그먼트 캐시 · QA 요약",
    p_cta_pro: "Pro 베타 신청",
    p3_for: "자동화된 B2B·스튜디오 파이프라인용",
    p3_1: "REST · 웹훅 QA API 연동",
    p3_2: "팀 맞춤형 연속성 검수 규칙",
    p3_3: "서명된 X-Ray QA 감사 로그",
    p_cta_api: "API 문의",
    founder_kicker: "기업 정보 · 얼리 액세스",
    founder_title: "CutGate AI로 초안 검수를 바로 시작하세요",
    team_name: "CutGate AI",
    team_role: "2025년 10월 설립 · 대표 황진 (Jin Hwang) · 대한민국",
    about_b1: "모델 무관 호환: Veo, Kling, Seedance, Runway 지원",
    about_b2: "480p 단계에서 불량 클립을 걸러내 렌더링 예산 절감",
    about_b3: "웹 브라우저 및 REST API로 선명한 1080p 마스터 제공",
    team_meta: "프리시드 B2B·크리에이터 SaaS · 프라이빗 베타 · 멀티클라우드",
    contact_title: "문의 및 베타 신청",
    contact_sub: "팀 이메일을 복사하거나 아래에서 프라이빗 베타를 신청하세요.",
    copy_btn: "복사",
    copied_btn: "복사됨 ✓",
    email_placeholder: "name@company.com",
    wl_btn: "베타 신청",
    wl_done_prefix: "신청 이메일이 기록되었습니다:",
    wl_mailto: "메일 앱으로 바로 전송하기 →",
    footer_gh: "CutGate AI GitHub 보기",
    footer_privacy: "개인정보처리방침",
    footer_terms: "이용약관",
    co_kicker: "프라이빗 베타 신청",
    co_title: "CutGate AI 플랜 신청",
    co_due_note: "프라이빗 베타 · 온라인 결제 미과금",
    co_free_note: "무료 플랜 · 결제 불필요",
    co_lbl_email: "업무용 이메일",
    co_lbl_team: "스튜디오 / 회사명",
    co_team_placeholder: "선택 입력",
    co_lbl_engine: "주력 영상 생성 모델",
    co_eng_all: "전체 모델 (Veo · Kling · Seedance · Runway)",
    co_lbl_billing: "선호 청구 방식",
    co_bill_opt1: "온보딩 승인 후 인보이스 안내",
    co_bill_opt2: "베타 승인 후 결제 링크 안내",
    co_security_note:
      "CutGate AI는 현재 프라이빗 베타 중이며 이 정적 페이지에서 온라인 카드 결제를 직접 처리하지 않습니다. 신청 시 hwangjin@cutgateai.com 으로 보낼 요청서가 준비됩니다.",
    co_submit: "신청 요청서 준비",
    co_rec_badge: "요청서 준비 완료 · 이메일 발송 필요",
    co_rec_plan: "선택 플랜 · 주기",
    co_rec_email: "워크스페이스 이메일",
    co_rec_team: "팀 · 생성 모델",
    co_rec_bill: "청구 방식",
    co_copy_rec: "요청 내역 복사",
    co_send_mail: "이메일로 바로 보내기 →",
    co_edit_btn: "플랜 변경",
    privacy_body:
      "시행일 2026년 11월. CutGate AI(cutgateai.com, 대한민국)는 프라이빗 베타 안내 및 기술 지원 응대를 위해 사용자가 직접 입력한 업무용 이메일만 수집합니다. 제3자 광고 추적기나 교차 사이트 프로파일링 쿠키를 사용하지 않으며 개인정보를 광고주에게 판매·공유하지 않습니다. QA 처리 중인 영상 초안은 Google Cloud 및 AWS 인프라에서만 안전하게 처리되며 보관 정책에 따라 파기됩니다. 문의: contact@cutgateai.com / hwangjin@cutgateai.com.",
    terms_body:
      "시행일 2026년 11월. CutGate AI는 2025년 10월 설립된 독립 B2B·크리에이터 SaaS 플랫폼으로, 현재 프라이빗 베타 형태로 AI 영상 QA·연속성 검증·마스터링 기능을 제공합니다. 업로드된 모든 기준 클립, 480p 초안, QA 로그, 1080p 마스터 결과물의 100% 소유권과 지식재산권은 워크스페이스 소유자에게 귀속됩니다. 불법 콘텐츠 처리, 무단 재배포, 상위 클라우드 이용정책(AUP) 위반 행위는 금지됩니다. 문의: contact@cutgateai.com.",
    close_btn: "닫기"
  }
};

const DEMO_SAMPLES = {
  en: {
    fail: {
      clip: "kling_scene04_480p.mp4",
      vfr: "14 frozen holds @ 1.8s",
      prop: "Prop scale drifted +42%",
      out: "Blocked before 1080p render",
      badge: "BLOCKED AT 480P",
      summary: "Saved 1080p GPU spend — flagged frozen frames and prop drift for re-roll.",
      pass: false
    },
    pass: {
      clip: "veo_scene02_480p.mp4",
      vfr: "240 / 240 unique pts_time",
      prop: "Matched reference sheet",
      out: "CAS 0.18 · -15.5 LUFS · 8.4 ms",
      badge: "PROMOTED TO 1080P",
      summary: "Passed all QA gates — exported sharp, loudness-leveled 1080p master MP4.",
      pass: true
    }
  },
  ko: {
    fail: {
      clip: "kling_scene04_480p.mp4",
      vfr: "1.8초 구간 정지 프레임 14개",
      prop: "소품 비율 +42% 이탈 감지",
      out: "1080p 렌더링 진입 차단",
      badge: "480P 단계 차단",
      summary: "정지 프레임과 소품 이탈을 사전에 잡아내 불필요한 1080p GPU 과금을 막았습니다.",
      pass: false
    },
    pass: {
      clip: "veo_scene02_480p.mp4",
      vfr: "240 / 240 pts_time 정상",
      prop: "기준 소품 시트 일치 통과",
      out: "CAS 0.18 · -15.5 LUFS · 8.4 ms",
      badge: "1080P 승격 완료",
      summary: "모든 QA 게이트를 통과해 선명도와 음량이 맞춰진 1080p 마스터로 출력했습니다.",
      pass: true
    }
  }
};

const CAS_DETAILS = {
  en: {
    "0.0": "Off (0.0) · Tenengrad +0.00% · Flat Noise +0.00 (Unsharpened baseline)",
    "0.14": "Light (0.14) · Tenengrad +8.65% · Flat Noise +1.52 (Soft enhancement)",
    "0.18": "Balanced (0.18) · Tenengrad +8.88% · Flat Noise +1.93 (Optimal)",
    "0.22": "Strong (0.22) · Tenengrad +9.15% · Flat Noise +2.41 (Background grain rises)",
    "0.24": "Max (0.24) · Tenengrad +9.30% · Flat Noise +2.78 (Excessive grain)"
  },
  ko: {
    "0.0": "꺼짐 (0.0) · 선명도 +0.00% · 배경 노이즈 +0.00 (원본 기준)",
    "0.14": "약함 (0.14) · 선명도 +8.65% · 배경 노이즈 +1.52 (부드러운 보정)",
    "0.18": "최적 (0.18) · 선명도 +8.88% · 배경 노이즈 +1.93 (권장 균형점)",
    "0.22": "강함 (0.22) · 선명도 +9.15% · 배경 노이즈 +2.41 (배경 그레인 상승)",
    "0.24": "최대 (0.24) · 선명도 +9.30% · 배경 노이즈 +2.78 (과도한 노이즈)"
  }
};

const PLANS = {
  starter: {
    name: "Starter",
    monthly: "$0",
    annual: "$0",
    oldMonthly: "",
    oldAnnual: "",
    badgeEn: { monthly: "Free Trial", annual: "Free Trial" },
    badgeKo: { monthly: "무료 체험", annual: "무료 체험" },
    saveEn: { monthly: "No card required · Always free tier", annual: "No card required · Always free tier" },
    saveKo: { monthly: "카드 등록 불필요 · 상시 무료 티어", annual: "카드 등록 불필요 · 상시 무료 티어" },
    quotaEn: "20 draft checks / mo · 3 1080p masters",
    quotaKo: "월 20회 초안 검수 · 1080p 마스터 3회",
    isFree: true
  },
  pro: {
    name: "Pro Studio",
    monthly: "$3.90",
    annual: "$37.40",
    oldMonthly: "$19",
    oldAnnual: "$228",
    badgeEn: { monthly: "-79% BETA", annual: "-84% BETA" },
    badgeKo: { monthly: "79% 베타 할인", annual: "84% 베타 할인" },
    saveEn: { monthly: "Save $15.10/mo · Beta Launch Discount", annual: "Save $190.60/yr · Beta Launch Discount" },
    saveKo: { monthly: "월 $15.10 절약 · 베타 할인 적용", annual: "연 $190.60 절약 · 베타 할인 적용" },
    quotaEn: "300 draft-to-HD checks / mo · CAS 0.18 + -15.5 LUFS",
    quotaKo: "월 300회 초안-HD 검수 · CAS 0.18 + -15.5 LUFS",
    isFree: false
  },
  api: {
    name: "Team API",
    monthly: "$14.90",
    annual: "$143.00",
    oldMonthly: "$49",
    oldAnnual: "$588",
    badgeEn: { monthly: "-70% BETA", annual: "-76% BETA" },
    badgeKo: { monthly: "70% 베타 할인", annual: "76% 베타 할인" },
    saveEn: { monthly: "Save $34.10/mo · Beta Launch Discount", annual: "Save $445.00/yr · Beta Launch Discount" },
    saveKo: { monthly: "월 $34.10 절약 · 베타 할인 적용", annual: "연 $445.00 절약 · 베타 할인 적용" },
    quotaEn: "REST & webhook QA · Custom rules · Signed audit logs",
    quotaKo: "REST·웹훅 연동 · 맞춤형 규칙 · 서명된 감사 로그",
    isFree: false
  }
};

let currentLang = "en";
let currentDemo = "fail";
let currentCas = "0.18";
let currentCycle = "monthly";
let currentPlan = "pro";
let lastOrderText = "";
let scanTimer = null;

function renderDemo(animateScan = false) {
  const sample = DEMO_SAMPLES[currentLang][currentDemo];
  const dict = I18N[currentLang];
  const clipEl = document.getElementById("demoClipVal");
  const vfrEl = document.getElementById("demoVfrVal");
  const propEl = document.getElementById("demoPropVal");
  const outEl = document.getElementById("demoOutVal");
  const badgeEl = document.getElementById("demoBadge");
  const sumEl = document.getElementById("demoSummary");
  const barEl = document.getElementById("demoVerdictBar");
  const pills = [
    document.getElementById("stagePill1"),
    document.getElementById("stagePill2"),
    document.getElementById("stagePill3")
  ];

  document.querySelectorAll(".demo-tab").forEach((btn) => {
    const active = btn.getAttribute("data-sample") === currentDemo;
    btn.classList.toggle("active", active);
    btn.setAttribute("aria-selected", active ? "true" : "false");
  });

  if (scanTimer) {
    clearTimeout(scanTimer);
    scanTimer = null;
  }

  const applyFinal = () => {
    pills.forEach((p) => {
      if (!p) return;
      p.classList.remove("running");
      p.classList.add("done");
    });
    if (clipEl) clipEl.textContent = sample.clip;
    if (vfrEl) vfrEl.textContent = sample.vfr;
    if (propEl) propEl.textContent = sample.prop;
    if (outEl) outEl.textContent = sample.out;
    if (badgeEl) badgeEl.textContent = sample.badge;
    if (sumEl) sumEl.textContent = sample.summary;
    if (barEl) {
      barEl.classList.toggle("is-pass", sample.pass);
      barEl.classList.toggle("is-fail", !sample.pass);
    }
  };

  if (!animateScan) {
    applyFinal();
    return;
  }

  if (clipEl) clipEl.textContent = sample.clip;
  if (badgeEl) badgeEl.textContent = dict.demo_scanning;
  if (sumEl) sumEl.textContent = dict.demo_scanning_msg;
  pills.forEach((p) => {
    if (!p) return;
    p.classList.remove("done");
    p.classList.add("running");
  });
  scanTimer = setTimeout(applyFinal, 220);
}

function renderCasInspector() {
  const el = document.getElementById("casInspector");
  if (el && CAS_DETAILS[currentLang][currentCas]) {
    el.textContent = CAS_DETAILS[currentLang][currentCas];
  }
  document.querySelectorAll("#casMiniChart .svg-bar").forEach((bar) => {
    bar.classList.toggle("is-selected", bar.getAttribute("data-cas") === currentCas);
  });
}

function renderPricingDisplay() {
  const dict = I18N[currentLang];
  const unit = currentCycle === "monthly" ? dict.per_mo : dict.per_yr;
  const sEl = document.getElementById("priceStarter");
  const pEl = document.getElementById("pricePro");
  const aEl = document.getElementById("priceApi");
  const oldProEl = document.getElementById("oldPro");
  const oldApiEl = document.getElementById("oldApi");
  const proBadgeEl = document.getElementById("proDiscountBadge");
  const apiBadgeEl = document.getElementById("apiDiscountBadge");
  const proSaveEl = document.getElementById("proSaveNote");
  const apiSaveEl = document.getElementById("apiSaveNote");

  if (sEl) sEl.textContent = PLANS.starter[currentCycle];
  if (pEl) pEl.textContent = PLANS.pro[currentCycle];
  if (aEl) aEl.textContent = PLANS.api[currentCycle];
  if (oldProEl) oldProEl.textContent = currentCycle === "monthly" ? PLANS.pro.oldMonthly : PLANS.pro.oldAnnual;
  if (oldApiEl) oldApiEl.textContent = currentCycle === "monthly" ? PLANS.api.oldMonthly : PLANS.api.oldAnnual;

  const badgeMap = currentLang === "en" ? "badgeEn" : "badgeKo";
  const saveMap = currentLang === "en" ? "saveEn" : "saveKo";
  if (proBadgeEl) proBadgeEl.textContent = PLANS.pro[badgeMap][currentCycle];
  if (apiBadgeEl) apiBadgeEl.textContent = PLANS.api[badgeMap][currentCycle];
  if (proSaveEl) proSaveEl.textContent = PLANS.pro[saveMap][currentCycle];
  if (apiSaveEl) apiSaveEl.textContent = PLANS.api[saveMap][currentCycle];

  document.querySelectorAll(".price-unit").forEach((el) => {
    el.textContent = unit;
  });

  document.querySelectorAll(".bill-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-cycle") === currentCycle);
  });
}

function renderCheckoutPlan() {
  const dict = I18N[currentLang];
  const plan = PLANS[currentPlan];
  const unit = currentCycle === "monthly" ? dict.per_mo : dict.per_yr;
  const oldPrice = currentCycle === "monthly" ? plan.oldMonthly : plan.oldAnnual;
  const badgeMap = currentLang === "en" ? "badgeEn" : "badgeKo";
  const saveMap = currentLang === "en" ? "saveEn" : "saveKo";

  const labelEl = document.getElementById("coPlanLabel");
  const quotaEl = document.getElementById("coPlanQuota");
  const discountTagEl = document.getElementById("coDiscountTag");
  const oldPriceEl = document.getElementById("coOldPrice");
  const priceEl = document.getElementById("coPlanPrice");
  const dueEl = document.getElementById("coDueNote");
  const billingWrap = document.getElementById("coBillingWrap");

  if (labelEl) labelEl.textContent = plan.name;
  if (quotaEl) quotaEl.textContent = currentLang === "en" ? plan.quotaEn : plan.quotaKo;
  if (discountTagEl) {
    discountTagEl.textContent = plan.isFree
      ? plan[saveMap][currentCycle]
      : `${plan[badgeMap][currentCycle]} · ${plan[saveMap][currentCycle]}`;
  }
  if (oldPriceEl) {
    oldPriceEl.textContent = oldPrice;
    oldPriceEl.style.display = oldPrice ? "inline" : "none";
  }
  if (priceEl) priceEl.textContent = `${plan[currentCycle]}${unit}`;
  if (dueEl) dueEl.textContent = plan.isFree ? dict.co_free_note : dict.co_due_note;
  if (billingWrap) billingWrap.style.display = plan.isFree ? "none" : "grid";

  document.querySelectorAll(".co-plan-tab").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-plan-tab") === currentPlan);
  });
  document.querySelectorAll(".co-cycle-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-cycle") === currentCycle);
  });
}

function openCheckout(planKey) {
  if (planKey && PLANS[planKey]) {
    currentPlan = planKey;
  }
  const formPane = document.getElementById("coFormPane");
  const recPane = document.getElementById("coReceiptPane");
  if (formPane) formPane.hidden = false;
  if (recPane) recPane.hidden = true;

  const coEmailInput = document.getElementById("coEmail");
  if (coEmailInput && !coEmailInput.value.trim()) {
    try {
      const savedEmail = localStorage.getItem("cutgate_beta_email");
      if (savedEmail) coEmailInput.value = savedEmail;
    } catch {
      // ignore storage errors
    }
  }

  renderCheckoutPlan();
  const modal = document.getElementById("checkoutModal");
  if (modal && typeof modal.showModal === "function") {
    modal.showModal();
  }
}

function applyLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  const dict = I18N[lang];
  if (dict.page_title) {
    document.title = dict.page_title;
  }
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });
  const emailInput = document.getElementById("emailInput");
  if (emailInput && dict.email_placeholder) {
    emailInput.placeholder = dict.email_placeholder;
  }
  const coEmailInput = document.getElementById("coEmail");
  if (coEmailInput && dict.email_placeholder) {
    coEmailInput.placeholder = dict.email_placeholder;
  }
  const coTeamInput = document.getElementById("coTeam");
  if (coTeamInput && dict.co_team_placeholder) {
    coTeamInput.placeholder = dict.co_team_placeholder;
  }
  const copyBtn = document.getElementById("copyEmailBtn");
  if (copyBtn && !copyBtn.classList.contains("copied")) {
    copyBtn.textContent = dict.copy_btn;
  }
  const toggleBtn = document.getElementById("langToggle");
  if (toggleBtn) {
    toggleBtn.textContent = lang === "en" ? "한국어" : "English";
  }
  renderDemo(false);
  renderCasInspector();
  renderPricingDisplay();
  renderCheckoutPlan();
}

function animateCountUp(el, target, decimals, prefix, suffix, duration) {
  const start = performance.now();
  function step(now) {
    const progress = Math.max(0, Math.min(1, (now - start) / duration));
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = target * eased;
    el.textContent = `${prefix}${current.toFixed(decimals)}${suffix}`;
    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      el.textContent = `${prefix}${target.toFixed(decimals)}${suffix}`;
    }
  }
  requestAnimationFrame(step);
}

function setupScrollAnimations() {
  const gaugeGrid = document.getElementById("gaugeGrid");
  const casChart = document.getElementById("casMiniChart");

  const runGauges = () => {
    document.querySelectorAll("#gaugeGrid .skill-fill").forEach((bar) => {
      const w = bar.getAttribute("data-target-width") || "0";
      bar.style.width = `${w}%`;
    });
    document.querySelectorAll("#gaugeGrid .skill-num").forEach((valEl) => {
      const target = parseFloat(valEl.getAttribute("data-target") || "0");
      const decimals = parseInt(valEl.getAttribute("data-decimals") || "0", 10);
      const prefix = valEl.getAttribute("data-prefix") || "";
      const suffix = valEl.getAttribute("data-suffix") || "";
      animateCountUp(valEl, target, decimals, prefix, suffix, 1400);
    });
  };

  const runMiniBars = () => {
    const bars = Array.from(document.querySelectorAll("#casMiniChart .svg-bar"));
    const vals = Array.from(document.querySelectorAll("#casMiniChart .svg-bar-val"));
    const baseLine = 248;
    const duration = 1400;
    const start = performance.now();

    function frame(now) {
      const progress = Math.max(0, Math.min(1, (now - start) / duration));
      const eased = 1 - Math.pow(1 - progress, 3);
      bars.forEach((bar, i) => {
        const targetH = parseFloat(bar.getAttribute("data-target-h") || "0");
        const curH = targetH * eased;
        const curY = baseLine - curH;
        bar.setAttribute("height", curH.toFixed(2));
        bar.setAttribute("y", curY.toFixed(2));

        const valEl = vals[i];
        if (valEl) {
          const targetNum = parseFloat(valEl.getAttribute("data-target") || "0");
          valEl.setAttribute("y", (curY - 8).toFixed(2));
          valEl.textContent = `+${(targetNum * eased).toFixed(2)}%`;
        }
      });
      if (progress < 1) {
        requestAnimationFrame(frame);
      }
    }
    requestAnimationFrame(frame);
  };

  if ("IntersectionObserver" in window) {
    if (gaugeGrid) {
      const obs1 = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              runGauges();
              obs1.disconnect();
            }
          });
        },
        { threshold: 0.12 }
      );
      obs1.observe(gaugeGrid);
    }
    if (casChart) {
      const obs2 = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              runMiniBars();
              obs2.disconnect();
            }
          });
        },
        { threshold: 0.12 }
      );
      obs2.observe(casChart);
    }
  } else {
    runGauges();
    runMiniBars();
  }
}

function fallbackCopy(text) {
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.style.position = "fixed";
  ta.style.opacity = "0";
  document.body.appendChild(ta);
  ta.select();
  document.execCommand("copy");
  document.body.removeChild(ta);
}

async function copyText(text) {
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text);
    } else {
      fallbackCopy(text);
    }
  } catch {
    fallbackCopy(text);
  }
}

function renderWaitlistFeedback(email) {
  const msgEl = document.getElementById("waitlistMsg");
  if (!msgEl || !email) return;
  const dict = I18N[currentLang];
  msgEl.textContent = "";

  const textNode = document.createTextNode(`${dict.wl_done_prefix} ${email} `);
  const mailLink = document.createElement("a");
  const subject = encodeURIComponent("CutGate AI Private Beta Access Request");
  const body = encodeURIComponent(`Hi CutGate AI team,

Please add ${email} to the Private Beta early-access list.`);
  mailLink.href = `mailto:hwangjin@cutgateai.com?subject=${subject}&body=${body}`;
  mailLink.className = "waitlist-mailto";
  mailLink.textContent = dict.wl_mailto;

  msgEl.appendChild(textNode);
  msgEl.appendChild(mailLink);
}

document.addEventListener("DOMContentLoaded", () => {
  applyLanguage("en");
  setupScrollAnimations();

  try {
    const savedEmail = localStorage.getItem("cutgate_beta_email");
    if (savedEmail) {
      renderWaitlistFeedback(savedEmail);
    }
  } catch {
    // ignore storage errors
  }

  document.getElementById("langToggle")?.addEventListener("click", () => {
    applyLanguage(currentLang === "en" ? "ko" : "en");
    try {
      const savedEmail = localStorage.getItem("cutgate_beta_email");
      if (savedEmail) {
        renderWaitlistFeedback(savedEmail);
      }
    } catch {
      // ignore storage errors
    }
  });

  const mobileBtn = document.getElementById("mobileMenuBtn");
  const mobileNav = document.getElementById("mobileNav");
  mobileBtn?.addEventListener("click", () => {
    if (!mobileNav) return;
    const willOpen = mobileNav.hidden;
    mobileNav.hidden = !willOpen;
    mobileBtn.setAttribute("aria-expanded", willOpen ? "true" : "false");
  });
  mobileNav?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.hidden = true;
      mobileBtn?.setAttribute("aria-expanded", "false");
    });
  });

  document.querySelectorAll(".demo-tab").forEach((btn) => {
    btn.addEventListener("click", () => {
      const sample = btn.getAttribute("data-sample");
      if (sample === "fail" || sample === "pass") {
        currentDemo = sample;
        renderDemo(true);
      }
    });
  });

  document.getElementById("demoRunBtn")?.addEventListener("click", () => {
    renderDemo(true);
  });

  document.querySelectorAll("#casMiniChart .svg-bar").forEach((bar) => {
    const selectBar = () => {
      const cas = bar.getAttribute("data-cas");
      if (cas) {
        currentCas = cas;
        renderCasInspector();
      }
    };
    bar.addEventListener("click", selectBar);
    bar.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        selectBar();
      }
    });
  });

  document.querySelectorAll(".bill-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const cycle = btn.getAttribute("data-cycle");
      if (cycle === "monthly" || cycle === "annual") {
        currentCycle = cycle;
        renderPricingDisplay();
        renderCheckoutPlan();
      }
    });
  });

  document.querySelectorAll(".open-checkout").forEach((btn) => {
    btn.addEventListener("click", () => {
      const planKey = btn.getAttribute("data-plan") || "pro";
      openCheckout(planKey);
    });
  });

  document.querySelectorAll(".co-plan-tab").forEach((btn) => {
    btn.addEventListener("click", () => {
      const planKey = btn.getAttribute("data-plan-tab");
      if (planKey && PLANS[planKey]) {
        currentPlan = planKey;
        renderCheckoutPlan();
      }
    });
  });

  document.getElementById("checkoutForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const emailEl = document.getElementById("coEmail");
    const teamEl = document.getElementById("coTeam");
    const engineEl = document.getElementById("coEngine");
    const billingEl = document.getElementById("coBilling");
    if (!emailEl || !emailEl.value.trim()) return;

    const email = emailEl.value.trim();
    const team = (teamEl?.value || "").trim() || "-";
    const engine = engineEl?.value || "Multi-Model";
    const plan = PLANS[currentPlan];
    const dict = I18N[currentLang];
    const unit = currentCycle === "monthly" ? dict.per_mo : dict.per_yr;
    const priceLabel = `${plan[currentCycle]}${unit}`;
    const billingMode = plan.isFree
      ? dict.co_free_note
      : billingEl?.options[billingEl.selectedIndex]?.text || "Invoice after beta onboarding";

    const orderPayload = { plan: plan.name, priceLabel, cycle: currentCycle, email, team, engine, billingMode };
    lastOrderText = [
      `Plan: ${plan.name} (${priceLabel})`,
      `Email: ${email}`,
      `Team: ${team}`,
      `Engine: ${engine}`,
      `Billing: ${billingMode}`
    ].join("\n");

    try {
      localStorage.setItem("cutgate_checkout_order", JSON.stringify(orderPayload));
      localStorage.setItem("cutgate_beta_email", email);
    } catch {
      // ignore storage errors
    }

    const recPlanEl = document.getElementById("recPlan");
    const recEmailEl = document.getElementById("recEmail");
    const recTeamEl = document.getElementById("recTeam");
    const recBillEl = document.getElementById("recBilling");
    const mailBtn = document.getElementById("sendOrderMailBtn");

    if (recPlanEl) recPlanEl.textContent = `${plan.name} · ${priceLabel}`;
    if (recEmailEl) recEmailEl.textContent = email;
    if (recTeamEl) recTeamEl.textContent = `${team} · ${engine}`;
    if (recBillEl) recBillEl.textContent = billingMode;
    if (mailBtn) {
      const subject = encodeURIComponent(`[CutGate AI] Private Beta Request — ${plan.name}`);
      const body = encodeURIComponent(
        `Hi CutGate AI team,\n\nPlease provision my Private Beta workspace:\n\n${lastOrderText}\n`
      );
      mailBtn.href = `mailto:hwangjin@cutgateai.com?subject=${subject}&body=${body}`;
    }

    const formPane = document.getElementById("coFormPane");
    const recPane = document.getElementById("coReceiptPane");
    if (formPane) formPane.hidden = true;
    if (recPane) recPane.hidden = false;
    renderWaitlistFeedback(email);
  });

  document.getElementById("coEditBtn")?.addEventListener("click", () => {
    const formPane = document.getElementById("coFormPane");
    const recPane = document.getElementById("coReceiptPane");
    if (formPane) formPane.hidden = false;
    if (recPane) recPane.hidden = true;
  });

  const copyOrderBtn = document.getElementById("copyOrderBtn");
  copyOrderBtn?.addEventListener("click", async () => {
    if (!lastOrderText) return;
    await copyText(lastOrderText);
    copyOrderBtn.textContent = I18N[currentLang].copied_btn;
    setTimeout(() => {
      copyOrderBtn.textContent = I18N[currentLang].co_copy_rec;
    }, 1800);
  });

  const copyBtn = document.getElementById("copyEmailBtn");
  copyBtn?.addEventListener("click", async () => {
    const email = copyBtn.getAttribute("data-email") || "hwangjin@cutgateai.com";
    await copyText(email);
    copyBtn.classList.add("copied");
    copyBtn.textContent = I18N[currentLang].copied_btn;
    setTimeout(() => {
      copyBtn.classList.remove("copied");
      copyBtn.textContent = I18N[currentLang].copy_btn;
    }, 1800);
  });

  document.getElementById("waitlistForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const emailInput = document.getElementById("emailInput");
    if (!emailInput) return;
    const email = emailInput.value.trim();
    if (!email) return;
    try {
      localStorage.setItem("cutgate_beta_email", email);
    } catch {
      // ignore storage errors
    }
    renderWaitlistFeedback(email);
    emailInput.value = "";
  });

  document.querySelectorAll("[data-modal]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-modal");
      const modal = id ? document.getElementById(id) : null;
      if (modal && typeof modal.showModal === "function") {
        modal.showModal();
      }
    });
  });

  document.querySelectorAll("dialog.info-modal").forEach((modal) => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.close();
      }
    });
  });

  document.querySelectorAll(".close-modal").forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.closest("dialog")?.close();
    });
  });
});
