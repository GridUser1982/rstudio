/*
 * theme.ts
 *
 * Copyright (C) 2019-20 by RStudio, Inc.
 *
 * Unless you have received this program directly from RStudio pursuant
 * to the terms of a commercial license agreement with RStudio, then
 * this program is licensed to you under the terms of version 3 of the
 * GNU Affero General Public License. This program is distributed WITHOUT
 * ANY EXPRESS OR IMPLIED WARRANTY, INCLUDING THOSE OF NON-INFRINGEMENT,
 * MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. Please refer to the
 * AGPL (http://www.gnu.org/licenses/agpl-3.0.txt) for more details.
 *
 */

export interface EditorTheme {
  backgroundColor: string;
  textColor: string;
}

export function defaultTheme() : EditorTheme {
  return {
    backgroundColor: "white",
    textColor: "black"
  }
}

export function applyTheme(theme: EditorTheme)
{
  // generate theme css
  const themeCss = `
    .pm-background-color {
      background-color: ${theme.backgroundColor} !important;
    }
    .pm-text-color {
      color: ${theme.textColor} !important;
    }
  `;
  
  // get access to theme element (create if necessary)
  const themeElementId = 'pm-editor-theme';
  let themeElement = window.document.getElementById(themeElementId);
  if (themeElement === null) {
    themeElement = window.document.createElement("style");
    themeElement.setAttribute("id", themeElementId);
    themeElement.setAttribute("type", "text/css");
    window.document.head.appendChild(themeElement);
  }

  // set theme 
  themeElement.innerHTML = themeCss;
}