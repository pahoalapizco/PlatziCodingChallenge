const moment = require('moment');
const yargs = require('yargs');

const formatDate = date => date.replace(/[/.]/gi, '-');
const calculateNextBday = (birthday) => {
  const date = formatDate(birthday).split('-');
  date[0] = new Date().getFullYear().toString();
  
  const bday = moment(date.join('-'));
  const now = moment(new Date());

  return bday.diff(now, 'days');
}


const exp = new RegExp(/^\d{4}([\-/.])(0?[1-9]|1[1-2])\1(3[01]|[12][0-9]|0?[1-9])$/);

const ops = {
  birthday: {
    alias: 'b',
    desc: 'Date of your Birth Day, Format: yyyy-mm-dd, yyyy/mm/dd or yyyy.mm.dd',
    demand: true
  }
}

const argv = yargs
  .command('next', 'Calculate days for your birtday', ops)
  .help()
  .argv;
const { birthday } = argv;

if (!exp.test(birthday)) {
  console.log('Please enter a correct formart.');
} else {
  console.log(`${calculateNextBday(birthday)} days until your birthday `);
}



