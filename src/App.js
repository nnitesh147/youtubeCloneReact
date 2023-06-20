import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';
import ChannelDetails from "./components/ChannelDetails";
import VideoDetails from "./components/VideoDetails"
import SearchFeed from "./components/SearchFeed"
import NavBar from "./components/NavBar";
import Feed from "./components/Feed"

const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: '#000' }}>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Feed />} />
        <Route path='/video/:id' element={<VideoDetails />} />
        <Route path='/channel/:id' element={<ChannelDetails />} />
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;