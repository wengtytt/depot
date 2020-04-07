import React from 'react';
import './Quote.scss';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backdropFilter: 'blur(20px)',
        backgroundColor: 'rgba(0,0,0, 0.6)',
    },
    paper: {
        position: 'absolute',
        width: '60%',
        outline: 'none',
        // border: '2px solid #000',
        padding: '1rem',
    },
    container: {
        maxWidth: '730px',
        padding: '30px',
        display: 'flex',
        flexDirection: 'row',
        boxShadow: '0px 0px 20px #666',
        fontSize: '14px',
        margin: '0 auto',
        background: '#fff',
        borderRadius: '3px',
    },
}));

const Quote = (props) => {
    const classes = useStyles();

    // const [modalStyle] = React.useState({
    //     top:
    // });

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const trigger = React.cloneElement(props.children, { onClick: handleOpen });

    return (
        <div>
            {trigger}
            <Modal
                className={classes.modal}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
                <div className={classes.paper}>
                    <div className={classes.container}>Test</div>
                </div>
            </Modal>
        </div>
    );
};

export default Quote;
