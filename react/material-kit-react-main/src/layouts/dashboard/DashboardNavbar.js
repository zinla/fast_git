import { Icon } from '@iconify/react';
import menu2Fill from '@iconify/icons-eva/menu-2-fill';

import { alpha, experimentalStyled as styled } from '@material-ui/core/styles';
import { Box, Stack, AppBar, Toolbar, IconButton } from '@material-ui/core';

import PropTypes from 'prop-types';

import { MHidden } from '../../components/@material-extend';

import AccountPopover from './AccountPopover';
import LanguagePopover from './LanguagePopover';
import NotificationsPopover from './NotificationsPopover';
import Searchbar from './Searchbar';

// ----------------------------------------------------------------------

const DRAWER_WIDTH = 280;
const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 92;

// ----------------------------------------------------------------------

DashboardNavbar.propTypes = {
  onOpenSidebar: PropTypes.func
};

export default function DashboardNavbar({ onOpenSidebar }) {
  return (
    <div>
      <div>151</div>
    </div>
  );
}
