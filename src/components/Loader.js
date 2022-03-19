import React from 'react';
import '../App.css'
import {Box, Container, Grid, Typography} from "@mui/material";

const Loader = () => {
    return (
        <Container>
            <Grid container
                  style={{height: window.innerHeight - 50}}
                  alignItems={"center"}
                  justifyContent={"center"}
            >
                <Grid
                    container
                    alignItems={"center"}
                    direction={"column"}
                >
                    <Box>
                        <div className="lds-hourglass"></div>
                        <Typography variant={'h5'}>loading...</Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Loader;