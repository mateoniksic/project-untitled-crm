import supabase from './supabase';

export async function getDealStatuses() {
  const { data, error } = await supabase.from('deal_status').select('*');

  if (error) {
    console.log(error);
    throw new Error('There was a problem while fetching deal statuses data.');
  }

  return data;
}
