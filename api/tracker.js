const data = {};

export default function handler(req, res) {
  const { app, action } = req.query;
  
  if (app && action) {
    if (!data[app]) data[app] = { opens: 0, time: 0, last: null };
    if (action === 'open') {
      data[app].opens++;
      data[app].last = new Date().toISOString();
    }
  }
  
  res.json(data);
}
