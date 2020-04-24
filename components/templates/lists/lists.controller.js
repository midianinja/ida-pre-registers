import axios from 'axios';

export const getList = async ({
  setLoading, setLists,
}) => {
  setLoading(true);

  let listsResponse;

  try {
    listsResponse = await axios.get(`${process.env.IDA_BASE_URI}/find-pre-register-lists`);
  } catch (err) {
    setLoading(false);
    throw err;
  }

  console.log(listsResponse.data.data.pre_register_lists);
  setLoading(false);
  setLists(listsResponse.data.data.pre_register_lists);
};
