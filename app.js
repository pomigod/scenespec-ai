const I18N = {
  en: {
    page_title: "CutGate AI — Check AI Video Drafts Before HD Render",
    nav_engine: "How it works",
    nav_bench: "Benchmarks",
    nav_plans: "Pricing",
    nav_founder: "Contact",
    nav_cta: "Request Access",
    hero_eyebrow: "AI Video QA & Mastering · Google Cloud Vertex AI + AWS",
    hero_title: "Catch broken AI video drafts at 480p before paying for HD renders.",
    hero_sub:
      "Works with Veo, Kling, Seedance, and Runway. CutGate AI checks frame freezes, prop glitches, and audio sync automatically — so only clean takes move to 1080p.",
    hero_cta_1: "Request Early Access",
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
    t2_a: "Gemini Vision",
    c2_t: "Block Broken 480p Drafts",
    c2_p: "Audits VFR frame timestamps and 4x4 peak-cut grids with Vertex AI Gemini before HD rendering.",
    c2_b1: "Catches frozen holds via pts_time cadence",
    c2_b2: "Flags teleporting or warped props",
    c2_m: "Zero wasted HD render credits",
    t3_a: "Mastering",
    c3_t: "Sharpen & Level Audio",
    c3_p: "Applies AMD CAS A/B sharpening per clip and balances cut audio for clean delivery.",
    c3_b1: "Optimal 0.18 CAS (+8.88% Tenengrad clarity)",
    c3_b2: "-15.5 LUFS loudness & SHA-256 segment cache",
    c3_m: "Delivery-ready 1080p MP4",
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
    cas_note: "0.22–0.24 increases flat-area grain; 0.18 hits +8.88% clarity cleanly",
    svg_yaxis: "Edge Clarity Gain (%)",
    svg_badge: "Recommended: 0.18",
    svg_x0: "Off (0.0)",
    svg_x1: "Light (0.14)",
    svg_x2: "Balanced (0.18)",
    svg_x3: "Strong (0.22)",
    svg_x4: "Max (0.24)",
    svg_xaxis: "Sharpening Strength",
    plans_kicker: "Early-Access Beta Pricing",
    plans_title: "Simple plans for creators and video teams",
    plans_sub: "Powered by Google Cloud Vertex AI and AWS GPU workers to cut wasted render spend.",
    per_mo: "/mo",
    p_popular: "Beta Popular",
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
    p3_for: "For automated studio pipelines",
    p3_1: "REST & webhook QA integration",
    p3_2: "Custom continuity rulesets",
    p3_3: "Signed X-Ray QA audit logs",
    p_cta_api: "Request API",
    founder_kicker: "Company & Early Access",
    founder_title: "Start screening drafts with CutGate AI",
    team_name: "CutGate AI",
    team_role: "Founded by Jin Hwang · South Korea",
    about_b1: "Model-agnostic: works with Veo, Kling, Seedance, and Runway",
    about_b2: "Saves render budget by catching broken clips at 480p",
    about_b3: "Delivers sharp, loudness-leveled 1080p masters",
    team_meta: "Private Beta · Google Cloud Vertex AI & AWS",
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
    privacy_body:
      "Effective 2026. CutGate AI (cutgateai.com) collects only the work email you submit for private beta onboarding and support correspondence. We never sell or share personal data with third-party advertisers. Media drafts processed during QA are handled solely via our Google Cloud Vertex AI and AWS infrastructure and purged per workspace retention settings. To request access or deletion, contact contact@cutgateai.com or hwangjin@cutgateai.com.",
    terms_body:
      "Effective 2026. CutGate AI is currently offered in Private Beta on an as-is basis for generative video QA, continuity verification, and mastering. Workspace owners retain 100% ownership and intellectual property rights over all uploaded reference clips, 480p drafts, QA logs, and 1080p mastered exports. Questions regarding API usage or enterprise terms can be directed to contact@cutgateai.com.",
    close_btn: "Close"
  },
  ko: {
    page_title: "CutGate AI — HD 렌더링 전 480p AI 영상 초안 자동 검수",
    nav_engine: "작동 방식",
    nav_bench: "벤치마크",
    nav_plans: "요금제",
    nav_founder: "문의",
    nav_cta: "베타 신청",
    hero_eyebrow: "AI 영상 QA · 마스터링 · Google Cloud Vertex AI + AWS 기반",
    hero_title: "HD 렌더링 비용을 쓰기 전에, 480p 초안에서 오류를 먼저 잡아내세요.",
    hero_sub:
      "Veo, Kling, Seedance, Runway와 모두 호환됩니다. CutGate AI가 화면 정지, 소품 이탈, 오디오 싱크 밀림을 자동 검수해 정상 컷만 1080p로 넘깁니다.",
    hero_cta_1: "얼리 액세스 신청",
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
    t2_a: "Gemini 비전",
    c2_t: "480p 불량 초안 차단",
    c2_p: "Vertex AI Gemini로 VFR 프레임 간격과 4x4 피크 컷 그리드를 검사해 HD 낭비를 막습니다.",
    c2_b1: "pts_time 케이던스로 정지 프레임 탐지",
    c2_b2: "소품 순간이동·물리 붕괴 즉시 차단",
    c2_m: "불필요한 HD 렌더링 비용 절감",
    t3_a: "마스터링",
    c3_t: "화질 보정 · 오디오 정리",
    c3_p: "클립별 AMD CAS A/B 샤프닝과 음향 밸런스를 맞춰 바로 납품 가능한 파일로 출력합니다.",
    c3_b1: "최적 강도 CAS 0.18 (선명도 +8.88%)",
    c3_b2: "-15.5 LUFS 음량 평준화 · SHA-256 캐시",
    c3_m: "바로 납품 가능한 1080p MP4",
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
    cas_note: "0.22–0.24 구간은 배경 노이즈가 증가하며, 0.18이 노이즈 없이 +8.88% 선명도를 달성하는 최적점입니다",
    svg_yaxis: "선명도 개선폭 (%)",
    svg_badge: "권장 강도: 0.18",
    svg_x0: "꺼짐 (0.0)",
    svg_x1: "약함 (0.14)",
    svg_x2: "최적 (0.18)",
    svg_x3: "강함 (0.22)",
    svg_x4: "최대 (0.24)",
    svg_xaxis: "샤프닝 강도",
    plans_kicker: "얼리 액세스 베타 요금제",
    plans_title: "크리에이터와 영상 팀을 위한 심플한 요금제",
    plans_sub: "Google Cloud Vertex AI와 AWS GPU 워커 기반으로 렌더링 크레딧 낭비를 줄여줍니다.",
    per_mo: "/월",
    p_popular: "베타 추천",
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
    p3_for: "자동화된 스튜디오 파이프라인용",
    p3_1: "REST · 웹훅 QA API 연동",
    p3_2: "팀 맞춤형 연속성 검수 규칙",
    p3_3: "서명된 X-Ray QA 감사 로그",
    p_cta_api: "API 문의",
    founder_kicker: "기업 정보 · 얼리 액세스",
    founder_title: "CutGate AI로 초안 검수를 바로 시작하세요",
    team_name: "CutGate AI",
    team_role: "설립자 황진 (Jin Hwang) · 대한민국",
    about_b1: "모델 무관 호환: Veo, Kling, Seedance, Runway 지원",
    about_b2: "480p 단계에서 불량 클립을 걸러내 렌더링 예산 절감",
    about_b3: "선명하고 음량이 고른 1080p 마스터 자동 출력",
    team_meta: "프라이빗 베타 · Google Cloud Vertex AI & AWS 기반",
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
    privacy_body:
      "시행일 2026년. CutGate AI(cutgateai.com)는 프라이빗 베타 안내 및 기술 지원 응대를 위해 사용자가 직접 입력한 업무용 이메일만 수집하며, 제3자 광고주에게 판매·공유하지 않습니다. QA 과정에서 처리되는 영상 초안은 Google Cloud Vertex AI 및 AWS 인프라에서만 안전하게 처리되며 워크스페이스 보관 정책에 따라 파기됩니다. 열람·삭제 요청은 contact@cutgateai.com 또는 hwangjin@cutgateai.com 으로 문의해 주세요.",
    terms_body:
      "시행일 2026년. CutGate AI는 생성형 AI 영상 QA·연속성 검증·마스터링 기능을 프라이빗 베타 형태로 제공합니다. 업로드된 모든 기준 클립, 480p 초안, QA 로그, 1080p 마스터 결과물에 대한 100% 소유권과 지식재산권은 워크스페이스 소유자에게 귀속됩니다. API 연동 및 약관 문의는 contact@cutgateai.com 으로 연락해 주세요.",
    close_btn: "닫기"
  }
};

let currentLang = "en";

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
  const copyBtn = document.getElementById("copyEmailBtn");
  if (copyBtn && !copyBtn.classList.contains("copied")) {
    copyBtn.textContent = dict.copy_btn;
  }
  const toggleBtn = document.getElementById("langToggle");
  if (toggleBtn) {
    toggleBtn.textContent = lang === "en" ? "한국어" : "English";
  }
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
    // ignore storage errors in restricted environments
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
