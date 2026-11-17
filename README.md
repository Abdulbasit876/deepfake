# DeepScan — Complete AI Deepfake & Synthetic Media Detection

> **Detect AI. Verify Reality.**  
> Advanced deepfake, AI-generated imagery, synthetic audio, and document forensics web application built with Next.js 15, TypeScript, and Tailwind CSS.

---

## 🌟 Key Features

- **Multi-Modal Detection Engine**:
  - **Images**: Midjourney, DALL-E, Stable Diffusion frequency & noise artifact detection.
  - **Videos**: Facial micro-expression telemetry, rPPG blood flow pulse analysis, and lip-sync coherence checks.
  - **Audio**: Acoustic waveform player, vocal clone detection, formant jitter/shimmer inspection.
  - **Documents (PDF / Word)**: Page-by-page LLM perplexity burstiness forensics and embedded image analysis.
- **Interactive Authenticated Dashboard**:
  - Live metric cards (Total Scans, Real Content, AI Generated, System Accuracy).
  - Dual-gradient area chart tracking detection history over time.
  - Quick action shortcuts and recent scans feed.
- **Drag-and-Drop Analysis Workspace**:
  - Supports Images, Videos, Audio, PDF, and DOCX (up to 100MB).
  - Quick example previews.
  - 3-stage progress simulation with 72% AI circular gauge.
- **Detailed Forensic Reports**:
  - Downloadable PDF certificates with cryptographic SHA-256 hashes.
- **Scan History & Filtering**:
  - Searchable scan archive with multi-format filtering and pagination.
- **Settings & User Profile**:
  - Account info, security & password management, 2FA toggle, and alert preferences.

---

## 🛠️ Technology Stack

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js 18+ (tested with Node 20+)
- npm or yarn

### 2. Installation
```bash
# Clone the repository
git clone https://github.com/Abdulbasit876/deepfake.git
cd deepfake

# Install dependencies
npm install
```

### 3. Run Locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
npm run start
```

---

## 📂 Project Structure

```text
app/
├── (auth)/
│   ├── login/
│   ├── signup/
│   └── forgot-password/
├── (dashboard)/
│   ├── dashboard/
│   ├── analysis/
│   ├── analyzing/
│   ├── results/
│   │   ├── image/
│   │   ├── video/
│   │   ├── audio/
│   │   └── document/
│   ├── history/
│   ├── reports/
│   └── settings/
├── components/
│   ├── layout/
│   └── ui/
├── data/
├── hooks/
├── lib/
├── types/
└── utils/
```

---

## 📄 License
This project is for demonstration and evaluation purposes.
