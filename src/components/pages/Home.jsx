import React, { useEffect } from "react";
import { Container, Grid, Paper, Typography, Divider, Fab, Box, Stack, Button } from "@mui/material";
import { Link } from "react-router-dom";
import GavelTwoToneIcon from "@mui/icons-material/GavelTwoTone";
import VerifiedUserTwoToneIcon from "@mui/icons-material/VerifiedUserTwoTone";

export default function Home({ title }) {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <Container maxWidth="md" sx={{ mt: 6, mb: 6 }}>
      <Grid container spacing={4}>
        {/* Title Section */}
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 3, textAlign: "center", borderRadius: 2 }}>
            <Typography variant="h5" sx={{ fontWeight: 500 }}>
              AccessFlow Auditor Rules
            </Typography>
          </Paper>
        </Grid>

        {/* Use Cases Section */}
        <Grid item xs={12}>
          <Paper elevation={0} sx={{ p: 3, borderRadius: 2, border: "1px solid #ddd" }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 500 }}>
              Use Cases
            </Typography>
            <Divider sx={{ mb: 2, borderColor: "#ddd" }} />
            <Typography variant="body1" component="div" sx={{ pl: 1.5 }}>
              <ul style={{ margin: 0, paddingLeft: "1.5rem", lineHeight: 1.7 }}>
                <li>Testing the AccessFlow Auditor</li>
                <li>Verifying Rule Success & Failure Criteria</li>
                <li>Ensuring Scanner Issue Consistency</li>
              </ul>
            </Typography>
          </Paper>
        </Grid>

        {/* Useful Tools Section */}
        <Grid item xs={12}>
          <Paper elevation={0} sx={{ p: 3, borderRadius: 2, border: "1px solid #ddd" }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 500 }}>
              Useful Tools
            </Typography>
            <Divider sx={{ mb: 2, borderColor: "#ddd" }} />
            <Box display="flex" justifyContent="center" gap={3} mt={2}>
              <Link to="/audit-rules/rules" style={{ textDecoration: "none" }}>
                <Button variant="outlined" color="primary" startIcon={<GavelTwoToneIcon />} sx={{ px: 3 }}>
                  Rules List
                </Button>
              </Link>
              <Button variant="outlined" color="secondary" startIcon={<VerifiedUserTwoToneIcon />} sx={{ px: 3 }}>
                Auditor
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
