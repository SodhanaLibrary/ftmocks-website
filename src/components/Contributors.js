import React, { useEffect, useState } from 'react';
import { Avatar, Card, CardContent, CircularProgress, Grid, Typography, Container, Divider, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Contributors = ({ repoOwner, repoName }) => {
  const [contributors, setContributors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch contributors from GitHub API
    fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/contributors`)
      .then(response => response.json())
      .then(data => {
        setContributors(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching contributors:", error);
        setLoading(false);
      });
  }, [repoOwner, repoName]);

  const onClickCard = (user) => {
    window.location.href = `https://github.com/${user}`
  };

  return (
    <Container sx={{ p: 1 }}>
      <Typography variant="h4" gutterBottom align="left">
        {repoName}
      </Typography>

      <Box sx={{mb: 2}}>
        {loading ? (
          <CircularProgress />
        ) : (
          <Grid container spacing={3}>
            {contributors.map(contributor => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={contributor.id}>
                  <Card sx={{cursor:'pointer'}} onClick={() => onClickCard(contributor.login)}>
                    <CardContent sx={{ textAlign: 'center' }}>
                      <Avatar src={contributor.avatar_url} alt={contributor.login} sx={{ width: 60, height: 60, margin: 'auto' }} />
                      <Typography variant="h6" gutterBottom>
                        {contributor.login}
                      </Typography>
                      <Typography
                      data-testid = "navigate-contribution-btn"
                      color="textSecondary">
                        Contributions: {contributor.contributions}
                      </Typography>
                    </CardContent>
                  </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
      <Divider />
    </Container>
  );
};

export default Contributors;
