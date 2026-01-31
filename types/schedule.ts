// Raw data from Google Sheets
export interface SheetScheduleRow {
  Time: string;
  'Section Name': string;
  Description: string;
  'Speaker (blank if not a speaker)'?: string;
  'Title (blank if not a speaker)'?: string;
}

// Transformed data for component
export interface ScheduleItem {
  time: string;
  title: string;
  description: string;
  speaker?: string;
  speakerTitle?: string;
}
