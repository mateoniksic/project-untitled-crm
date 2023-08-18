import supabase from './supabase';

export async function getDeals() {
  const { data, error } = await supabase.from('deal').select(
    `*, 
    contact(contact_first_name, contact_last_name, contact_email),
    deal_status(deal_status_name),
    pipeline(pipeline_name),
    pipeline_stage(pipeline_stage_name)`,
  );

  if (error) {
    console.log(error);
    throw new Error('There was a problem while fetching deals data.');
  }

  return data;
}
