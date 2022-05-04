export const query = (db, sql, params) => {
  return new Promise((res, rej) => {
    db.all(sql, params, (err, rows) => {
      if (err) rej(err);
      res(rows);
    });
  });
};

export const queryAll = (db, sql, paramsList) => {
  return new Promise((res, rej) => {
    const stmt = db.prepare(sql);
    for (let params of paramsList) {
      stmt.run(params, (err, _) => {
        if (err) rej(err);
      });
    }
    stmt.finalize();
    res();
  });
};
