import React from 'react';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BarChartIcon from '@mui/icons-material/BarChart';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import GridViewIcon from '@mui/icons-material/GridView';

export const SidebarData = [
    {
        title: 'Resource',
        path:'/Eresource',
        icon: <GroupAddIcon/>,
    },
    {
        title: 'Task',
        path:'/Etask',
        icon: <PlaylistAddCheckIcon/>,
    },
    {
        title: 'Project',
        path:'/Eproject',
        icon: <GridViewIcon/>,
    },
    {
        title: 'Risk',
        path:'/Erisk',
        icon: <PlaylistAddCheckIcon/>,
    },
    {
        title:'FeedBack',
        path:'/feedback',
        icon:<PlaylistAddCheckIcon/>
    },
    // {
        //     title: 'Status',
        //     path:'/status',
        //     icon: <AccessTimeIcon/>,
        // },
    // {
        //     title: 'Achievements',
        //     path:'/achieve',
        //     icon: <CreditScoreIcon/>,
        // },
        // {
            //     title: 'Calender',
            //     path:'/calender',
            //     icon: <CalendarMonthIcon/>,
            // },
            // {
                //     title: 'Reports',
                //     path:'/reports',
                //     icon: <BarChartIcon/>,
                // }
                {
                    title: 'Profile',
                    path:'/Eprofile',
                    icon: <GroupAddIcon/>,
                },
            ]
            