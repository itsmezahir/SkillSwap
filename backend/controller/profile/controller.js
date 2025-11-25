const profileService = require("../../services/profile-services");

exports.getProfile = async (req, res) => {
  try {
    const user_id = parseInt(req.params.user_id);

    const profile = await profileService.getProfile(user_id);

    res.json(profile);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error });
  }
};

exports.createProfile = async (req, res) => {
  try {
    const user_id = parseInt(req.params.user_id);
    const {
      profile_image_url,
      portfolio_url,
      bio,
      skills_can_teach,
      skills_want_to_learn
    } = req.body;

    // FIX: always convert to array
    const skillsTeach = Array.isArray(skills_can_teach)
      ? skills_can_teach
      : [skills_can_teach];

    const skillsLearn = Array.isArray(skills_want_to_learn)
      ? skills_want_to_learn
      : [skills_want_to_learn];

    const newProfile = await profileService.createProfile({
      user_id,
      profile_image_url,
      portfolio_url,
      bio,
      skills_can_teach: skillsTeach,
      skills_want_to_learn: skillsLearn,
    });

    res.json(newProfile);
  } catch (error) {
    console.error(error);

    if (error.code === "23505") {
      return res.status(400).json({ message: "Profile already exists" });
    }

    res.status(500).json({ message: error.message });
  }
};


exports.updateProfile = async (req, res) => {
  try {
    const {
      profile_image_url,
      portfolio_url,
      bio,
      skills_can_teach,
      skills_want_to_learn,
    } = req.body;

    // Convert to array
    const skillsTeach = Array.isArray(skills_can_teach)
      ? skills_can_teach
      : [skills_can_teach];

    const skillsLearn = Array.isArray(skills_want_to_learn)
      ? skills_want_to_learn
      : [skills_want_to_learn];

    const updatedProfile = await profileService.updateProfile({
      user_id,
      profile_image_url,
      portfolio_url,
      bio,
      skills_can_teach: skillsTeach,
      skills_want_to_learn: skillsLearn,
    });

    res.json(updatedProfile);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};
