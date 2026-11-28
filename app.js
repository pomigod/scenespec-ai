const I18N = {
  en: {
    nav_pipeline: "3-Gate Engine",
    nav_demo: "Telemetry",
    nav_spec: "Pipeline Spec",
    nav_arch: "Vertex AI Stack",
    nav_pricing: "Pricing",
    nav_contact: "Founder & Contact",
    nav_cta: "REQUEST ACCESS",
    hero_badge: "Built on Vertex AI (Gemini 4 Multimodal) · Veo · Kling · Seedance · Runway",
    hero_eyebrow: "ZERO DRIFT >>> ZERO WASTED 720P/1080P RENDER",
    hero_title_html: 'UNIVERSAL VIDEO QA, VFR FORENSICS &amp; <span class="volt-glow">ADAPTIVE CAS MASTERING.</span>',
    hero_subtitle:
      "CutGate AI is a model-agnostic QA, consistency, and mastering platform for teams shipping multi-clip AI video across Veo, Kling, Seedance, and Runway. Lock style and physics with a Video-Reference Anchor, gate 480p drafts via VFR pts_time cadence and Vertex AI Gemini 4 4x4 micro-grid inspection before 720p promotion, and ship adaptive CAS-sharpened 1080p masters.",
    hero_cta_primary: "REQUEST ACCESS",
    hero_cta_secondary: "LIVE TELEMETRY",
    metric_1: "Vertex AI Gemini 4 4x4 micro-grid gates 720p/1080p promotion",
    metric_2: "Tenengrad edge clarity gain verified at optimal 0.18 CAS sweep",
    metric_3: "VFR pts_time cadence audit · -15.5 LUFS · <50ms A/V sync",
    card_status: "Gemini 4 Promotion Gate: 480p Verified -> 720p/1080p Master",
    pipe_badge: "3-GATE ARCHITECTURE",
    pipe_title: "Model-Agnostic 3-Gate Video Consistency & Mastering Engine",
    pipe_sub: "Stop wasting 720p/1080p GPU budgets on prop teleportation, hidden VFR holds, and over-sharpened masters.",
    s1_title: "[01] Video-Reference Master Anchor",
    s1_prob: "Multi-clip AI generations drift in texture, spatial scale, and motion cadence across cuts.",
    s1_eng: "Binds a golden 720p master clip and multi-angle prop sheets to lock reference continuity.",
    s1_vai: "Gemini 4 Multimodal scores structural alignment before unlocking high-res GPU spend.",
    s1_met: "480p pre-screen gates 720p promotion · zero unanchored drift.",
    s1_cta: "Inspect Stage 01 Spec",
    s2_title: "[02] 480p VFR & 4x4 Micro-Grid Gate",
    s2_prob: "VFR streams (e.g. 60fps metadata hiding 241 real frames) mask hold freezes and prop spawning.",
    s2_eng: "Extracts -vsync passthrough pts_time frames, 0.5s motion bins, 3fps sheets, and 4x4 peak-cut grids.",
    s2_vai: "Gemini 4 inspects 16-frame 4x4 micro-grids against prop plates to block physics collapse.",
    s2_met: "100% VFR frame fidelity · instant red-box flagging on X-Ray board.",
    s2_cta: "Simulate 4x4 Gate",
    s3_title: "[03] Adaptive AMD CAS & Mastering",
    s3_prob: "Uniform sharpening amplifies flat-surface noise while multi-clip audio jumps in loudness.",
    s3_eng: "Sweeps AMD CAS (0.14–0.24) per clip, normalizes EBU R128, and verifies blackdetect + A/V sync.",
    s3_vai: "Cloud Run workers & Gemini 4 sign SHA-256 segment caches and 1-page X-Ray proof boards.",
    s3_met: "+8.88% Tenengrad @ CAS 0.18 · -15.5 LUFS · <50ms sync.",
    s3_cta: "Inspect CAS Sweep",
    demo_badge: "TELEMETRY BENCHMARKS",
    demo_title: "Measured VFR Cadence, 4x4 Micro-Grid & CAS Performance",
    demo_sub: "Production benchmarks verifying how Gemini 4 multimodal inspection and signal forensics govern promotion and mastering.",
    bar1_label: "AMD CAS Sharpness Gain (Tenengrad @ 0.18)",
    bar1_note: "Optimal sweet spot bounding flat-region noise delta to 1.9306 across A/B sweep (0.14–0.24).",
    bar2_label: "480p Pre-Filter Credit Guard",
    bar2_val: "480p -> 720p Gated",
    bar2_note: "Blocks prop teleportation and hold freezes at 480p draft stage before 720p/1080p spend.",
    bar3_label: "A/V Sync Precision & Blackframe Guard",
    bar3_note: "FFprobe mux verification + blackdetect zero-frame guarantee across all 1080p exports.",
    bar4_label: "VFR Frame Integrity (-vsync passthrough pts_time)",
    bar4_note: "Eliminates frame duplication/drop errors when auditing variable-frame-rate generative clips.",
    bar5_label: "EBU R128 Broadcast Loudness Lock",
    bar5_note: "Dual-pass loudness normalization with 0.08s crossfade smoothing across multi-clip cuts.",
    bar6_label: "Vertex AI 4x4 Micro-Grid & SHA-256 Cache",
    bar6_note: "3fps full contact sheet + 16-frame peak-cut micro-grid paired with deterministic segment caching.",
    tab_pass: "PASS · 480p Promoted to 720p",
    tab_block: "BLOCKED · Gemini 4 Prop & Hold Gate",
    tab_cas: "MASTER · AMD CAS A/B (+8.88%)",
    pane_metrics: "1. VFR pts_time, Motion Bins & CAS Sweep Data",
    pane_verdict: "2. Gemini 4 Gate Decision & Mastering Output",
    matrix_title: "Pipeline Architecture & Stage Gate Specification Matrix",
    matrix_sub: "Deterministic stage-by-stage input, Vertex AI processing, output artifact, and strict pass thresholds.",
    th_stage: "Stage",
    th_input: "Input Stream / Assets",
    th_process: "Vertex AI & Signal Processing",
    th_output: "Output Artifact",
    th_pass: "Pass Criteria",
    m1_in: "720p golden master + character & prop sheets",
    m1_pr: "Video-Reference binding + 480p pre-screen orchestration",
    m1_out: "Locked anchor manifest & 480p draft clip",
    m1_pass: "Cadence & scale aligned",
    m2_in: "480p VFR MP4 stream + prop reference plates",
    m2_pr: "-vsync passthrough pts_time, 0.5s motion bins, Vertex AI Gemini 4 4x4 inspection",
    m2_out: "3fps contact sheet + 16-frame 4x4 micro-grid",
    m2_pass: "0 prop spawn · <5% holds",
    m3_in: "Promoted 720p/1080p clip + multi-clip audio stems",
    m3_pr: "Per-clip AMD CAS A/B sweep (0.14–0.24) + EBU R128 + 0.08s crossfade",
    m3_out: "1080p CRF 14 master + cas_ab_report.json",
    m3_pass: "+8.88% CAS · -15.5 LUFS",
    m4_in: "Final stitched master MP4 + telemetry logs",
    m4_pr: "blackdetect, F0 voice audit, A/V mux delta, SHA-256 segment hash",
    m4_out: "1-page X-Ray Proof Board + signed cache",
    m4_pass: "0 black · <50ms A/V sync",
    qa_title: "6-Point Forensic QA & X-Ray Proof Board",
    qa_sub: "Zero-trust verification across every multi-clip render: never ship broken generative artifacts to clients or contests.",
    q1_t: "VFR Passthrough Cadence Audit",
    q1_d: "Inspects showinfo pts_time frame deltas with -vsync passthrough to expose hidden variable-frame-rate stutter and duplicate hold frames.",
    q2_t: "0.5s Motion Bins & Spike Detection",
    q2_d: "Quantifies frame-to-frame pixel deltas across 0.5-second bins to catch frozen stretches (<0.8 diff) and sudden morphing/jump-cut spikes.",
    q3_t: "4x4 Micro-Grid Physics Gate",
    q3_d: "Extracts 16 sequential high-res frames around peak action cuts so Gemini 4 verifies object permanence, gravity, and zero prop teleportation.",
    q4_t: "Adaptive AMD CAS A/B Benchmark",
    q4_d: "Sweeps CAS strengths (0.14–0.24) per clip, selecting the exact point that maximizes Tenengrad edge clarity while bounding flat-surface noise.",
    q5_t: "Audio F0, -15.5 LUFS & <50ms Sync",
    q5_d: "Audits EBU R128 loudness (-15.5 LUFS / -1.5 dBTP), voice pitch bleed, 0.08s crossfade smoothing, blackdetect, and <50ms A/V sync drift.",
    q6_t: "3fps Sheet & SHA-256 Proof Board",
    q6_d: "Generates a 3fps full-clip contact sheet and 1-page X-Ray review board backed by SHA-256 segment caching for instant client approval.",
    arch_title: "Google Cloud & Vertex AI Architecture",
    arch_sub: "Vertex AI Gemini 4 multimodal reasoning paired with Cloud Run FFmpeg/OpenCV signal pipelines.",
    arch_1: "Analyzes 4x4 peak-cut micro-grids, 3fps contact sheets, and reference prop assets to detect physics collapse or prop drift and authorize 720p promotion.",
    arch_2: "Runs -vsync passthrough VFR cadence checks, 0.5s motion-bin scoring, AMD CAS A/B sweeps, and FFmpeg 7.1 -15.5 LUFS lossless mastering.",
    arch_3: "Manages 480p -> 720p -> 1080p promotion states, SHA-256 segment cache keys, and per-clip CAS/VFR telemetry records.",
    arch_4: "Stores golden video anchors, reference prop plates, 4x4 micro-grid sheets, 400Kbps review proxies, and signed 1080p/4K MP4 masters.",
    pricing_title: "Predictable SaaS & QA API Plans",
    pricing_sub: "Cut wasted 720p/1080p renders across Veo, Kling, Seedance, and Runway with automated VFR and multimodal gates.",
    p_popular: "MOST POPULAR",
    p1_1: "20 480p VFR & 4x4 Micro-Grid gates / mo",
    p1_2: "3 full 6-Point Forensic QA & CAS sweeps",
    p1_3: "Multi-model reference continuity validator",
    p_cta_free: "Start Free",
    p2_1: "300 480p -> 720p Gemini 4 promotion gates",
    p2_2: "Adaptive AMD CAS A/B & -15.5 LUFS mastering",
    p2_3: "3fps sheets, 4x4 micro-grids & SHA-256 cache",
    p_cta_pro: "Join Pro Beta",
    p3_1: "REST & Webhook QA gate for video platforms",
    p3_2: "Custom Gemini 4 prop-continuity rulesets",
    p3_3: "Signed X-Ray QA certificates & priority SLA",
    p_cta_studio: "Request API Access",
    team_title: "Founder & Proven Production Engineering",
    team_sub: "Engineered from real multi-clip AI video pipelines across 10+ commercial, stop-motion, and public-sector campaigns.",
    team_name: "Jin Hwang — Founder & Lead AI Systems Engineer",
    team_org: "B.S. Candidate in Artificial Intelligence (Minor: Medical IT Engineering), Konyang University · Republic of Korea",
    team_bio: "Built CutGate's core VFR passthrough cadence auditor, 4x4 peak-cut micro-grid inspection loop, adaptive AMD CAS A/B mastering benchmark, and multi-reference video-anchor continuity pipelines while shipping 10+ 4K/1080p AI video productions. Background spans Graph Convolutional Networks (GCN), Swin Transformer vision systems, and zero-trust verification tooling.",
    contact_badge: "DIRECT BUSINESS CONTACT",
    contact_title: "Founder & Billing Contact",
    contact_desc: "Official domain contact for Google Cloud Startup Program, enterprise API trials, and studio onboarding.",
    gcp_powered: "Powered by Google Cloud Vertex AI (Gemini 4) · Domain: cutgateai.com",
    wl_title: "REQUEST EARLY ACCESS",
    wl_sub: "Shipping multi-shot AI videos on Veo, Kling, Seedance, or Runway? Leave your work email to join the CutGate AI beta on Vertex AI.",
    role_1: "SaaS / Startup Video Team",
    role_2: "Creative / Ad Agency",
    role_3: "AI Video Platform (QA API)",
    wl_btn: "REQUEST ACCESS",
    wl_done: "Thank you. Your work email has been queued for the CutGate AI Vertex AI beta.",
    footer_desc: "Model-Agnostic AI Video Consistency, VFR Forensics & Mastering Platform — Republic of Korea",
    footer_privacy: "Privacy Policy",
    footer_terms: "Terms of Service",
    privacy_body: "CutGate AI collects only the work email address and use-case selection voluntarily submitted for private beta onboarding. Data is never sold or shared with third-party advertisers. You may request deletion anytime via hwangjin@cutgateai.com or contact@cutgateai.com.",
    terms_body: "CutGate AI is currently in private beta. Uploaded draft clips, forensic QA audit reports, and X-Ray proof certificates remain the property of the workspace owner.",
    close_btn: "Close"
  },
  ko: {
    nav_pipeline: "3-Gate 엔진",
    nav_demo: "텔레메트리",
    nav_spec: "파이프라인 스펙",
    nav_arch: "Vertex AI 스택",
    nav_pricing: "요금제",
    nav_contact: "창업자·문의",
    nav_cta: "베타 신청",
    hero_badge: "Vertex AI (Gemini 4 멀티모달) 기반 · Veo · Kling · Seedance · Runway 범용 지원",
    hero_eyebrow: "ZERO DRIFT >>> 720P/1080P 불량 렌더링 크레딧 원천 차단",
    hero_title_html: '범용 AI 영상 QA · VFR 포렌식 · <span class="volt-glow">적응형 CAS 마스터링.</span>',
    hero_subtitle:
      "CutGate AI는 Veo, Kling, Seedance, Runway 등 다양한 생성형 영상 모델에 공통 적용되는 QA·일관성·마스터링 플랫폼입니다. Video-Reference 마스터 앵커로 스타일과 물리 연속성을 고정하고, VFR pts_time 해부와 Vertex AI Gemini 4 4x4 마이크로 그리드 검수를 통과한 480p 초안만 720p로 승격하며, AMD CAS(+8.88%) 및 -15.5 LUFS 마스터링까지 자동 완결합니다.",
    hero_cta_primary: "베타 액세스 신청",
    hero_cta_secondary: "실측 텔레메트리 보기",
    metric_1: "Vertex AI Gemini 4 4x4 마이크로 그리드 통과 시에만 720p 승격",
    metric_2: "CAS 0.18 A/B 스윕 기준 Tenengrad 선명도 상승 (+8.88%)",
    metric_3: "VFR pts_time 케이던스 · -15.5 LUFS · 50ms 미만 A/V 싱크",
    card_status: "Gemini 4 승격 게이트 통과: 480p 검증 완료 -> 720p/1080p 마스터",
    pipe_badge: "3-GATE ARCHITECTURE",
    pipe_title: "모델 비종속 3-Gate AI 영상 일관성 & 마스터링 엔진",
    pipe_sub: "소품 순간이동, 숨겨진 VFR 정지 프레임, 노이즈 과다 샤프닝으로 720p/1080p 크레딧을 낭비하지 마세요.",
    s1_title: "[01] Video-Reference 마스터 앵커",
    s1_prob: "멀티클립 생성형 영상은 컷이 넘어갈수록 질감, 공간 스케일, 모션 케이던스가 쉽게 이탈합니다.",
    s1_eng: "720p 골든 마스터 클립과 다각도 소품 시트를 바인딩해 참조 연속성을 고정합니다.",
    s1_vai: "고비용 720p/1080p 렌더링 전 Gemini 4 멀티모달이 구조적 정렬도를 사전 채점합니다.",
    s1_met: "480p 사전 스크리닝으로 720p 승격 제어 · 무앵커 이탈 0%.",
    s1_cta: "Stage 01 스펙 보기",
    s2_title: "[02] 480p VFR & 4x4 마이크로 그리드 게이트",
    s2_prob: "VFR 스트림(예: 60fps 메타데이터 속 실제 241프레임)은 정지 홀드와 소품 급생성을 은폐합니다.",
    s2_eng: "-vsync passthrough pts_time 프레임, 0.5초 모션 빈, 3fps 시트 및 4x4 피크 컷 그리드를 추출합니다.",
    s2_vai: "Gemini 4가 16프레임 4x4 그리드와 소품 시트를 대조해 물리 붕괴를 즉시 차단합니다.",
    s2_met: "100% VFR 프레임 무결성 · X-Ray 보드 적색 박스 즉시 표기.",
    s2_cta: "4x4 게이트 시뮬레이션",
    s3_title: "[03] 적응형 AMD CAS & 마스터링",
    s3_prob: "일률적인 샤프닝은 평탄부 노이즈를 키우고 멀티클립 오디오 음량 편차를 유발합니다.",
    s3_eng: "클립별 AMD CAS(0.14~0.24) 스윕, EBU R128 정규화, blackdetect 및 A/V 싱크를 검증합니다.",
    s3_vai: "Cloud Run 워커와 Gemini 4가 SHA-256 세그먼트 캐시 및 1페이지 X-Ray 결재판을 발급합니다.",
    s3_met: "CAS 0.18 기준 Tenengrad +8.88% · -15.5 LUFS · 50ms 미만 싱크.",
    s3_cta: "CAS 스윕 보기",
    demo_badge: "TELEMETRY BENCHMARKS",
    demo_title: "실측 VFR 케이던스 · 4x4 마이크로 그리드 · CAS 성능 지표",
    demo_sub: "실제 멀티클립 제작에서 검증된 Gemini 4 멀티모달 승격 게이트와 신호 포렌식 실측 데이터입니다.",
    bar1_label: "AMD CAS 선명도 상승률 (Tenengrad @ 0.18)",
    bar1_note: "0.14~0.24 A/B 스윕 중 평탄부 노이즈 델타(1.9306)를 억제한 최적 지점.",
    bar2_label: "480p 사전 필터 크레딧 방화벽",
    bar2_val: "480p -> 720p 게이트",
    bar2_note: "고비용 720p/1080p 집행 전 480p 초안 단계에서 소품 순간이동과 정지 프레임을 차단합니다.",
    bar3_label: "A/V 싱크 정밀도 & 블랙프레임 방어",
    bar3_note: "모든 1080p 출력물에서 FFprobe 먹싱 검증 및 blackdetect 0건 보장.",
    bar4_label: "VFR 프레임 무결성 (-vsync passthrough pts_time)",
    bar4_note: "가변 프레임레이트 생성형 클립 감사 시 프레임 복제·누락 오차를 제거합니다.",
    bar5_label: "EBU R128 방송 표준 음량 잠금",
    bar5_note: "멀티클립 컷 경계 0.08초 크로스페이드 스무딩과 이중 패스 라우드니스 정규화 적용.",
    bar6_label: "Vertex AI 4x4 마이크로 그리드 & SHA-256 캐시",
    bar6_note: "전체 3fps 컨택트 시트 + 16프레임 피크 컷 그리드 및 결정론적 세그먼트 캐싱.",
    tab_pass: "PASS · 480p -> 720p 승격",
    tab_block: "차단 · Gemini 4 소품·정지 게이트",
    tab_cas: "마스터 · AMD CAS A/B (+8.88%)",
    pane_metrics: "1. VFR pts_time · 모션 빈 · CAS 스윕 실측치",
    pane_verdict: "2. Gemini 4 승격 판정 및 마스터링 결과",
    matrix_title: "파이프라인 아키텍처 & 단계별 통과 기준 스펙 매트릭스",
    matrix_sub: "Stage별 입력 스트림, Vertex AI 신호 처리, 산출물 및 엄격한 통과 임계치입니다.",
    th_stage: "단계",
    th_input: "입력 스트림 / 에셋",
    th_process: "Vertex AI 및 신호 처리",
    th_output: "출력 산출물",
    th_pass: "통과 기준",
    m1_in: "720p 골든 마스터 + 캐릭터·소품 시트",
    m1_pr: "Video-Reference 바인딩 + 480p 사전 스크리닝 오케스트레이션",
    m1_out: "잠금 앵커 매니페스트 및 480p 초안 클립",
    m1_pass: "케이던스·스케일 정렬",
    m2_in: "480p VFR MP4 스트림 + 소품 참조 플레이트",
    m2_pr: "-vsync passthrough pts_time, 0.5초 모션 빈, Vertex AI Gemini 4 4x4 검수",
    m2_out: "3fps 시트 + 16프레임 4x4 마이크로 그리드",
    m2_pass: "소품 급생성 0건 · 홀드 <5%",
    m3_in: "승격된 720p/1080p 클립 + 멀티클립 오디오",
    m3_pr: "클립별 AMD CAS A/B 스윕(0.14~0.24) + EBU R128 + 0.08초 크로스페이드",
    m3_out: "1080p CRF 14 마스터 + cas_ab_report.json",
    m3_pass: "+8.88% CAS · -15.5 LUFS",
    m4_in: "최종 결합 마스터 MP4 + 텔레메트리 로그",
    m4_pr: "blackdetect, F0 보이스 감사, A/V 먹스 델타, SHA-256 세그먼트 해시",
    m4_out: "1페이지 X-Ray 결재판 + 서명 캐시",
    m4_pass: "블랙 0건 · 싱크 <50ms",
    qa_title: "6대 포렌식 QA & 1페이지 X-Ray 결재판",
    qa_sub: "멀티클립 생성형 영상의 숨겨진 결함을 기계적으로 적발하는 제로트러스트 감사 모듈입니다.",
    q1_t: "VFR Passthrough 케이던스 감사",
    q1_d: "-vsync passthrough와 showinfo pts_time 프레임 간격 분석으로 가변 프레임레이트 스터터 및 중복 홀드 프레임을 적발합니다.",
    q2_t: "0.5초 모션 빈 & 스파이크 탐지",
    q2_d: "0.5초 단위 픽셀 변화량 분포로 정지 구간(diff < 0.8)과 급작스러운 모핑·점프컷 스파이크를 정량 탐지합니다.",
    q3_t: "4x4 마이크로 그리드 물리 게이트",
    q3_d: "피크 액션 컷 전후 16프레임 고해상도 4x4 그리드를 추출해 Gemini 4가 객체 영속성·중력·소품 순간이동을 검수합니다.",
    q4_t: "적응형 AMD CAS A/B 벤치마크",
    q4_d: "클립마다 CAS 강도(0.14~0.24)를 스윕해 Tenengrad 선명도는 극대화하고 평탄부 노이즈 델타는 임계치 이하로 유지합니다.",
    q5_t: "음성 F0 · -15.5 LUFS · 50ms 미만 싱크",
    q5_d: "EBU R128 음량(-15.5 LUFS / -1.5 dBTP), 음성 피치 혼입, 0.08초 크로스페이드, blackdetect, A/V 싱크(<50ms)를 검증합니다.",
    q6_t: "3fps 시트 & SHA-256 X-Ray 결재판",
    q6_d: "전체 3fps 컨택트 시트와 SHA-256 세그먼트 캐시가 연결된 1페이지 X-Ray 검수 보드를 발급해 3초 내 최종 승인을 돕습니다.",
    arch_title: "Google Cloud & Vertex AI 아키텍처",
    arch_sub: "Vertex AI Gemini 4 멀티모달 추론과 Cloud Run FFmpeg/OpenCV 신호 파이프라인의 결합 구조입니다.",
    arch_1: "4x4 피크 컷 마이크로 그리드, 3fps 시트, 참조 소품 에셋을 멀티모달 분석해 물리 붕괴·소품 이탈 여부를 판정하고 720p 승격을 제어합니다.",
    arch_2: "-vsync passthrough VFR 케이던스 검사, 0.5초 모션 빈 채점, AMD CAS A/B 스윕, FFmpeg 7.1 -15.5 LUFS 무손실 마스터링을 수행합니다.",
    arch_3: "클립별 480p -> 720p -> 1080p 승격 상태 머신, SHA-256 세그먼트 캐시 키, VFR/CAS 텔레메트리를 관리합니다.",
    arch_4: "마스터 비디오 앵커, 참조 소품 시트, 4x4 마이크로 그리드, 400Kbps 리뷰 프록시, Signed 1080p/4K MP4를 보관합니다.",
    pricing_title: "투명한 SaaS & QA API 요금제",
    pricing_sub: "Veo, Kling, Seedance, Runway 등 어떤 모델을 쓰더라도 불량 720p/1080p 재렌더링 비용을 획기적으로 줄여줍니다.",
    p_popular: "추천 플랜",
    p1_1: "월 20회 480p VFR & 4x4 마이크로 게이트",
    p1_2: "월 3회 6대 포렌식 QA & CAS 스윕",
    p1_3: "멀티모델 참조 에셋 연속성 검증기",
    p_cta_free: "무료로 시작",
    p2_1: "월 300회 480p -> 720p Gemini 4 승격 게이트",
    p2_2: "적응형 AMD CAS A/B & -15.5 LUFS 마스터링",
    p2_3: "3fps 시트 · 4x4 그리드 · SHA-256 캐시",
    p_cta_pro: "Pro 베타 신청",
    p3_1: "영상 플랫폼용 REST & Webhook QA API",
    p3_2: "커스텀 Gemini 4 소품·물리 연속성 룰셋",
    p3_3: "SHA-256 X-Ray 감사 증명서 & 우선 SLA",
    p_cta_studio: "API 액세스 문의",
    team_title: "창업자 및 실전 엔지니어링 이력",
    team_sub: "10편 이상의 상용·스톱모션·공공 AI 영상 캠페인을 직접 제작·납품하며 현장의 병목을 코드로 해결했습니다.",
    team_name: "황진 (Jin Hwang) — 창업자 & 리드 AI 시스템 엔지니어",
    team_org: "건양대학교 인공지능학과 4학년 (부전공: 의료IT공학과) · 대한민국",
    team_bio: "10편 이상의 4K/1080p AI 영상 캠페인을 제작하면서 VFR passthrough 케이던스 감사기, 4x4 피크 컷 마이크로 그리드 검수 루프, 적응형 AMD CAS A/B 마스터링 벤치마크, 비디오 앵커 다중 참조 연속성 파이프라인을 직접 구축했습니다. 그래프 신경망(GCN) 시계열 모델과 Swin Transformer 비전 시스템 개발 경험을 보유하고 있습니다.",
    contact_badge: "공식 비즈니스 연락처",
    contact_title: "창업자 및 Google Cloud 결제 관리자 연락처",
    contact_desc: "Google for Startups 심사 확인, 엔터프라이즈 API 연동 및 스튜디오 온보딩 공식 도메인 이메일입니다.",
    gcp_powered: "Google Cloud Vertex AI (Gemini 4) 기반 · 공식 도메인: cutgateai.com",
    wl_title: "얼리 액세스 신청",
    wl_sub: "Veo, Kling, Seedance, Runway로 멀티클립 AI 영상을 제작 중이신가요? 업무용 이메일을 남기시면 Vertex AI 기반 CutGate AI 베타에 우선 초대해 드립니다.",
    role_1: "SaaS / 스타트업 영상 팀",
    role_2: "크리에이티브 / 광고 에이전시",
    role_3: "AI 영상 플랫폼 (QA API 연동)",
    wl_btn: "베타 신청",
    wl_done: "감사합니다. CutGate AI Vertex AI 프라이빗 베타 대기 명단에 등록되었습니다.",
    footer_desc: "범용 AI 영상 일관성 · VFR 포렌식 · 마스터링 SaaS — 대한민국",
    footer_privacy: "개인정보처리방침",
    footer_terms: "이용약관",
    privacy_body: "CutGate AI는 프라이빗 베타 온보딩 안내를 위해 자발적으로 제출된 업무용 이메일과 활용 목적만 수집합니다. 제3자 광고 제공이나 판매는 없으며 hwangjin@cutgateai.com 또는 contact@cutgateai.com 으로 언제든 삭제를 요청할 수 있습니다.",
    terms_body: "CutGate AI는 현재 프라이빗 베타 단계입니다. 업로드된 초안 클립, 포렌식 QA 감사 리포트, X-Ray 결재판의 권리는 워크스페이스 소유자에게 귀속됩니다.",
    close_btn: "닫기"
  }
};

const PRESETS = {
  pass_vfr: {
    spec: `{
  "clip_id": "clip_02_anchor_sync_480p",
  "input_stream": "vfr_avg_60fps_metadata (actual_frames: 241)",
  "vsync_mode": "passthrough_pts_time",
  "low_motion_holds": "2 / 240 (<0.8 diff)",
  "motion_05s_bins": { "0.0-4.0s_avg": 2.41, "peak_spike_f112": 18.6 },
  "gemini4_4x4_microgrid": {
    "props_verified": ["cart", "bucket", "ladder"],
    "prop_teleport_or_spawn": false,
    "physics_collapse": false
  },
  "verdict": "PROMOTE_TO_720P"
}`,
    steps: [
      { title: "Stage 1 · VFR Cadence Audit -> PASS", desc: "Extracted 241 true pts_time frames via -vsync passthrough; only 2 hold frames detected." },
      { title: "Stage 2 · Gemini 4 4x4 Micro-Grid -> PASS", desc: "Multimodal inspection confirmed all reference props remained spatially continuous across cut F112." },
      { title: "Stage 3 · Promotion & Mastering -> EXIT 0", desc: "Authorized 720p/1080p render -> applied CAS 0.18 (+8.88%) & -15.5 LUFS (8.4ms A/V sync)." }
    ]
  },
  block_prop: {
    spec: `{
  "clip_id": "clip_03_draft_480p_v2",
  "input_stream": "10.0s_480p_draft",
  "low_motion_holds": "46 / 240 (FREEZE_ALERT)",
  "motion_05s_bins": { "4.5-6.0s_avg": 0.34, "peak_spike_f142": 41.2 },
  "gemini4_4x4_microgrid": {
    "target_window": "F135-F150 (5.6s-6.25s)",
    "anomaly": "PROP_SPAWN_AND_GRAVITY_DRIFT",
    "detail": "Secondary bucket spawned mid-air behind subject at F142"
  },
  "verdict": "BLOCKED_AT_480P_GATE"
}`,
    steps: [
      { title: "Stage 1 · Motion-Bin Alert -> 46 Hold Frames", desc: "0.5s bin 4.5-6.0s dropped to 0.34 pixel delta before an abrupt 41.2 spike at F142." },
      { title: "Stage 2 · Gemini 4 4x4 Micro-Grid -> BLOCKED", desc: "Gemini 4 compared F135-F150 against reference prop plates and flagged mid-air prop spawning." },
      { title: "Credit Firewall -> 720p/1080p Spend Halted", desc: "Saved full high-res promotion credits and surfaced exact F142 red box on the 1-page X-Ray board." }
    ]
  },
  cas_sweep: {
    spec: `{
  "clip_id": "clip_02_master_cas_ab_report",
  "sample_sec": 4.54,
  "recommended_cas": 0.18,
  "ab_candidates": [
    { "cas": 0.00, "tenengrad_pct": "+0.00%", "flat_noise_delta": 0.00 },
    { "cas": 0.14, "tenengrad_pct": "+8.65%", "flat_noise_delta": 1.9258 },
    { "cas": 0.18, "tenengrad_pct": "+8.88%", "flat_noise_delta": 1.9306 },
    { "cas": 0.24, "tenengrad_pct": "+9.30%", "flat_noise_delta": 1.9343 }
  ],
  "master_qa": {
    "blackdetect": 0,
    "loudness": "-15.5 LUFS / -1.5 dBTP",
    "audio_crossfade_s": 0.08
  }
}`,
    steps: [
      { title: "Adaptive AMD CAS Sweep -> Selected 0.18", desc: "Delivered +8.88% Tenengrad edge crispness while bounding flat-region noise delta to 1.9306." },
      { title: "EBU R128 Audio & Crossfade Mastering", desc: "Normalized multi-clip master to -15.5 LUFS / -1.5 dBTP with smooth 0.08s clip transitions." },
      { title: "Integrity Audit -> 0 Black Frames, <50ms Sync", desc: "Passed FFprobe spec verification, SHA-256 segment caching, and 1080p CRF 14 dual export." }
    ]
  }
};

let currentLang = "en";

function applyLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  const dict = I18N[lang];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (!dict[key]) return;
    if (key.endsWith("_html")) {
      el.innerHTML = dict[key];
    } else {
      el.textContent = dict[key];
    }
  });
  const toggleBtn = document.getElementById("langToggle");
  if (toggleBtn) {
    toggleBtn.textContent = lang === "en" ? "한국어" : "English";
  }
}

function renderPreset(key) {
  const data = PRESETS[key];
  const specEl = document.getElementById("specPreview");
  const outEl = document.getElementById("pipelineOutput");
  if (specEl) specEl.textContent = data.spec;
  if (outEl) {
    outEl.innerHTML = data.steps
      .map((step) => `<div class="pipeline-step"><strong>${step.title}</strong><span>${step.desc}</span></div>`)
      .join("");
  }
  document.querySelectorAll(".preset-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-preset") === key);
  });
}

function animateTelemetryBars() {
  const fills = document.querySelectorAll(".skill-fill");
  const reveal = () => {
    fills.forEach((fill) => {
      const target = fill.getAttribute("data-width") || "80";
      fill.style.width = `${target}%`;
    });
  };
  if ("IntersectionObserver" in window) {
    const targetSection = document.getElementById("telemetryBars");
    if (!targetSection) {
      reveal();
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );
    observer.observe(targetSection);
  } else {
    reveal();
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

document.addEventListener("DOMContentLoaded", () => {
  applyLanguage("en");
  renderPreset("pass_vfr");
  animateTelemetryBars();

  document.getElementById("langToggle")?.addEventListener("click", () => {
    applyLanguage(currentLang === "en" ? "ko" : "en");
  });

  document.querySelectorAll(".preset-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const preset = btn.getAttribute("data-preset");
      if (preset && PRESETS[preset]) {
        renderPreset(preset);
      }
    });
  });

  document.querySelectorAll(".preset-jump").forEach((btn) => {
    btn.addEventListener("click", () => {
      const preset = btn.getAttribute("data-jump");
      if (preset && PRESETS[preset]) {
        renderPreset(preset);
      }
    });
  });

  const copyBtn = document.getElementById("copyEmailBtn");
  copyBtn?.addEventListener("click", async () => {
    const email = copyBtn.getAttribute("data-email") || "hwangjin@cutgateai.com";
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(email);
      } else {
        fallbackCopy(email);
      }
    } catch {
      fallbackCopy(email);
    }
    copyBtn.classList.add("copied");
    copyBtn.textContent = "COPIED ✓";
    setTimeout(() => {
      copyBtn.classList.remove("copied");
      copyBtn.textContent = "COPY";
    }, 1800);
  });

  document.getElementById("waitlistForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const emailInput = document.getElementById("emailInput");
    const msgEl = document.getElementById("waitlistMsg");
    if (!emailInput || !msgEl) return;
    if (!emailInput.value.trim()) return;
    msgEl.textContent = I18N[currentLang].wl_done;
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

  document.querySelectorAll(".close-modal").forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.closest("dialog")?.close();
    });
  });
});
