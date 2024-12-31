const db = require('./db');

async function saveApplication(name, email, phone, courseId, courseName) {
    const text = 'INSERT INTO applications(name, email, phone, course_id, course_name) VALUES($1, $2, $3, $4, $5) RETURNING *';
    const values = [name, email, phone, courseId, courseName];
    const res = await db.query(text, values);
    return res.rows[0];
}

module.exports = { saveApplication };
