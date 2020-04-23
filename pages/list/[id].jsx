import React, { useState, useEffect } from 'react';
// import Store from '../../store/Store';
import { useRouter } from 'next/router';
import List from '../../components/templates/list/List';
import BaseHead from '../../components/BaseHead';
import { getList, filterAnswers } from '../../components/templates/list/list.controller';

const ListPage = () => {
  const { query } = useRouter();
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState('');
  const [page, setPage] = useState(1);
  const [answers, setAnswers] = useState([]);
  const [filter, setFilter] = useState({});
  const answersPerPage = 5;

  useEffect(() => {
    if (query.id) {
      getList({
        setLoading, id: query.id, setTitle, setAnswers,
      });
    }
  }, [query]);

  const filteredAnswers =  filterAnswers({ filter, answers });
  return (
    <div>
      <BaseHead
        title="Ninja"
        description="Cadastre uma nova lista de pré registros no IDA"
      />
      <List
        loading={loading}
        title={title}
        answersAmount={answers.length}
        answers={filteredAnswers.slice((page - 1) * answersPerPage, page * answersPerPage)}
        onFilterChange={setFilter}
        pageNumber={page * answersPerPage}
        end={filteredAnswers.length <= page * answersPerPage}
        begin={page === 1}
        onNextClick={() => {
          window.scrollTo(0, 0);
          setPage(page + 1);
        }}
        onPrevClick={() => {
          window.scrollTo(0, 0);
          setPage(page - 1);
        }}
      />
    </div>
  );
};

export default ListPage;
