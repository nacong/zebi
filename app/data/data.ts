"use server";

import postgres from 'postgres';
import { CategoryType } from '../constants/category';
import { Store } from '../definitions/definition';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export async function getStoresByCategory(
  category: CategoryType,
  collegeId: string
): Promise<Store[]> {
  const rows = await sql<Store[]>`
    SELECT 
      s.id,
      s.name,
      s.lat,
      s.lon,
      s.url,
      json_agg(
        json_build_object(
          'council_name', u.name,
          'partnershipDetails', json_build_array(
            json_build_object(
              'emoji', p.emoji,
              'condition', p.condition,
              'benefit', p.benefit
            )
          )
        )
      ) FILTER (WHERE p.id IS NOT NULL) as partnerships
    FROM stores s
    LEFT JOIN partnerships p ON s.id = p.store_id AND p.college_id = ${collegeId}
    LEFT JOIN users u ON p.college_id = u.id
    WHERE s.category = ${category}
    GROUP BY s.id, s.name, s.lat, s.lon
  `;

  return rows.map(row => ({
    ...row,
    partnerships: row.partnerships || []
  }));
}