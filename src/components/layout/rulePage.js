import React, { useState, useEffect } from "react";
import DOMPurify from "dompurify";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import "prismjs/components/prism-json"; // JSON support
import "prismjs/components/prism-javascript";
import {
  Container,
  Grid,
  Paper,
  Typography,
  IconButton,
  Chip,
  Box,
  Tooltip,
  Fab,
  Divider,
} from "@mui/material";
import {
  ContentPaste as ContentPasteIcon,
  ThumbUpAlt as ThumbUpAltIcon,
  ThumbDownAlt as ThumbDownAltIcon,
  TagFaces as TagFacesIcon,
  AccessibleTwoTone as AccessibleTwoToneIcon,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import SimpleBreadcrumbs from "../util/BreadCrumb";

function ModernItemPage({ ruleData }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(`{
      "shortTextMarkdown": "New rule updated",
      "bodyMarkdown": "**${ruleData.name}** detection has been updated and may affect the number of issues found in your audit.",
      "ctaLink": "rules/${ruleData._id.$oid}"
    }`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    Prism.highlightAll(); // Apply Prism.js syntax highlighting after component renders
  }, [ruleData]);

  if (!ruleData) {
    return (
      <Container sx={{ mt: 4 }}>
        <Typography variant="h6" textAlign="center" color="text.secondary">
          No item found
        </Typography>
      </Container>
    );
  }

  // Sanitize the HTML content for the Issue Resolution section
  const sanitizedHtml = DOMPurify.sanitize(ruleData.issueResolution);

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Paper elevation={6} sx={{ p: 6, borderRadius: 3 }}>
        <Box mb={3}>
          <SimpleBreadcrumbs />
        </Box>

        <Grid container spacing={3} alignItems="center">
          <Grid item xs={10}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              {ruleData.name}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {ruleData.shortDescription}
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3 }} />

        <Typography variant="body1" sx={{ mb: 2 }}>
          {ruleData.issueDescription}
        </Typography>

        <Box mt={2}>
          <Chip
            icon={<TagFacesIcon />}
            label={ruleData.criteria}
            variant="outlined"
            color="warning"
            sx={{ mr: 1 }}
          />
          <Chip
            icon={<AccessibleTwoToneIcon />}
            label={`WCAG: ${ruleData.WCAGLevel}`}
            variant="outlined"
            color="primary"
          />
        </Box>

        {/* Issue Resolution Section */}
        <Box
          mt={4}
          p={3}
          sx={{
            bgcolor: "grey.100",
            borderRadius: 2,
            boxShadow: 2,
            fontSize: "0.9rem",
            whiteSpace: "pre-wrap",
            fontFamily: "monospace",
          }}
        >
          <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 2 }}>
            Issue Resolution:
          </Typography>
          <pre>
            <code
              className="language-html"
              dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
            />
          </pre>
        </Box>

        <Box mt={4} display="flex" justifyContent="center" gap={3}>
          <Link
            to={`/${ruleData.criteria}/${ruleData.route}_success`}
            style={{ textDecoration: "none" }}
          >
            <Fab
              color="success"
              variant="extended"
              sx={{
                px: 4,
                boxShadow: 3,
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "success.dark",
                },
              }}
            >
              <ThumbUpAltIcon sx={{ mr: 1 }} />
              Success
            </Fab>
          </Link>
          <Link
            to={`/${ruleData.criteria}/${ruleData.route}_failure`}
            style={{ textDecoration: "none" }}
          >
            <Fab
              color="error"
              variant="extended"
              sx={{
                px: 4,
                boxShadow: 3,
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "error.dark",
                },
              }}
            >
              <ThumbDownAltIcon sx={{ mr: 1 }} />
              Failures
            </Fab>
          </Link>
        </Box>

        {/* Rule Release JSON Section */}
        <Box
          mt={4}
          p={3}
          sx={{
            bgcolor: "background.default",
            borderRadius: 2,
            position: "relative",
            border: "1px solid",
            borderColor: "grey.300",
          }}
        >
          <Typography variant="subtitle2" color="text.secondary">
            Rule Release JSON:
          </Typography>
          <pre>
            <code className="language-json">
              {`{
  "shortTextMarkdown": "New rule updated",
  "bodyMarkdown": "**${ruleData.name}** detection has been updated and may affect the number of issues found in your audit.",
  "ctaLink": "rules/${ruleData._id.$oid}"
}`}
            </code>
          </pre>
          <Tooltip title={copied ? "Copied!" : "Copy to clipboard"} arrow>
            <IconButton
              onClick={handleCopy}
              sx={{ position: "absolute", top: 8, right: 8 }}
            >
              <ContentPasteIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Paper>
    </Container>
  );
}

export default ModernItemPage;