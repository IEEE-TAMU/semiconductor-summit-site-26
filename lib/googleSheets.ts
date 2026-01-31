import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import type { ScheduleItem, SheetScheduleRow } from '@/types/schedule';

export async function getScheduleFromSheets(): Promise<ScheduleItem[]> {
  // Validate environment variables
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
  const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
  const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY;
  const sheetName = process.env.GOOGLE_SHEETS_SHEET_NAME;

  if (!spreadsheetId) {
    throw new Error('Missing GOOGLE_SHEETS_SPREADSHEET_ID environment variable');
  }
  if (!clientEmail) {
    throw new Error('Missing GOOGLE_SHEETS_CLIENT_EMAIL environment variable');
  }
  if (!privateKey) {
    throw new Error('Missing GOOGLE_SHEETS_PRIVATE_KEY environment variable');
  }
  if (!sheetName) {
    throw new Error('Missing GOOGLE_SHEETS_SHEET_NAME environment variable');
  }

  // Create JWT authentication
  const serviceAccountAuth = new JWT({
    email: clientEmail,
    key: privateKey.replace(/\\n/g, '\n'),
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
  });

  // Load the spreadsheet document
  const doc = new GoogleSpreadsheet(spreadsheetId, serviceAccountAuth);
  await doc.loadInfo();

  // Access the sheet by title
  const sheet = doc.sheetsByTitle[sheetName];
  if (!sheet) {
    throw new Error(`Sheet "${sheetName}" not found in spreadsheet`);
  }

  // Fetch all rows as objects
  const rows = await sheet.getRows<SheetScheduleRow>();

  // Transform data
  const scheduleItems: ScheduleItem[] = rows.map((row) => {
    const rowData = row.toObject();

    const item: ScheduleItem = {
      time: String(rowData['Time'] ?? '').trim(),
      title: String(rowData['Section Name'] ?? '').trim(),
      description: String(rowData['Description'] ?? '').trim(),
    };

    // Only add speaker if not empty
    const speakerValue = rowData['Speaker (blank if not a speaker)'];
    const speaker = speakerValue ? String(speakerValue).trim() : '';
    if (speaker) {
      item.speaker = speaker;
    }

    // Only add speakerTitle (Company/Title) if not empty
    const titleValue = rowData['Title (blank if not a speaker)'];
    const title = titleValue ? String(titleValue).trim() : '';
    if (title) {
      item.speakerTitle = title;
    }

    return item;
  });

  return scheduleItems;
}
