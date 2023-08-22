import supabase from './supabase';

export async function signUp({ email, password }) {
  const { data, error } = await supabase.auth.signUp({ email, password });

  if (error) throw new Error('There was a problem while signing up a user.');

  return data;
}

export async function signIn({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if (error)
    throw new Error('There has been a problem while signing in a user.');

  return data;
}

export async function getSignedInUser() {
  const { data: session } = await supabase.auth.getSession();

  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error)
    throw new Error(
      'There was a problem while getting user from supabase.',
      error.message,
    );

  return data?.user;
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();

  if (error) throw new Error('There was a problem signing out a user.');
}
