# CutGate AI

**Model-agnostic AI video QA, continuity gating, and mastering for generative video workflows.**

- Website: [https://cutgateai.com](https://cutgateai.com)
- Contact: `hwangjin@cutgateai.com` · `contact@cutgateai.com`
- Founder: Jin Hwang (South Korea)

## What CutGate AI Does

CutGate AI helps studios and creators catch frozen frames, prop drift, and A/V sync issues in cheap **480p drafts** before spending GPU/API budget on **720p / 1080p renders**.

1. **Step 01 — Video-Reference Anchor**: Bind a verified 720p reference clip and prop sheet upfront to lock tone, character scale, and scene continuity.
2. **Step 02 — 480p QA Promotion Gate**: Inspect VFR `pts_time` cadence and 4x4 peak-cut grids using multimodal vision (`Google Cloud Vertex AI Gemini` and `AWS Bedrock`) to block broken takes before HD spend.
3. **Step 03 — Adaptive Mastering**: Run per-clip **AMD CAS (`0.18`, `+8.88%` Tenengrad clarity)**, normalize audio loudness to **`-15.5 LUFS`**, verify `<50 ms` A/V sync (`8.4 ms` avg), and cache verified segments by SHA-256.

## Supported Video Generators & Multi-Cloud Stack

- **Generators**: Google Veo, Kling, Seedance, Runway
- **Infrastructure**: Google Cloud (`Vertex AI`, `Cloud Run`, `Firestore`, `Cloud Storage`) & AWS (`EC2 GPU`, `Bedrock`, `DynamoDB`, `S3`)

## About This Repository (`scenespec-ai`)

CutGate AI originated under the internal codename **SceneSpec AI** (`scenespec-ai`). This public repository hosts the official CutGate AI web frontend deployed at [https://cutgateai.com](https://cutgateai.com). The core VFR forensics, multimodal 4x4 gating, and GPU mastering pipeline runs in our private Google Cloud & AWS backend.
