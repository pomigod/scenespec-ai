const I18N = {
  en: {
    nav_engine: "Core Engine",
    nav_bench: "Telemetry",
    nav_plans: "Pricing",
    nav_founder: "Founder",
    nav_cta: "Request Access",
    hero_eyebrow: "Vertex AI (Gemini 4) & AWS · Generative Video QA",
    hero_title: "Catch VFR holds and prop drift at 480p before paying for 720p renders.",
    hero_sub:
      "CutGate AI is a model-agnostic QA and mastering layer for teams shipping multi-clip video across Veo, Kling, Seedance, and Runway. Audit pts_time cadence and 4×4 micro-grids at draft stage, then master to 1080p with adaptive AMD CAS.",
    hero_cta_1: "Request Early Access",
    hero_cta_2: "View Telemetry",
    stat_1: "Gemini 4 4×4 micro-grid promotion gate",
    stat_2: "Tenengrad sharpness gain at 0.18 sweep",
    stat_3: "A/V sync & EBU R128 mastering spec",
    eng_kicker: "3-Gate Architecture",
    eng_title: "Consistent multi-clip generation and mastering",
    eng_desc: "Every draft passes deterministic signal forensics and multimodal verification before high-resolution spend is unlocked.",
    c1_t: "Video-Reference Anchor",
    c1_p: "Binds a golden 720p reference clip and multi-angle prop plates prior to generation so character geometry, palette, and motion cadence hold across cuts.",
    c1_m: "Locks style & scale from draft",
    c2_t: "480p VFR & 4×4 Micro-Grid",
    c2_p: "Extracts -vsync passthrough pts_time frames and 16-frame peak-cut micro-grids so Vertex AI Gemini 4 flags frozen holds and prop spawning before 720p promotion.",
    c2_m: "100% VFR frame fidelity",
    c3_t: "Adaptive CAS Mastering",
    c3_p: "Sweeps per-clip AMD CAS (0.14–0.24) to maximize edge clarity without amplifying flat noise, then normalizes audio to -15.5 LUFS with SHA-256 segment caching.",
    c3_m: "+8.88% Tenengrad · 0 black frames",
    bench_kicker: "Telemetry",
    bench_title: "Measured production benchmarks",
    bench_sub: "Verified metrics from multi-clip generative pipelines sorted by bar scale.",
    g1_lbl: "VFR Frame Integrity (241/241 pts_time)",
    g4_lbl: "16-Frame 4×4 Micro-Grid Audit Coverage",
    g2_lbl: "AMD CAS Sharpness Gain (Tenengrad @ 0.18)",
    g3_lbl: "A/V Sync Margin (<50ms spec · 8.4ms measured)",
    cas_title: "AMD CAS A/B Sweep — Tenengrad Sharpness Gain (4.54s Sample)",
    cas_note: "CAS 0.18* optimal sweet spot (+8.88%, flat noise delta 1.9306)",
    plans_kicker: "Infrastructure & Pricing",
    plans_title: "Built on Google Cloud & AWS",
    plans_sub: "Accessible studio pricing so early teams never burn high-res GPU budgets on broken drafts.",
    p_popular: "Popular",
    p1_1: "20 480p VFR & 4×4 Micro-Grid gates",
    p1_2: "3 AMD CAS A/B mastering sweeps",
    p1_3: "Multi-model reference validator",
    p_cta_free: "Start Free",
    p2_1: "300 Gemini 4 480p -> 720p gates",
    p2_2: "Adaptive CAS + -15.5 LUFS mastering",
    p2_3: "SHA-256 segment cache & X-Ray board",
    p_cta_pro: "Join Pro Beta",
    p3_1: "REST & Webhook QA gate integration",
    p3_2: "Custom Gemini 4 prop continuity rules",
    p3_3: "Signed X-Ray certificates & SLA",
    p_cta_api: "Request API",
    founder_kicker: "Founder & Early Access",
    founder_title: "Engineered from real multi-clip pipelines",
    team_name: "Jin Hwang (황진)",
    team_role: "Founder & Lead AI Systems Engineer · Konyang University AI",
    team_bio:
      "Built CutGate's VFR passthrough cadence auditor, 4×4 peak-cut micro-grid loop, and adaptive AMD CAS (+8.88%) mastering engine while shipping 10+ 4K/1080p AI video productions.",
    contact_title: "Direct Contact & Beta",
    contact_sub: "Copy our official domain email or leave yours for beta access.",
    wl_btn: "Request Access",
    wl_done: "Queued for the CutGate AI private beta.",
    footer_privacy: "Privacy Policy",
    footer_terms: "Terms of Service",
    privacy_body:
      "CutGate AI collects only the work email submitted for private beta onboarding and never sells data. Contact hwangjin@cutgateai.com for removal.",
    terms_body:
      "CutGate AI is in private beta. Uploaded drafts, forensic QA logs, and mastered exports remain the property of the workspace owner.",
    close_btn: "Close"
  },
  ko: {
    nav_engine: "핵심 엔진",
    nav_bench: "텔레메트리",
    nav_plans: "요금제",
    nav_founder: "창업자",
    nav_cta: "베타 신청",
    hero_eyebrow: "Vertex AI (Gemini 4) & AWS · 생성형 영상 QA",
    hero_title: "720p 렌더링 비용을 쓰기 전, 480p에서 VFR 정지와 소품 이탈을 먼저 차단하세요.",
    hero_sub:
      "CutGate AI는 Veo, Kling, Seedance, Runway 등 다양한 AI 영상 모델에 공통 적용되는 QA·마스터링 레이어입니다. 초안 단계에서 pts_time 케이던스와 4×4 마이크로 그리드를 검수한 뒤 적응형 AMD CAS로 1080p 마스터를 출력합니다.",
    hero_cta_1: "얼리 액세스 신청",
    hero_cta_2: "벤치마크 보기",
    stat_1: "Gemini 4 4×4 마이크로 그리드 승격 게이트",
    stat_2: "CAS 0.18 스윕 기준 Tenengrad 선명도 상승",
    stat_3: "A/V 싱크 및 EBU R128 마스터링 규격",
    eng_kicker: "3-Gate 아키텍처",
    eng_title: "일관된 멀티클립 생성과 마스터링 파이프라인",
    eng_desc: "모든 초안 클립은 고해상도 GPU 예산을 집행하기 전 신호 포렌식과 멀티모달 검수를 거칩니다.",
    c1_t: "Video-Reference 앵커",
    c1_p: "생성 전 720p 골든 레퍼런스 클립과 다각도 소품 시트를 바인딩해 컷이 넘어가도 캐릭터 형태, 색감, 모션 케이던스를 유지합니다.",
    c1_m: "초안 단계부터 스타일·스케일 고정",
    c2_t: "480p VFR & 4×4 마이크로 그리드",
    c2_p: "-vsync passthrough pts_time 프레임과 16프레임 피크 컷 그리드를 추출해 Vertex AI Gemini 4가 720p 승격 전 정지 프레임과 소품 급생성을 차단합니다.",
    c2_m: "100% VFR 프레임 무결성",
    c3_t: "적응형 CAS 마스터링",
    c3_p: "클립별 AMD CAS(0.14~0.24) 스윕으로 평탄부 노이즈를 억제하면서 선명도를 높이고, -15.5 LUFS 음량 정규화와 SHA-256 캐시를 적용합니다.",
    c3_m: "Tenengrad +8.88% · 블랙프레임 0건",
    bench_kicker: "텔레메트리",
    bench_title: "실측 프로덕션 벤치마크",
    bench_sub: "멀티클립 생성형 영상 파이프라인에서 검증된 지표를 막대 길이 순으로 정렬했습니다.",
    g1_lbl: "VFR 프레임 무결성 (241/241 pts_time)",
    g4_lbl: "16프레임 4×4 마이크로 그리드 감사율",
    g2_lbl: "AMD CAS 선명도 상승률 (Tenengrad @ 0.18)",
    g3_lbl: "A/V 싱크 실측 오차 (<50ms 기준 · 8.4ms)",
    cas_title: "AMD CAS A/B 스윕 — Tenengrad 선명도 상승률 (4.54초 표본)",
    cas_note: "CAS 0.18* 최적 지점 (+8.88%, 평탄부 노이즈 델타 1.9306 억제)",
    plans_kicker: "인프라 & 요금제",
    plans_title: "Google Cloud & AWS 기반 아키텍처",
    plans_sub: "초기 스튜디오도 부담 없이 불량 720p/1080p 렌더링 비용을 차단할 수 있는 합리적 요금제입니다.",
    p_popular: "추천",
    p1_1: "월 20회 480p VFR & 4×4 게이트",
    p1_2: "월 3회 AMD CAS A/B 마스터링",
    p1_3: "멀티모델 참조 연속성 검증기",
    p_cta_free: "무료 시작",
    p2_1: "월 300회 Gemini 4 480p->720p 게이트",
    p2_2: "적응형 CAS + -15.5 LUFS 마스터링",
    p2_3: "SHA-256 캐시 & X-Ray 결재판",
    p_cta_pro: "Pro 베타 신청",
    p3_1: "REST & Webhook QA 게이트 API",
    p3_2: "커스텀 Gemini 4 소품 연속성 룰셋",
    p3_3: "서명된 X-Ray 감사 인증 & SLA",
    p_cta_api: "API 문의",
    founder_kicker: "창업자 & 베타 문의",
    founder_title: "실전 멀티클립 제작 경험에서 출발한 엔지니어링",
    team_name: "황진 (Jin Hwang)",
    team_role: "창업자 & 리드 AI 시스템 엔지니어 · 건양대학교 인공지능학과",
    team_bio:
      "10편 이상의 4K/1080p AI 영상 캠페인을 직접 제작하며 VFR passthrough 케이던스 감사기, 4×4 피크 컷 마이크로 그리드 루프, 적응형 AMD CAS(+8.88%) 마스터링 엔진을 구축했습니다.",
    contact_title: "공식 문의 및 베타 신청",
    contact_sub: "도메인 이메일을 복사하거나 업무용 이메일을 남겨주세요.",
    wl_btn: "베타 신청",
    wl_done: "CutGate AI 프라이빗 베타 대기 명단에 등록되었습니다.",
    footer_privacy: "개인정보처리방침",
    footer_terms: "이용약관",
    privacy_body:
      "CutGate AI는 베타 안내를 위해 제출된 업무용 이메일만 수집하며 제3자에게 판매하지 않습니다. 삭제 요청: hwangjin@cutgateai.com",
    terms_body:
      "CutGate AI는 프라이빗 베타 중입니다. 업로드된 초안, 포렌식 QA 로그, 마스터 출력물의 소유권은 워크스페이스 소유자에게 있습니다.",
    close_btn: "닫기"
  }
};

let currentLang = "en";

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
        { threshold: 0.25 }
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
        { threshold: 0.25 }
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

document.addEventListener("DOMContentLoaded", () => {
  applyLanguage("en");
  setupScrollAnimations();

  document.getElementById("langToggle")?.addEventListener("click", () => {
    applyLanguage(currentLang === "en" ? "ko" : "en");
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
    copyBtn.textContent = "Copied ✓";
    setTimeout(() => {
      copyBtn.classList.remove("copied");
      copyBtn.textContent = "Copy";
    }, 1800);
  });

  document.getElementById("waitlistForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const emailInput = document.getElementById("emailInput");
    const msgEl = document.getElementById("waitlistMsg");
    if (!emailInput || !msgEl || !emailInput.value.trim()) return;
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
