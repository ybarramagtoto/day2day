import GalleryItem from './GalleryItem';

const Gallery = () => {
  const galleryItems = [
    {
        img: '/images/d2d_reading.png',
        date: 'September 7, 2023',
        title: 'Lincoln High football players read to kids at Malcolm X Library',
        articleLink: 'https://www.10news.com/donate/give-a-book/lincoln-high-football-players-read-to-kids-at-malcolm-x-library',
        source: 'ABC 10 News San Diego'
    },
    {
        img: '/images/dd_ut.jpeg',
        date: 'January 13, 2023',
        title: 'Two community leaders honored with annual Dr. Martin Luther King Jr. Human Dignity Award',
        articleLink: 'https://www.sandiegouniontribune.com/local/story/2023-01-13/two-community-leaders-honored-with-annual-dr-martin-luther-king-jr-human-dignity-award',
        source: 'San Diego Union-Tribune'
    },
    {
        img: '/images/lincoln_ut.jpeg',
        date: 'October 27, 2021',
        title: '‘Making a stand for equality’: Lincoln High football coach defends canceling Cathedral Catholic showdown',
        articleLink: 'https://www.sandiegouniontribune.com/sports/high-school-preps/story/2021-10-27/making-a-stand-for-equality-lincoln-high-football-coach-defends-canceling-cathedral-catholic-showdown',
        source: 'San Diego Union-Tribune'
    },   
    {
        img: '/images/dunn_article.jpg',
        date: 'November 29, 2018',
        title: 'Three Morse High alumni make history with football championships',
        articleLink: 'https://www.sandiegounified.org/about/newscenter/archived_news/three_morse_high_alumni_make_history_with_football',
        source: 'San Diego Unified School District'
    },
    // Add more gallery items as needed
  ];

  return (
    <div className="flex justify-center">
      <div className="flex flex-wrap justify-center gap-5 mx-auto">
        {galleryItems.map((item, index) => (
          <GalleryItem
            key={index}
            img={item.img}
            date={item.date}
            title={item.title}
            articleLink={item.articleLink}
            source={item.source}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
