const I18N = {
  en: {
    nav_features: "Features",
    nav_demo: "Live Compiler",
    nav_arch: "Architecture",
    nav_pricing: "Pricing",
    nav_cta: "Request Early Access",
    hero_badge: "Built on Google Cloud & Vertex AI (Gemini 4)",
    hero_title: "Compile Storyboard Specs into Consistent AI Videos.",
    hero_subtitle:
      "Stop rewriting fragmented prompts across five tools. SceneSpec AI turns one declarative JSON/natural-language spec into deterministic, brand-consistent scenes, voiceovers, and multi-ratio cuts with incremental re-rendering.",
    hero_cta_primary: "Join Private Beta",
    hero_cta_secondary: "Try Spec Compiler",
    metric_1: "Lower re-render cost via AST diffing",
    metric_2: "16:9, 9:16, 1:1 from a single spec",
    metric_3: "Structured reasoning & Cloud Run scale",
    card_status: "Incremental Diff: Re-rendering only scene [s2] (1 of 3)",
    features_title: "Why a Compiler Beats Prompt Roulette",
    features_sub: "Treat AI video production like modern software engineering: structured, versioned, and reproducible.",
    f1_title: "Declarative Scene Graph",
    f1_desc: "Vertex AI Gemini 4 compiles your product brief into a typed Scene AST with locked timing, camera grammar, and multilingual subtitle tracks.",
    f2_title: "Hash-Based Diff Rendering",
    f2_desc: "Edit one line of narration or swap a single visual shot without regenerating the entire timeline. Only modified nodes trigger Cloud Run workers.",
    f3_title: "Brand & Style Lock",
    f3_desc: "Persist color tokens, character seeds, and typography across every cut so 16:9 YouTube trailers and 9:16 Reels share identical visual DNA.",
    demo_title: "Interactive Spec Compiler Preview",
    demo_sub: "Select a workflow preset to inspect how SceneSpec compiles prompts into a Vertex AI execution plan.",
    preset_saas: "SaaS Product Launch",
    preset_ecom: "E-Commerce Short",
    preset_edu: "Research Explainer",
    pane_input: "1. Declarative Input Spec",
    pane_output: "2. Compiled Vertex AI Execution Graph",
    arch_title: "Cloud-Native Architecture on Google Cloud",
    arch_sub: "Designed for low-latency API orchestration, deterministic caching, and pay-per-second rendering scale.",
    arch_1: "Translates natural-language briefs into schema-validated Scene ASTs, shot timing, and localized scripts.",
    arch_2: "Stateless compiler API and parallel FFmpeg / media synthesis workers scaled automatically on demand.",
    arch_3: "Stores scene-node SHA-256 hashes and version graphs so unchanged segments are reused instantaneously.",
    arch_4: "Stores intermediate visual frames, TTS stems, SRT subtitles, and final MP4 deliverables with signed URLs.",
    pricing_title: "Simple, Predictable Plans",
    pricing_sub: "Start free during our private beta, then scale with deterministic credit usage.",
    p_popular: "Most Popular",
    p1_1: "3 declarative projects / month",
    p1_2: "720p preview builds",
    p1_3: "JSON Spec Editor & EN/KO subtitles",
    p_cta_free: "Start Free",
    p2_1: "30 projects / month, 1080p clean export",
    p2_2: "Hash-based incremental re-rendering",
    p2_3: "Simultaneous 16:9, 9:16, 1:1 builds",
    p_cta_pro: "Join Pro Waitlist",
    p3_1: "REST API & CI/CD webhook triggers",
    p3_2: "Shared team brand style locks",
    p3_3: "Priority Vertex AI Cloud Run queue",
    p_cta_studio: "Request API Access",
    team_title: "Founder & Engineering Background",
    team_sub: "Built by AI engineers focused on deterministic compiler tooling and multimodal media automation.",
    team_name: "Jin Hwang — Founder & Lead AI Architect",
    team_org: "B.S. Candidate in Artificial Intelligence, Konyang University · Republic of Korea",
    team_bio: "Designed declarative video compiler pipelines, Graph Convolutional Network (GCN) temporal models, and Swin Transformer vision workflows across multiple production AI software and video engineering projects. Building SceneSpec AI to bring compiler-grade reliability to enterprise multimodal generation on Google Cloud Vertex AI.",
    wl_title: "Request Early Access",
    wl_sub: "Building automated product videos, localized ads, or AI media pipelines? Leave your work email to join the Vertex AI beta cohort.",
    role_1: "SaaS / Startup Team",
    role_2: "Marketing / Creative Agency",
    role_3: "Developer / API Integration",
    wl_btn: "Request Access",
    wl_done: "Thank you. Your request has been queued for our upcoming Vertex AI beta cohort.",
    footer_desc: "Declarative AI Video & Multimodal Production Compiler — Daejeon / Nonsan, Republic of Korea",
    footer_privacy: "Privacy Policy",
    footer_terms: "Terms of Service",
    privacy_body:
      "SceneSpec AI collects only the work email address and use-case selection voluntarily submitted for private beta onboarding. Data is never sold or shared with third-party advertisers. You may request deletion anytime via contact@scenespec.ai.",
    terms_body:
      "SceneSpec AI is currently in private beta. Generated storyboard specifications and rendered media assets remain the intellectual property of the workspace owner.",
    close_btn: "Close"
  },
  ko: {
    nav_features: "핵심 기능",
    nav_demo: "컴파일러 미리보기",
    nav_arch: "GCP 아키텍처",
    nav_pricing: "요금제",
    nav_cta: "베타 신청",
    hero_badge: "Google Cloud & Vertex AI (Gemini 4) 기반",
    hero_title: "선언형 스토리보드 명세로 일관된 AI 영상을 컴파일하세요.",
    hero_subtitle:
      "여러 생성형 AI 툴에 프롬프트를 매번 다시 입력할 필요가 없습니다. SceneSpec AI는 단 하나의 선언형 JSON/자연어 명세를 브랜드 톤이 고정된 멀티모달 영상·음성·다국어 자막으로 결정론적 컴파일하며, 수정된 씬만 부분 재렌더링합니다.",
    hero_cta_primary: "프라이빗 베타 신청",
    hero_cta_secondary: "컴파일러 체험",
    metric_1: "AST Diff 기반 재렌더링 비용 절감",
    metric_2: "단일 명세로 16:9, 9:16, 1:1 출력",
    metric_3: "Vertex AI 구조화 추론 및 Cloud Run 확장",
    card_status: "증분 Diff 감지: 수정된 [s2] 씬만 재렌더링 (3개 중 1개)",
    features_title: "프롬프트 운에 의존하지 않는 컴파일러 방식",
    features_sub: "AI 영상 제작을 소프트웨어 빌드처럼 구조화하고, 버전을 관리하며, 재현 가능하게 만듭니다.",
    f1_title: "선언형 씬 그래프 (Scene AST)",
    f1_desc: "Vertex AI Gemini 4가 제품 브리프를 타이밍·카메라 문법·다국어 자막 트랙이 고정된 타입 안전 중간 표현으로 컴파일합니다.",
    f2_title: "해시 기반 부분 증분 렌더링",
    f2_desc: "대사 한 줄이나 특정 컷만 수정해도 전체 타임라인을 다시 뽑지 않습니다. 변경된 노드만 Cloud Run 워커가 재생성합니다.",
    f3_title: "브랜드 및 스타일 락",
    f3_desc: "컬러 토큰, 캐릭터 시드, 타이포그래피를 최상위 스펙에 고정해 유튜브 가로형과 릴스 세로형이 동일한 시각적 일관성을 유지합니다.",
    demo_title: "인터랙티브 스펙 컴파일러 미리보기",
    demo_sub: "프리셋을 선택해 SceneSpec이 입력 명세를 Vertex AI 실행 그래프로 컴파일하는 과정을 확인해 보세요.",
    preset_saas: "SaaS 제품 런칭",
    preset_ecom: "이커머스 숏폼",
    preset_edu: "연구/교육 설명 영상",
    pane_input: "1. 선언형 입력 명세 (Input Spec)",
    pane_output: "2. 컴파일된 Vertex AI 실행 그래프",
    arch_title: "Google Cloud 네이티브 아키텍처",
    arch_sub: "저지연 API 오케스트레이션, 결정론적 캐싱, 초 단위 오토스케일링을 위해 설계되었습니다.",
    arch_1: "자연어 브리프를 스키마 검증된 Scene AST, 샷 타이밍, 현지화 스크립트로 변환합니다.",
    arch_2: "상태 비저장 컴파일러 API와 병렬 FFmpeg/미디어 합성 워커가 트래픽에 맞춰 자동 확장됩니다.",
    arch_3: "씬 노드별 SHA-256 해시와 버전 그래프를 저장해 미변경 세그먼트를 즉시 재사용합니다.",
    arch_4: "중간 프레임, TTS 음성, SRT 자막 및 최종 MP4 산출물을 Signed URL과 함께 안전하게 보관합니다.",
    pricing_title: "투명하고 예측 가능한 요금제",
    pricing_sub: "프라이빗 베타 기간 무료로 시작하고, 필요한 만큼만 확장하세요.",
    p_popular: "추천 플랜",
    p1_1: "월 3개 선언형 프로젝트",
    p1_2: "720p 프리뷰 빌드 지원",
    p1_3: "JSON 스펙 에디터 및 영문/국문 자막",
    p_cta_free: "무료로 시작",
    p2_1: "월 30개 프로젝트, 1080p 클린 출력",
    p2_2: "해시 기반 부분 증분 재렌더링",
    p2_3: "16:9, 9:16, 1:1 멀티 비율 동시 빌드",
    p_cta_pro: "Pro 대기열 등록",
    p3_1: "REST API 및 CI/CD 웹훅 트리거",
    p3_2: "팀 공유 브랜드 스타일 락",
    p3_3: "Vertex AI Cloud Run 우선 처리 큐",
    p_cta_studio: "API 액세스 문의",
    team_title: "창업자 및 엔지니어링 배경",
    team_sub: "결정론적 컴파일러 구조와 멀티모달 미디어 자동화에 집중하는 AI 엔지니어가 개발합니다.",
    team_name: "황진 (Jin Hwang) — 창업자 & 리드 AI 아키텍트",
    team_org: "건양대학교 인공지능학과 4학년 · 대한민국",
    team_bio: "선언형 영상 컴파일러 파이프라인, 그래프 신경망(GCN) 시계열 모델, Swin Transformer 비전 워크플로우 등 다수의 AI 소프트웨어 및 영상 엔지니어링 프로젝트를 설계·구축했습니다. Google Cloud Vertex AI 위에서 기업용 멀티모달 영상 제작에 컴파일러 수준의 재현성을 제공하기 위해 SceneSpec AI를 개발하고 있습니다.",
    wl_title: "얼리 액세스 신청",
    wl_sub: "자동화된 제품 소개 영상, 다국어 광고 또는 AI 미디어 파이프라인을 구축 중이신가요? 업무용 이메일을 남겨주시면 베타 오픈 시 안내해 드립니다.",
    role_1: "SaaS / 스타트업 팀",
    role_2: "마케팅 / 크리에이티브 에이전시",
    role_3: "개발자 / API 연동",
    wl_btn: "액세스 신청",
    wl_done: "감사합니다. Vertex AI 프라이빗 베타 대기 명단에 정상 등록되었습니다.",
    footer_desc: "선언형 AI 영상 및 멀티모달 프로덕션 컴파일러 — 대한민국 대전 / 논산",
    footer_privacy: "개인정보처리방침",
    footer_terms: "이용약관",
    privacy_body:
      "SceneSpec AI는 프라이빗 베타 온보딩 안내를 위해 사용자가 자발적으로 제출한 업무용 이메일과 활용 목적만 수집합니다. 제3자 광고 제공이나 판매는 일절 없으며 contact@scenespec.ai 로 언제든 삭제를 요청할 수 있습니다.",
    terms_body:
      "SceneSpec AI는 현재 프라이빗 베타 단계입니다. 생성된 스토리보드 명세와 렌더링된 미디어 자산의 권리는 워크스페이스 소유자에게 귀속됩니다.",
    close_btn: "닫기"
  }
};

const PRESETS = {
  saas: {
    spec: `{
  "spec_version": "1.2",
  "target": "saas_product_teaser",
  "vertex_model": "gemini-4-pro",
  "locales": ["en-US", "ko-KR"],
  "brand_lock": { "theme": "dark-indigo", "fps": 30 },
  "timeline": [
    { "node": "hook", "sec": 3.0, "visual": "kinetic-metric-counter" },
    { "node": "demo", "sec": 5.5, "visual": "dashboard-walkthrough" },
    { "node": "cta", "sec": 2.5, "visual": "logo-url-lockup" }
  ]
}`,
    steps: [
      { title: "Step 1 · Gemini 4 AST Validation", desc: "Validated 3 timeline nodes (11.0s total) & generated EN/KO voice scripts." },
      { title: "Step 2 · Firestore Hash Cache Check", desc: "Nodes [hook], [cta] matched SHA-256 cache -> skipped regeneration (66% saved)." },
      { title: "Step 3 · Cloud Run FFmpeg Packaging", desc: "Compiled [demo] node + burned-in SRT -> GCS signed MP4 (16:9 & 9:16)." }
    ]
  },
  ecommerce: {
    spec: `{
  "spec_version": "1.2",
  "target": "commerce_reel_campaign",
  "vertex_model": "gemini-4-flash",
  "locales": ["ko-KR", "en-US", "ja-JP"],
  "brand_lock": { "product_sku": "AERO-09", "aspect": "9:16" },
  "timeline": [
    { "node": "unbox", "sec": 2.5, "visual": "studio-topdown-reveal" },
    { "node": "benefit", "sec": 4.0, "visual": "3-point-feature-callout" },
    { "node": "offer", "sec": 2.5, "visual": "clean-packshot-outro" }
  ]
}`,
    steps: [
      { title: "Step 1 · Multilingual Hook Localization", desc: "Vertex AI adapted copy into KO, EN, and JA keeping 2.5s pacing constraint." },
      { title: "Step 2 · Product Consistency Lock", desc: "Locked studio lighting seed across 3 cuts for zero color drift." },
      { title: "Step 3 · Multi-Locale Batch Output", desc: "Delivered 3 localized 9:16 Reels MP4s to Cloud Storage in parallel." }
    ]
  },
  edu: {
    spec: `{
  "spec_version": "1.2",
  "target": "research_paper_explainer",
  "vertex_model": "gemini-4-pro",
  "locales": ["en-US"],
  "brand_lock": { "diagram_style": "vector-clean", "aspect": "16:9" },
  "timeline": [
    { "node": "thesis", "sec": 4.0, "visual": "graph-topology-intro" },
    { "node": "method", "sec": 6.0, "visual": "animated-architecture-flow" },
    { "node": "result", "sec": 4.0, "visual": "benchmark-bar-chart" }
  ]
}`,
    steps: [
      { title: "Step 1 · Technical Script Synthesis", desc: "Gemini 4 distilled paper abstract into 3 paced explanatory narration beats." },
      { title: "Step 2 · Vector Diagram Sequencing", desc: "Synchronized architecture callouts with Cloud TTS word-level timestamps." },
      { title: "Step 3 · High-DPI 1080p Render", desc: "Exported crisp 1080p lecture video + downloadable .srt transcript." }
    ]
  }
};

let currentLang = "en";
let currentPreset = "saas";

function applyLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  const dict = I18N[lang];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });
  const toggleBtn = document.getElementById("langToggle");
  if (toggleBtn) {
    toggleBtn.textContent = lang === "en" ? "한국어" : "English";
  }
}

function renderPreset(key) {
  currentPreset = key;
  const data = PRESETS[key];
  const specEl = document.getElementById("specPreview");
  const outEl = document.getElementById("pipelineOutput");
  if (specEl) specEl.textContent = data.spec;
  if (outEl) {
    outEl.innerHTML = data.steps
      .map(
        (step) =>
          `<div class="pipeline-step"><strong>${step.title}</strong><span>${step.desc}</span></div>`
      )
      .join("");
  }
  document.querySelectorAll(".preset-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-preset") === key);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  applyLanguage("en");
  renderPreset("saas");

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
