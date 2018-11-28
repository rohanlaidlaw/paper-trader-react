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

import addCard from '../actions/actions';
import getData from '../utils/stockcharts';

const key = process.env.ALVA_API_KEY;

class AddCard extends React.Component {
    state = {
      dialogOpen: false,
      ticker: '',
    };


    handleDone = async () => {
      const stockTimeOfPurchase = new Date();
      stockTimeOfPurchase.setHours(stockTimeOfPurchase.getHours() - 72);

      console.log(stockTimeOfPurchase);


      getData(key, this.state.ticker, stockTimeOfPurchase).then((data) => {
        console.log(data);
        this.props.dispatch(addCard(data));
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
      return (
        <div>
          <AppBar position="static">
            <Toolbar>
              <IconButton>
                <MenuIcon />
              </IconButton>
              <Typography variant="title" color="inherit">
                    Paper Trader
              </Typography>
              <IconButton onClick={this.handleClickOpen}>
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

export default connect()(AddCard);
