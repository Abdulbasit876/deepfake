export type FileType = 'image' | 'video' | 'audio' | 'pdf' | 'docx';

export interface ScanItem {
  id: string;
  fileName: string;
  fileType: 'Image' | 'Video' | 'PDF' | 'Word' | 'Audio';
  fileSize: string;
  result: 'AI Generated' | 'Real' | 'Mixed Content' | 'Likely AI';
  aiScore: number;
  realScore: number;
  date: string;
  time: string;
  status: 'Completed' | 'Processing' | 'Failed';
  thumbnailUrl?: string;
  sourceConfidence?: string;
  detectedPatterns?: string[];
}

export interface ReportItem {
  id: string;
  code: string;
  title: string;
  fileType: 'Image' | 'Video' | 'PDF' | 'Word' | 'Audio';
  date: string;
  aiScore: number;
  summary: string;
  fileSize: string;
}

export interface DocumentPageAnalysis {
  pageNumber: number;
  aiScore: number;
  humanScore: number;
  status: 'Human' | 'AI Generated' | 'Mixed';
  textSnippet: string;
  hasEmbeddedImage: boolean;
  embeddedImageAiScore?: number;
}

