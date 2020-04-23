import React from 'react';
import PropTypes from 'prop-types';
import {
  PaginationWrapper, TextButton, PageIndicationSelectWrapper, PageIndiction,
  DropdownIcon,
} from './pagination.style'

const Pagination = ({
  pageNumber, onPrevClick, onNextClick, end,
  begin,
}) => (
  <PaginationWrapper>
    <TextButton hide={begin} onClick={onPrevClick}>Anterior</TextButton>
    <PageIndicationSelectWrapper>
      <PageIndiction>
        {pageNumber}
        <DropdownIcon src="/static/icons/white-dropdown.svg" />
      </PageIndiction>
    </PageIndicationSelectWrapper>
    <TextButton hide={end} onClick={onNextClick}>Próxima</TextButton>
  </PaginationWrapper>
);

Pagination.propTypes = {
  pageNumber: PropTypes.number.isRequired,
  onNextClick: PropTypes.func.isRequired,
  onPrevClick: PropTypes.func.isRequired,
  end: PropTypes.bool.isRequired,
  begin: PropTypes.bool.isRequired,
};

export default Pagination;
