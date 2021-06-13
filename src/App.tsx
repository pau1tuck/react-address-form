import React from "react";
import "./App.css";
import {
    Avatar,
    Box,
    Container,
    Button,
    Grid,
    Link,
    Paper,
    TextField,
    Typography,
    Zoom,
} from "@material-ui/core";

function App(): JSX.Element {
    return (
        <div>
            <Container component="main" maxWidth="xs">
                <Paper elevation={3}>
                    <Box height="100%" padding={2}>
                        <Box textAlign="center">
                            <Typography component="h1" variant="h5">
                                React Address Form
                            </Typography>
                        </Box>
                    </Box>
                </Paper>
            </Container>
        </div>
    );
}

export default App;
