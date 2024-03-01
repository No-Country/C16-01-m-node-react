"use client";
import * as React from 'react';
import { Icon } from '@iconify/react';
import driveIcon from '@iconify/icons-logos/google-drive';
import trelloIcon from '@iconify/icons-logos/trello';
import githubIcon from '@iconify/icons-logos/github-icon';
import visualStudioCodeIcon from '@iconify/icons-logos/visual-studio-code';
import bootstrapIcon from '@iconify/icons-logos/bootstrap';

export default function IconComponent({ icon }: { icon: string }) {
  let iconElement;
  let iconName;

  switch (icon) {
    case 'driveIcon':
      iconElement = <Icon icon={driveIcon} className="w-12 h-12 mx-auto mb-2" />;
      iconName = "Google Drive";
      break;
    case 'trelloIcon':
      iconElement = <Icon icon={trelloIcon} className="w-12 h-12 mx-auto mb-2" />;
      iconName = "Trello";
      break;
    case 'githubIcon':
      iconElement = <Icon icon={githubIcon} className="w-12 h-12 mx-auto mb-2" />;
      iconName = "Github";
      break;
    case 'visualStudioCodeIcon':
      iconElement = <Icon icon={visualStudioCodeIcon} className="w-12 h-12 mx-auto mb-2" />;
      iconName = "Visual Studio Code";
      break;
    case 'bootstrapIcon':
      iconElement = <Icon icon={bootstrapIcon} className="w-12 h-12 mx-auto mb-2" />;
      iconName = "Bootstrap";
      break;
    case 'figmaIcon':
      iconElement = <Icon icon="logos:figma" className="w-12 h-12 mx-auto mb-2" />;
      iconName = "Figma";
      break;
    default:
      iconElement = null;
      iconName = "No se encontró el ícono";
  }

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="flex flex-col items-center">
        {iconElement}
        <p className="text-xs text-center mt-2">{iconName}</p>
      </div>
    </div>
  );
}
