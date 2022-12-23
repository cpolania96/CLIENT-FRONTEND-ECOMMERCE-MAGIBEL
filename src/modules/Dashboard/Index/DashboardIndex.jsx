import React from 'react'
import TimelineIcon from '@mui/icons-material/Timeline';
import AssignmentLateIcon from '@mui/icons-material/AssignmentLate';
import PaidIcon from '@mui/icons-material/Paid';
import GraphicLine from './Cards/GraphicLine';
import InfoCards from './Cards/InfoCards';
import DoneIcon from '@mui/icons-material/Done';

function DashboardIndex() {
    return (
        <div className='grid-index'>
            <div className='area-a'>
                <div className="float-ico">
                    <TimelineIcon style={{ color: 'white' }} />
                </div>
            </div>
            <div className='area-b'>
                <GraphicLine icon={<PaidIcon style={{ color: 'white' }} />} />
            </div>
            <div className='card-info area-c'>
                <InfoCards info={{
                    title: 'Agenda',
                    icon: <DoneIcon style={{ color: 'white' }} />,
                    buttonColor: 'linear-gradient(195deg, rgb(102, 187, 106), rgb(67, 160, 71))',
                    numberColor: 'green',
                    data: 5
                }}
                />
            </div>
            <div className='card-info area-d'>
                <InfoCards info={{
                    title: 'Pendiente',
                    icon: <AssignmentLateIcon style={{ color: 'white' }} />,
                    buttonColor: 'linear-gradient(180deg, #fbde74 0%, #ff9900 100%)',
                    numberColor: 'yellow',
                    data: 25
                }}
                />
            </div>
            <div className='area-e'>

            </div>
            <div className='area-f'>

            </div>
            <div className='area-g'>

            </div>
            <div className='area-h'>
            </div>
        </div>
    )
}

export default DashboardIndex