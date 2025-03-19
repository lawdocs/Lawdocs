import { useState } from 'react';
import DataTable from 'react-data-table-component';

const categories = ['Article India', 'Article Global', 'Parliamentary Watch', 'Compliance Calendars'];

const data = {
  'Article India': [
    { id: 1, title: 'Overview of Consent to Establish and Operate Guidelines, 2025', views: 72994, publishedOn: '18 Jan, 2021', Regulatour: '11 Mar, 2025', link: 'https://example.com/guidelines-2025' },
    { id: 2, title: 'Environmental Impact Assessment Procedures, 2024', views: 65230, publishedOn: '10 Feb, 2021', Regulatour: '15 Feb, 2025', link: 'https://example.com/eia-2024' },
  ],
  'Article Global': [
    { id: 1, title: 'Global Sustainability Initiatives, 2025', views: 51000, publishedOn: '12 Jan, 2021', Regulatour: '20 Mar, 2025', link: 'https://example.com/global-2025' },
  ],
  'Parliamentary Watch': [
    { id: 1, title: 'Parliamentary Session Highlights, 2025', views: 43000, publishedOn: '20 Mar, 2021', Regulatour: '30 Mar, 2025', link: 'https://example.com/parliament-2025' },
  ],
  'Compliance Calendars': [
    { id: 1, title: 'Compliance Calendar Q1, 2025', views: 60000, publishedOn: '15 Feb, 2021', Regulatour: '10 Apr, 2025', link: 'https://example.com/compliance-q1' },
  ],
  
};

const columns = [
  { name: 'S.No.', selector: row => row.id, sortable: true, width: '80px' },
  {
    name: 'Title',
    selector: row => row.title,
    sortable: true,
    cell: row => (
      <a href={row.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
        {row.title}
      </a>
    ),
    grow: 2,
  },
  { name: 'Views', selector: row => row.views, sortable: true },
  { name: 'Published on', selector: row => row.publishedOn, sortable: true },
  { name: 'Regulatour', selector: row => row.Regulatour, sortable: true },
];

const customStyles = {
  headCells: {
    style: {
      backgroundColor: '#2f66b0',
      color: 'white',
      fontWeight: 'bold',
    },
  },
  cells: {
    style: {
      borderBottom: '1px solid #e5e7eb',
    },
  },
};

const ReactDataTableExample = () => {
  const [activeCategory, setActiveCategory] = useState('Article India');
  const [searchText, setSearchText] = useState('');

  const filteredData = data[activeCategory].filter(item =>
    item.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center space-y-6">
      {/* Banner */}
      <div className="w-full h-64 md:h-80 lg:h-96 overflow-hidden">
        <img 
          src="https://res.cloudinary.com/dzanl16re/image/upload/v1742200568/Screenshot_2025-03-12_150103_tlsbob.png" 
          alt="Banner" 
          className="w-full h-full object-cover" 
        />
      </div>

      {/* Category Tabs */}
      <div className="w-full max-w-6xl px-4 flex flex-wrap gap-3 justify-start">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all shadow-sm ${
              activeCategory === cat
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-white text-blue-700 border border-blue-600 hover:bg-blue-500 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Table Container */}
      <div className="w-full max-w-6xl px-4">
        <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
          <div className="text-xl font-semibold">{activeCategory}</div>
          <div className="flex items-center space-x-2">
            <span>Search:</span>
            <input
              type="text"
              value={searchText}
              onChange={e => setSearchText(e.target.value)}
              className="border border-gray-300 rounded px-2 py-1 text-sm w-48"
              placeholder="Search by title..."
            />
          </div>
        </div>

        <div className="bg-white rounded shadow">
          <DataTable
            columns={columns}
            data={filteredData}
            customStyles={customStyles}
            noHeader
            pagination
            highlightOnHover
            responsive
          />
        </div>
      </div>
    </div>
  );
};

export default ReactDataTableExample;
