import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Add from '@material-ui/icons/Add';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';
import getData from '../actions/getData';

const key = process.env.ALVA_API_KEY;

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

/*
 * Contains the UI and behaviour relating to retrieving user input and then dispatching
 * to the store.
 */
class AddCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dialogOpen: false,
      ticker: '',
    };
  }

  /*
   * Creates a timestamp and then dispatches the API key, the user inputted stock ticker
   * and a formatted timestamp.
   */
  handleDone = async () => {
    const stockTimeOfPurchase = new Date();
    const { ticker } = this.state;
    const { dispatch } = this.props;

    /*
     * For testing purposes. Backdates the timestamp three days, simulating elapsed time.
     */
    stockTimeOfPurchase.setHours(stockTimeOfPurchase.getHours() - 72);

    dispatch(getData(key, ticker, stockTimeOfPurchase));

    /*
     * Reset the inputs.
     */
    this.setState({ dialogOpen: false, ticker: '' });
  };

  /*
   * Changes the state of the dialog box from hidden to visible.
   */
  handleClickOpen = () => {
    this.setState({ dialogOpen: true, ticker: '' });
  };

  /*
   * Changes the state of the dialog box from visible to hidden.
   */
  handleClose = () => {
    this.setState({ dialogOpen: false, ticker: '' });
  };

  /*
   * Sets the component's ticker state to the user input.
   */
  handleInput = (e) => {
    this.setState({
      ticker: e.target.value,
    });
  };

  render() {
    const { classes } = this.props;
    const { dialogOpen } = this.state;
    const { ticker } = this.state;
    return (
      <div className={classes.root}>
        <AppBar position="static" style={{ backgroundColor: '#2196f3' }}>
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
                  Paper Trader
            </Typography>
            <IconButton color="inherit" onClick={this.handleClickOpen}>
              <Add />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Dialog
          open={dialogOpen}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>
                    Which stock do you want to follow?
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Stock Ticker"
              type="text"
              fullWidth
              value={ticker}
              onChange={this.handleInput}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
                    Cancel
            </Button>
            <Button onClick={this.handleDone} color="primary">
                    Done
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

AddCard.propTypes = {
  dispatch: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default connect()(withStyles(styles)(AddCard));
