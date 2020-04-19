const items = [
	{
		id 			: 1,
		type 		: 'image',
		title		: 'Smile! Alhamdulillah, we have made it to another Ramadhan!',
		url_src		: 'https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
		url 		: 'img/photos/photo-1.jpeg',
		quote 		: 'When you smile to your brother’s face, it is charity.',
		quote_name 	: 'Prophet Muhammad',
		source 		: 'https://ilmfeed.com/30-good-deeds-you-can-do-this-ramadan/'
	},
	{
		id 			: 2,
		type 		: 'image',
		title		: 'Help your family with cleanliness around the house',
		url_src		: 'https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=998&q=80',
		url 		: 'img/photos/photo-2.jpeg',
		quote 		: 'Cleanliness is half of faith.',
		quote_name 	: 'Prophet Muhammad',
		source 		: 'https://ilmfeed.com/30-good-deeds-you-can-do-this-ramadan/'
	},
	{
		id 			: 3,
		type 		: 'image',
		title		: 'Go one day without complaining to others',
		url_src		: 'https://images.unsplash.com/photo-1493236115844-5d037913e801?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
		url 		: 'img/photos/photo-3.jpeg',
		quote 		: 'I only complain of my suffering and my grief to Allah.',
		quote_name 	: 'The Holy Qur’an [12:86]',
		source 		: 'https://ilmfeed.com/30-good-deeds-you-can-do-this-ramadan/'
	},
	{
		id 			: 4,
		type 		: 'image',
		title		: 'Pray in the masjid today!',
		url_src		: 'https://images.unsplash.com/photo-1526677504211-233c8477c61b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
		url 		: 'img/photos/photo-4.jpeg',
		quote 		: 'Prayer in congregation is superior to prayer alone by twenty seven degrees.',
		quote_name 	: 'Prophet Muhammad',
		source 		: 'https://ilmfeed.com/30-good-deeds-you-can-do-this-ramadan/'
	},
	{
		id 			: 5,
		type 		: 'image',
		title		: 'Recite the Qur’an',
		url_src		: 'https://images.unsplash.com/photo-1574545640323-59dc7a2b4a6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
		url 		: 'img/photos/photo-5.jpeg',
		quote 		: 'The one who is proficient in the recitation of the Qur’an will be with the honourable and obedient scribes (angels) and he who recites the Qur’an and finds it difficult to recite, doing his best to recite it in the best way possible, will have a double reward.',
		quote_name 	: 'Prophet Muhammad',
		source 		: 'https://ilmfeed.com/30-good-deeds-you-can-do-this-ramadan/'
	},
	{
		id 			: 6,
		type 		: 'image',
		title		: 'Visit a sick Muslim.',
		url_src		: 'https://images.unsplash.com/photo-1497110781426-d735b42692bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1085&q=80',
		url 		: 'img/photos/photo-6.jpeg',
		quote 		: 'There is no Muslim who visits a sick Muslim early in the morning but 70 thousand angels send blessings upon him until evening comes, and if he visits him in the evening, 70 thousand angels send blessings upon him until morning comes, and he will have a garden in Paradise.',
		quote_name 	: 'Prophet Muhammad',
		source 		: 'https://ilmfeed.com/30-good-deeds-you-can-do-this-ramadan/'
	},
	{
		id 			: 7,
		type 		: 'image',
		title		: 'Say your salams!',
		url_src		: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
		url 		: 'img/photos/photo-7.jpeg',
		quote 		: 'Do you ever stop and think that the greeting that we use daily is something we get rewarded for?',
		quote_name 	: '',
		source 		: 'https://ilmfeed.com/30-good-deeds-you-can-do-this-ramadan/'
	},
	{
		id 			: 8,
		type 		: 'image',
		title		: 'Donate to a charity of your choosing!',
		url_src		: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
		url 		: 'img/photos/photo-8.jpeg',
		quote 		: 'Spend (in charity) out of We have bestowed for their sustenance secretly and openly; and turn off evil with good: for such there is the final attainment of the (Eternal) Home.',
		quote_name 	: 'The Holy Qur’an [13:22]',
		source 		: 'https://ilmfeed.com/30-good-deeds-you-can-do-this-ramadan/'
	},
	{
		id 			: 9,
		type 		: 'image',
		title		: 'Revive a Sunnah!',
		url_src		: 'https://images.unsplash.com/photo-1542967139-b45bb326ec87?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
		url 		: 'img/photos/photo-9.jpeg',
		quote 		: 'Verily, whoever revives a tradition (sunnah) from among my traditions which has died after me, then he will have a reward similar to whoever acts upon it without taking anything away from their rewards.',
		quote_name 	: 'Prophet Muhammad',
		source 		: 'https://ilmfeed.com/30-good-deeds-you-can-do-this-ramadan/'
	},
	{
		id 			: 10,
		type 		: 'image',
		title		: 'Feed a fasting person',
		url_src		: 'https://images.unsplash.com/photo-1496412705862-e0088f16f791?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
		url 		: 'img/photos/photo-10.jpeg',
		quote 		: 'Whoever feeds the person who is breaking his fast, he will have his reward (for his fasting) without decreasing anything from the reward of the fasting person.',
		quote_name 	: 'Prophet Muhammad',
		source 		: 'https://ilmfeed.com/30-good-deeds-you-can-do-this-ramadan/'
	},
	{
		id 			: 11,
		type 		: 'image',
		title		: 'Spend time with your younger siblings, teach them to pray, give them all your attention',
		url_src		: 'https://images.unsplash.com/photo-1502143135356-dcdb8a9a3da6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
		url 		: 'img/photos/photo-11.jpeg',
		quote 		: 'None of you [truly] believes until he loves for his brother what he loves for himself.',
		quote_name 	: 'Prophet Muhammad',
		source 		: 'https://ilmfeed.com/30-good-deeds-you-can-do-this-ramadan/'
	},
	{
		id 			: 12,
		type 		: 'image',
		title		: 'Show your kindness to everyone, including animals',
		url_src		: 'https://images.unsplash.com/photo-1506291839229-51af4b1dbee7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
		url 		: 'img/photos/photo-12.jpeg',
		quote 		: 'Whoever is merciful even to a sparrow, Allah will be merciful to him on the Day of Judgment.',
		quote_name 	: 'Prophet Muhammad',
		source 		: 'https://ilmfeed.com/30-good-deeds-you-can-do-this-ramadan/'
	},
	{
		id 			: 13,
		type 		: 'image',
		title		: 'Spend your day solely in remembrance of Allah',
		url_src		: 'https://images.unsplash.com/photo-1575751639353-e292e76daca3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
		url 		: 'img/photos/photo-13.jpeg',
		quote 		: 'So remember Me, and I shall remember you; and be grateful unto Me, and deny Me not.',
		quote_name 	: 'The Holy Qur’an [2:152]',
		source 		: 'https://ilmfeed.com/30-good-deeds-you-can-do-this-ramadan/'
	},
	{
		id 			: 14,
		type 		: 'image',
		title		: 'Invite a friend to the masjid for prayer',
		url_src		: 'https://images.unsplash.com/photo-1519834089823-08a494ba5a12?ixlib=rb-1.2.1&auto=format&fit=crop&w=968&q=80',
		url 		: 'img/photos/photo-14.jpeg',
		quote 		: 'Ramadhan is the month where those who never prayed may start praying; however, they may fear ridicule and be labeled as a ‘Ramadhan Muslim.’ Invite them & be kind.',
		quote_name 	: '',
		source 		: 'https://ilmfeed.com/30-good-deeds-you-can-do-this-ramadan/'
	},
	{
		id 			: 15,
		type 		: 'image',
		title		: 'Share your knowledge!',
		url_src		: 'https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80',
		url 		: 'img/photos/photo-15.jpeg',
		quote 		: 'Each day we learn something good or some new deed. If we share this with others, we will get the same reward.',
		quote_name 	: '',
		source 		: 'https://ilmfeed.com/30-good-deeds-you-can-do-this-ramadan/'
	},
	{
		id 			: 16,
		type 		: 'image',
		title		: 'Visit your grandparents!',
		url_src		: 'https://images.unsplash.com/photo-1567067974934-75a3e4534c14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
		url 		: 'img/photos/photo-16.jpeg',
		quote 		: 'It is such a blessing to have grandparents. Give them a visit to show you love and care about them. It will mean the world to them!',
		quote_name 	: '',
		source 		: 'https://ilmfeed.com/30-good-deeds-you-can-do-this-ramadan/'
	},
	{
		id 			: 17,
		type 		: 'image',
		title		: 'Forgive others and, most importantly, yourself',
		url_src		: 'https://images.unsplash.com/photo-1517346665566-17b938c7f3ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
		url 		: 'img/photos/photo-17.jpeg',
		quote 		: 'It may be incredibly difficult, but the reward is immense.',
		quote_name 	: '',
		source 		: 'https://ilmfeed.com/30-good-deeds-you-can-do-this-ramadan/'
	},
	{
		id 			: 18,
		type 		: 'image',
		title		: 'Help keep your environment clean!',
		url_src		: 'https://images.unsplash.com/photo-1563898058033-7e4f35e1a1e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
		url 		: 'img/photos/photo-18.jpeg',
		quote 		: 'Removing harmful things from the road is an act of charity (sadaqah).',
		quote_name 	: 'Prophet Muhammad',
		source 		: 'https://ilmfeed.com/30-good-deeds-you-can-do-this-ramadan/'
	},
	{
		id 			: 19,
		type 		: 'image',
		title		: 'Learn one name of Allah and invoke Him with it',
		url_src			: 'https://images.unsplash.com/photo-1516275860772-794f83076e30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
		url 		: 'img/photos/photo-19.jpeg',
		quote 		: 'Allah has ninety-nine names, and whoever knows them will go to Paradise.',
		quote_name 	: 'Prophet Muhammad',
		source 		: 'https://ilmfeed.com/30-good-deeds-you-can-do-this-ramadan/'
	},
	{
		id 			: 20,
		type 		: 'image',
		title		: 'Stand in prayer on Laylatul Qadr',
		url_src		: 'https://images.unsplash.com/photo-1531213203257-16afb0eac95e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1029&q=80',
		url 		: 'img/photos/photo-20.jpeg',
		quote 		: 'Laylatul Qadr (The Night of Power) is better than a thousand months.',
		quote_name 	: 'The Holy Qur’an [97:3]',
		source 		: 'https://ilmfeed.com/30-good-deeds-you-can-do-this-ramadan/'
	},
	{
		id 			: 21,
		type 		: 'image',
		title		: 'Take care of your body',
		url_src		: 'https://images.unsplash.com/photo-1454438992604-4a8e59768a5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
		url 		: 'img/photos/photo-21.jpeg',
		quote 		: 'Pamper yourself after a long day of fasting with a relaxing bath or a cup of tea & the recitation of the Qur’an from your favorite reciter.',
		quote_name 	: '',
		source 		: 'https://ilmfeed.com/30-good-deeds-you-can-do-this-ramadan/'
	},
	{
		id 			: 22,
		type 		: 'image',
		title		: 'Volunteer!',
		url_src		: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
		url 		: 'img/photos/photo-22.jpeg',
		quote 		: 'At your masjid, at a homeless shelter, an animal shelter — even tutoring a child for no pay.',
		quote_name 	: '',
		source 		: 'https://ilmfeed.com/30-good-deeds-you-can-do-this-ramadan/'
	},
	{
		id 			: 23,
		type 		: 'image',
		title		: 'Donate used Islamic books to your local masjid!',
		url_src		: 'https://images.unsplash.com/photo-1525720171842-a4992f22f70d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
		url 		: 'img/photos/photo-23.jpeg',
		quote 		: 'Give the gift of knowledge to another person who is seeking it.',
		quote_name 	: '',
		source 		: 'https://ilmfeed.com/30-good-deeds-you-can-do-this-ramadan/'
	},
	{
		id 			: 24,
		type 		: 'image',
		title		: 'Say thanks!',
		url_src		: 'https://images.unsplash.com/photo-1502355984-b735cb2550ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
		url 		: 'img/photos/photo-24.jpeg',
		quote 		: 'Say thanks to someone who has made a difference in your life, regardless of how big or small',
		quote_name 	: '',
		source 		: 'https://ilmfeed.com/30-good-deeds-you-can-do-this-ramadan/'
	},
	{
		id 			: 25,
		type 		: 'image',
		title		: 'Perform I’tikaaf!',
		url_src		: 'https://images.unsplash.com/photo-1526677504211-233c8477c61b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
		url 		: 'img/photos/photo-25.jpeg',
		quote 		: 'Whosoever for Allah’s sake did even one days i’tikaaf, Allah would keep him away from Jahannam by trenches.',
		quote_name 	: 'Prophet Muhammad',
		source 		: 'https://ilmfeed.com/30-good-deeds-you-can-do-this-ramadan/'
	},
	{
		id 			: 26,
		type 		: 'image',
		title		: 'Reading the Quran with meaning once',
		url_src		: 'https://images.unsplash.com/photo-1574545640323-59dc7a2b4a6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
		url 		: 'img/photos/photo-5.jpeg',
		quote 		: 'At least try to complete reading the Quran with meaning once.',
		quote_name 	: '',
		source 		: 'https://www.islamicity.org/3165/things-to-do-in-ramadan//'
	},
	{
		id 			: 27,
		type 		: 'image',
		title		: 'Mend our relations with everyone',
		url_src		: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
		url 		: 'img/photos/photo-27.jpeg',
		quote 		: 'Ensure that we mend our relations with everyone regardless of the mistakes on the part of others.',
		quote_name 	: '',
		source 		: 'https://www.islamicity.org/3165/things-to-do-in-ramadan/'
	},
	{
		id 			: 28,
		type 		: 'image',
		title		: 'Not hurt anyone and control our anger',
		url_src		: 'https://images.unsplash.com/photo-1518331647614-7a1f04cd34cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80',
		url 		: 'img/photos/photo-28.jpeg',
		quote 		: 'Ensure that we will not hurt anyone and control our anger in all situations.',
		quote_name 	: 'Prophet Muhammad',
		source 		: 'https://www.islamicity.org/3165/things-to-do-in-ramadan/'
	},
	{
		id 			: 29,
		type 		: 'image',
		title		: 'Spend more time with families',
		url_src		: 'https://images.unsplash.com/photo-1504151932400-72d4384f04b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80',
		url 		: 'img/photos/photo-29.jpeg',
		quote 		: 'Spend more time with our families especially in breaking the fast.',
		quote_name 	: '',
		source 		: 'https://www.islamicity.org/3165/things-to-do-in-ramadan/'
	},
	{
		id 			: 30,
		type 		: 'image',
		title		: 'Do Fajr prayer and pray all the other prayers on time',
		url_src		: 'https://images.unsplash.com/photo-1526677504211-233c8477c61b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
		url 		: 'img/photos/photo-4.jpeg',
		quote 		: 'Make sure that we do not miss our Fajr prayer and pray all the other prayers on time.',
		quote_name 	: '',
		source 		: 'https://www.islamicity.org/3165/things-to-do-in-ramadan/'
	},
	// {
	// 	type 	: 'video',
	// 	title 	: 'Listen kajian',
	// 	url		: 'https://www.youtube.com/embed/moKHzV9ca4o'
	// },
	// {
	// 	type 	: 'article',
	// 	title 	: 'Hikmah puasa',
	// 	url		: 'https://seruni.id/hikmah-puasa/'
	// }
]

export default items