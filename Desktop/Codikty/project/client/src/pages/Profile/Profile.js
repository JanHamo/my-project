import PhotoCamera from '@mui/icons-material/PhotoCamera';
import {
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  TextField,
  Typography,
} from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Profile.module.css';

function Profile() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [username, setUsername] = useState('John Doe');
  const [alias, setAlias] = useState('User123');
  const [displayName, setDisplayName] = useState(username);
  const [profileImage, setProfileImage] = useState('');
  const [backgroundImage, setBackgroundImage] = useState('');
  const [idDocument, setIdDocument] = useState(null);
  const [userId, setUserId] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      setUserId(storedUserId);
    } else {
      // توجيه المستخدم إلى صفحة تسجيل الدخول إذا لم يتم العثور على userId
      navigate('/login');
    }
  }, [navigate]);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (name) => {
    setDisplayName(name);
    setAnchorEl(null);
  };

  const handleImageUpload = async (file, setImage, userId, imageType) => {
    const formData = new FormData();
    formData.append('image', file);
    formData.append('userId', userId);
    formData.append('imageType', imageType);

    try {
      const response = await axios.post(
        'http://localhost:3001/upload',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );

      const imageUrl = response.data[imageType].large;
      console.log('Image uploaded and URL received:', imageUrl);
      setImage(imageUrl);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  const handleProfileImageChange = (event) => {
    const file = event.target.files[0];
    handleImageUpload(file, setProfileImage, userId, 'profileImage');
  };

  const handleBackgroundImageChange = (event) => {
    const file = event.target.files[0];
    handleImageUpload(file, setBackgroundImage, userId, 'backgroundImage');
  };

  const handleDocumentChange = (event) => {
    setIdDocument(event.target.files[0]);
  };

  const handleSave = async () => {
    if (idDocument) {
      const formData = new FormData();
      formData.append('document', idDocument);

      try {
        const response = await axios.post(
          'http://localhost:3001/verify-document',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          },
        );

        if (response.data.verified) {
          await axios.post('http://localhost:3001/update-username', {
            userId,
            username,
          });
          console.log('Username updated successfully');
        } else {
          console.log('Document verification failed');
        }
      } catch (error) {
        console.error('Error verifying document:', error);
      }
    }
  };

  return (
    <Container className={styles.profile} maxWidth="md">
      <Box
        className={styles.backgroundImage}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
        }}
      >
        <IconButton
          color="primary"
          component="label"
          className={styles.cameraIconBackground}
        >
          <PhotoCamera />
          <input
            hidden
            accept="image/*"
            type="file"
            onChange={handleBackgroundImageChange}
          />
        </IconButton>
      </Box>
      <Box className={styles.profileHeader}>
        <Box className={styles.profileImageContainer}>
          {profileImage ? (
            <img
              src={profileImage}
              alt="Profile"
              className={styles.profileImage}
            />
          ) : (
            <div className={styles.emptyProfileImage}></div>
          )}
          <IconButton
            color="primary"
            component="label"
            className={styles.cameraIconProfile}
          >
            <PhotoCamera />
            <input
              hidden
              accept="image/*"
              type="file"
              onChange={handleProfileImageChange}
            />
          </IconButton>
        </Box>
        <Box className={styles.profileNameContainer}>
          <Typography
            variant="h6"
            component="div"
            className={styles.profileName}
            onClick={handleMenuOpen}
          >
            {displayName}
            <span className={styles.arrowIcon}>&#9660;</span>
          </Typography>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={() => handleMenuClose(displayName)}
          >
            <MenuItem onClick={() => handleMenuClose(username)}>
              {username}
            </MenuItem>
            <MenuItem onClick={() => handleMenuClose(alias)}>{alias}</MenuItem>
          </Menu>
        </Box>
      </Box>
      <Box className={styles.card} p={3}>
        <Typography variant="h4" component="h1" gutterBottom>
          Profile Information
        </Typography>
        <TextField
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Alias"
          value={alias}
          onChange={(e) => setAlias(e.target.value)}
          fullWidth
          margin="normal"
        />
        <input
          accept="image/*,application/pdf"
          type="file"
          onChange={handleDocumentChange}
        />
        <Button variant="contained" color="primary" onClick={handleSave}>
          Save
        </Button>
        <Typography variant="body1" style={{ marginTop: '20px' }}>
          Name: {displayName}
        </Typography>
        <Typography variant="body1">Email: john.doe@example.com</Typography>
        <Typography variant="body1">Joined: January 1, 2023</Typography>
        <Link to="/edit-profile" className={styles.editProfileButton}>
          EDIT PROFILE
        </Link>
        <Link to="/profile/cloudoffice" className={styles.cloudOfficeLink}>
          Cloud Office
        </Link>
      </Box>
      <Box component="form" className={styles.postForm}>
        <textarea
          placeholder="What's on your mind?"
          className={styles.postInput}
        ></textarea>
        <button type="submit" className={styles.postButton}>
          POST
        </button>
      </Box>
      <Box className={styles.userContent}>
        <Box className={styles.contentItem}>
          <img
            src="/content.jpg"
            alt="Content"
            className={styles.contentImage}
          />
          <Box>
            <Typography variant="h6">Content Title</Typography>
            <Typography variant="body2">
              Content description goes here. This is a sample text.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default Profile;
