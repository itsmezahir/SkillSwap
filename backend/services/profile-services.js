const pool = require('../db');

// CREATE PROFILE
exports.createProfile = async (
 { user_id,
  profile_image_url,
  portfolio_url,
  bio,
  skills_can_teach,
  skills_want_to_learn}
) => {
  const query = `
    INSERT INTO profiles (
      user_id, 
      profile_image_url, 
      portfolio_url, 
      bio, 
      skills_can_teach, 
      skills_want_to_learn
    )
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *
  `;

  const values = [
    user_id,
    profile_image_url,
    portfolio_url,
    bio,
    skills_can_teach,
    skills_want_to_learn
  ];

  const result = await pool.query(query, values);
  return result.rows[0];
};

// UPDATE PROFILE
exports.updateProfile = async (
  {user_id,
  profile_image_url,
  portfolio_url,
  bio,
  skills_can_teach,
  skills_want_to_learn}
) => {
  const query = `
    UPDATE profiles
    SET 
      profile_image_url = $2,
      portfolio_url = $3,
      bio = $4,
      skills_can_teach = $5,
      skills_want_to_learn = $6,
      updated_at = NOW()
    WHERE user_id = $1
    RETURNING *
  `;

  const values = [
    user_id,
    profile_image_url,
    portfolio_url,
    bio,
    skills_can_teach,
    skills_want_to_learn
  ];

  const result = await pool.query(query, values);
  return result.rows[0];
};

// GET PROFILE (JOIN USERS + PROFILE)
exports.getProfile = async (user_id) => {
  const query = `
    SELECT 
      u.id AS user_id,
      u.first_name,
      u.last_name,
      u.email,
      p.profile_image_url,
      p.portfolio_url,
      p.bio,
      p.skills_can_teach,
      p.skills_want_to_learn
    FROM users u
    LEFT JOIN profiles p ON p.user_id = u.id
    WHERE u.id = $1
  `;

  const result = await pool.query(query, [user_id]);
  return result.rows[0];
};
