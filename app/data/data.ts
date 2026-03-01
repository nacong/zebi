"use server";

import postgres from 'postgres';
import { CategoryType } from '../constants/category';
import { Store } from '../definitions/definition';
import { ALL_STUDENTS_COUNCIL_ID } from '../constants/data';

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
      COALESCE(
        json_agg(
          json_build_object(
            'council_name', council_name,
            'partnershipDetails', partnership_details
          )
        ) FILTER (WHERE council_name IS NOT NULL),
        '[]'
      ) AS partnerships
    FROM stores s
    JOIN (
      SELECT
        p.store_id,
        u.name AS council_name,
        json_agg(
          json_build_object(
            'emoji', p.emoji,
            'condition', p.condition,
            'benefit', p.benefit
          )
        ) AS partnership_details
      FROM partnerships p
      JOIN users u ON p.college_id = u.id
      WHERE p.college_id = ${collegeId} OR p.college_id = ${ALL_STUDENTS_COUNCIL_ID}
      GROUP BY p.store_id, u.name
    ) grouped_p ON s.id = grouped_p.store_id
    WHERE s.category = ${category}
    GROUP BY s.id, s.name, s.lat, s.lon, s.url;
  `;

  return rows;
}