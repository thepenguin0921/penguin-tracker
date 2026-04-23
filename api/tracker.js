const SUPABASE_URL = https://abjpteijsoohyjaztmlm.supabase.co;
const SUPABASE_KEY = sb_publishable_cfwT4OSVZu0xpIy2xplL7A_o2acrnRu;

export default async function handler(req, res) {
  const { app, action } = req.query;
  
  if (app && action) {
    await fetch(`${SUPABASE_URL}/rest/v1/app_log`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SUPABASE_KEY,
        'Authorization': `Bearer ${SUPABASE_KEY}`
      },
      body: JSON.stringify({ app, action })
    });
  }

  const r = await fetch(`${SUPABASE_URL}/rest/v1/app_log?select=*&order=created_at.desc&limit=50`, {
    headers: {
      'apikey': SUPABASE_KEY,
      'Authorization': `Bearer ${SUPABASE_KEY}`
    }
  });
  
  const data = await r.json();
  res.status(200).json(data);
}
