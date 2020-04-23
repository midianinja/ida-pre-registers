import React from 'react';
import PropTypes from 'prop-types';
import {
  Content, Title, Description, Form,
  ErrorText, InputGroup,
} from './registerList.style';
import Button from '../../atoms/button/Button';
import InputFile from '../../atoms/input-file/InputFile';
import Select from '../../atoms/select/Select';
import categories from '../../../collections/categories';

const RegisterList = ({
  csv, category, onCSVChange, onCategoryChange,
  loading, onSubmit, error,
}) => (
  <Content>
    <Title>Adicionar nova lista de inscrições</Title>
    <Description>
      Escolha uma categoria e selecione o arquivo .csv para cadastrar uma nova lista
    </Description>
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <Select
        value={category}
        options={categories}
        placeholder="Categoria"
        onSelect={onCategoryChange}
      />
      <InputGroup>
        <InputFile
          id="file"
          value={csv}
          onChange={onCSVChange}
          placeholder="Subir arquivo .csv"
          accept={['.csv']}
        />
        { error.csv ? <ErrorText>{error.csv}</ErrorText> : null}
      </InputGroup>
      <Button
        disabled={!csv || !category}
        type="submit"
        loading={loading}
        customStyle={`
          grid-column: 1/3;
        `}
      >
        Confirmar
      </Button>
    </Form>
  </Content>
);

RegisterList.defaultProps = {
  category: null,
  error: {},
};

RegisterList.propTypes = {
  loading: PropTypes.bool.isRequired,
  csv: PropTypes.string.isRequired,
  category: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }),
  error: PropTypes.shape({
    csv: PropTypes.string,
  }),
  onCSVChange: PropTypes.func.isRequired,
  onCategoryChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default RegisterList;
