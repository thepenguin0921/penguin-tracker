const log = {};

export default function handler(req, res) {
  const { app, action } = req.query;
  if (app && action) {
    if (!log[app]) log[app] = { opens: 0, last: null };
    if (action === 'open') {
      log[app].opens++;
      log[app].last = new Date().toISOString();
    }
  }
  res.status(200).json(log);
}
