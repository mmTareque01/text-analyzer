export interface TextInterface {
    id: string;
    userId?: string;
    content: string;
    totalWords?: number;
    totalSentence?: number;
    totalParagraph?: number;
    totalCharacters?: number;
    longestWord?: string;
}