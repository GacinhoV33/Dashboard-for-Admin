import React from 'react';
import Header from '../../components/Header';
import {Box, Button, IconButton, Typography, useTheme} from '@mui/material';
import { tokens } from '../../theme';
import { mockTransactions } from '../../data/mockData';
import { DownloadOutlined, EmailOutlined } from '@mui/icons-material';
import { Email } from '@mui/icons-material';
import { PointOfSale } from '@mui/icons-material';
import { PersonAdd } from '@mui/icons-material';
import { Traffic } from '@mui/icons-material';
import LineChart from '../../components/LineChart';
import PieChart from '../../components/PieChart';
import GeoChart from '../../components/GeographyChart';
import BarChart from '../../components/BarChart';
import StatBox from '../../components/StatBox';
import ProgressCircle from '../../components/ProgressCircle';


const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  
  return (
  <Box m='20px'>
    <Box display='flex' justifyContent='space-between' alignItems='center'>
      <Header title={'DASHBOARD'} subtitle='Welcome to your dashboard'/>
    <Box marginBottom='20px'>
      <Button sx={{backgroundColor: colors.blueAccent[700], color: colors.grey[100], fontSize: '14px', fontWeight: 'bold', padding: '10px 20px'}}>
        <DownloadOutlined sx={{mr: '10px'}}/>
        Download Reports
      </Button>
    </Box>
    </Box>

    {/* Here is place for Charts and Grid using grid property and components */}
    <Box display='grid' gridTemplateColumns='repeat(12, 1fr)' gridAutoRows='140px' gap='20px'>
      {/* Row 1 Code below */}
      <Box gridColumn='span 3' backgroundColor={colors.primary[400]} display='flex' alignItems='center' justifyContent='center'>
        <StatBox title='12,111' subtitle='Emails Sent' progress='0.75' increase='+14%' icon={<EmailOutlined sx={{color: colors.greenAccent[600], fontSize: '26px'}}/>}/>
      </Box>
      <Box gridColumn='span 3' backgroundColor={colors.primary[400]} display='flex' alignItems='center' justifyContent='center'>
        <StatBox title='233,510' subtitle='Sales Obtained' progress='0.45' increase='+55%' icon={<PointOfSale sx={{color: colors.greenAccent[600], fontSize: '26px'}}/>}/>
      </Box>
      <Box gridColumn='span 3' backgroundColor={colors.primary[400]} display='flex' alignItems='center' justifyContent='center'>
        <StatBox title='233,510' subtitle='New Clients' progress='0.15' increase='+15%' icon={<PersonAdd sx={{color: colors.greenAccent[600], fontSize: '26px'}}/>}/>
      </Box>
      <Box gridColumn='span 3' backgroundColor={colors.primary[400]} display='flex' alignItems='center' justifyContent='center'>
        <StatBox title='233,510' subtitle='Sales Obtained' progress='0.80' increase='+23%' icon={<Traffic sx={{color: colors.greenAccent[600], fontSize: '26px'}}/>}/>
      </Box>
    </Box>
    
  </Box>
  )
}

export default Dashboard;