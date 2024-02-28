"use client";
import * as React from 'react';
import { Icon } from '@iconify/react';
import driveIcon from '@iconify/icons-logos/google-drive';
import trelloIcon from '@iconify/icons-logos/trello';
import githubIcon from '@iconify/icons-logos/github-icon';

export function IconComponent() {
  return (
    <div className="flex justify-center items-center space-x-8 h-full">
      <a href="link_a_drive" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
        <Icon icon={driveIcon} className="w-12 h-12" />
        <p className="text-xs text-center mt-6">Drive</p>
      </a>
      <a href="https://www.figma.com/file/XJHH1FUaCE9bYmpivEzARz/IntraNoc-Copia-para-Frontend?type=design&node-id=0-1&mode=design&t=Vfzo70AwSCRtTwwh-0" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
        <Icon icon="logos:figma" className="w-7 h-16" />
        <p className="text-xs text-center mt-2">Figma</p>
      </a>
      <a href="https://trello.com/b/8IbkQS0o/no-country-app-gesti%C3%B3n-de-equipo" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
        <Icon icon={trelloIcon} className="w-10 h-10" />
        <p className="text-xs text-center mt-8">Trello</p>
      </a>
      <a href="https://github.com/No-Country/C16-01-m-node-react" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
        <Icon icon={githubIcon} className="w-12 h-14" />
        <p className="text-xs text-center mt-4">Github</p>
      </a>
    </div>
  );
}


