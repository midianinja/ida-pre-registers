import axios from 'axios';

const getAnswersFromCSV = (file) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = () => {
        const lines = reader.result.split('\n');
        const json = lines.map(line => line.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/));
  
        const answers = json.slice(3).map(answer => {
          const map = {};
          json[1].forEach((key, index) => {
            map[key] = answer[index];
          });
  
          return map;
        });
  
        resolve(answers);
    };
    
    reader.readAsText(file, 'UTF-8');
  });
};

const getQuizFromCSV = (file) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = () => {
      const lines = reader.result.split('\n');
      const json = lines.map(line => line.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/));
      resolve(json[0]);
    };
    
    reader.readAsText(file, 'UTF-8');
  });
};

const getQuestionsFromCSV = (file) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = () => {
      const lines = reader.result.split('\n');
      const json = lines.map(line => line.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/));
      const questions = json[2].map((allow, index) => ({
        key: json[1][index],
        allow,
        index,
      }))
      .filter(line => line.allow.trim().toUpperCase() === 'S')
      .map(line => line.key);

      resolve(questions);
    };
    
    reader.readAsText(file, 'UTF-8');
  });
}

export const handleRegister = async ({
  category, csv, setLoading, setError,
  router,
}) => {
  setError({});
  setLoading(true);
  
  const answers = await getAnswersFromCSV(csv);
  const quiz = await getQuizFromCSV(csv);
  const questions = await getQuestionsFromCSV(csv);

  try {
    await axios.post(`${process.env.IDA_BASE_URI}/create-pre-register-list`, {
      category: category.id,
      answers,
      quiz,
      questions,
    });
  } catch (err) {
    if (err.response.data.error === 'pre-register-lists/duplicated-csv') {
      setError({ csv: 'CSV já cadastrado' });
    }
    setLoading(false);
    throw err;
  }

  router.push('/lists');
  setLoading(false);
};

export const ignore = null;
