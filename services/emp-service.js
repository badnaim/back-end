import { pool } from "../config/mysql-config.js";

export async function getEmployees(limit) {
  const [singleRow] = await pool.query(
    `Select emp_no from salaries limit ${limit}`
  );
}
