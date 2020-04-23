import axios from 'axios';

export const getLists = async ({ dispatch }) => {
  const response = await axios.get(`${process.env.IDA_BASE_URI}/find-pre-register-lists`);
  dispatch({
    type: 'SET_LISTS',
    lists: response.data.data.pre_register_lists,
  });
};

export const ignore = null;
