import React from 'react';

const TableExampleTwo = () => {
  // টেবিলের ডেটা (Data for the table)
  const data = [
    { id: 1, col1: 'Row 1 Data A', col2: 'Row 1 Data B', col3: 'Row 1 Data C', col4: 'Row 1 Data D' },
    { id: 2, col1: 'Row 2 Data A', col2: 'Row 2 Data B', col3: 'Row 2 Data C', col4: 'Row 2 Data D' },
    { id: 3, col1: 'Row 3 Data A', col2: 'Row 3 Data B', col3: 'Row 3 Data C', col4: 'Row 3 Data D' },
    { id: 4, col1: 'Row 4 Data A', col2: 'Row 4 Data B', col3: 'Row 4 Data C', col4: 'Row 4 Data D' },
    { id: 5, col1: 'Row 5 Data A', col2: 'Row 5 Data B', col3: 'Row 5 Data C', col4: 'Row 5 Data D' },
    { id: 5, col1: 'Row 5 Data A', col2: 'Row 5 Data B', col3: 'Row 5 Data C', col4: 'Row 5 Data D' },
    { id: 5, col1: 'Row 5 Data A', col2: 'Row 5 Data B', col3: 'Row 5 Data C', col4: 'Row 5 Data D' },
    { id: 5, col1: 'Row 5 Data A', col2: 'Row 5 Data B', col3: 'Row 5 Data C', col4: 'Row 5 Data D' },
    { id: 5, col1: 'Row 5 Data A', col2: 'Row 5 Data B', col3: 'Row 5 Data C', col4: 'Row 5 Data D' },
    { id: 5, col1: 'Row 5 Data A', col2: 'Row 5 Data B', col3: 'Row 5 Data C', col4: 'Row 5 Data D' },
    { id: 5, col1: 'Row 5 Data A', col2: 'Row 5 Data B', col3: 'Row 5 Data C', col4: 'Row 5 Data D' },
    { id: 5, col1: 'Row 5 Data A', col2: 'Row 5 Data B', col3: 'Row 5 Data C', col4: 'Row 5 Data D' },
    { id: 5, col1: 'Row 5 Data A', col2: 'Row 5 Data B', col3: 'Row 5 Data C', col4: 'Row 5 Data D' },
    { id: 5, col1: 'Row 5 Data A', col2: 'Row 5 Data B', col3: 'Row 5 Data C', col4: 'Row 5 Data D' },
    { id: 5, col1: 'Row 5 Data A', col2: 'Row 5 Data B', col3: 'Row 5 Data C', col4: 'Row 5 Data D' },
    { id: 5, col1: 'Row 5 Data A', col2: 'Row 5 Data B', col3: 'Row 5 Data C', col4: 'Row 5 Data D' },
    { id: 5, col1: 'Row 5 Data A', col2: 'Row 5 Data B', col3: 'Row 5 Data C', col4: 'Row 5 Data D' },
    { id: 5, col1: 'Row 5 Data A', col2: 'Row 5 Data B', col3: 'Row 5 Data C', col4: 'Row 5 Data D' },
    { id: 5, col1: 'Row 5 Data A', col2: 'Row 5 Data B', col3: 'Row 5 Data C', col4: 'Row 5 Data D' },
    { id: 5, col1: 'Row 5 Data A', col2: 'Row 5 Data B', col3: 'Row 5 Data C', col4: 'Row 5 Data D' },
    { id: 5, col1: 'Row 5 Data A', col2: 'Row 5 Data B', col3: 'Row 5 Data C', col4: 'Row 5 Data D' },
    { id: 5, col1: 'Row 5 Data A', col2: 'Row 5 Data B', col3: 'Row 5 Data C', col4: 'Row 5 Data D' },
    { id: 5, col1: 'Row 5 Data A', col2: 'Row 5 Data B', col3: 'Row 5 Data C', col4: 'Row 5 Data D' },
    { id: 5, col1: 'Row 5 Data A', col2: 'Row 5 Data B', col3: 'Row 5 Data C', col4: 'Row 5 Data D' },
    { id: 5, col1: 'Row 5 Data A', col2: 'Row 5 Data B', col3: 'Row 5 Data C', col4: 'Row 5 Data D' },
   
  ];

  // টেবিলের হেডার (Table Headers)
  const headers = ['Class No.', 'Class Type', 'Topic / Lesson', 'Resource Type'];

  return (
    <div className="overflow-x-auto mt-6 rounded-2xl">
      {/* Tailwind ক্লাস ব্যবহার করে টেবিল স্টাইল করা হয়েছে */}
      <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg">
        
        {/* টেবিল হেডার */}
        <thead>
          <tr className="bg-[#342B27]  border-b border-gray-300">
            {headers.map((header, index) => (
              <th 
                key={index} 
                className="py-3 px-6 text-left text-[16px]  font-semibold text-[#FFFFFF]  leading-[150%] "
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        
        {/* টেবিল বডি */}
        <tbody>
          {data.map((row, rowIndex) => (
            <tr 
              key={row.id} 
              // জোড় ও বিজোড় সারির জন্য আলাদা ব্যাকগ্রাউন্ড কালার
              className={rowIndex % 2 === 0 ? 'bg-white hover:bg-gray-50' : 'bg-gray-100 hover:bg-gray-150'}
            >
              <td className="py-4 px-6 border-b font-medium leading-[150%] border-gray-200 text-[14px] text-[#605F62]">{row.col1}</td>
              <td className="py-4 px-6 border-b font-medium leading-[150%] border-gray-200 text-[14px] text-[#605F62]">{row.col2}</td>
              <td className="py-4 px-6 border-b font-medium leading-[150%] border-gray-200 text-[14px] text-[#605F62]">{row.col3}</td>
              <td className="py-4 px-6 border-b font-medium leading-[150%] border-gray-200 text-[14px] text-[#605F62]">{row.col4}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableExampleTwo;