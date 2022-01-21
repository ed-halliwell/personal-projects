import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import StarIcon from "@mui/icons-material/Star";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import projects from "./utils/projects.json";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Ed Halliwell
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <StarIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Ed's Personal Projects
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="md">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Personal Project Library
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Somewhere to keep useful links to GitHub repos and Netlify sites.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="outlined" href="https://github.com/ed-halliwell">
                GitHub
              </Button>
              <Button
                variant="outlined"
                href="https://www.linkedin.com/in/edhalliwell/"
              >
                LinkedIn
              </Button>
              <Button variant="outlined" href="https://medium.com/@edhalliwell">
                Medium
              </Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="lg">
          {/* End hero unit */}
          <Grid container spacing={3}>
            {projects.map((project) => (
              <Grid item key={project.id} xs={12} sm={6} md={6}>
                <Card>
                  <Box
                    sx={{
                      height: "100%",
                      display: "flex",
                    }}
                  >
                    <CardContent sx={{ flex: "1 0 0" }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {project.name}
                      </Typography>
                      <Typography
                        variant="caption"
                        display="block"
                        gutterBottom
                      >
                        {project.dateCreated}
                      </Typography>
                      <Typography>{project.description}</Typography>
                    </CardContent>
                    <CardMedia
                      component="img"
                      sx={{
                        width: 180,
                        height: 120,
                        border: 1,
                        borderColor: "text.secondary",
                        borderRadius: 2,
                      }}
                      image={project.image}
                      alt={project.name}
                    />
                  </Box>
                  <Box pt={1}>
                    <Divider variant="middle" />

                    <CardActions>
                      <Button
                        size="small"
                        target="_blank"
                        href={project.githubLink}
                      >
                        GitHub
                      </Button>
                      <Button
                        size="small"
                        target="_blank"
                        href={project.siteLink}
                      >
                        Live Site
                      </Button>
                    </CardActions>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          LinkedIn | Twitter
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
