import React, { useContext, useState } from 'react';
import withAuth from '../utils/withAuth';
import { useNavigate } from 'react-router-dom';
import { Button, IconButton, TextField } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import { AuthContext } from '../contexts/AuthContext';
import styles from '../styles/homeComponent.module.css'; 

function HomeComponent() {
  const navigate = useNavigate();
  const [meetingCode, setMeetingCode] = useState("");
  const { addToUserHistory } = useContext(AuthContext);

  const handleJoinVideoCall = async () => {
    if (!meetingCode.trim()) return;
    await addToUserHistory(meetingCode);
    navigate(`/${meetingCode}`);
  };

  return (
    <div className={styles.homePage}>
      {/* Navbar */}
      <nav className={styles.navbar}>
        <h1 className={styles.logo}>Connectly</h1>
        <div className={styles.navItems}>
          <IconButton onClick={() => navigate("/history")}>
            <RestoreIcon style={{ color: "#fff" }} />
          </IconButton>
          <span className={styles.historyText}>History</span>
          <Button
            variant="contained"
            color="error"
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/auth");
            }}
          >
            Logout
          </Button>
        </div>
      </nav>

      {/* Main Section */}
      <main className={styles.mainSection}>
        <div className={styles.leftPanel}>
          <h2 className={styles.heading}>Start or Join a Video Call</h2>
          <p className={styles.subtext}>Secure. Fast. Reliable.</p>
          <div className={styles.meetingBox}>
            <TextField
              label="Meeting Code"
              variant="outlined"
              value={meetingCode}
              onChange={(e) => setMeetingCode(e.target.value)}
              className={styles.input}
              fullWidth
            />
            <Button
              variant="contained"
              onClick={handleJoinVideoCall}
              className={styles.joinBtn}
            >
              Join
            </Button>
          </div>
        </div>
        <div className={styles.rightPanel}>
          <img src="https://i0.wp.com/www.pngmart.com/files/20/Zoom-Meeting-PNG-Isolated-File.png" alt="Video Illustration" className={styles.heroImg} />
        </div>
      </main>
    </div>
  );
}

export default withAuth(HomeComponent);
