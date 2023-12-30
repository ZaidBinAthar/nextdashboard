import React from 'react';

const TopCards = () => {
  const cards = [
    { label: 'Athar Revenue', value: '$78.23', percentage: '+8%', bgColor: 'bg-green-500' },
    { label: 'Asia Deploy', value: '5,432', percentage: '+15%', bgColor: 'bg-blue-500' },
    { label: 'Huzaifa', value: '1,245', percentage: '+10%', bgColor: 'bg-orange-500' },
    { label: 'Hamza', value: '$12,981,245', percentage: '+78%', bgColor: 'bg-yellow-500' },
  ];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl text-center font-bold text-gray-700 mb-6">Business Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <div key={index} className="flex flex-col bg-white p-6 rounded-lg shadow-md mb-6 md:mb-0">
            <div>
              <p className="text-sm text-gray-600">{card.label}</p>
              <p className="text-2xl font-bold text-gray-800">{card.value}</p>
            </div>
            <div className={`mt-4 p-2 rounded-lg ${card.bgColor}`}>
              <span className="text-white text-md">{card.percentage}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCards;
