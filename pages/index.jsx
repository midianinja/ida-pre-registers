import React, { useState } from 'react';
import { useRouter } from 'next/router';
import BaseHead from '../components/BaseHead';
import RegisterList from '../components/templates/register-list/RegisterList';
import { handleRegister } from '../components/templates/register-list/registerList.controller';

const IndexPage = () => {
  const router = useRouter();
  const [csv, setCSV] = useState(null);
  const [csvFile, setCSVFile] = useState(null);
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});

  return (
    <div>
      <BaseHead
        title="Cadastre uma nova lista de pré registros no IDA"
        description="Cadastre uma nova lista de pré registros no IDA"
      />
      <RegisterList
        loading={loading}
        csv={csv}
        error={error}
        category={category}
        onCSVChange={(e) => {
          setCSV(e.target.value);
          setCSVFile(e.target.files[0]);
        }}
        onCategoryChange={setCategory}
        onSubmit={() => handleRegister({
          csv: csvFile, category, setLoading, setError,
          router,
        })}
      />
    </div>
  );
};

export default IndexPage;
