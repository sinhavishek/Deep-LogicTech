import { db } from '../db/database.js'


//query for get the all list of data from the table
export const viewStory = (req, res) => {
  let q = 'SELECT * FROM stories';

  db.query(q, (err, result) => {
    if (err) return res.json(err);
    return res.status(200).json(result);
  })
}
