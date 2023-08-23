import supabase from './supabase';

export async function signUp({ fname, lname, email, password }) {
  // 1. Sign up a user
  const { data: user, error: userError } = await supabase.auth.signUp({
    email,
    password,
  });

  if (userError)
    throw new Error('There was a problem while signing up a user.');

  //2. Create user profile
  const { error: userProfileError } = await supabase
    .from('user_profile')
    .insert([
      { user_id: user.user.id, user_first_name: fname, user_last_name: lname },
    ]);

  if (userProfileError)
    throw new Error('There was a problem while creating a user profile.');

  //3. Create a workspace
  const { data: workspace, error: workspaceError } = await supabase
    .from('workspace')
    .insert([{ workspace_currency: 'USD' }])
    .select()
    .single();

  if (workspaceError)
    throw new Error('There was a problem while creating a workspace.');

  //4. Assign a user to workspace
  const { error: userWorkspaceError } = await supabase
    .from('user_workspace')
    .insert([{ user_id: user.user.id, workspace_id: workspace.workspace_id }]);

  if (userWorkspaceError)
    throw new Error('There was a problem while assigning a user to workspace.');

  return user;
}

export async function signIn({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if (error) throw new Error('There was a problem while signing in a user.');

  return data;
}

export async function getSignedInUser() {
  const { data: session } = await supabase.auth.getSession();

  if (!session.session) return null;

  const { data: user, error: userError } = await supabase.auth.getUser();

  if (userError)
    throw new Error(
      'There was a problem while getting user from supabase.',
      userError.message,
    );

  let { data: userWorkspace, error: userWorkspaceError } = await supabase
    .from('user_workspace')
    .select('workspace_id')
    .eq('user_id', user.user.id)
    .single();

  if (userWorkspaceError)
    throw new Error(
      'There was a problem while getting user workspace from supabase.',
    );

  return { ...user.user, workspaceId: userWorkspace?.workspace_id };
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();

  if (error) throw new Error('There was a problem while signing out a user.');
}

export async function updateUser({ email, password }) {
  let updateData = {};
  if (email) updateData = { email, email_change: null };
  if (password) updateData = { password };

  const { error } = await supabase.auth.updateUser(updateData);

  if (error)
    throw new Error('There was a problem while updating a user account.');
}
