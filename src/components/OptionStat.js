import React from 'react'
import { LinearProgress } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));
function OptionStat(props) {
    const { text, count, total, yourChoice } = props.option
    const classes = useStyles();

    return (
        <div className='option'>
            <div>
                <div>{text}</div>
                <div>It's {yourChoice ? '' : 'not'} your choice</div>
                <div className={classes.root}>
                    <LinearProgress variant='determinate' value={100 * count / total}></LinearProgress>
                    {`${count} out of ${total} votes!`}
                </div>
            </div>

        </div>
    )
}

export default OptionStat