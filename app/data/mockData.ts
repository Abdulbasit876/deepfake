import { ScanItem, ReportItem, DocumentPageAnalysis } from '../types';

export const mockScans: ScanItem[] = [
  {
    id: 'scan-1',
    fileName: 'image_20261110.jpg',
    fileType: 'Image',
    fileSize: '4.2 MB',
    result: 'AI Generated',
    aiScore: 78.5,
    realScore: 21.5,
    date: 'Nov 10, 2026',
    time: '2:15 PM',
    status: 'Completed',
    sourceConfidence: 'Very High',
    detectedPatterns: ['Frequency artifacts in background', 'Inconsistent eye reflections', 'Diffusion texture smoothing']
  },
  {
    id: 'scan-2',
    fileName: 'video_20261109.mp4',
    fileType: 'Video',
    fileSize: '38.4 MB',
    result: 'Real',
    aiScore: 3.8,
    realScore: 96.2,
    date: 'Nov 09, 2026',
    time: '5:32 PM',
    status: 'Completed',
    sourceConfidence: 'High',
    detectedPatterns: ['Natural facial micro-expressions verified', 'Consistent temporal illumination', 'Organic sensor noise present']
  },
  {
    id: 'scan-3',
    fileName: 'document.pdf',
    fileType: 'PDF',
    fileSize: '2.8 MB',
    result: 'Mixed Content',
    aiScore: 54.0,
    realScore: 46.0,
    date: 'Nov 08, 2026',
    time: '1:20 PM',
    status: 'Completed',
    sourceConfidence: 'High',
    detectedPatterns: ['Pages 3-5 contain LLM perplexity burstiness', 'Executive summary human authored', 'Synthetic diagram detected on Page 4']
  },
  {
    id: 'scan-4',
    fileName: 'report.docx',
    fileType: 'Word',
    fileSize: '1.1 MB',
    result: 'Likely AI',
    aiScore: 82.4,
    realScore: 17.6,
    date: 'Nov 07, 2026',
    time: '11:10 AM',
    status: 'Completed',
    sourceConfidence: 'Very High',
    detectedPatterns: ['High predictability token chains', 'Uniform sentence complexity distribution']
  },
  {
    id: 'scan-5',
    fileName: 'audio_20261106.mp3',
    fileType: 'Audio',
    fileSize: '8.7 MB',
    result: 'Real',
    aiScore: 5.3,
    realScore: 94.7,
    date: 'Nov 06, 2026',
    time: '4:45 PM',
    status: 'Completed',
    sourceConfidence: 'High',
    detectedPatterns: ['Natural human vocal fold jitter', 'Organic breathing pauses', 'Realistic room acoustic reverberation']
  },
  {
    id: 'scan-6',
    fileName: 'portrait_profile.png',
    fileType: 'Image',
    fileSize: '3.6 MB',
    result: 'AI Generated',
    aiScore: 91.2,
    realScore: 8.8,
    date: 'Nov 05, 2026',
    time: '9:12 AM',
    status: 'Completed',
    sourceConfidence: 'Very High',
    detectedPatterns: ['GAN boundary artifacts', 'Teeth geometry anomalies']
  },
  {
    id: 'scan-7',
    fileName: 'webinar_clip.mov',
    fileType: 'Video',
    fileSize: '62.0 MB',
    result: 'Likely AI',
    aiScore: 74.6,
    realScore: 25.4,
    date: 'Nov 04, 2026',
    time: '3:40 PM',
    status: 'Completed',
    sourceConfidence: 'High',
    detectedPatterns: ['Lip sync phase discrepancy', 'Face warp distortion on rotation']
  }
];

export const mockReports: ReportItem[] = [
  {
    id: 'rep-1',
    code: 'Report #SR-1024',
    title: 'Image Analysis',
    fileType: 'Image',
    date: 'Nov 10, 2026',
    aiScore: 78.5,
    summary: 'High probability of diffusion-based synthesis detected in scenic background elements and texture anomalies.',
    fileSize: '1.4 MB'
  },
  {
    id: 'rep-2',
    code: 'Report #SR-1023',
    title: 'Video Analysis',
    fileType: 'Video',
    date: 'Nov 09, 2026',
    aiScore: 3.8,
    summary: 'Temporal consistency and physiological markers show genuine capture without face swap or voice cloning.',
    fileSize: '4.8 MB'
  },
  {
    id: 'rep-3',
    code: 'Report #SR-1022',
    title: 'PDF Analysis',
    fileType: 'PDF',
    date: 'Nov 08, 2026',
    aiScore: 54.0,
    summary: 'Multi-author document with hybrid composition. 4 of 12 pages exhibit typical synthetic text generation patterns.',
    fileSize: '2.1 MB'
  },
  {
    id: 'rep-4',
    code: 'Report #SR-1021',
    title: 'Word Analysis',
    fileType: 'Word',
    date: 'Nov 07, 2026',
    aiScore: 82.4,
    summary: 'Document text shows repetitive structural cadences characteristic of GPT-4 text generation.',
    fileSize: '890 KB'
  },
  {
    id: 'rep-5',
    code: 'Report #SR-1020',
    title: 'Audio Analysis',
    fileType: 'Audio',
    date: 'Nov 06, 2026',
    aiScore: 5.3,
    summary: 'Acoustic waveform and voice harmonics confirm authentic human phonation with ambient recording background.',
    fileSize: '3.2 MB'
  }
];

export const mockDocumentPages: DocumentPageAnalysis[] = [
  {
    pageNumber: 1,
    aiScore: 12.0,
    humanScore: 88.0,
    status: 'Human',
    textSnippet: 'Introduction & Executive Summary: In this research paper, we evaluate modern cybersecurity infrastructures across tier-1 financial institutions...',
    hasEmbeddedImage: false
  },
  {
    pageNumber: 2,
    aiScore: 18.5,
    humanScore: 81.5,
    status: 'Human',
    textSnippet: 'Methodology and Data Collection: We compiled empirical data from over 450 incident logs collected between Q1 2024 and Q3 2025...',
    hasEmbeddedImage: true,
    embeddedImageAiScore: 4.2
  },
  {
    pageNumber: 3,
    aiScore: 84.2,
    humanScore: 15.8,
    status: 'AI Generated',
    textSnippet: 'Furthermore, it is pivotal to delineate the nuanced ramifications of automated machine learning heuristics within proactive network threat modeling...',
    hasEmbeddedImage: false
  },
  {
    pageNumber: 4,
    aiScore: 92.6,
    humanScore: 7.4,
    status: 'AI Generated',
    textSnippet: 'In conclusion to the architectural synthesis, the synergistic convergence of cryptographic primitives establishes an unassailable bastion of integrity...',
    hasEmbeddedImage: true,
    embeddedImageAiScore: 89.4
  },
  {
    pageNumber: 5,
    aiScore: 61.0,
    humanScore: 39.0,
    status: 'Mixed',
    textSnippet: 'Comparative Analysis Matrix: Table 4.1 showcases the benchmarking metrics. While standard configurations demonstrated latency spikes...',
    hasEmbeddedImage: false
  },
  {
    pageNumber: 6,
    aiScore: 14.0,
    humanScore: 86.0,
    status: 'Human',
    textSnippet: 'Field Survey Results: Our team conducted in-depth interviews with 24 CISOs across London, Tokyo, and New York headquarters...',
    hasEmbeddedImage: false
  }
];

