import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Lists from '../components/templates/lists/Lists';
import { getList } from '../components/templates/lists/lists.controller';


const ListsPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [lists, setLists] = useState([]);

  useEffect(() => {
    getList({ setLoading, setLists })
  }, []);
  
  if (loading) return <div />;
  return (
    <div>
      <Lists
        items={lists}
        onCardClick={router.push}
      />
    </div>
  );
};

export default ListsPage;
