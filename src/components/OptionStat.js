import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ProgressBar from 'react-bootstrap/ProgressBar';
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        }
    }
}));
function OptionStat(props) {
    const { text, count, total, yourChoice } = props.option
    const classes = useStyles();
    const v = 100 * count / total
    return (
        <div className='option' className={yourChoice?'notification':'' }>
            <div >
                <span>{text}</span>
                {yourChoice ? <span className='badge'> your vote</span> : ''}
            </div>
            <div className={classes.root}>
                <ProgressBar now={v} label={`${v.toFixed(2)}\%`} />
                {`${count} out of ${total} votes!`}
            </div>


        </div>
    )
}

export default OptionStat