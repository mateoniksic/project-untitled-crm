import supabase from './supabase';

export async function getContacts() {
  const { data, error } = await supabase.from('contact').select(
    `*, 
    user_profile(*)`,
  );

  if (error) {
    console.log(error);
    throw new Error('There was a problem while fetching contacts data.');
  }

  return data;
}

export async function deleteContact(id) {
  const { error } = await supabase
    .from('contact')
    .delete()
    .eq('contact_id', id);

  if (error) {
    console.log(error);
    throw new Error('There was a problem while deleting contact data.');
  }
}
