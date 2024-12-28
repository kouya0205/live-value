// pages/api/upload.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { IncomingForm } from 'formidable';
import fs from 'fs';
import { Configuration, OpenAIApi } from 'openai';

// formidable設定（マルチパートフォームデータを受け取り）
export const config = {
  api: {
    bodyParser: false, // formidable使用時は無効に
  },
};

const openai = new OpenAIApi(
  new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  }),
);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // 1. ファイルを受け取る
  const form = new formidable.IncomingForm();

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'File upload error' });
    }

    const file = files.file;
    if (!file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    // 2. OCR実行 (例としてTesseract.jsサーバーサイド動作 or 外部API)
    // ここでは擬似的に "OCR結果テキスト" を生成
    //  本当は file.filepath をTesseractやGoogle Cloud Vision APIに投げてテキスト抽出
    const ocrText = '血圧: 130/85, コレステロール: 200, 身長: 170, 体重: 68';

    // 3. 生成AIにテキストを投げて構造化
    // Prompt例: 「以下のOCR結果から健康診断の項目をJSONで返して」
    try {
      const prompt = `
        以下のテキストから、健康診断の主要項目をJSON構造で返してください。
        テキスト: "${ocrText}"
      `;
      const aiResponse = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt,
        max_tokens: 100,
      });

      const parsedText = aiResponse.data.choices[0].text?.trim();
      // 例: `{"血圧": "130/85","コレステロール": 200,"身長":170,"体重":68}` みたいな文字列を期待
      let jsonData;
      try {
        jsonData = JSON.parse(parsedText || '{}');
      } catch (parseErr) {
        // パースできない場合もあるので、エラーハンドリング
        jsonData = { raw: parsedText };
      }

      // 4. SupabaseなどのDBに保存する場合
      // ここでは単に返却のみ
      return res.status(200).json({
        status: 'success',
        data: jsonData,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'AI parsing error' });
    }
  });
}
