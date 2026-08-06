export type CodeLanguage = 'html' | 'jsx' | 'css' | 'svg' | 'auto';

export interface StylePreset {
  id: string;
  name: string;
  description: string;
  banglaName: string;
}

export interface ConversionHistoryItem {
  id: string;
  timestamp: string;
  language: CodeLanguage;
  presetId: string;
  originalCode: string;
  convertedCode: string;
  title: string;
}

export interface SampleCode {
  id: string;
  title: string;
  banglaTitle: string;
  language: CodeLanguage;
  code: string;
}
