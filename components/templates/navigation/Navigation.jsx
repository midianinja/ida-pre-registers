import React, { useEffect } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { allowBodyScroll, blockBodyScroll } from '../../../utils/scroll';
import {
  ModalWrapper, Modal, NavigationItem, NavigationWrapper,
} from './navigation.style';

const Navigation = ({ open, onClose }) => {
  useEffect(() => {
    if (open) blockBodyScroll();
    else allowBodyScroll();
  }, [open]);

  return (
    <ModalWrapper open={open} onClick={onClose}>
      <Modal onClick={(e) => { e.stopPropagation(); }}>
        <NavigationWrapper>
          <NavigationItem onClick={onClose}>
            <Link activeClassName="active" href="/lists">
              <a>Listas</a>
            </Link>
          </NavigationItem>
          <NavigationItem>
            <Link activeClassName="active" href="/">
              <a>Adicionar Lista</a>
            </Link>
          </NavigationItem>
        </NavigationWrapper>
      </Modal>
    </ModalWrapper>
  );
};

Navigation.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Navigation;
