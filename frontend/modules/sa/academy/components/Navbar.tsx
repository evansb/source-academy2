import * as React from 'react'
import { RouteComponentProps } from 'react-router'
import { Link } from 'react-router-dom'
import { Button, Intent } from '@blueprintjs/core'
import { createLink } from 'sa/core/util'

import ProfileTab from './ProfileTab'

export interface INavbarProps extends RouteComponentProps<any> {
}

export default function Navbar({ match }: INavbarProps) {

  // Control Active Tabs
  const isInboxTabActive = match.url.endsWith('inbox')
  const isMissionsTabActive = match.url.endsWith('missions')
  const isMaterialsTabActive = match.url.endsWith('materials')

  const getClassNames = (icon: string) => `pt-button pt-minimal pt-icon-${icon}`

  return (
    <div className="sa-academy-navbar pt-navbar pt-navbar-dark row">

      <div className="resume-game col-xs-2">
        <Button intent={Intent.PRIMARY} iconName="undo">
          Resume Game
        </Button>
      </div>

      <div className="navigation-buttons pt-navbar-group pt-button-group pt-large pt-fill col-xs-7 col-md-5">
        {createLink(`/academy/inbox`, getClassNames('inbox'),
                     isInboxTabActive, <span>Inbox</span>)}
        {createLink(`/academy/missions`, getClassNames('application'),
                     isMissionsTabActive, <span>Missions</span>)}
        {createLink(`/academy/materials`, getClassNames('folder-open'),
                     isMaterialsTabActive, <span>Materials</span>)}
      </div>
      <div className="pt-navbar-group pt-align-right profile-tab-container col-xs end-xs">
        <Button className="pt-minimal" iconName="notifications" />
        <div className="pt-navbar-divider" />
        <ProfileTab />
      </div>
    </div>
  )
}