import { Button, withStyles } from '@material-ui/core';

export const GreenButton = withStyles({
    root: {
        background: 'limegreen',
    '&:hover': {
        background: '#f19300',
    },
}
})(Button);

export const OrangeButton = withStyles({
    root: {
        background: '#f19300',
    '&:hover': {
        background: '#282c34',
    },
  }
  })(Button);

export const FixedGreenButton = withStyles({
    root: {
        background: 'limegreen',
        position: 'fixed',
    '&:hover': {
        background: '#f19300',
    },
}
})(Button);

