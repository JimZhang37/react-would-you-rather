import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ProgressBar from 'react-bootstrap/ProgressBar';
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
    yourChoice:{
        width:'100%',
        border:'1px solid #dad7d7;',
        background: 'yellow'


    },
    notYourChoice:{

    }
}));
function OptionStat(props) {
    const { text, count, total, yourChoice } = props.option
    const classes = useStyles();
    const v =100* count/total
    return (
        <div className='option'>
            <div className={yourChoice?classes.yourChoice:classes.notYourChoice}>
                <div>{text}</div>
                <div>It's {yourChoice ? '' : 'not'} your choice</div>
                <div className={classes.root}>
                    <ProgressBar now={v} label={`${v}%`} />
                    {`${count} out of ${total} votes!`}
                </div>
            </div>

        </div>
    )
}

export default OptionStat