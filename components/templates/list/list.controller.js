import axios from 'axios';
import categories from '../../../collections/categories';

const accentFold = (inStr) => inStr.replace(
  /([àáâãäå])|([çčć])|([èéêë])|([ìíîï])|([ñ])|([òóôõöø])|([ß])|([ùúûü])|([ÿ])|([æ])/g, 
  (str, a, c, e, i, n, o, s, u, y, ae) => {
    if (a) return 'a';
    if (c) return 'c';
    if (e) return 'e';
    if (i) return 'i';
    if (n) return 'n';
    if (o) return 'o';
    if (s) return 's';
    if (u) return 'u';
    if (y) return 'y';
    if (ae) return 'ae';
  }
);

export const getList = async ({
  setLoading, id, setTitle, setAnswers, setQuestions,
  setQuiz,
}) => {
  setLoading(true);

  let listResponse;

  try {
    listResponse = await axios.get(`${process.env.IDA_BASE_URI}/find-pre-register-list/${id}`)
  } catch (err) {
    console.log([err])
  }

  setTitle(categories.find((category) => listResponse.data.data.list.category === category.id).label);
  setAnswers(listResponse.data.data.list.answers);
  setQuestions(listResponse.data.data.list.questions || [
    'how_you_met',
    'ninja_question',
  ]);
  setQuiz(listResponse.data.data.list.quiz);
  setLoading(false);
};

export const filterAnswers = ({ answers, filter }) => answers.filter((answer) => {
  if (Object.keys(answer).length !== 28) return false;
  if (filter.state.id && answer.state !== filter.state.id) return false;

  const interests = answer.interest_areas.split(', ');
  const filtered = interests.filter((
    interest => filter.keys.findIndex((key) => {
      return new RegExp(accentFold(key.label), 'gi')
        .test(accentFold(interest.replace('\"', '')));
    }) !== -1
  ));
  
  if (
    filter.keys.length &&
    filtered.length !== filter.keys.length
  ) return false;

  if (
    filter.city &&
    !new RegExp(accentFold(filter.city), 'gi')
      .test(accentFold(answer.city))
  ) return false;

  return true;
});
