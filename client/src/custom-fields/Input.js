import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
    titleStyle: {
        resize: 'none',
        // background: 'white',
        margin: '5px 0',
        borderRadius: '5px'

    },

})

function Input(props) {
    const classes = useStyles();
    const { field, label, placeholder } = props;
    const { name, value, onChange, onBlur } = field;
    return (
        <TextField
            id="outlined-multiline-static"
            label={label}
            // fullWidth
            placeholder={placeholder}
            className={classes.titleStyle}
            variant="outlined"
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            name={name}
        />
    );
}

export default Input;