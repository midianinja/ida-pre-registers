import axios from 'axios';

export const getList = async ({
  setLoading, setLists,
}) => {
  setLoading(true);

  let listsResponse;

  try {
    listsResponse = await axios.get(
      `${process.env.IDA_BASE_URI}/find-pre-register-lists`,
      { 
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Accept: 'application/json',
        },
      },
    );
  } catch (err) {
    console.log([err]);
  }

  setLoading(false);
  setLists(listsResponse.data.data.pre_register_lists);
};
