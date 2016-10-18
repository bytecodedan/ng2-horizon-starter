import later from 'later';
import { r } from '../db';

const messages = [
  'Bring out the trash.',
  'Clean up lovli.js',
  'Make lovli.js even simpler.',
  'Create a short tutorial.',
  'Fix multiline-todos in lovli.',
  'Praise horizon.',
  'Build a shrine for horizon.',
  'Invest in shrimps.',
  'Watch GoT Season 6.',
  'Go out with the kids.',
  'Buy a birthday present.',
  'Clean the house.',
  'Wash the dishes.',
  'Connect horizon-react with redux.',
  'Eat some ice cream!',
  // `There used to be a street named after Chuck Norris, but it was changed because nobody crosses Chuck Norris and lives.`,
  `Chuck Norris has already been to Mars; that's why there are no signs of life.`,
  `Chuck Norris counted to infinity - twice.`,
  `Chuck Norris is the reason why Waldo is hiding.`,
  `Death once had a near-Chuck Norris experience`,
  // `Chuck Norris and Superman once fought each other on a bet. The loser had to start wearing his underwear on the outside of his pants.`,
  `Chuck Norris doesn't flush the toilet, he scares the sh*t out of it.`
  // `Chuck Norris will never have a heart attack. His heart isn't nearly foolish enough to attack him.`
];

// http://www.chucknorrisfacts.com/chuck-norris-top-50-facts

const avatar_url = `http://api.adorable.io/avatars/50/${new Date().getMilliseconds()}.png`;

const createRandomMessage = () => {
  const rand = Math.round(Math.random() * messages.length - 1, 0);
  r.table('chat').insert({ 
    text: messages[rand], 
    datetime: new Date(),
    url: avatar_url,
    $hz_v$: 0 
  }).run();
};

const every2minutes = later.parse.text('every 30 seconds');

later.setInterval(createRandomMessage, every2minutes);