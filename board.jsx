// Board.jsx
import Card from './card';

const Board = () => {
    const resources = [
        { title: 'Bitcoin Core Docs', description: 'The official documentation for Bitcoin Core.', link: 'https://bitcoin.org/en/developer-documentation' },
        { title: 'Mastering Blockchain', description: 'A comprehensive guide to blockchain technology.', link: 'https://github.com/mastering-blockchain' },
        { title: 'Blockchain Meetup', description: 'A virtual meetup for blockchain developers.', link: 'https://www.meetup.com/' },
        { title: 'DeFi Academy', description: 'Learn decentralized finance basics.', link: 'https://www.defi.academy/' },
        { title: 'Ethereum Whitepaper', description: 'Dive into Ethereum’s foundation.', link: 'https://ethereum.org/en/whitepaper/' },
      ];
    

  return (
    <div className="board">
      {resources.map((resource, index) => (
        <Card 
          key={index}
          title={resource.title}
          description={resource.description}
          link={resource.link}
        />
      ))}
    </div>
  );
};

export default Board;
