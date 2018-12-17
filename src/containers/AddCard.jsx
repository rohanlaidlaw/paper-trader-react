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
import addCard from '../actions/actions';
import getData from '../utils/stockcharts';

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

class AddCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dialogOpen: false,
      ticker: '',
    };
  }

    handleDone = async () => {
      const stockTimeOfPurchase = new Date();
      const ticker = this.state.ticker;
      stockTimeOfPurchase.setHours(stockTimeOfPurchase.getHours() - 72);

      getData(key, ticker, stockTimeOfPurchase).then((data) => {
        const perchange = parseInt(((parseFloat(data[data.length - 1].close) - parseFloat(data[0].close)) / parseFloat(data[0].close)) * 100);
        this.props.dispatch(addCard(data, ticker, perchange));
      });

      this.setState({ dialogOpen: false, ticker: '' });
    };

    handleClickOpen = () => {
      this.setState({ dialogOpen: true, ticker: '' });
    };

    handleClose = () => {
      this.setState({ dialogOpen: false, ticker: '' });
    };

    handleInput = (e) => {
      this.setState({
        ticker: e.target.value,
      });
    };

    render() {
      const { classes } = this.props;
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
            open={this.state.dialogOpen}
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
                value={this.state.ticker}
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
};

export default connect()(withStyles(styles)(AddCard));
