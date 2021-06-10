import React, { useState } from 'react';
import './SidebarOption.css';
import { useHistory, Link } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { useParams, Route } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Form } from 'react-bootstrap';
import {FiUserPlus} from 'react-icons/fi';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import './add-to-channel.css';

import Switch from '@material-ui/core/Switch';

  

function AddUser() {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  

//   const adduser = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

  const { roomId } = useParams();
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });



  const adduser = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };




return (
    <div>
        <span 
        className="chat_button--calls" 
        aria-controls="question-menu"
        aria-haspopup="true"
        onClick={adduser}
        >
              <div className="d-flex">
              <div 
            >
        <a><PersonAddOutlinedIcon /></a> 
        </div>
        </div>
            </span>
        <Form>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
                className="addUserChannel" 
                // anchorEl={anchorEl}
                // keepMounted
                // open={Boolean(anchorEl)}
            >
                <DialogTitle id="form-dialog-title">Add people</DialogTitle>
                <DialogContent>
                <FormControl component="fieldset">
                    <RadioGroup aria-label="quiz" name="quiz" >
                        <FormControlLabel value="best" control={<Radio />} label='Add all users to'/>
                        <FormControlLabel value="worst" control={<Radio />} label="The worst." />
                    </RadioGroup>
                    {/* <FormHelperText>{helperText}</FormHelperText> */}
                    {/* <Button type="submit" variant="outlined" color="primary" className={classes.button}>
                    Check Answer
                    </Button> */}
                </FormControl>
                <DialogContentText>
                
                </DialogContentText>
                    <TextField 
                    
                    name="channel"
                    autoFocus
                    margin="dense"
                    id="outlined-basic"
                    // label="Enter a Channel"
                    placeholder="Search by name or email"
                    type="text"
                    fullWidth 
                    variant="outlined" 
                    required
                    //   value={channel}
                    //   onChange={(e) => setChannel(e.target.value)}
                    />

                {/* <FormControlLabel
                        control={<Switch checked={state.checkedA} onChange={handleChange} name="checkedA" />}
                        label="Secondary"
                    /> */}
                    <FormControlLabel
                        control={
                        <Switch
                            checked={state.checkedB}
                            onChange={handleChange}
                            name="checkedB"
                            color="primary"
                        />
                        }
                        label="Automatically add anyone who joins"
                    />
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button color="primary">
                    Add
                </Button>
                </DialogActions>
            </Dialog>
            </Form>
            
              

        
      </div>
    )
}
export default AddUser;

