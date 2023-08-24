import supabase from './supabase';

export async function getWorkspace() {
  let { data, error } = await supabase.from('workspace').select('*').select();

  if (error) {
    console.log(error);
    throw new Error('There was a problem while fetching workspace data.');
  }

  return data;
}
