const pool = require('../db')
const bcrypt = require('bcrypt')

exports.register = async (first_name, last_name, email, password) => {
  const hashed = await bcrypt.hash(password, 10);
  const query = `
            INSERT INTO users (first_name, last_name, email, password)
            VALUES ($1, $2, $3, $4)
            RETURNING *
        `;

  const values = [first_name, last_name, email, hashed];

  const result = await pool.query(query, values);

  return result.rows[0];
}

exports.login = async(email, password) => {
  const query = `
        SELECT * FROM users WHERE email = $1
    `;

  const result = await pool.query(query, [email]);

  if (!result.rows.length) {
    throw new Error('Email / Password salah');
  }

  const user = result.rows[0];
  const isPasswordValid = await bcrypt.compare(password, user.password);
  
  if (!isPasswordValid) {
    throw new Error('Email / Password salah');
  }

  const data = {
    user_id: user.id,
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email
  };

  return data;
}




