import './index.scss'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import decimg from '../../assets/images/decimg.png'
import Mksite from '../../assets/images/mksite.png'
import MyLogo from '../../assets/images/main-logo-site.png'
import ltbImg from "../../assets/images/Screenshot 2025-01-03 092120.png"
import skillImg from "../../assets/images/Screenshot 2025-01-03 104820.png"
import primedImg from "../../assets/images/Screenshot 2025-01-03 110028.png"

import Typography from '@mui/material/Typography'
import Loader from 'react-loaders'

const Portfolio = () => {
  const openSite = (link) => {
    window.open(link, '_blank') // Opens GitHub in a new tab
  }

  return (
    <>
      <div className="card-container">
        <div className="mt">
          <div className="about-box">Portfolio / My projects</div>
        </div>
        <div className="card-row-1">
          <div className="card-element">
            <div className="single-card">
              <Card
                sx={{
                  maxWidth: 345,
                  backgroundColor: '#F8F4E3',
                  borderRadius: '1em',
                  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)', // Box shadow effect
                  '&:hover': {
                    boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.3)', // Larger shadow on hover
                  },
                  transition: 'box-shadow 0.3s ease', // Smooth transition for shadow
                }}
              >
                <CardMedia
                  sx={{ height: 140 }}
                  image={decimg}
                  title=""
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    <div className="card-title-text">My School's DECA Chapter Site</div>
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    <div className="card-text">
                      I developed a website for my school's DECA chapter. I used HTML, CSS, and Bootstrap 5 for responsive web design.
                    </div>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    sx={{
                      backgroundColor: '#181818',
                      '&:hover': {
                        backgroundColor: '#333', // Change color on hover
                      },
                      '&:active': {
                        transform: 'scale(0.95)', // Scale down the button on click
                        backgroundColor: '#444', // Optional: Change color on click
                      },
                      transition:
                        'transform 0.1s ease, background-color 0.2s ease', // Smooth transition
                    }}
                    onClick={() => openSite('https://md-software-solutions.github.io/deca-site/')}
                  >
                    <div className="card-btn-text">Open it!</div>
                  </Button>
                </CardActions>
              </Card>
            </div>

            <div className="single-card">
              <Card
                sx={{
                  maxWidth: 345,
                  backgroundColor: '#F8F4E3',
                  borderRadius: '1em',
                  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)', // Box shadow effect
                  '&:hover': {
                    boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.3)', // Larger shadow on hover
                  },
                  transition: 'box-shadow 0.3s ease', // Smooth transition for shadow
                }}
              >
                <CardMedia
                  sx={{ height: 140 }}
                  image={ltbImg}
                  title=""
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    <div className="card-title-text">Learn To Be Tutor Resources</div>
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    <div className="card-text">
                      A web scraper I built to help tutors, including myself, access key resources more efficiently on the Learn To Be platform, which supports tutoring for developmentally challenged and typical students. Built using React JS for frontend and Node Js for backend.
                    </div>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    sx={{
                      backgroundColor: '#181818',
                      '&:hover': {
                        backgroundColor: '#333', // Change color on hover
                      },
                      '&:active': {
                        transform: 'scale(0.95)', // Scale down the button on click
                        backgroundColor: '#444', // Optional: Change color on click
                      },
                      transition:
                        'transform 0.1s ease, background-color 0.2s ease', // Smooth transition
                    }}
                    onClick={() => openSite('https://md-software-solutions.github.io/LearnToBeTutorResources/')}
                  >
                    <div className="card-btn-text">See it!</div>
                  </Button>
                </CardActions>
              </Card>
            </div>

            
        </div>

          <div className="card-element">
            

            <div className="single-card">
              <Card
                sx={{
                  maxWidth: 345,
                  backgroundColor: '#F8F4E3',
                  borderRadius: '1em',
                }}
              >
                <CardMedia
                  sx={{ height: 140 }}
                  image={Mksite}
                  title=""
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    <div className="card-title-text">
                      Marketing Department Website at my school
                    </div>
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    <div className="card-text">
                      I worked with a team of students to design and develop a website for my highschool's marketing program. This website is a requirement for, and will help, to get our program industry certified. This is a work in progress.
                    </div>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    sx={{
                      backgroundColor: '#181818',
                      '&:hover': {
                        backgroundColor: '#333', // Change color on hover
                      },
                      '&:active': {
                        transform: 'scale(0.95)', // Scale down the button on click
                        backgroundColor: '#444', 
                      },
                      transition:
                        'transform 0.1s ease, background-color 0.2s ease', // Smooth transition
                    }}


                    onClick={() => openSite('https://md-software-solutions.github.io/marketing-department-certification-site/')}
                  >
                    <div className="card-btn-text">See it here!</div>
                  </Button>
                </CardActions>
              </Card>
            </div>

            <div className="single-card">
              <Card
                sx={{
                  maxWidth: 345,
                  backgroundColor: '#F8F4E3',
                  borderRadius: '1em',
                }}
              >
                <CardMedia
                  sx={{ height: 140 }}
                  image={skillImg}
                  title=""
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    <div className="card-title-text">
                      SkillBridge - FBLA Presentation
                    </div>
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    <div className="card-text">
                      I worked with a partner to build this website using React, and Node JS. This was for a presentation in our FBLA (Future Business Leaders of America) state competition. It is a work in progress.
                    </div>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    sx={{
                      backgroundColor: '#181818',
                      '&:hover': {
                        backgroundColor: '#333', // Change color on hover
                      },
                      '&:active': {
                        transform: 'scale(0.95)', // Scale down the button on click
                        backgroundColor: '#444', 
                      },
                      transition:
                        'transform 0.1s ease, background-color 0.2s ease', // Smooth transition
                    }}


                    onClick={() => openSite('https://md-software-solutions.github.io/SkillBridge-website/')}
                  >
                    <div className="card-btn-text">See it here!</div>
                  </Button>
                </CardActions>
              </Card>
            </div>


          </div>

          <div className="card-element">
            <div className="single-card">
              <Card
                sx={{
                  maxWidth: 345,
                  backgroundColor: '#F8F4E3',
                  borderRadius: '1em',
                }}
              >
                <CardMedia
                  sx={{ height: 140 }}
                  image={MyLogo}
                  title=""
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    <div className="card-title-text">This website!</div>
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    <div className="card-text">
                      View my source code! I used React JS, NPM modules, and CSS
                      to build this!
                    </div>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    sx={{
                      backgroundColor: '#181818',
                      '&:hover': {
                        backgroundColor: '#333', // Change color on hover
                      },
                      '&:active': {
                        transform: 'scale(0.95)', // Scale down the button on click
                        backgroundColor: '#444', // Optional: Change color on click
                      },
                      transition:
                        'transform 0.1s ease, background-color 0.2s ease', // Smooth transition
                    }}

                    onClick={() => openSite('https://github.com/MD-Software-Solutions/Portfolio/tree/master')}
                  >
                    <div className="card-btn-text">See it on my Github!</div>
                  </Button>
                </CardActions>
              </Card>
            </div>

            <div className="single-card">
              <Card
                sx={{
                  maxWidth: 345,
                  backgroundColor: '#F8F4E3',
                  borderRadius: '1em',
                }}
              >
                <CardMedia
                  sx={{ height: 140 }}
                  image={primedImg}
                  title=""
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    <div className="card-title-text">Primed Community - Non-profit internship</div>
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    <div className="card-text">
                      I built this as part of an internship through United Planet. It hosts a spanish to english curriculum. This site will serve teachers overseas in Colombia who are teaching locals English in an effort to prop up the tourism industry by helping locals better communicate with tourists.
                    </div>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    sx={{
                      backgroundColor: '#181818',
                      '&:hover': {
                        backgroundColor: '#333', // Change color on hover
                      },
                      '&:active': {
                        transform: 'scale(0.95)', // Scale down the button on click
                        backgroundColor: '#444', // Optional: Change color on click
                      },
                      transition:
                        'transform 0.1s ease, background-color 0.2s ease', // Smooth transition
                    }}

                    onClick={() => openSite('https://primed-community.github.io/EnglishLessonsForChildren/')}
                  >
                    <div className="card-btn-text">Open it!</div>
                  </Button>
                </CardActions>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Portfolio
