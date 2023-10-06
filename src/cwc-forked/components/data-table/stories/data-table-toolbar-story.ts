/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html } from 'lit';
import { boolean, select, text } from '@storybook/addon-knobs';
import { prefix } from '../../../globals/settings';
import { TABLE_SIZE } from '../table';
// @ts-ignore
import Download16 from '@carbon/web-components/es/icons/download/16';
// @ts-ignore
import Settings16 from '@carbon/web-components/es/icons/settings/16';
import OverflowMenuVertical16 from '@carbon/icons/lib/overflow-menu--vertical/16';
import '../index';
import storyDocs from './data-table-story.mdx';

const sizes = {
  [`xs (${TABLE_SIZE.XS})`]: TABLE_SIZE.XS,
  [`sm (${TABLE_SIZE.SM})`]: TABLE_SIZE.SM,
  [`md (${TABLE_SIZE.MD})`]: TABLE_SIZE.MD,
  [`lg (${TABLE_SIZE.LG} - default)`]: TABLE_SIZE.LG,
  [`xl (${TABLE_SIZE.XL})`]: TABLE_SIZE.XL,
};

export const Default = () => {
  return html`
    <c4ai-table>
      <c4ai-table-header-title slot="title">DataTable</c4ai-table-header-title>
      <c4ai-table-header-description slot="description">With toolbar</c4ai-table-header-description>

      <c4ai-table-toolbar slot="toolbar">
        <c4ai-table-toolbar-content>
          <c4ai-table-toolbar-search placeholder="Filter table"></c4ai-table-toolbar-search>
          <c4ai-overflow-menu toolbar-action>
            ${Settings16({
              slot: 'icon',
              class: `${prefix}--overflow-menu__icon`,
            })}
            <c4ai-overflow-menu-body>
              <c4ai-overflow-menu-item @click=${() => alert('Alert 1')}>
                Action 1
              </c4ai-overflow-menu-item>
              <c4ai-overflow-menu-item @click=${() => alert('Alert 2')}>
                Action 2
              </c4ai-overflow-menu-item>
              <c4ai-overflow-menu-item @click=${() => alert('Alert 3')}>
                Action 3
              </c4ai-overflow-menu-item>
            </c4ai-overflow-menu-body>
          </c4ai-overflow-menu>
          <c4ai-button>Primary button</c4ai-button>
        </c4ai-table-toolbar-content>
      </c4ai-table-toolbar>

      <c4ai-table-head>
        <c4ai-table-header-row>
          <c4ai-table-header-cell>Name</c4ai-table-header-cell>
          <c4ai-table-header-cell>Protocol</c4ai-table-header-cell>
          <c4ai-table-header-cell>Port</c4ai-table-header-cell>
          <c4ai-table-header-cell>Rule</c4ai-table-header-cell>
          <c4ai-table-header-cell>Attached groups</c4ai-table-header-cell>
          <c4ai-table-header-cell>Status</c4ai-table-header-cell>
        </c4ai-table-header-row>
      </c4ai-table-head>
      <c4ai-table-body>
        <c4ai-table-row>
          <c4ai-table-cell>Load Balancer 3</c4ai-table-cell>
          <c4ai-table-cell>HTTP</c4ai-table-cell>
          <c4ai-table-cell>3000</c4ai-table-cell>
          <c4ai-table-cell>Round robin</c4ai-table-cell>
          <c4ai-table-cell>Kevin's VM Groups</c4ai-table-cell>
          <c4ai-table-cell><c4ai-link disabled>Disabled</c4ai-link></c4ai-table-cell>
        </c4ai-table-row>
        <c4ai-table-row>
          <c4ai-table-cell>Load Balancer 1</c4ai-table-cell>
          <c4ai-table-cell>HTTP</c4ai-table-cell>
          <c4ai-table-cell>443</c4ai-table-cell>
          <c4ai-table-cell>Round robin</c4ai-table-cell>
          <c4ai-table-cell>Maureen's VM Groups</c4ai-table-cell>
          <c4ai-table-cell><c4ai-link>Starting</c4ai-link></c4ai-table-cell>
        </c4ai-table-row>
        <c4ai-table-row>
          <c4ai-table-cell>Load Balancer 2</c4ai-table-cell>
          <c4ai-table-cell>HTTP</c4ai-table-cell>
          <c4ai-table-cell>80</c4ai-table-cell>
          <c4ai-table-cell>DNS delegation</c4ai-table-cell>
          <c4ai-table-cell>Andrew's VM Groups</c4ai-table-cell>
          <c4ai-table-cell><c4ai-link>Active</c4ai-link></c4ai-table-cell>
        </c4ai-table-row>
        <c4ai-table-row>
          <c4ai-table-cell>Load Balancer 6</c4ai-table-cell>
          <c4ai-table-cell>HTTP</c4ai-table-cell>
          <c4ai-table-cell>3000</c4ai-table-cell>
          <c4ai-table-cell>Round robin</c4ai-table-cell>
          <c4ai-table-cell>Marc's VM Groups</c4ai-table-cell>
          <c4ai-table-cell><c4ai-link disabled>Disabled</c4ai-link></c4ai-table-cell>
        </c4ai-table-row>
        <c4ai-table-row>
          <c4ai-table-cell>Load Balancer 4</c4ai-table-cell>
          <c4ai-table-cell>HTTP</c4ai-table-cell>
          <c4ai-table-cell>443</c4ai-table-cell>
          <c4ai-table-cell>Round robin</c4ai-table-cell>
          <c4ai-table-cell>Mel's VM Groups</c4ai-table-cell>
          <c4ai-table-cell><c4ai-link>Starting</c4ai-link></c4ai-table-cell>
        </c4ai-table-row>
        <c4ai-table-row>
          <c4ai-table-cell>Load Balancer 5</c4ai-table-cell>
          <c4ai-table-cell>HTTP</c4ai-table-cell>
          <c4ai-table-cell>80</c4ai-table-cell>
          <c4ai-table-cell>DNS delegation</c4ai-table-cell>
          <c4ai-table-cell>Ronja's VM Groups</c4ai-table-cell>
          <c4ai-table-cell><c4ai-link>Active</c4ai-link></c4ai-table-cell>
        </c4ai-table-row>
      </c4ai-table-body>
    </c4ai-table>
  `;
};

export const PersistentToolbar = () => {
  return html`
    <c4ai-table>
      <c4ai-table-header-title slot="title">DataTable</c4ai-table-header-title>
      <c4ai-table-header-description slot="description">With toolbar</c4ai-table-header-description>

      <c4ai-table-toolbar slot="toolbar">
        <c4ai-table-toolbar-content>
          <c4ai-table-toolbar-search
            persistent
            placeholder="Filter table"
          ></c4ai-table-toolbar-search>
          <c4ai-overflow-menu toolbar-action>
            ${Settings16({
              slot: 'icon',
              class: `${prefix}--overflow-menu__icon`,
            })}
            <c4ai-overflow-menu-body>
              <c4ai-overflow-menu-item @click=${() => alert('Alert 1')}>
                Action 1
              </c4ai-overflow-menu-item>
              <c4ai-overflow-menu-item @click=${() => alert('Alert 2')}>
                Action 2
              </c4ai-overflow-menu-item>
              <c4ai-overflow-menu-item @click=${() => alert('Alert 3')}>
                Action 3
              </c4ai-overflow-menu-item>
            </c4ai-overflow-menu-body>
          </c4ai-overflow-menu>
          <c4ai-button>Primary button</c4ai-button>
        </c4ai-table-toolbar-content>
      </c4ai-table-toolbar>

      <c4ai-table-head>
        <c4ai-table-header-row>
          <c4ai-table-header-cell>Name</c4ai-table-header-cell>
          <c4ai-table-header-cell>Protocol</c4ai-table-header-cell>
          <c4ai-table-header-cell>Port</c4ai-table-header-cell>
          <c4ai-table-header-cell>Rule</c4ai-table-header-cell>
          <c4ai-table-header-cell>Attached groups</c4ai-table-header-cell>
          <c4ai-table-header-cell>Status</c4ai-table-header-cell>
        </c4ai-table-header-row>
      </c4ai-table-head>
      <c4ai-table-body>
        <c4ai-table-row>
          <c4ai-table-cell>Load Balancer 3</c4ai-table-cell>
          <c4ai-table-cell>HTTP</c4ai-table-cell>
          <c4ai-table-cell>3000</c4ai-table-cell>
          <c4ai-table-cell>Round robin</c4ai-table-cell>
          <c4ai-table-cell>Kevin's VM Groups</c4ai-table-cell>
          <c4ai-table-cell><c4ai-link disabled>Disabled</c4ai-link></c4ai-table-cell>
        </c4ai-table-row>
        <c4ai-table-row>
          <c4ai-table-cell>Load Balancer 1</c4ai-table-cell>
          <c4ai-table-cell>HTTP</c4ai-table-cell>
          <c4ai-table-cell>443</c4ai-table-cell>
          <c4ai-table-cell>Round robin</c4ai-table-cell>
          <c4ai-table-cell>Maureen's VM Groups</c4ai-table-cell>
          <c4ai-table-cell><c4ai-link>Starting</c4ai-link></c4ai-table-cell>
        </c4ai-table-row>
        <c4ai-table-row>
          <c4ai-table-cell>Load Balancer 2</c4ai-table-cell>
          <c4ai-table-cell>HTTP</c4ai-table-cell>
          <c4ai-table-cell>80</c4ai-table-cell>
          <c4ai-table-cell>DNS delegation</c4ai-table-cell>
          <c4ai-table-cell>Andrew's VM Groups</c4ai-table-cell>
          <c4ai-table-cell><c4ai-link>Active</c4ai-link></c4ai-table-cell>
        </c4ai-table-row>
        <c4ai-table-row>
          <c4ai-table-cell>Load Balancer 6</c4ai-table-cell>
          <c4ai-table-cell>HTTP</c4ai-table-cell>
          <c4ai-table-cell>3000</c4ai-table-cell>
          <c4ai-table-cell>Round robin</c4ai-table-cell>
          <c4ai-table-cell>Marc's VM Groups</c4ai-table-cell>
          <c4ai-table-cell><c4ai-link disabled>Disabled</c4ai-link></c4ai-table-cell>
        </c4ai-table-row>
        <c4ai-table-row>
          <c4ai-table-cell>Load Balancer 4</c4ai-table-cell>
          <c4ai-table-cell>HTTP</c4ai-table-cell>
          <c4ai-table-cell>443</c4ai-table-cell>
          <c4ai-table-cell>Round robin</c4ai-table-cell>
          <c4ai-table-cell>Mel's VM Groups</c4ai-table-cell>
          <c4ai-table-cell><c4ai-link>Starting</c4ai-link></c4ai-table-cell>
        </c4ai-table-row>
        <c4ai-table-row>
          <c4ai-table-cell>Load Balancer 5</c4ai-table-cell>
          <c4ai-table-cell>HTTP</c4ai-table-cell>
          <c4ai-table-cell>80</c4ai-table-cell>
          <c4ai-table-cell>DNS delegation</c4ai-table-cell>
          <c4ai-table-cell>Ronja's VM Groups</c4ai-table-cell>
          <c4ai-table-cell><c4ai-link>Active</c4ai-link></c4ai-table-cell>
        </c4ai-table-row>
      </c4ai-table-body>
    </c4ai-table>
  `;
};

export const SmallPersistentToolbar = () => {
  return html`
    <c4ai-table size="sm">
      <c4ai-table-header-title slot="title">DataTable</c4ai-table-header-title>
      <c4ai-table-header-description slot="description">With toolbar</c4ai-table-header-description>

      <c4ai-table-toolbar slot="toolbar">
        <c4ai-table-toolbar-content>
          <c4ai-table-toolbar-search
            persistent
            placeholder="Filter table"
          ></c4ai-table-toolbar-search>
          <c4ai-overflow-menu toolbar-action>
            ${Settings16({
              slot: 'icon',
              class: `${prefix}--overflow-menu__icon`,
            })}
            <c4ai-overflow-menu-body>
              <c4ai-overflow-menu-item> Action 1 </c4ai-overflow-menu-item>
              <c4ai-overflow-menu-item> Action 2 </c4ai-overflow-menu-item>
              <c4ai-overflow-menu-item> Action 3 </c4ai-overflow-menu-item>
            </c4ai-overflow-menu-body>
          </c4ai-overflow-menu>
          <c4ai-button>Primary Button</c4ai-button>
        </c4ai-table-toolbar-content>
      </c4ai-table-toolbar>

      <c4ai-table-head>
        <c4ai-table-header-row>
          <c4ai-table-header-cell>Name</c4ai-table-header-cell>
          <c4ai-table-header-cell>Protocol</c4ai-table-header-cell>
          <c4ai-table-header-cell>Port</c4ai-table-header-cell>
          <c4ai-table-header-cell>Rule</c4ai-table-header-cell>
          <c4ai-table-header-cell>Attached groups</c4ai-table-header-cell>
          <c4ai-table-header-cell>Status</c4ai-table-header-cell>
        </c4ai-table-header-row>
      </c4ai-table-head>
      <c4ai-table-body>
        <c4ai-table-row>
          <c4ai-table-cell>Load Balancer 3</c4ai-table-cell>
          <c4ai-table-cell>HTTP</c4ai-table-cell>
          <c4ai-table-cell>3000</c4ai-table-cell>
          <c4ai-table-cell>Round robin</c4ai-table-cell>
          <c4ai-table-cell>Kevin's VM Groups</c4ai-table-cell>
          <c4ai-table-cell><c4ai-link disabled>Disabled</c4ai-link></c4ai-table-cell>
        </c4ai-table-row>
        <c4ai-table-row>
          <c4ai-table-cell>Load Balancer 1</c4ai-table-cell>
          <c4ai-table-cell>HTTP</c4ai-table-cell>
          <c4ai-table-cell>443</c4ai-table-cell>
          <c4ai-table-cell>Round robin</c4ai-table-cell>
          <c4ai-table-cell>Maureen's VM Groups</c4ai-table-cell>
          <c4ai-table-cell><c4ai-link>Starting</c4ai-link></c4ai-table-cell>
        </c4ai-table-row>
        <c4ai-table-row>
          <c4ai-table-cell>Load Balancer 2</c4ai-table-cell>
          <c4ai-table-cell>HTTP</c4ai-table-cell>
          <c4ai-table-cell>80</c4ai-table-cell>
          <c4ai-table-cell>DNS delegation</c4ai-table-cell>
          <c4ai-table-cell>Andrew's VM Groups</c4ai-table-cell>
          <c4ai-table-cell><c4ai-link>Active</c4ai-link></c4ai-table-cell>
        </c4ai-table-row>
        <c4ai-table-row>
          <c4ai-table-cell>Load Balancer 6</c4ai-table-cell>
          <c4ai-table-cell>HTTP</c4ai-table-cell>
          <c4ai-table-cell>3000</c4ai-table-cell>
          <c4ai-table-cell>Round robin</c4ai-table-cell>
          <c4ai-table-cell>Marc's VM Groups</c4ai-table-cell>
          <c4ai-table-cell><c4ai-link disabled>Disabled</c4ai-link></c4ai-table-cell>
        </c4ai-table-row>
        <c4ai-table-row>
          <c4ai-table-cell>Load Balancer 4</c4ai-table-cell>
          <c4ai-table-cell>HTTP</c4ai-table-cell>
          <c4ai-table-cell>443</c4ai-table-cell>
          <c4ai-table-cell>Round robin</c4ai-table-cell>
          <c4ai-table-cell>Mel's VM Groups</c4ai-table-cell>
          <c4ai-table-cell><c4ai-link>Starting</c4ai-link></c4ai-table-cell>
        </c4ai-table-row>
        <c4ai-table-row>
          <c4ai-table-cell>Load Balancer 5</c4ai-table-cell>
          <c4ai-table-cell>HTTP</c4ai-table-cell>
          <c4ai-table-cell>80</c4ai-table-cell>
          <c4ai-table-cell>DNS delegation</c4ai-table-cell>
          <c4ai-table-cell>Ronja's VM Groups</c4ai-table-cell>
          <c4ai-table-cell><c4ai-link>Active</c4ai-link></c4ai-table-cell>
        </c4ai-table-row>
      </c4ai-table-body>
    </c4ai-table>
  `;
};

export const WithOverflowMenu = () => {
  return html`
    <c4ai-table overflow-menu-on-hover>
      <c4ai-table-header-title slot="title">DataTable</c4ai-table-header-title>
      <c4ai-table-header-description slot="description">With toolbar</c4ai-table-header-description>

      <c4ai-table-toolbar slot="toolbar">
        <c4ai-table-toolbar-content>
          <c4ai-table-toolbar-search placeholder="Filter table"></c4ai-table-toolbar-search>
          <c4ai-overflow-menu toolbar-action>
            ${Settings16({
              slot: 'icon',
              class: `${prefix}--overflow-menu__icon`,
            })}
            <c4ai-overflow-menu-body>
              <c4ai-overflow-menu-item @click=${() => alert('Alert 1')}>
                Action 1
              </c4ai-overflow-menu-item>
              <c4ai-overflow-menu-item @click=${() => alert('Alert 2')}>
                Action 2
              </c4ai-overflow-menu-item>
              <c4ai-overflow-menu-item @click=${() => alert('Alert 3')}>
                Action 3
              </c4ai-overflow-menu-item>
            </c4ai-overflow-menu-body>
          </c4ai-overflow-menu>
          <c4ai-button>Primary button</c4ai-button>
        </c4ai-table-toolbar-content>
      </c4ai-table-toolbar>

      <c4ai-table-head>
        <c4ai-table-header-row>
          <c4ai-table-header-cell>Name</c4ai-table-header-cell>
          <c4ai-table-header-cell>Protocol</c4ai-table-header-cell>
          <c4ai-table-header-cell>Port</c4ai-table-header-cell>
          <c4ai-table-header-cell>Rule</c4ai-table-header-cell>
          <c4ai-table-header-cell>Attached groups</c4ai-table-header-cell>
          <c4ai-table-header-cell>Status</c4ai-table-header-cell>
          <c4ai-table-header-cell></c4ai-table-header-cell>
        </c4ai-table-header-row>
      </c4ai-table-head>
      <c4ai-table-body>
        <c4ai-table-row>
          <c4ai-table-cell>Load Balancer 3</c4ai-table-cell>
          <c4ai-table-cell>HTTP</c4ai-table-cell>
          <c4ai-table-cell>3000</c4ai-table-cell>
          <c4ai-table-cell>Round robin</c4ai-table-cell>
          <c4ai-table-cell>Kevin's VM Groups</c4ai-table-cell>
          <c4ai-table-cell><c4ai-link disabled>Disabled</c4ai-link></c4ai-table-cell>
          <c4ai-table-cell>
            <c4ai-overflow-menu toolbar-action>
              ${OverflowMenuVertical16({ slot: 'icon' })}
              <span slot="tooltip-content"> Options </span>

              <c4ai-overflow-menu-body flipped>
                <c4ai-overflow-menu-item> Stop app </c4ai-overflow-menu-item>
                <c4ai-overflow-menu-item> Restart app </c4ai-overflow-menu-item>
                <c4ai-overflow-menu-item> Rename </c4ai-overflow-menu-item>
              </c4ai-overflow-menu-body>
            </c4ai-overflow-menu>
          </c4ai-table-cell>
        </c4ai-table-row>
        <c4ai-table-row>
          <c4ai-table-cell>Load Balancer 1</c4ai-table-cell>
          <c4ai-table-cell>HTTP</c4ai-table-cell>
          <c4ai-table-cell>443</c4ai-table-cell>
          <c4ai-table-cell>Round robin</c4ai-table-cell>
          <c4ai-table-cell>Maureen's VM Groups</c4ai-table-cell>
          <c4ai-table-cell><c4ai-link>Starting</c4ai-link></c4ai-table-cell>
          <c4ai-table-cell>
            <c4ai-overflow-menu toolbar-action>
              ${OverflowMenuVertical16({ slot: 'icon' })}
              <span slot="tooltip-content"> Options </span>

              <c4ai-overflow-menu-body flipped>
                <c4ai-overflow-menu-item> Stop app </c4ai-overflow-menu-item>
                <c4ai-overflow-menu-item> Restart app </c4ai-overflow-menu-item>
                <c4ai-overflow-menu-item> Rename </c4ai-overflow-menu-item>
              </c4ai-overflow-menu-body>
            </c4ai-overflow-menu>
          </c4ai-table-cell>
        </c4ai-table-row>
        <c4ai-table-row>
          <c4ai-table-cell>Load Balancer 2</c4ai-table-cell>
          <c4ai-table-cell>HTTP</c4ai-table-cell>
          <c4ai-table-cell>80</c4ai-table-cell>
          <c4ai-table-cell>DNS delegation</c4ai-table-cell>
          <c4ai-table-cell>Andrew's VM Groups</c4ai-table-cell>
          <c4ai-table-cell><c4ai-link>Active</c4ai-link></c4ai-table-cell>
          <c4ai-table-cell>
            <c4ai-overflow-menu toolbar-action>
              ${OverflowMenuVertical16({ slot: 'icon' })}
              <span slot="tooltip-content"> Options </span>

              <c4ai-overflow-menu-body flipped>
                <c4ai-overflow-menu-item> Stop app </c4ai-overflow-menu-item>
                <c4ai-overflow-menu-item> Restart app </c4ai-overflow-menu-item>
                <c4ai-overflow-menu-item> Rename </c4ai-overflow-menu-item>
              </c4ai-overflow-menu-body>
            </c4ai-overflow-menu>
          </c4ai-table-cell>
        </c4ai-table-row>
        <c4ai-table-row>
          <c4ai-table-cell>Load Balancer 6</c4ai-table-cell>
          <c4ai-table-cell>HTTP</c4ai-table-cell>
          <c4ai-table-cell>3000</c4ai-table-cell>
          <c4ai-table-cell>Round robin</c4ai-table-cell>
          <c4ai-table-cell>Marc's VM Groups</c4ai-table-cell>
          <c4ai-table-cell><c4ai-link disabled>Disabled</c4ai-link></c4ai-table-cell>
          <c4ai-table-cell>
            <c4ai-overflow-menu toolbar-action>
              ${OverflowMenuVertical16({ slot: 'icon' })}
              <span slot="tooltip-content"> Options </span>

              <c4ai-overflow-menu-body flipped>
                <c4ai-overflow-menu-item> Stop app </c4ai-overflow-menu-item>
                <c4ai-overflow-menu-item> Restart app </c4ai-overflow-menu-item>
                <c4ai-overflow-menu-item> Rename </c4ai-overflow-menu-item>
              </c4ai-overflow-menu-body>
            </c4ai-overflow-menu>
          </c4ai-table-cell>
        </c4ai-table-row>
        <c4ai-table-row>
          <c4ai-table-cell>Load Balancer 4</c4ai-table-cell>
          <c4ai-table-cell>HTTP</c4ai-table-cell>
          <c4ai-table-cell>443</c4ai-table-cell>
          <c4ai-table-cell>Round robin</c4ai-table-cell>
          <c4ai-table-cell>Mel's VM Groups</c4ai-table-cell>
          <c4ai-table-cell><c4ai-link>Starting</c4ai-link></c4ai-table-cell>
          <c4ai-table-cell>
            <c4ai-overflow-menu toolbar-action>
              ${OverflowMenuVertical16({ slot: 'icon' })}
              <span slot="tooltip-content"> Options </span>

              <c4ai-overflow-menu-body flipped>
                <c4ai-overflow-menu-item> Stop app </c4ai-overflow-menu-item>
                <c4ai-overflow-menu-item> Restart app </c4ai-overflow-menu-item>
                <c4ai-overflow-menu-item> Rename </c4ai-overflow-menu-item>
              </c4ai-overflow-menu-body>
            </c4ai-overflow-menu>
          </c4ai-table-cell>
        </c4ai-table-row>
        <c4ai-table-row>
          <c4ai-table-cell>Load Balancer 5</c4ai-table-cell>
          <c4ai-table-cell>HTTP</c4ai-table-cell>
          <c4ai-table-cell>80</c4ai-table-cell>
          <c4ai-table-cell>DNS delegation</c4ai-table-cell>
          <c4ai-table-cell>Ronja's VM Groups</c4ai-table-cell>
          <c4ai-table-cell><c4ai-link>Active</c4ai-link></c4ai-table-cell>
          <c4ai-table-cell>
            <c4ai-overflow-menu toolbar-action>
              ${OverflowMenuVertical16({ slot: 'icon' })}
              <span slot="tooltip-content"> Options </span>

              <c4ai-overflow-menu-body flipped>
                <c4ai-overflow-menu-item> Stop app </c4ai-overflow-menu-item>
                <c4ai-overflow-menu-item> Restart app </c4ai-overflow-menu-item>
                <c4ai-overflow-menu-item> Rename </c4ai-overflow-menu-item>
              </c4ai-overflow-menu-body>
            </c4ai-overflow-menu>
          </c4ai-table-cell>
        </c4ai-table-row>
      </c4ai-table-body>
    </c4ai-table>
  `;
};

export const Playground = {
  render: (args) => {
    const { isSortable, locale, radio, overflowMenuOnHover, size, useStaticWidth, useZebraStyles } =
      args?.[`${prefix}-table`] ?? {};
    return html`
      <c4ai-table
        ?is-sortable=${isSortable}
        locale="${locale}"
        ?overflow-menu-on-hover=${overflowMenuOnHover}
        ?radio=${radio}
        size="${size}"
        ?use-static-width="${useStaticWidth}"
        ?use-zebra-styles="${useZebraStyles}"
      >
        <c4ai-table-header-title slot="title">DataTable</c4ai-table-header-title>
        <c4ai-table-header-description slot="description"
          >With batch actions.</c4ai-table-header-description
        >

        <c4ai-table-toolbar slot="toolbar">
          <c4ai-table-toolbar-content ?has-batch-actions="true">
            <c4ai-table-toolbar-search placeholder="Filter table"></c4ai-table-toolbar-search>
            <c4ai-overflow-menu toolbar-action>
              ${Settings16({
                slot: 'icon',
                class: `${prefix}--overflow-menu__icon`,
              })}
              <c4ai-overflow-menu-body>
                <c4ai-overflow-menu-item> Action 1 </c4ai-overflow-menu-item>
                <c4ai-overflow-menu-item> Action 2 </c4ai-overflow-menu-item>
                <c4ai-overflow-menu-item> Action 3 </c4ai-overflow-menu-item>
              </c4ai-overflow-menu-body>
            </c4ai-overflow-menu>
            <c4ai-button>Primary button</c4ai-button>
          </c4ai-table-toolbar-content>
        </c4ai-table-toolbar>

        <c4ai-table-head>
          <c4ai-table-header-row selection-name="header">
            <c4ai-table-header-cell>Name</c4ai-table-header-cell>
            <c4ai-table-header-cell>Protocol</c4ai-table-header-cell>
            <c4ai-table-header-cell>Port</c4ai-table-header-cell>
            <c4ai-table-header-cell>Rule</c4ai-table-header-cell>
            <c4ai-table-header-cell>Attached groups</c4ai-table-header-cell>
            <c4ai-table-header-cell>Status</c4ai-table-header-cell>
            <c4ai-table-header-cell></c4ai-table-header-cell>
          </c4ai-table-header-row>
        </c4ai-table-head>
        <c4ai-table-body>
          <c4ai-table-row selection-name="0">
            <c4ai-table-cell>Load Balancer 3</c4ai-table-cell>
            <c4ai-table-cell>HTTP</c4ai-table-cell>
            <c4ai-table-cell>3000</c4ai-table-cell>
            <c4ai-table-cell>Round robin</c4ai-table-cell>
            <c4ai-table-cell>Kevin's VM Groups</c4ai-table-cell>
            <c4ai-table-cell><c4ai-link disabled>Disabled</c4ai-link></c4ai-table-cell>
            <c4ai-table-cell>
              <c4ai-overflow-menu toolbar-action>
                ${OverflowMenuVertical16({ slot: 'icon' })}
                <span slot="tooltip-content"> Options </span>

                <c4ai-overflow-menu-body flipped>
                  <c4ai-overflow-menu-item> Stop app </c4ai-overflow-menu-item>
                  <c4ai-overflow-menu-item> Restart app </c4ai-overflow-menu-item>
                  <c4ai-overflow-menu-item> Rename </c4ai-overflow-menu-item>
                </c4ai-overflow-menu-body>
              </c4ai-overflow-menu>
            </c4ai-table-cell>
          </c4ai-table-row>
          <c4ai-table-row selection-name="1">
            <c4ai-table-cell>Load Balancer 1</c4ai-table-cell>
            <c4ai-table-cell>HTTP</c4ai-table-cell>
            <c4ai-table-cell>443</c4ai-table-cell>
            <c4ai-table-cell>Round robin</c4ai-table-cell>
            <c4ai-table-cell>Maureen's VM Groups</c4ai-table-cell>
            <c4ai-table-cell><c4ai-link>Starting</c4ai-link></c4ai-table-cell>
            <c4ai-table-cell>
              <c4ai-overflow-menu toolbar-action>
                ${OverflowMenuVertical16({ slot: 'icon' })}
                <span slot="tooltip-content"> Options </span>

                <c4ai-overflow-menu-body flipped>
                  <c4ai-overflow-menu-item> Stop app </c4ai-overflow-menu-item>
                  <c4ai-overflow-menu-item> Restart app </c4ai-overflow-menu-item>
                  <c4ai-overflow-menu-item> Rename </c4ai-overflow-menu-item>
                </c4ai-overflow-menu-body>
              </c4ai-overflow-menu>
            </c4ai-table-cell>
          </c4ai-table-row>
          <c4ai-table-row selection-name="2">
            <c4ai-table-cell>Load Balancer 2</c4ai-table-cell>
            <c4ai-table-cell>HTTP</c4ai-table-cell>
            <c4ai-table-cell>80</c4ai-table-cell>
            <c4ai-table-cell>DNS delegation</c4ai-table-cell>
            <c4ai-table-cell>Andrew's VM Groups</c4ai-table-cell>
            <c4ai-table-cell><c4ai-link>Active</c4ai-link></c4ai-table-cell>
            <c4ai-table-cell>
              <c4ai-overflow-menu toolbar-action>
                ${OverflowMenuVertical16({ slot: 'icon' })}
                <span slot="tooltip-content"> Options </span>

                <c4ai-overflow-menu-body flipped>
                  <c4ai-overflow-menu-item> Stop app </c4ai-overflow-menu-item>
                  <c4ai-overflow-menu-item> Restart app </c4ai-overflow-menu-item>
                  <c4ai-overflow-menu-item> Rename </c4ai-overflow-menu-item>
                </c4ai-overflow-menu-body>
              </c4ai-overflow-menu>
            </c4ai-table-cell>
          </c4ai-table-row>
          <c4ai-table-row selection-name="3">
            <c4ai-table-cell>Load Balancer 6</c4ai-table-cell>
            <c4ai-table-cell>HTTP</c4ai-table-cell>
            <c4ai-table-cell>3000</c4ai-table-cell>
            <c4ai-table-cell>Round robin</c4ai-table-cell>
            <c4ai-table-cell>Marc's VM Groups</c4ai-table-cell>
            <c4ai-table-cell><c4ai-link disabled>Disabled</c4ai-link></c4ai-table-cell>
            <c4ai-table-cell>
              <c4ai-overflow-menu toolbar-action>
                ${OverflowMenuVertical16({ slot: 'icon' })}
                <span slot="tooltip-content"> Options </span>

                <c4ai-overflow-menu-body flipped>
                  <c4ai-overflow-menu-item> Stop app </c4ai-overflow-menu-item>
                  <c4ai-overflow-menu-item> Restart app </c4ai-overflow-menu-item>
                  <c4ai-overflow-menu-item> Rename </c4ai-overflow-menu-item>
                </c4ai-overflow-menu-body>
              </c4ai-overflow-menu>
            </c4ai-table-cell>
          </c4ai-table-row>
          <c4ai-table-row selection-name="4">
            <c4ai-table-cell>Load Balancer 4</c4ai-table-cell>
            <c4ai-table-cell>HTTP</c4ai-table-cell>
            <c4ai-table-cell>443</c4ai-table-cell>
            <c4ai-table-cell>Round robin</c4ai-table-cell>
            <c4ai-table-cell>Mel's VM Groups</c4ai-table-cell>
            <c4ai-table-cell><c4ai-link>Starting</c4ai-link></c4ai-table-cell>
            <c4ai-table-cell>
              <c4ai-overflow-menu toolbar-action>
                ${OverflowMenuVertical16({ slot: 'icon' })}
                <span slot="tooltip-content"> Options </span>

                <c4ai-overflow-menu-body flipped>
                  <c4ai-overflow-menu-item> Stop app </c4ai-overflow-menu-item>
                  <c4ai-overflow-menu-item> Restart app </c4ai-overflow-menu-item>
                  <c4ai-overflow-menu-item> Rename </c4ai-overflow-menu-item>
                </c4ai-overflow-menu-body>
              </c4ai-overflow-menu>
            </c4ai-table-cell>
          </c4ai-table-row>
          <c4ai-table-row selection-name="5">
            <c4ai-table-cell>Load Balancer 5</c4ai-table-cell>
            <c4ai-table-cell>HTTP</c4ai-table-cell>
            <c4ai-table-cell>80</c4ai-table-cell>
            <c4ai-table-cell>DNS delegation</c4ai-table-cell>
            <c4ai-table-cell>Ronja's VM Groups</c4ai-table-cell>
            <c4ai-table-cell><c4ai-link>Active</c4ai-link></c4ai-table-cell>
            <c4ai-table-cell>
              <c4ai-overflow-menu toolbar-action>
                ${OverflowMenuVertical16({ slot: 'icon' })}
                <span slot="tooltip-content"> Options </span>

                <c4ai-overflow-menu-body flipped>
                  <c4ai-overflow-menu-item> Stop app </c4ai-overflow-menu-item>
                  <c4ai-overflow-menu-item> Restart app </c4ai-overflow-menu-item>
                  <c4ai-overflow-menu-item> Rename </c4ai-overflow-menu-item>
                </c4ai-overflow-menu-body>
              </c4ai-overflow-menu>
            </c4ai-table-cell>
          </c4ai-table-row>
        </c4ai-table-body>
      </c4ai-table>
    `;
  },

  parameters: {
    knobs: {
      [`${prefix}-table`]: () => ({
        isSortable: boolean('Is sortable', false),
        locale: text('Locale', 'en'),
        overflowMenuOnHover: boolean('Overflow menu on hover', false),
        radio: boolean('Radio', false),
        size: select('Size', sizes, TABLE_SIZE.LG),
        useStaticWidth: boolean('Use static width', false),
        useZebraStyles: boolean('Use zebra styles', false),
      }),
    },
  },
};

export default {
  title: 'Forked Components/DataTable/Toolbar',
  parameters: {
    ...storyDocs.parameters,
  },
};
