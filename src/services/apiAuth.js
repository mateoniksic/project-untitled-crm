import supabase, { supabaseUrl } from './supabase';

export async function signIn({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if (error)
    throw new Error('There has been a problem while signing in a user.');

  return data;
}

export async function getSignedInUser({ email, password }) {
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

export async function signOutUser() {
  const { error } = await supabase.auth.signOut();

  if (error) throw new Error('There was a problem signing out a user.');
}
