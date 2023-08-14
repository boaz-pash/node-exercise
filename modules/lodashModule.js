const _ = require("lodash");
const rFaM = require("./utils");
function textManipulations(txt) {
  const txtErr = txt.split(" ");
  console.log(txtErr.length + "\n");
  console.log(_.reverse(txtErr).join() + "\n");
  console.log(_.uniq(txtErr).join() + "\n");
  console.log(_.uniq(txtErr).length + "\n");
  console.log(_.uniq(txtErr).join().toUpperCase() + "\n");
  console.log(
    _.uniq(txtErr)
      .filter((item) => item.length > 5)
      .join()
  );
  const vowelsCount = [];
  _.uniq(txtErr).map((item) => {
    const count = item.match(/[aeiou]/gi);
    if (count != null) {
      vowelsCount.push({ word: item, vowelCount: count.length });
    }
  });
  rFaM.exportData("vowelsCount.txt", vowelsCount);
}
module.exports = { textManipulations };
