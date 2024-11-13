interface ProfileTest {
  name: string;
  age: number;
  email: string;
}

function updateProfileTest(
  profile: ProfileTest,
  updates: Partial<ProfileTest>
): ProfileTest {
  return { ...profile, ...updates };
}
