import { Tooltip } from '../Tooltip/Tooltip'
import { UserOutlined } from '../Icon/icon/UserOutlined'
import { TeamOutlined } from '../Icon/icon/TeamOutlined'
import { CalendarOutlined } from '../Icon/icon/CalendarOutlined'
import { TagOutlined } from '../Icon/icon/TagOutlined'
import { TagsOutlined } from '../Icon/icon/TagsOutlined'
import { ExperimentOutlined } from '../Icon/icon/ExperimentOutlined'
import { ShopOutlined } from '../Icon/icon/ShopOutlined'
import { WifiOutlined } from '../Icon/icon/WifiOutlined'
import { SettingOutlined } from '../Icon/icon/SettingOutlined'
import { Roles } from '../Roles/roles'
import { ScheduleOutlined } from '../Icon/icon/ScheduleOutlined'

export const path = [
    {
        key: 'studentcalendar',
        to: '/student-calendar',
        message: <Tooltip placement='right' title={'app.navigation.my.calendar'}>
            <div>
                <ScheduleOutlined />
            </div>
        </Tooltip>,
        role: Roles.STUDENT
    },
    {
        key: 'professorcalendar',
        to: '/professor-calendar',
        message: <Tooltip placement='right' title={'app.navigation.my.calendar'}>
            <div>
                <ScheduleOutlined />
            </div>
        </Tooltip>,
        role: Roles.PROFESSOR
    },
    {
        key: 'companycalendars',
        to: '/company-calendars',
        message: <Tooltip placement='right' title={'app.navigation.my.calendar'}>
            <div>
                <ScheduleOutlined />
            </div>
        </Tooltip>,
        role: Roles.COMPANY
    },
    {
        key: 'student',
        to: '/students',
        message: <Tooltip placement='right' title={'app.navigation.students'}>
            <div>
                <UserOutlined />
            </div>
        </Tooltip>,
        role: Roles.PLANING_KEEPER
    },
    {
        key: 'professor',
        to: '/professors',
        message: <Tooltip placement='right' title={'app.navigation.professors'}>
            <div>
                <TeamOutlined />
            </div>
        </Tooltip>,
        role: Roles.PLANING_KEEPER
    },
    {
        key: 'calendar',
        to: '/calendars',
        message: <Tooltip placement='right' title={'app.navigation.calendars'}>
            <div>
                <CalendarOutlined />
            </div>
        </Tooltip>,
        role: Roles.PLANING_KEEPER
    },
    {
        key: 'lesson',
        to: '/lessons',
        message: <Tooltip placement='right' title={'app.navigation.lessons'}>
            <div>
                <TagOutlined />
            </div>
        </Tooltip>,
        role: Roles.PLANING_KEEPER
    },
    {
        key: 'module',
        to: '/modules',
        message: <Tooltip placement='right' title={'app.navigation.modules'}>
            <div>
                <TagsOutlined />
            </div>
        </Tooltip>,
        role: Roles.PLANING_KEEPER
    },
    {
        key: 'pathway',
        to: '/pathways',
        message: <Tooltip placement='right' title={'app.navigation.pathways'}>
            <div>
                <ExperimentOutlined />
            </div>
        </Tooltip>,
        role: Roles.PLANING_KEEPER
    },
    {
        key: 'room',
        to: '/rooms',
        message: <Tooltip placement='right' title={'app.navigation.rooms'}>
            <div>
                <ShopOutlined />
            </div>
        </Tooltip>,
        role: Roles.PLANING_KEEPER
    },
    {
        key: 'company',
        to: '/companies',
        message: <Tooltip placement='right' title={'app.navigation.companies'}>
            <div>
                <WifiOutlined />
            </div>
        </Tooltip>,
        role: Roles.PLANING_KEEPER
    },
    {
        key: 'settings',
        to: '/settings',
        message: <Tooltip placement='right' title={'app.navigation.settings'}>
            <div>
            <SettingOutlined />
            </div>
        </Tooltip>,
        role: Roles.SUPER_ADMIN
    },
]