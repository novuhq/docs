import { CloudManager } from '@oramacloud/client';
import dotenv from 'dotenv';
import { sync } from 'fumadocs-core/search/orama-cloud';
import * as fs from 'node:fs/promises';
dotenv.config();

export async function updateSearchIndexes() {
  const apiKey = process.env.ORAMA_PRIVATE_API_KEY; // private API key

  if (!apiKey) {
    console.log('no api key for Orama found, skipping');
    return;
  }

  const content = await fs.readFile('.next/server/app/static.json.body');
  const records = JSON.parse(content.toString());

  const filteredRecords = records.filter((record) => {
    // Check common properties where the path might be stored
    const path = record.url || record.path || record.slug || record.id || '';
    return !path.endsWith('.model.mdx');
  });

  const manager = new CloudManager({ api_key: apiKey });

  await sync(manager, {
    index: 'hgwfc5y4s21ljqubwp0zk3z4',
    documents: filteredRecords,
  });

  console.log(
    `search updated: ${filteredRecords.length} records (filtered out ${records.length - filteredRecords.length} .model.md files)`
  );
}

void updateSearchIndexes();
