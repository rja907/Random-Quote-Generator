var randomQuotes = {
'To pursue yourself is an interesting and absorbing thing to do. Once you have caught the scent of a hidden being, your own hidden being, you won\'t readily be deflected from the tracking down of it. - Cynthia Propper Seton',

'Ninety percent of the world\'s woe comes from people not knowing themselves, their abilities, their frailties, and even their real virtues. Most of us go almost all the way through life as complete strangers to ourselves. - Sydney J. Harris',

'If I could know me, I could know the universe. - Shirley MacLaine',

'A man who knows he is a fool is not a great fool. - Chuang-tzu',

'I believe that in our constant search for security we can never gain any peace of mind until we are secure in our own soul. - Margaret Chase Smith',

'We should know what our convictions are, and stand for them. Upon one\s own philosophy, conscious or unconscious, depends one\'s ultimate interpretation of facts. Therefore it is wise to be as clear as possible about one\'s subjective principles. As the man is, so will be his ultimate truth. - Carl Jung',

'Femininity appears to be one of those pivotal qualities that is so important no one can define it. - Caroline Bird',

'I knew what my job was; it was to go out and meet the people and love them. - Diana, Princess of Wales',

'People who concentrate on giving good service always get more personal satisfaction as well as better business. How can we get better service? One way is by trying to see ourselves as others do. - Patricia Fripp',

'Resolve to be thyself; and know that he who finds himself, loses his misery. - Matthew Arnold',

'Let us remember that within us there is a palace of immense magnificence. - Teresa of Avila',

'Many men go fishing all of their lives without knowing that it is not fish they are after. - Henry David Thoreau',

'Freedom is knowing who you really are. - Linda Thomson',

'If you do not tell the truth about yourself you cannot tell it about other people. - Virginia Woolf',

'To understand is to forgive, even oneself. - Alexander Chase',

'Knowing others is wisdom, knowing yourself is Enlightenment. - Lao-Tzu',

'I think self-awareness is probably the most important thing towards becoming a champion. - Billie Jean King',

'The life which is unexamined is not worth living. - Plato',

'The deeper interior you have the more you have in your library. - Jacqueline Bisset',

'Follow your interests, get the best available education and training, set your sights high, be persistent, be flexible, keep your options open, accept help when offered, and be prepared to help others. - Mildred Spiewak Dresselhaus'
};

function randomQuote(){
	var randNum = Math.ceil(Math.random() * 20);
	document.getElementById('displayRandomQuote').innerHTML = randomQuotes[randNum];
}