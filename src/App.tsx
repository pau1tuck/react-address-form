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
import CountryDropdown from "./lib/components/CountryDropdown";

function App(): JSX.Element {
    return (
        <Box marginTop={2}>
            <Container maxWidth="xs">
                <Paper elevation={3}>
                    <Box height="100%" padding={2}>
                        <Box textAlign="center">
                            <Typography component="h1" variant="h5">
                                React Address Form
                            </Typography>
                            <hr />
                            <CountryDropdown />
                        </Box>
                    </Box>
                </Paper>
            </Container>
        </Box>
    );
}

export default App;
